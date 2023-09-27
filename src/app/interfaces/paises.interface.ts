export interface TodosLosPaises {
    name:         Name;
    tld?:         string[];
    cca2:         string;
    ccn3?:        string;
    cca3:         string;
    independent?: boolean;
    status:       Status;
    unMember:     boolean;
    currencies?:  Currencies;
    idd:          Idd;
    capital?:     string[];
    altSpellings: string[];
    region:       Region;
    subregion?:   string;
    languages?:   { [key: string]: string };
    translations: { [key: string]: Translation };
    latlng:       number[];
    landlocked:   boolean;
    area:         number;
    demonyms?:    Demonyms;
    flag:         string;
    maps:         Maps;
    population:   number;
    car:          Car;
    timezones:    string[];
    continents:   Continent[];
    flags:        Flags;
    coatOfArms:   CoatOfArms;
    startOfWeek:  StartOfWeek;
    capitalInfo:  CapitalInfo;
    postalCode?:  PostalCode;
    borders?:     string[];
    cioc?:        string;
    gini?:        { [key: string]: number };
    fifa?:        string;
}

export interface CapitalInfo {
    latlng?: number[];
}

export interface Car {
    signs?: string[];
    side:   Side;
}

export enum Side {
    Left = "left",
    Right = "right",
}

export interface CoatOfArms {
    png?: string;
    svg?: string;
}

export enum Continent {
    Africa = "Africa",
    Antarctica = "Antarctica",
    Asia = "Asia",
    Europe = "Europe",
    NorthAmerica = "North America",
    Oceania = "Oceania",
    SouthAmerica = "South America",
}

