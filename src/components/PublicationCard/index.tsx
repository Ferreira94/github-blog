import ReactMarkdown from 'react-markdown';

import { PublicationCardContainer } from './style';

interface IPrublicationCard {
  title: string;
  text: string;
  created_at: Date;
}

export function PublicationCard({ title, text, created_at }: IPrublicationCard) {
  return (
    <PublicationCardContainer to="/post">
      <div>
        <h4>{title}</h4>
        <span>Há 1 dia</span>
      </div>

      <ReactMarkdown>{text}</ReactMarkdown>
    </PublicationCardContainer>
  );
}
