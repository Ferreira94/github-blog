import { Header, Profile } from '../../components';
import { HomeContainer } from './style';

export function Home() {
  return (
    <>
      <Header />

      <HomeContainer>
        <Profile />
      </HomeContainer>
    </>
  );
}
