import { ILoginUsecase, LoginUsecase } from '~/usecase';

class PageContainer {
  readonly loginUsecase: ILoginUsecase;

  constructor(loginUsecase: ILoginUsecase) {
    this.loginUsecase = loginUsecase;
  }

  // FIXME: private
  public handleClickLoginButton() {
    const input = {
      email: 'get from input',
      password: 'get from input',
    };
    const output = this.loginUsecase.invoke(input);
    console.log('login', output);
  }

  public render() {
    /* render UI Component */
  }
}

import { mockAccountRepository } from '~/mock';

const accountRepository = new mockAccountRepository();
const loginUsecase = new LoginUsecase(accountRepository);
const container = new PageContainer(loginUsecase);

container.handleClickLoginButton();
