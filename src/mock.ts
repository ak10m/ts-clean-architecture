import { IAccount, Account } from '~/domain/entity';
import { Email, Password } from '~/domain/value_object';
import { IAccountRepository } from '~/domain/repository';

export class mockAccountRepository implements IAccountRepository {
  public findByEmailAndPassword(ctx: unknown, email: Email, password: Password): IAccount {
    console.log('ctx:', ctx, 'email:', email, 'password', password);
    const account = new Account('dummy', { firstName: 'hanako', lastName: 'yamada' });
    return account
  }
}

