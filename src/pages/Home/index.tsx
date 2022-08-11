import { useContext } from 'react';
import { Header, Profile, PublicationCard, SearchInput } from '../../components';
import { HomeContainer, TitlePublicationsContainer, PublicationsContainer } from './style';
import { GithubContext } from '../../contexts/GithubContext';

export function Home() {
  const { issues } = useContext(GithubContext);

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
          {issues.map((item) => (
            <PublicationCard
              key={item.number}
              title={item.title}
              text={`${item.body.substring(0, 137)}...`}
              created_at={item.created_at}
            />
          ))}
        </PublicationsContainer>
      </HomeContainer>
    </>
  );
}
