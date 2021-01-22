export interface IProfile {
  firstName: string;
  lastName: string;
}

export class Profile implements IProfile {
  readonly firstName: string;
  readonly lastName: string;

  constructor(firstName: string, lastName: string) {
    this.firstName = firstName;
    this.lastName = lastName;
  }
}

