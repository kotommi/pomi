import { EquipType, Job, type Equip, type EquipSet, type GearSet } from "./types";

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



export const defaultStats = {
    "Night Lord": {
        str: 4,
        dex: 25,
        luk: 997,
        int: 4,
    }
}

const helmet = {
    type: EquipType.Helm,
    name: "Auf Haven Circlet",
    stats: {
        str: 84,
        luk: 86,
        dex: 87,
    }
}
const medal = {
    type: EquipType.Medal,
    name: "Legendary Thief",
    stats: {
        w_att: 3,
    }
}

const face = {
    type: EquipType.Face,
    name: "Maple Leaf",
    stats: {
        luk: 11,
    }
}

const eye = {
    type: EquipType.Eye,
    name: "Ninja Toad Headband",
    stats: {
        luk: 11,
    }
}

const ear = {
    type: EquipType.Earring,
    name: "Ifia's Earrings",
    stats: {
        luk: 17,
    }
}

const cape = {
    type: EquipType.Cape,
    name: "Blackfist Cape",
    stats: {
        w_att: 18,
    }
}

const glove = {
    type: EquipType.Glove,
    name: "Stormcaster Gloves",
    stats: {
        w_att: 21,
    }
}

const shoe = {
    type: EquipType.Shoe,
    name: "Facestompers",
    stats: {
        w_att: 16,
    }
}

const overall = {
    type: EquipType.Overall,
    name: "Dark Katinas",
    stats: {
        luk: 63,
        dex: 8,
    }
}

const belt = {
    type: EquipType.Belt,
    name: "Von Leon's Belt",
    stats: {
        w_att: 7,
        str: 3,
        luk: 1,
    }
}

const pendant = {
    type: EquipType.Pendant,
    name: "Mark of Naricain",
    stats: {
        w_att: 8,
        str: 5,
        luk: 11,
        dex: 6,
    }
}

const weapon = {
    type: EquipType.Weapon,
    name: "Red Craven",
    stats: {
        w_att: 91,
        luk: 19,
    }
}

const ring1 = {
    type: EquipType.Ring1,
    name: "Almighty Ring",
    stats: {
        str: 2,
        luk: 6,
        dex: 6,
    }
}

const ring2 = {
    type: EquipType.Ring2,
    name: "Circle of Ancient Strength",
    stats: {
        str: 5,
        dex: 8,
    }
}

const ring3 = {
    type: EquipType.Ring3,
    name: "2 Carat Lovebirds Wedding Ring",
    stats: {
        w_att: 1,
        str: 3,
        luk: 3,
        dex: 3,
    }
}

const ring4 = {
    type: EquipType.Ring4,
    name: "Circle of Ancient Thought",
    stats: {
        luk: 7,
    }
}

const pendantnx = {
    type: EquipType.PendantNX,
    name: "Golden Leaf Pendant",
    stats: {
        str: 3,
        luk: 3,
        dex: 3,
    }
}

const star = {
    type: EquipType.Star,
    name: "Magic Throwing-Knives",
    stats: {
        w_att: 31,
    }
}

export let tompsonGear: GearSet = {
    helmet,
    medal,
    face,
    eye,
    earring: ear,
    cape,
    glove,
    shoe,
    overall,
    belt,
    pendant,
    weapon,
    ring1,
    ring2,
    ring3,
    ring4,
    pendantnx,
    star
}

export let tompsonEquipSet: EquipSet[] = [
    {
        type: EquipType.Helm,
        equips: [helmet]
    },
    {
        type: EquipType.Medal,
        equips: [medal]
    },
    {
        type: EquipType.Face,
        equips: [face]
    },
    {
        type: EquipType.Eye,
        equips: [eye]
    },
    {
        type: EquipType.Earring,
        equips: [ear]
    },
    {
        type: EquipType.Cape,
        equips: [cape]
    },
    {
        type: EquipType.Glove,
        equips: [glove]
    },
    {
        type: EquipType.Shoe,
        equips: [shoe]
    },
    {
        type: EquipType.Overall,
        equips: [overall]
    },
    {
        type: EquipType.Belt,
        equips: [belt]
    },
    {
        type: EquipType.Pendant,
        equips: [pendant]
    },
    {
        type: EquipType.Weapon,
        equips: [weapon]
    },
    {
        type: EquipType.Ring1,
        equips: [ring1]
    },
    {
        type: EquipType.Ring2,
        equips: [ring2]
    },
    {
        type: EquipType.Ring3,
        equips: [ring3]
    },
    {
        type: EquipType.Ring4,
        equips: [ring4]
    },
    {
        type: EquipType.PendantNX,
        equips: [pendantnx]
    },
    {
        type: EquipType.Star,
        equips: [star]
    }
]