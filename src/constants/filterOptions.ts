export type FilterType = "origin_code" | "destination_code";

export type Filters = Record<FilterType, Option[]>;

export type Option = {
    code: string;
    name: string;
};

export const FILTER_OPTIONS: Record<FilterType, Option[]> = {
    origin_code: [
        { code: "BDG", name: "Bandung" },
        { code: "JKT", name: "Jakarta" },
        { code: "SBY", name: "Surabaya" },
        { code: "DPS", name: "Denpasar" },
        { code: "MLG", name: "Malang" },
    ],
    destination_code: [
        { code: "MDN", name: "Medan" },
        { code: "BJM", name: "Banjarmasin" },
        { code: "PKU", name: "Pekanbaru" },
        { code: "PLB", name: "Palembang" },
        { code: "PBN", name: "Balikpapan" },
    ],
};
