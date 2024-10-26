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
    Ring1 = "Ring 1",
    Ring2 = "Ring 2",
    Ring3 = "Ring 3",
    Ring4 = "Ring 4",
    Medal = "Medal",
    RingNX = "Ring NX",
    PendantNX = "Pendant NX",
    Star = "Star",
}

export enum Job {
    NL = "Night Lord",
    Shad = "Shadower",
}

export enum AttPot {
    None = 0,
    Stopper = 60,
    Apple = 100,
    Gelt = 120,
    Narc = 140
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
    helm?: Equip | null;
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
    ringNX?: Equip | null;
    pendantNX?: Equip | null;
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