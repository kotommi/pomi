export interface Equip {
    type: EquipType;
    name: string;
    stats: {
        w_att?: number;
        m_att?: number;
        luk?: number;
        dex?: number;
        str?: number;
        int?: number;
    };
    reqs?: {
        luk?: number;
        dex?: number;
        str?: number;
        int?: number;
        fame?: number;
        level?: number;
        job?: string;
    }
}

export interface EquipSet {
    type: EquipType;
    equips: Equip[];
}

export enum Skill {
    TT = "Triple Throw",
    Hurricane = "Hurricane",
    RapidFire = "Rapid Fire",
    Brandish = "Brandish",
    Fury = "Spear Fury",
    Blast = "Dragon Blast",
    Genesis = "Genesis",
    AngelRay = "Angel Ray",
    Blizzard = "Blizzard",
    ChainLightning = "Chain Lightning",
    Paralyze = "Paralyze",
    Meteor = "Meteor",
    MMmacro = "Snipe + Strafe",
}

export enum EquipType {
    Top = "Top",
    Bot = "Bottom",
    Helm = "Helmet",
    Overall = "Overall",
    Glove = "Glove",
    Shoe = "Shoe",
    Cape = "Cape",
    Weapon = "Weapon",
    Shield = "Shield",
    Earring = "Earring",
    Face = "Face",
    Eye = "Eye",
    Belt = "Belt",
    Pendant = "Pendant",
    Ring1 = "Ring1",
    Ring2 = "Ring2",
    Ring3 = "Ring3",
    Ring4 = "Ring4",
    Medal = "Medal",
    RingNX = "RingNX",
    PendantNX = "PendantNX",
    Star = "Star",
}

export enum Job {
    NL = "Night Lord",
    Shad = "Shadower",
    BM = "Bowmaster",
    MM = "Marksman",
    Corsair = "Corsair",
    Bucc = "Buccaneer",
    Hero = "Hero",
    Paladin = "Paladin",
    DK = "Dark Knight",
    IL = "I/L Mage",
    FP = "F/P Mage",
    BS = "Bishop",
}

export enum AttPot {
    None = 0,
    Gizer = 25,
    Stopper = 60,
    Apple = 100,
    Gelt = 120,
    Narc = 140
}

export enum MattPot {
    None = 0,
    Gizer = 30,
    Apple = 100,
    Pie = 120,
    Cheese = 220
}

export type Character = {
    name: string;
    job: Job;
    stats: {
        luk: number;
        dex: number;
        str: number;
        int: number;
    };
}

export interface GearSet {
    top?: Equip | null;
    bot?: Equip | null;
    helmet?: Equip | null;
    overall?: Equip | null;
    glove?: Equip | null;
    shoe?: Equip | null;
    cape?: Equip | null;
    weapon?: Equip | null;
    shield?: Equip | null;
    earring?: Equip | null;
    face?: Equip | null;
    eye?: Equip | null;
    belt?: Equip | null;
    pendant?: Equip | null;
    ring1?: Equip | null;
    ring2?: Equip | null;
    ring3?: Equip | null;
    ring4?: Equip | null;
    medal?: Equip | null;
    ringnx?: Equip | null;
    pendantnx?: Equip | null;
    star?: Equip | null;
}

export interface CharConfig {
    attPot: AttPot;
    sharpEyes: boolean
    booster: boolean;
    si: boolean;
    mw: boolean;
    echo: boolean;
}

export type Stats = {
    str: number;
    dex: number;
    luk: number;
    int: number;
};