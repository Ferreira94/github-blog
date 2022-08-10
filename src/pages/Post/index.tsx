import { ArrowSquareOut, Calendar, CaretLeft, ChatCircle, GithubLogo } from 'phosphor-react';
import { Header } from '../../components';
import {
  PostContainer,
  InfoPostContainer,
  InfoHeader,
  InfoFooter,
  Link,
  ContentContainer,
} from './style';

export function Post() {
  return (
    <>
      <Header />

      <PostContainer>
        <InfoPostContainer>
          <InfoHeader>
            <Link to="/">
              <div>
                <CaretLeft />
                <span>Voltar</span>
              </div>
            </Link>
            <a href="https://github.com/Ferreira94" target="_blank">
              <span>Ver no GitHub</span>
              <ArrowSquareOut />
            </a>
          </InfoHeader>
          <h4>JavaScript data types and data structures</h4>
          <InfoFooter>
            <div>
              <GithubLogo />
              <p>ferreira94</p>
            </div>
            <div>
              <Calendar />
              <p>Há 1 dia</p>
            </div>
            <div>
              <ChatCircle />
              <p>5 comentários</p>
            </div>
          </InfoFooter>
        </InfoPostContainer>

        <ContentContainer>
          <p>
            <span>
              Programming languages all have built-in data structures, but these often differ from
              one language to another.
            </span>
            This article attempts to list the built-in data structures available in JavaScript and
            what properties they have. These can be used to build other data structures. Wherever
            possible, comparisons with other languages are drawn.
          </p>
          <strong>Dynamic typing</strong>
          <p>
            JavaScript is a loosely typed and dynamic language. Variables in JavaScript are not
            directly associated with any particular value type, and any variable can be assigned
            (and re-assigned) values of all types:
          </p>
        </ContentContainer>
      </PostContainer>
    </>
  );
}
