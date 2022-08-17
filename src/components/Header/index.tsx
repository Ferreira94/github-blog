import { HeaderContainer, LinkContainer, Logo } from './style';

import logoImg from '../../assets/logo.svg';
import effectLeftImg from '../../assets/effectLeft.svg';
import effectRightImg from '../../assets/effectRight.svg';

export function Header() {
  return (
    <HeaderContainer>
      <img src={effectLeftImg} alt="" />
      <LinkContainer to={'/'}>
        <Logo src={logoImg} alt="" />
      </LinkContainer>
      <img src={effectRightImg} alt="" />
    </HeaderContainer>
  );
}
