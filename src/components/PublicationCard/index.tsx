import ReactMarkdown from 'react-markdown';
import { formatDistanceToNow } from 'date-fns';
import ptBR from 'date-fns/locale/pt-BR';

import { PublicationCardContainer } from './style';

interface IPrublicationCard {
  id: number;
  title: string;
  text: string;
  created_at: Date;
}

export function PublicationCard({ title, text, id, created_at }: IPrublicationCard) {
  return (
    <PublicationCardContainer to={`/post/${id}`}>
      <div>
        <h4>{title}</h4>
        <span>
          {formatDistanceToNow(new Date(created_at), {
            addSuffix: true,
            locale: ptBR,
          })}
        </span>
      </div>

      <ReactMarkdown>{text}</ReactMarkdown>
    </PublicationCardContainer>
  );
}
