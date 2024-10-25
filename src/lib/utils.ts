import { Job, type Stats } from "./types";

const defaultStats: Record<Job, Stats> = {
    [Job.NL]: { str: 4, dex: 25, luk: 997, int: 4 },
    [Job.Shad]: { str: 4, dex: 25, luk: 997, int: 4 }
    // Add other jobs here
};
export const getStats = (job: Job): Stats => {
    return defaultStats[job];
};