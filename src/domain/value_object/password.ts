export interface IPassword {
  toString(): string;
}

export class Password implements IPassword {
  readonly value: string;

  constructor(value: string) {
    this.value = value;
  }

  public toString(): string {
    return this.value;
  }
}
