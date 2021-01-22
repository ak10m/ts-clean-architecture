import { AccountId, IProfile } from '~/domain/entity';

export interface IProfileRepository {
  findByAccountId(ctx: unknown, id: AccountId): IProfile;
}
