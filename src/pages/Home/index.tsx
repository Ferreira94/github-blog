import { Header, Profile, SearchInput } from '../../components';
import { HomeContainer, TitlePublicationsContainer } from './style';

export function Home() {
  return (
    <>
      <Header />

      <HomeContainer>
        <Profile />

        <TitlePublicationsContainer>
          <strong>Publicações</strong>
          <p>6 publicações</p>
        </TitlePublicationsContainer>

        <SearchInput />
      </HomeContainer>
    </>
  );
}
