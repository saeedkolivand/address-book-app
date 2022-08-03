import { Title, UsersDto } from "../src/pages/home/home.types";

export const mockedApiResponse: UsersDto[] = [
  {
    name: {
      title: Title.Mr,
      first: "Arian",
      last: "Tsegay",
    },
    location: {
      street: {
        number: 6982,
        name: "Vettaliveien",
      },
      city: "Vear",
      state: "Finnmark - Finnmárku",
      country: "Norway",
      postcode: "0975",
      coordinates: {
        latitude: "42.7251",
        longitude: "-57.1252",
      },
      timezone: {
        offset: "-10:00",
        description: "Hawaii",
      },
    },
    email: "arian.tsegay@example.com",
    login: {
      uuid: "1e1bfe40-cd7d-4a95-8383-712a66217806",
      username: "orangeelephant548",
      password: "cody",
      salt: "XZE2OMuc",
      md5: "907f5d7523e03030cbbd1134e52dabf3",
      sha1: "52a81e312ed64b98c72dc9e28add53964f1f6fcc",
      sha256:
        "b390a9ff4f34e842117c493ebe89bfe5c75170ea909eee54f0fd37b84dcb55d9",
    },
    phone: "54114504",
    cell: "93987823",
    picture: {
      large: "https://randomuser.me/api/portraits/men/63.jpg",
      medium: "https://randomuser.me/api/portraits/med/men/63.jpg",
      thumbnail: "https://randomuser.me/api/portraits/thumb/men/63.jpg",
    },
    nat: "CH",
  },
  {
    name: {
      title: Title.Mr,
      first: "Lauri",
      last: "Hannula",
    },
    location: {
      street: {
        number: 8484,
        name: "Esplanadi",
      },
      city: "Puumala",
      state: "Pirkanmaa",
      country: "Finland",
      postcode: 73322,
      coordinates: {
        latitude: "83.6060",
        longitude: "-15.6169",
      },
      timezone: {
        offset: "+4:00",
        description: "Abu Dhabi, Muscat, Baku, Tbilisi",
      },
    },
    email: "lauri.hannula@example.com",
    login: {
      uuid: "b4ba03b7-a531-4e6e-bd13-473ed4bbc053",
      username: "browndog362",
      password: "matthias",
      salt: "8kyMGL9t",
      md5: "226a405810ff76eb26277b9784603523",
      sha1: "4ec700b9f76553c9ef16c14340996f2ffd30a741",
      sha256:
        "657ae3a04f3c8826f18e5242ad6ca153257477a203aad9d1efb834dd6ee96e3d",
    },
    phone: "08-689-551",
    cell: "041-862-95-14",
    picture: {
      large: "https://randomuser.me/api/portraits/men/5.jpg",
      medium: "https://randomuser.me/api/portraits/med/men/5.jpg",
      thumbnail: "https://randomuser.me/api/portraits/thumb/men/5.jpg",
    },
    nat: "ES",
  },
];
