import { Account } from '~/domain/entity';
import { Email, Password } from '~/domain/value_object';
import { IAccountRepository } from '~/domain/repository';

export interface ILoginUsecaseInput {
  email: string;
  password: string;
}

export interface ILoginUsecaseOutput {
  account: Account;
}

export interface ILoginUsecase {
  invoke(input: ILoginUsecaseInput): ILoginUsecaseOutput;
}

export class LoginUsecase implements ILoginUsecase {
  readonly accountRepository: IAccountRepository;

  constructor(accountRepository: IAccountRepository) {
    this.accountRepository = accountRepository;
  }

  public invoke(input: ILoginUsecaseInput): ILoginUsecaseOutput {
    const email = new Email(input.email);

    /* TODO: verify email */

    const password = new Password(input.password);

    /* TODO: verify password */

    const account = this.accountRepository.findByEmailAndPassword({/* context */}, email, password);

    return {
      account,
    }
  }
}
