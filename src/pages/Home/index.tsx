import { Header, Profile, PublicationCard, SearchInput } from '../../components';
import { HomeContainer, TitlePublicationsContainer, PublicationsContainer } from './style';

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

        <PublicationsContainer>
          <PublicationCard />
          <PublicationCard />
          <PublicationCard />
          <PublicationCard />
          <PublicationCard />
          <PublicationCard />
        </PublicationsContainer>
      </HomeContainer>
    </>
  );
}
