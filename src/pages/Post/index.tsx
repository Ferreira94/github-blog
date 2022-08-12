import { ArrowSquareOut, Calendar, CaretLeft, ChatCircle, GithubLogo, Timer } from 'phosphor-react';
import { useEffect, useState } from 'react';
import ReactMarkdown from 'react-markdown';
import { useParams } from 'react-router-dom';
import { formatDistanceToNow } from 'date-fns';
import ptBR from 'date-fns/locale/pt-BR';

import { Header, Spinner } from '../../components';
import { api } from '../../lib/axios';

import {
  PostContainer,
  InfoPostContainer,
  InfoHeader,
  InfoFooter,
  Link,
  ContentContainer,
} from './style';
import Comments from '../../components/Comments';

interface IPostDataProps {
  title: string;
  body: string;
  comments: number;
  url: string;
  user: {
    login: string;
  };
  created_at: Date;
}

export function Post() {
  const { id } = useParams();
  const [postData, setPostData] = useState<IPostDataProps>();

  async function fetchIssueById() {
    const result = await api.get(`repos/ferreira94/github-blog/issues/${id}`);

    setPostData(result.data);
  }

  useEffect(() => {
    fetchIssueById();
  }, []);

  return (
    <>
      <Header />
      {!postData ? (
        <Spinner />
      ) : (
        <>
          <PostContainer>
            <InfoPostContainer>
              <InfoHeader>
                <Link to="/">
                  <div>
                    <CaretLeft />
                    <span>Voltar</span>
                  </div>
                </Link>
                <a href={`https://github.com/Ferreira94/github-blog/issues/${id}`} target="_blank">
                  <span>Ver no GitHub</span>
                  <ArrowSquareOut />
                </a>
              </InfoHeader>
              <h4>{postData.title}</h4>
              <InfoFooter>
                <div>
                  <GithubLogo />
                  <p>{postData.user.login}</p>
                </div>
                <div>
                  <Calendar />
                  <p>
                    {formatDistanceToNow(new Date(postData.created_at), {
                      addSuffix: true,
                      locale: ptBR,
                    })}
                  </p>
                </div>
                <div>
                  <Timer />
                  <p>Tempo de leitura {Math.floor(postData.body.length / 200)} min</p>
                </div>
                <div>
                  <ChatCircle />
                  {postData.comments === 0 && <p>Nenhum comentário</p>}
                  {postData.comments === 1 && <p>{postData.comments} comentário</p>}
                  {postData.comments > 1 && <p>{postData.comments} comentários</p>}
                </div>
              </InfoFooter>
            </InfoPostContainer>

            <ContentContainer>
              <ReactMarkdown>{postData.body}</ReactMarkdown>

              {id && <Comments id={id} />}
            </ContentContainer>
          </PostContainer>
        </>
      )}
    </>
  );
}
