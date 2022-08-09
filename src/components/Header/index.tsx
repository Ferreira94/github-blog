import { HeaderContainer } from './style';

import logoImg from '../../assets/logo.svg';
import effectLeftImg from '../../assets/effectLeft.svg';
import effectRightImg from '../../assets/effectRight.svg';

export function Header() {
  return (
    <HeaderContainer>
      <img src={effectLeftImg} alt="" />
      <img src={logoImg} alt="" />
      <img src={effectRightImg} alt="" />
    </HeaderContainer>
  );
}