export interface Currencies {
    XPF?: TartuGecko;
    EUR?: TartuGecko;
    VES?: TartuGecko;
    USD?: TartuGecko;
    XCD?: TartuGecko;
    GIP?: TartuGecko;
    KES?: TartuGecko;
    BRL?: TartuGecko;
    MVR?: TartuGecko;
    CKD?: TartuGecko;
    NZD?: TartuGecko;
    SCR?: TartuGecko;
    XAF?: TartuGecko;
    VUV?: TartuGecko;
    GMD?: TartuGecko;
    GYD?: TartuGecko;
    FKP?: TartuGecko;
    DZD?: TartuGecko;
    MAD?: TartuGecko;
    MRU?: TartuGecko;
    TRY?: TartuGecko;
    PKR?: TartuGecko;
    IRR?: TartuGecko;
    IDR?: TartuGecko;
    AFN?: TartuGecko;
    ALL?: TartuGecko;
    CDF?: TartuGecko;
    XOF?: TartuGecko;
    SDG?: BAM;
    SAR?: TartuGecko;
    KHR?: TartuGecko;
    NPR?: TartuGecko;
    MYR?: TartuGecko;
    RWF?: TartuGecko;
    THB?: TartuGecko;
    JOD?: TartuGecko;
    CHF?: TartuGecko;
    KMF?: TartuGecko;
    GBP?: TartuGecko;
    IMP?: TartuGecko;
    HKD?: TartuGecko;
    JEP?: TartuGecko;
    TJS?: TartuGecko;
    BGN?: TartuGecko;
    EGP?: TartuGecko;
    MWK?: TartuGecko;
    CVE?: TartuGecko;
    MDL?: TartuGecko;
    DKK?: TartuGecko;
    TMT?: TartuGecko;
    BBD?: TartuGecko;
    ERN?: TartuGecko;
    LSL?: TartuGecko;
    ZAR?: TartuGecko;
    TZS?: TartuGecko;
    SOS?: TartuGecko;
    ANG?: TartuGecko;
    DOP?: TartuGecko;
    GNF?: TartuGecko;
    NAD?: TartuGecko;
    SHP?: TartuGecko;
    SBD?: TartuGecko;
    MOP?: TartuGecko;
    ARS?: TartuGecko;
    BAM?: BAM;
    GGP?: TartuGecko;
    DJF?: TartuGecko;
    SYP?: TartuGecko;
    PEN?: TartuGecko;
    AUD?: TartuGecko;
    JMD?: TartuGecko;
    KZT?: TartuGecko;
    SLL?: TartuGecko;
    KRW?: TartuGecko;
    BZD?: TartuGecko;
    PGK?: TartuGecko;
    ISK?: TartuGecko;
    TWD?: TartuGecko;
    JPY?: TartuGecko;
    CNY?: TartuGecko;
    LBP?: TartuGecko;
    LKR?: TartuGecko;
    GTQ?: TartuGecko;
    RSD?: TartuGecko;
    MGA?: TartuGecko;
    SZL?: TartuGecko;
    RON?: TartuGecko;
    ZMW?: TartuGecko;
    ZWL?: TartuGecko;
    TND?: TartuGecko;
    AED?: TartuGecko;
    MNT?: TartuGecko;
    NOK?: TartuGecko;
    UYU?: TartuGecko;
    BSD?: TartuGecko;
    RUB?: TartuGecko;
    YER?: TartuGecko;
    SEK?: TartuGecko;
    LAK?: TartuGecko;
    COP?: TartuGecko;
    CAD?: TartuGecko;
    INR?: TartuGecko;
    MKD?: TartuGecko;
    PYG?: TartuGecko;
    CRC?: TartuGecko;
    UGX?: TartuGecko;
    BOB?: TartuGecko;
    KPW?: TartuGecko;
    MUR?: TartuGecko;
    HNL?: TartuGecko;
    KGS?: TartuGecko;
    CLP?: TartuGecko;
    BMD?: TartuGecko;
    LRD?: TartuGecko;
    LYD?: TartuGecko;
    OMR?: TartuGecko;
    PHP?: TartuGecko;
    PLN?: TartuGecko;
    FOK?: TartuGecko;
    BHD?: TartuGecko;
    BYN?: TartuGecko;
    QAR?: TartuGecko;
    VND?: TartuGecko;
    SGD?: TartuGecko;
    GEL?: TartuGecko;
    BIF?: TartuGecko;
    SSP?: TartuGecko;
    WST?: TartuGecko;
    KWD?: TartuGecko;
    TTD?: TartuGecko;
    TVD?: TartuGecko;
    AOA?: TartuGecko;
    TOP?: TartuGecko;
    MZN?: TartuGecko;
    MMK?: TartuGecko;
    ETB?: TartuGecko;
    AZN?: TartuGecko;
    UZS?: TartuGecko;
    BDT?: TartuGecko;
    AMD?: TartuGecko;
    NGN?: TartuGecko;
    BND?: TartuGecko;
    ILS?: TartuGecko;
    AWG?: TartuGecko;
    NIO?: TartuGecko;
    HTG?: TartuGecko;
    KID?: TartuGecko;
    KYD?: TartuGecko;
    UAH?: TartuGecko;
    MXN?: TartuGecko;
    FJD?: TartuGecko;
    GHS?: TartuGecko;
    SRD?: TartuGecko;
    CUC?: TartuGecko;
    CUP?: TartuGecko;
    BTN?: TartuGecko;
    HUF?: TartuGecko;
    STN?: TartuGecko;
    IQD?: TartuGecko;
    CZK?: TartuGecko;
    BWP?: TartuGecko;
    PAB?: TartuGecko;
}

export interface TartuGecko {
    name:   string;
    symbol: string;
}

export interface BAM {
    name: string;
}

export interface Demonyms {
    eng:  Eng;
    fra?: Eng;
}

export interface Eng {
    f: string;
    m: string;
}

export interface Flags {
    png:  string;
    svg:  string;
    alt?: string;
}

export interface Idd {
    root?:     string;
    suffixes?: string[];
}

export interface Maps {
    googleMaps:     string;
    openStreetMaps: string;
}

export interface Name {
    common:      string;
    official:    string;
    nativeName?: { [key: string]: Translation };
}

export interface Translation {
    official: string;
    common:   string;
}

export interface PostalCode {
    format: string;
    regex?: string;
}

export enum Region {
    Africa = "Africa",
    Americas = "Americas",
    Antarctic = "Antarctic",
    Asia = "Asia",
    Europe = "Europe",
    Oceania = "Oceania",
}

export enum StartOfWeek {
    Monday = "monday",
    Saturday = "saturday",
    Sunday = "sunday",
}

export enum Status {
    OfficiallyAssigned = "officially-assigned",
    UserAssigned = "user-assigned",
}
