import { AppRouterTypes } from "routes/appRouter.types";

export interface HomePropsTypes extends AppRouterTypes {}

export interface UsersListApiErrorResponseTypes {
  error: string;
}

export interface UsersListApiResponseTypes {
  info: {
    seed: string;
    results: number;
    page: number;
    version: string;
  };
  results: UsersDto[];
}

export interface UsersDto {
  gender: Gender;
  name: NameClass;
  location: Location;
  email: string;
  login: Login;
  dob: Dob;
  registered: Dob;
  phone: string;
  cell: string;
  id: ID;
  picture: Picture;
  nat: Nat;
}

export interface Dob {
  date: string;
  age: number;
}

export enum Gender {
  Female = "female",
  Male = "male",
}

export interface ID {
  name: NameEnum;
  value: null | string;
}

export enum NameEnum {
  Avs = "AVS",
  Bsn = "BSN",
  Cpf = "CPF",
  Cpr = "CPR",
  Dni = "DNI",
  Empty = "",
  Fn = "FN",
  Hetu = "HETU",
  Insee = "INSEE",
  NSS = "NSS",
  Nino = "NINO",
  Pps = "PPS",
  Sid = "SID",
  Sin = "SIN",
  Ssn = "SSN",
  Svnr = "SVNR",
  Tfn = "TFN",
  Uidai = "UIDAI",
}

export interface Location {
  street: Street;
  city: string;
  state: string;
  country: Country;
  postcode: number | string;
  coordinates: Coordinates;
  timezone: Timezone;
}

export interface Coordinates {
  latitude: string;
  longitude: string;
}

export enum Country {
  Australia = "Australia",
  Brazil = "Brazil",
  Canada = "Canada",
  Denmark = "Denmark",
  Finland = "Finland",
  France = "France",
  Germany = "Germany",
  India = "India",
  Iran = "Iran",
  Ireland = "Ireland",
  Mexico = "Mexico",
  Netherlands = "Netherlands",
  NewZealand = "New Zealand",
  Norway = "Norway",
  Serbia = "Serbia",
  Spain = "Spain",
  Switzerland = "Switzerland",
  Turkey = "Turkey",
  Ukraine = "Ukraine",
  UnitedKingdom = "United Kingdom",
  UnitedStates = "United States",
}

export interface Street {
  number: number;
  name: string;
}

export interface Timezone {
  offset: Offset;
  description: Description;
}

export enum Description {
  AbuDhabiMuscatBakuTbilisi = "Abu Dhabi, Muscat, Baku, Tbilisi",
  AdelaideDarwin = "Adelaide, Darwin",
  Alaska = "Alaska",
  AlmatyDhakaColombo = "Almaty, Dhaka, Colombo",
  AtlanticTimeCanadaCaracasLaPaz = "Atlantic Time (Canada), Caracas, La Paz",
  AzoresCapeVerdeIslands = "Azores, Cape Verde Islands",
  BaghdadRiyadhMoscowStPetersburg = "Baghdad, Riyadh, Moscow, St. Petersburg",
  BangkokHanoiJakarta = "Bangkok, Hanoi, Jakarta",
  BeijingPerthSingaporeHongKong = "Beijing, Perth, Singapore, Hong Kong",
  BombayCalcuttaMadrasNewDelhi = "Bombay, Calcutta, Madras, New Delhi",
  BrazilBuenosAiresGeorgetown = "Brazil, Buenos Aires, Georgetown",
  BrusselsCopenhagenMadridParis = "Brussels, Copenhagen, Madrid, Paris",
  CentralTimeUSCanadaMexicoCity = "Central Time (US & Canada), Mexico City",
  EasternAustraliaGuamVladivostok = "Eastern Australia, Guam, Vladivostok",
  EasternTimeUSCanadaBogotaLima = "Eastern Time (US & Canada), Bogota, Lima",
  EkaterinburgIslamabadKarachiTashkent = "Ekaterinburg, Islamabad, Karachi, Tashkent",
  EniwetokKwajalein = "Eniwetok, Kwajalein",
  Hawaii = "Hawaii",
  Kabul = "Kabul",
  KaliningradSouthAfrica = "Kaliningrad, South Africa",
  Kathmandu = "Kathmandu",
  MagadanSolomonIslandsNewCaledonia = "Magadan, Solomon Islands, New Caledonia",
  MidAtlantic = "Mid-Atlantic",
  MidwayIslandSamoa = "Midway Island, Samoa",
  MountainTimeUSCanada = "Mountain Time (US & Canada)",
  Newfoundland = "Newfoundland",
  PacificTimeUSCanada = "Pacific Time (US & Canada)",
  Tehran = "Tehran",
  TokyoSeoulOsakaSapporoYakutsk = "Tokyo, Seoul, Osaka, Sapporo, Yakutsk",
  WesternEuropeTimeLondonLisbonCasablanca = "Western Europe Time, London, Lisbon, Casablanca",
}

export enum Offset {
  Offset100 = "-1:00",
  Offset1000 = "+10:00",
  Offset1100 = "-11:00",
  Offset200 = "-2:00",
  Offset300 = "-3:00",
  Offset330 = "-3:30",
  Offset400 = "-4:00",
  Offset500 = "+5:00",
  Offset600 = "-6:00",
  Offset700 = "-7:00",
  Offset800 = "+8:00",
  Offset900 = "+9:00",
  The000 = "0:00",
  The100 = "+1:00",
  The1000 = "-10:00",
  The1100 = "+11:00",
  The1200 = "-12:00",
  The200 = "+2:00",
  The300 = "+3:00",
  The330 = "+3:30",
  The400 = "+4:00",
  The430 = "+4:30",
  The500 = "-5:00",
  The530 = "+5:30",
  The545 = "+5:45",
  The600 = "+6:00",
  The700 = "+7:00",
  The800 = "-8:00",
  The900 = "-9:00",
  The930 = "+9:30",
}

export interface Login {
  uuid: string;
  username: string;
  password: string;
  salt: string;
  md5: string;
  sha1: string;
  sha256: string;
}

export interface NameClass {
  title: Title;
  first: string;
  last: string;
}

export enum Title {
  MS = "Ms",
  Madame = "Madame",
  Mademoiselle = "Mademoiselle",
  Miss = "Miss",
  Monsieur = "Monsieur",
  Mr = "Mr",
  Mrs = "Mrs",
}

export enum Nat {
  Au = "AU",
  Br = "BR",
  CA = "CA",
  Ch = "CH",
  De = "DE",
  Dk = "DK",
  Es = "ES",
  Fi = "FI",
  Fr = "FR",
  GB = "GB",
  IR = "IR",
  Ie = "IE",
  In = "IN",
  MX = "MX",
  Nl = "NL",
  No = "NO",
  Nz = "NZ",
  Rs = "RS",
  Tr = "TR",
  Ua = "UA",
  Us = "US",
}

export interface Picture {
  large: string;
  medium: string;
  thumbnail: string;
}
