export interface IEmail {
  toString(): string;
}

export class Email implements IEmail {
  readonly address: string;

  constructor(address: string) {
    this.address = address;
  }

  public toString(): string {
    return this.address;
  }
}
