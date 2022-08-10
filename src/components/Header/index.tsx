import { HeaderContainer, Logo } from './style';

import logoImg from '../../assets/logo.svg';
import effectLeftImg from '../../assets/effectLeft.svg';
import effectRightImg from '../../assets/effectRight.svg';

export function Header() {
  return (
    <HeaderContainer>
      <img src={effectLeftImg} alt="" />
      <Logo src={logoImg} alt="" />
      <img src={effectRightImg} alt="" />
    </HeaderContainer>
  );
}
