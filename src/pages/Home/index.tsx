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
  const [isLoading, setIsLoading] = useState(true);

  async function fetchIssues() {
    const response = await api.get('search/issues', {
      params: { q: `${seachText}repo:ferreira94/github-blog` },
    });

    setIssues(response.data.items);
    setIsLoading(false);
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
        {isLoading ? (
          <Spinner />
        ) : (
          <>
            <Profile />
            <TitlePublicationsContainer>
              <strong>Publicações</strong>
              <p>{issues.length} publicações</p>
            </TitlePublicationsContainer>

            <InputContainer>
              <input
                placeholder="Buscar conteúdo"
                value={seachText}
                onChange={(event) => setSeachText(event.target.value)}
              />
              <button onClick={handleSearchIssues}>
                <MagnifyingGlass />
              </button>
            </InputContainer>

            <PublicationsContainer>
              {issues.length < 1 ? (
                <h2>Nenhum conteúdo</h2>
              ) : (
                <>
                  {issues.map((item) => (
                    <PublicationCard
                      key={item.number}
                      id={item.number}
                      title={item.title}
                      text={`${item.body.substring(0, 137)}...`}
                      created_at={item.created_at}
                    />
                  ))}
                </>
              )}
            </PublicationsContainer>
          </>
        )}
      </HomeContainer>
    </>
  );
}
