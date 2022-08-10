import { ArrowSquareOut, Calendar, CaretLeft, ChatCircle, GithubLogo } from 'phosphor-react';
import { Header } from '../../components';
import { PostContainer, InfoPostContainer, InfoHeader, InfoFooter, Link } from './style';

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
              <p>ferreira94</p>
            </div>
          </InfoFooter>
        </InfoPostContainer>
      </PostContainer>
    </>
  );
}
