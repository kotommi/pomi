import { EquipType, Job, type Equip, type EquipSet } from "./types";

export const tops: Equip[] = [
    {
        type: EquipType.Top,
        name: "Red Pirate Top",
        stats: {
            w_att: 0,
            luk: 21,
            dex: 6,
        }
    },
    {
        type: EquipType.Top,
        name: "Black Pirate Top",
        stats: {
            w_att: 0,
            luk: 21,
            dex: 6,
        }
    },

]

export const bottoms: Equip[] = [
    {
        type: EquipType.Bot,
        name: "Red Pirate Bottom",
        stats: {
            w_att: 0,
            luk: 21,
            dex: 6,
        }
    },
    {
        type: EquipType.Bot,
        name: "Black Pirate Bottom",
        stats: {
            w_att: 0,
            luk: 21,
            dex: 6,
        }
    }
]
export const helms: Equip[] = [
    {
        type: EquipType.Helm,
        name: "Auf Haven Helmet",
        stats: {
            w_att: 0,
            luk: 87,
            dex: 87,
        }
    }]

export const equipSet: EquipSet[] = [
    {
        type: EquipType.Top,
        equips: tops
    },
    {
        type: EquipType.Bot,
        equips: bottoms
    },
    {
        type: EquipType.Helm,
        equips: helms
    }
]

export const defaultStats = {
    "Night Lord": {
        str: 4,
        dex: 25,
        luk: 997,
        int: 4,
    }
}