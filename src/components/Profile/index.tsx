import { ArrowSquareOut, Buildings, GithubLogo, Rocket, RocketLaunch, Users } from 'phosphor-react';
import { useEffect, useState } from 'react';
import { api } from '../../lib/axios';
import { InfoContainer, InfoHeader, ProfileContainer, InfoFooter } from './style';

interface IUserProps {
  name: string;
  avatar_url: string;
  html_url: string;
  login: string;
  followers: number;
  blog: string;
  bio: string;
}

export function Profile() {
  const [user, setUser] = useState<IUserProps>();

  async function fetchUser() {
    const response = await api.get('users/ferreira94');

    setUser(response.data);
  }

  useEffect(() => {
    fetchUser();
  }, []);

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
