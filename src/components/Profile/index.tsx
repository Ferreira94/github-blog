import { useEffect, useState } from 'react';
import { ArrowSquareOut, GithubLogo, RocketLaunch, Users } from 'phosphor-react';

import { InfoContainer, InfoHeader, ProfileContainer, InfoFooter } from './style';
import { api } from '../../lib/axios';
import { Spinner } from '../Spinner';

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

  return (
    <ProfileContainer>
      {!user ? (
        <Spinner />
      ) : (
        <>
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
        </>
      )}
    </ProfileContainer>
  );
}
