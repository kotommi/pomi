import { type GearSet, type Equip, type CharConfig, type Character, type Job, Skill } from "./types"
import { jobData } from "./data";

// TODO add jobs that have wa from skills



export const totalStats = (gs: GearSet, config: CharConfig, char: Character) => {
    const attributes = jobData[char.job];
    const basePrimaryStat = char.stats[attributes.primaryStat as keyof Character["stats"]];
    const equipPrimary = getEquipStats(gs, attributes.primaryStat as keyof Equip["stats"]);
    let primaryTotal = basePrimaryStat
    if (config.mw) {
        primaryTotal = basePrimaryStat + Math.floor(basePrimaryStat * 0.1)
    }
    primaryTotal += equipPrimary;
    const secondaries = attributes.secondary;
    const secondaryEquipStats = secondaries.map(sec => getEquipStats(gs, sec as keyof Character["stats"])).reduce((acc, cur) => acc + cur, 0)//getEquipStats(gs, jobData.secondary)//attributes.secondary.map(stat => char.baseStats[stat] + char.weapon.stats[stat]).reduce((acc, cur) => acc + cur, 0);
    const secondaryBaseStats = secondaries.map(sec => {
        if (config.mw) {
            return Math.floor(char.stats[sec as keyof Character["stats"]] + char.stats[sec as keyof Character["stats"]] * 0.1)
        }
        return char.stats[sec as keyof Character["stats"]]
    }).reduce((acc, cur) => acc + cur, 0);
    const secondaryStatSum = secondaryBaseStats + secondaryEquipStats;
    return { primaryTotal, secondaryStatSum }
}

/*
General Formula
MAX = (Primary Stat + Secondary Stat) * Weapon Attack / 100
MIN = (Primary Stat * 0.9 * Skill Mastery + Secondary Stat) * Weapon Attack / 100 
*/
// Tompson range 5201-9203 mw 5582-9906 echo+mw 5782-10260 echo+no mw 5387-9532 
export const range = (gs: GearSet, config: CharConfig, char: Character) => {
    const { primaryTotal, secondaryStatSum } = totalStats(gs, config, char)
    const attributes = jobData[char.job];
    const primary = primaryTotal * attributes.primaryMulti;
    const secondary = secondaryStatSum
    const totalWatt = getTotalWatt(gs, config)
    const maxRange = Math.floor((primary + secondary) * (totalWatt) / 100)
    const minRange = Math.floor((primary * 0.9 * attributes.mastery + secondary) * totalWatt / 100)
    return { minRange, maxRange }
}

/*
Lucky Seven/Triple Throw (credit to HS.net / LazyBui for """""""recent""""""" verification):
MAX = (LUK * 5.0) * Weapon Attack / 100
MIN = (LUK * 2.5) * Weapon Attack / 100
Lucky Seven/Triple Throw/Drain/Shadow Meso/Normal Attack
Faster (2): 600ms (-210ms)
Shadow partner is 50% of the hit floored. tested in game
*/
export const ttDamage = (gs: GearSet, config: CharConfig, char: Character) => {
    const { primaryTotal } = totalStats(gs, config, char)
    const totalWatt = getTotalWatt(gs, config)
    // base damage
    const maxTT = (primaryTotal * 5) * (totalWatt / 100)
    const minTT = (primaryTotal * 2.5) * (totalWatt / 100)
    const avgTT = (maxTT + minTT) / 2

    // skill damage and crit multipliers
    const skillPercentage = 1.5 // 150%
    const critMulti = 1 + (config.sharpEyes ? 1.4 : 0) // base + SE
    const critChance = 0.50 + (config.sharpEyes ? 0.15 : 0) // base + SE
    const finalCritMultiplier = critMulti + skillPercentage;
    const baseMultiplier = skillPercentage;

    const baseDamage = avgTT * baseMultiplier
    const critDamage = avgTT * finalCritMultiplier
    const maxHit = Math.floor(maxTT * finalCritMultiplier);

    const averageDamage = baseDamage * (1 - critChance) + critDamage * critChance
    const skillTime = 0.6
    // 3 hits + 3*0.5 hits from sp
    const averageDps = Math.floor((3 + 3 * 0.5) * averageDamage / skillTime)
    const skillName = "Thriple Throw"
    return { skillName, averageDps, maxHit }
}
// Spell Damage:
// MAX = ((Magic²/1000 + Magic)/30 + INT/200) * Spell Attack
// MIN = ((Magic²/1000 + Magic * Mastery * 0.9)/30 + INT/200) * Spell Attack
export const mageDamage = (gs: GearSet, config: CharConfig, char: Character) => {
    const { primaryTotal } = totalStats(gs, config, char)
    const attributes = jobData[char.job];
    const totalMatt = getTotalMatt(gs, config);
    const magic = primaryTotal + totalMatt
    const maxDamage = ((magic ** 2 / 1000 + magic) / 30 + primaryTotal / 200) * totalMatt
    const minDamage = ((magic ** 2 / 1000 + magic * attributes.mastery * 0.9) / 30 + primaryTotal / 200) * totalMatt
    const avgDamage = (maxDamage + minDamage) / 2
    const skillTime = 0.6 // ??
    const averageDps = Math.floor(avgDamage / skillTime)
    const skillName = "Genesis"
    return { skillName, averageDps, maxDamage }
}



export const getTotalWatt = (gs: GearSet, config: CharConfig) => {
    let total = 0;
    const keys = Object.keys(gs) as Array<keyof GearSet>;
    keys.forEach(key => {
        if (!isNaN(Number(gs[key]?.stats.w_att))) {
            if (gs[key]?.stats) {
                total += gs[key]?.stats.w_att ?? 0;
            }
        }
    })
    total += config.attPot
    if (config.echo) {
        total += Math.floor(total * 0.04)
    }
    return total;
}

export const getTotalMatt = (gs: GearSet, config: CharConfig) => {
    let total = 0;
    const keys = Object.keys(gs) as Array<keyof GearSet>;
    keys.forEach(key => {
        if (!isNaN(Number(gs[key]?.stats.m_att))) {
            if (gs[key]?.stats) {
                total += gs[key]?.stats.m_att ?? 0;
            }
        }
    })
    // TODO add matt pot
    //total += config.attPot
    if (config.echo) {
        total += Math.floor(total * 0.04)
    }
    return total;
}

export const getEquipStats = (gs: GearSet, primaryStat: keyof Equip["stats"]) => {
    let total = 0;
    const keys = Object.keys(gs) as Array<keyof GearSet>;
    keys.forEach(key => {
        if (!isNaN(Number(gs[key]?.stats[primaryStat]))) {
            if (gs[key]?.stats) {
                total += gs[key]?.stats[primaryStat] ?? 0;
            }
        }
    });
    return total;
}


export const skillFuncs: Partial<Record<Skill, Function>> = {
    [Skill.TT]: ttDamage,
}

