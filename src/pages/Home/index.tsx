import { MagnifyingGlass } from 'phosphor-react';
import { useState, useEffect } from 'react';

import { Header, Profile, PublicationCard, Spinner } from '../../components';
import { api } from '../../lib/axios';

import {
  HomeContainer,
  TitlePublicationsContainer,
  PublicationsContainer,
  InputContainer,
} from './style';

interface IIssueProps {
  title: string;
  body: string;
  html_url: string;
  number: number;
  created_at: Date;
}

export function Home() {
  const [issues, setIssues] = useState<IIssueProps[]>([]);
  const [seachText, setSeachText] = useState('');

  async function fetchIssues() {
    const response = await api.get('search/issues', {
      params: { q: `${seachText}repo:ferreira94/github-blog` },
    });

    setIssues(response.data.items);
  }

  function handleSearchIssues() {
    fetchIssues();
  }

  useEffect(() => {
    if (seachText === '') {
      fetchIssues();
    }
  }, [!seachText]);

  return (
    <>
      <Header />

      <HomeContainer>
        {!issues ? (
          <Spinner />
        ) : (
          <>
            <Profile />
            <TitlePublicationsContainer>
              <strong>Publicações</strong>
              <p>6 publicações</p>
            </TitlePublicationsContainer>

            <InputContainer>
              <input
                placeholder="Buscar conteúdo"
                value={seachText}
                onChange={(event) => setSeachText(event.target.value)}
              />

              <MagnifyingGlass onClick={handleSearchIssues} />
            </InputContainer>

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
          </>
        )}
      </HomeContainer>
    </>
  );
}
