import {
  Country,
  Description,
  Gender,
  NameEnum,
  Nat,
  Offset,
  Title,
  UsersDto,
} from "../src/pages/home/home.types";

export const mockedApiResponse: UsersDto[] = [
  {
    gender: Gender.Male,
    name: {
      title: Title.Mr,
      first: "Roger",
      last: "Fowler",
    },
    location: {
      street: {
        number: 5841,
        name: "Poplar Dr",
      },
      city: "Launceston",
      state: "Australian Capital Territory",
      country: Country.Australia,
      postcode: 892,
      coordinates: {
        latitude: "-86.0572",
        longitude: "-46.0567",
      },
      timezone: {
        offset: Offset.Offset100,
        description: Description.AzoresCapeVerdeIslands,
      },
    },
    email: "roger.fowler@example.com",
    login: {
      uuid: "d469a800-a7ca-4c67-a221-c2a25bf2ee58",
      username: "bluebutterfly779",
      password: "broadway",
      salt: "OBYQYzBi",
      md5: "be281916f9dab21e0793283d5d894c03",
      sha1: "c3b66270dc086a0a096e124936c858ff37255e1b",
      sha256:
        "a2b9fe949a6f630c7bef48b9ffc9e3c85958111382e6b1ae362b88acc506b082",
    },
    dob: {
      date: "1953-09-15T09:39:16.836Z",
      age: 68,
    },
    registered: {
      date: "2015-04-11T04:10:00.511Z",
      age: 7,
    },
    phone: "03-7919-9352",
    cell: "0412-510-953",
    id: {
      name: NameEnum.Tfn,
      value: "959397491",
    },
    picture: {
      large: "https://randomuser.me/api/portraits/men/12.jpg",
      medium: "https://randomuser.me/api/portraits/med/men/12.jpg",
      thumbnail: "https://randomuser.me/api/portraits/thumb/men/12.jpg",
    },
    nat: Nat.Au,
  },
  {
    gender: Gender.Male,
    name: {
      title: Title.Mr,
      first: "Toivo",
      last: "Elo",
    },
    location: {
      street: {
        number: 7929,
        name: "Fredrikinkatu",
      },
      city: "Salla",
      state: "Southern Savonia",
      country: Country.France,
      postcode: 30778,
      coordinates: {
        latitude: "-44.4476",
        longitude: "-112.4345",
      },
      timezone: {
        offset: Offset.The1000,
        description: Description.Hawaii,
      },
    },
    email: "toivo.elo@example.com",
    login: {
      uuid: "4810f84f-9f5e-4c6f-a151-d01c1cc35245",
      username: "sadduck419",
      password: "celeste",
      salt: "ulquAiaf",
      md5: "0f8e5a5f68e560b9bb5f31de506ba89a",
      sha1: "9f47cbd2d8b17c54ad72421e62fcbef00518f247",
      sha256:
        "0de53cca2c1bafac7ceeaef0cf02c1a03a5e8e4c7277691be6374e427751d9f7",
    },
    dob: {
      date: "1958-11-18T13:32:35.850Z",
      age: 63,
    },
    registered: {
      date: "2012-12-07T17:40:45.873Z",
      age: 9,
    },
    phone: "04-320-880",
    cell: "048-266-22-72",
    id: {
      name: NameEnum.Hetu,
      value: "NaNNA921undefined",
    },
    picture: {
      large: "https://randomuser.me/api/portraits/men/80.jpg",
      medium: "https://randomuser.me/api/portraits/med/men/80.jpg",
      thumbnail: "https://randomuser.me/api/portraits/thumb/men/80.jpg",
    },
    nat: Nat.Fi,
  },
];
