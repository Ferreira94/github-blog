import { ArrowSquareOut, Buildings, GithubLogo, Users } from 'phosphor-react';
import { InfoContainer, InfoHeader, ProfileContainer, InfoFooter } from './style';

export function Profile() {
  return (
    <ProfileContainer>
      <img src="https://github.com/Ferreira94.png" alt="" />

      <InfoContainer>
        <InfoHeader>
          <h2>Luciano Ferreira</h2>
          <a href="https://github.com/Ferreira94" target="_blank">
            <strong>GITHUB</strong>
            <ArrowSquareOut />
          </a>
        </InfoHeader>
        <p>
          Tristique volutpat pulvinar vel massa, pellentesque egestas. Eu viverra massa quam
          dignissim aenean malesuada suscipit. Nunc, volutpat pulvinar vel mass.
        </p>
        <InfoFooter>
          <div>
            <GithubLogo />
            <p>ferreira94</p>
          </div>

          <div>
            <Buildings />
            <p>Rocketseat</p>
          </div>

          <div>
            <Users />
            <p>15 seguidores</p>
          </div>
        </InfoFooter>
      </InfoContainer>
    </ProfileContainer>
  );
}
