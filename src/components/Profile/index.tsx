import { ArrowSquareOut, GithubLogo, RocketLaunch, Users } from 'phosphor-react';
import { useContext } from 'react';
import { GithubContext } from '../../contexts/GithubContext';
import { InfoContainer, InfoHeader, ProfileContainer, InfoFooter } from './style';

export function Profile() {
  const { user } = useContext(GithubContext);

  if (!user) {
    return <h2>Loading</h2>;
  }

  return (
    <ProfileContainer>
      <img src={user.avatar_url} alt="" />

      <InfoContainer>
        <InfoHeader>
          <h2>{user.name}</h2>
          <a href={user.html_url} target="_blank">
            <strong>GITHUB</strong>
            <ArrowSquareOut />
          </a>
        </InfoHeader>
        <p>{user.bio}</p>
        <InfoFooter>
          <div>
            <GithubLogo />
            <p>{user.login}</p>
          </div>

          <a href={user.blog} target="_blank">
            <div>
              <RocketLaunch />
              <p>Portfólio</p>
            </div>
          </a>

          <div>
            <Users />
            <p>{user.followers} seguidores</p>
          </div>
        </InfoFooter>
      </InfoContainer>
    </ProfileContainer>
  );
}
