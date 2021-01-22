import { IProfile } from './profile';

export interface IAccount {
  id: AccountId;
  profile: IProfile;
}

export type AccountId = string;

export class Account implements IAccount {
  id: AccountId;
  profile: IProfile;

  constructor(id: AccountId, profile: IProfile) {
    this.id = id;
    this.profile = profile;
  }
}
