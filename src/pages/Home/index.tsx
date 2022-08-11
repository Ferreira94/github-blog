import { useState, useEffect } from 'react';

import { Header, Profile, PublicationCard, SearchInput } from '../../components';
import { api } from '../../lib/axios';

import { HomeContainer, TitlePublicationsContainer, PublicationsContainer } from './style';

interface IIssueProps {
  title: string;
  body: string;
  html_url: string;
  number: number;
  created_at: Date;
}

export function Home() {
  const [issues, setIssues] = useState<IIssueProps[]>([]);

  async function fetchIssues() {
    const response = await api.get('search/issues', {
      params: { q: 'repo:ferreira94/github-blog' },
    });

    setIssues(response.data.items);
  }

  useEffect(() => {
    fetchIssues();
  }, []);

  if (!issues) {
    return <h2>Loading...</h2>;
  }

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
              id={item.number}
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
