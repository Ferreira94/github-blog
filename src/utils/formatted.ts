import { formatDistanceToNow } from 'date-fns';
import ptBR from 'date-fns/locale/pt-BR';

export function dateFormatter(date: Date) {
  const dateFormatted = formatDistanceToNow(new Date(date), {
    addSuffix: true,
    locale: ptBR,
  });

  return dateFormatted;
}
