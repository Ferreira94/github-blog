import { createContext, ReactNode, useEffect, useState } from 'react';
import { api } from '../lib/axios';

interface IUserProps {
  name: string;
  avatar_url: string;
  html_url: string;
  login: string;
  followers: number;
  blog: string;
  bio: string;
}

interface IIssueProps {
  title: string;
  body: string;
  html_url: string;
  number: number;
  created_at: Date;
}

interface IGithubContextType {
  user: IUserProps;
  issues: IIssueProps[];
}

interface IGithubProviderProps {
  children: ReactNode;
}

export const GithubContext = createContext({} as IGithubContextType);

export function GithubProvider({ children }: IGithubProviderProps) {
  const [user, setUser] = useState<IUserProps>();
  const [issues, setIssues] = useState<IIssueProps[]>([]);

  async function fetchUser() {
    const response = await api.get('users/ferreira94');

    setUser(response.data);
  }

  async function fetchIssue() {
    const response = await api.get('search/issues', {
      params: { q: 'repo:ferreira94/github-blog' },
    });

    setIssues(response.data.items);
  }

  useEffect(() => {
    fetchUser();
    fetchIssue();
  }, []);

  if (!user) {
    return <h2>Loading</h2>;
  }

  return <GithubContext.Provider value={{ user, issues }}>{children}</GithubContext.Provider>;
}
