import axios from "axios";
import { flow, Instance, types } from "mobx-state-tree";

import { getAccounts } from "src/api/users/accounts";
import {
  RandomUserResults,
  MasterAccounts,
} from "src/api/users/users.response";

export const UserStore = types
  .model("UserStore", {
    name: types.maybe(types.string),
    image: types.maybe(types.string),
    siren: types.maybe(types.number),
    fullAddress: types.maybe(types.string),
    accounts: types.maybe(types.frozen<MasterAccounts[]>()),
  })
  .actions((self) => ({
    setUserName: (name: string) => (self.name = name),
    setUserImage: (url: string) => (self.image = url),
    setUserSiren: (siren: number) => (self.siren = siren),
    setUserFullAddress: (address: string) => (self.fullAddress = address),
    setAccounts: (accounts: MasterAccounts[]) => (self.accounts = accounts),
  }))
  .actions((self) => ({
    fetchRandomUser: flow(function* () {
      return yield axios.get(
        `${process.env.REACT_APP_RANDOM_USERS_API}/?inc=name,picture`
      );
    }),
    fetchSiren: flow(function* () {
      const sirenNumber = Number(process.env.REACT_APP_TEMP_SIREN)!;
      self.setUserSiren(sirenNumber);

      return yield axios.get(
        `${process.env.REACT_APP_SIREN_API}/unites_legales/${sirenNumber}`
      );
    }),
  }))
  .actions((self) => ({
    fetchUser: flow(function* () {
      const data: RandomUserResults = yield self.fetchRandomUser();
      const user = data.results[0];

      const userName = `${user.name.title} ${user.name.first} ${user.name.last}`;
      self.setUserName(userName);

      const userImage = user.picture.thumbnail;
      self.setUserImage(userImage);

      const sirenData = yield self.fetchSiren();
      const fullAddress: string =
        sirenData.unite_legale.etablissement_siege.geo_adresse;
      self.setUserFullAddress(fullAddress);

      // TODO: criar uma store para accounts e trazer de lá.
      const accounts: MasterAccounts[] = yield getAccounts();
      self.setAccounts(accounts);

      return data;
    }),
  }));

export const userStore = UserStore.create({});

export type UserStoreType = Instance<typeof UserStore>;