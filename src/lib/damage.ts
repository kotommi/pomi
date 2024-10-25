import type { GearSet, Equip, CharConfig, Character } from "./types"

// TODO add jobs that have wa from skills
const weaponAttributes = {
    "Night Lord": { primaryStat: "luk" as keyof Character["stats"], primaryMulti: 3.6, secondary: ["str", "dex"], mastery: 0.6 },
    "Shadower": { primaryStat: "luk", primaryMulti: 3.6, secondary: ["str", "dex"], mastery: 0.6 }
}


const totalStats = (gs: GearSet, config: CharConfig, char: Character) => {
    const jobAttributes = weaponAttributes[char.job];
    const basePrimaryStat = char.stats[jobAttributes.primaryStat as keyof Character["stats"]];
    const equipPrimary = getEquipStats(gs, jobAttributes.primaryStat as keyof Equip["stats"]);
    let primaryTotal = basePrimaryStat
    if (config.mw) {
        primaryTotal = basePrimaryStat + Math.floor(basePrimaryStat * 0.1)
    }
    primaryTotal += equipPrimary;
    // breaks if all stats arent present at least as 0s
    const secondaries = weaponAttributes[char.job].secondary;
    const secondaryEquipStats = secondaries.map(sec => getEquipStats(gs, sec as keyof Character["stats"])).reduce((acc, cur) => acc + cur, 0)//getEquipStats(gs, jobAttributes.secondary)//attributes.secondary.map(stat => char.baseStats[stat] + char.weapon.stats[stat]).reduce((acc, cur) => acc + cur, 0);
    const secondaryBaseStats = secondaries.map(sec => char.stats[sec as keyof Character["stats"]]).reduce((acc, cur) => acc + cur, 0);
    const secondaryStatSum = secondaryBaseStats + secondaryEquipStats;
    return { primaryTotal, secondaryStatSum }
}

/*
General Formula
MAX = (Primary Stat + Secondary Stat) * Weapon Attack / 100
MIN = (Primary Stat * 0.9 * Skill Mastery + Secondary Stat) * Weapon Attack / 100 
*/
export const range = (gs: GearSet, config: CharConfig, char: Character) => {
    const { primaryTotal, secondaryStatSum } = totalStats(gs, config, char)
    const jobAttributes = weaponAttributes[char.job];
    const primary = primaryTotal * jobAttributes.primaryMulti;
    const secondary = secondaryStatSum
    const totalWatt = getTotalWatt(gs)
    const maxRange = Math.floor((primary + secondary) * (totalWatt) / 100)
    const minRange = Math.floor((primary * 0.9 * jobAttributes.mastery + secondary) * totalWatt / 100)
    return { minRange, maxRange }
}

/*
Lucky Seven/Triple Throw (credit to HS.net / LazyBui for """""""recent""""""" verification):
MAX = (LUK * 5.0) * Weapon Attack / 100
MIN = (LUK * 2.5) * Weapon Attack / 100
Lucky Seven/Triple Throw/Drain/Shadow Meso/Normal Attack
Faster (2): 600ms (-210ms)
Faster (3): 660ms (-150ms)
Fast (4): 720ms (-90ms)
Fast (5): 750ms (-60ms)
Normal (6): 810ms
Shadow partner is 50% of the hit floored. tested in game
*/
export const ttDamage = (gs: GearSet, config: CharConfig, char: Character) => {
    const { primaryTotal } = totalStats(gs, config, char)
    const totalWatt = getTotalWatt(gs) //char.weapon.att
    const maxTT = (primaryTotal * 5) * totalWatt / 100
    const minTT = (primaryTotal * 2.5) * totalWatt / 100
    const avgTT = (maxTT + minTT) / 2 // 
    const skillPercentage = 1.5 // 150%
    const baseDamage = avgTT * skillPercentage
    const critMulti = 2 + 1.4 // base + SE
    const critDamage = baseDamage * critMulti
    const critChance = 0.50 + 0.15 // base + SE
    const averageDamage = baseDamage * (1 - critChance) + critDamage * critChance
    const maxHit = maxTT * skillPercentage * critMulti
    const skillTime = 0.6
    // 3 hits + 3*0.5 hits from sp
    const averageDps = Math.floor((3 + 3 * 0.5) * averageDamage / skillTime)
    return { averageDps, averageDamage, maxHit }
}

const getTotalWatt = (gs: GearSet) => {
    let total = 0;
    const keys = Object.keys(gs) as Array<keyof GearSet>;
    keys.forEach(key => {
        if (!isNaN(Number(gs[key]?.stats.w_att))) {
            if (gs[key]?.stats) {
                total += gs[key]?.stats.w_att ?? 0;
            }
        }
    })
    return total;
}

const getEquipStats = (gs: GearSet, primaryStat: keyof Equip["stats"]) => {
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