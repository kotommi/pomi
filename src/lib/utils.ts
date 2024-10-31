import { ttDamage } from "./damage";
import { Job, type Stats } from "./types";

const defaultStats: Record<Job, Stats> = {
    [Job.NL]: { str: 4, dex: 25, luk: 997, int: 4 },
    [Job.Shad]: { str: 4, dex: 25, luk: 997, int: 4 },
    [Job.BM]: { str: 23, dex: 999, luk: 4, int: 4 },
    [Job.MM]: { str: 23, dex: 999, luk: 4, int: 4 },
    [Job.Corsair]: { str: 23, dex: 999, luk: 4, int: 4 },
    [Job.Bucc]: { str: 999, dex: 23, luk: 4, int: 4 },
    [Job.Hero]: { str: 999, dex: 23, luk: 4, int: 4 },
    [Job.Paladin]: { str: 999, dex: 23, luk: 4, int: 4 },
    [Job.DK]: { str: 999, dex: 23, luk: 4, int: 4 },
    [Job.BS]: { str: 4, dex: 4, luk: 23, int: 999 },
    [Job.IL]: { str: 4, dex: 4, luk: 23, int: 999 },
    [Job.FP]: { str: 4, dex: 4, luk: 23, int: 999 },
};
export const getStats = (job: Job): Stats => {
    return defaultStats[job];
};

export const jobSkills: Record<Job, Function> = {
    "Night Lord": ttDamage,
    "Shadower": ttDamage,
    "Bowmaster": ttDamage,
    "Marksman": ttDamage,
    "Corsair": ttDamage,
    "Buccaneer": ttDamage,
    "Hero": ttDamage,
    "Paladin": ttDamage,
    "Dark Knight": ttDamage,
    "I/L Mage": ttDamage,
    "F/P Mage": ttDamage,
    "Bishop": ttDamage,
}