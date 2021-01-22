import { IAccount } from '~/domain/entity';
import { Email, Password } from '~/domain/value_object';

export interface IAccountRepository {
  findByEmailAndPassword(ctx: unknown, email: Email, password: Password): IAccount;
}
