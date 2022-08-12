import { Icon } from 'phosphor-react';
import { useEffect } from 'react';

const commentNodeId = 'comments';

interface IComentsProps {
  id: string;
}

const Comments = ({ id }: IComentsProps): JSX.Element => {
  useEffect(() => {
    const script = document.createElement('script');
    script.src = 'https://utteranc.es/client.js';
    script.async = true;
    script.setAttribute('repo', `Ferreira94/github-blog`);
    script.setAttribute('issue-number', id);
    script.setAttribute('label', 'Comment');
    script.setAttribute('theme', 'dark-blue');
    script.setAttribute('crossorigin', 'anonymous');
    const scriptParentNode = document.getElementById(commentNodeId);
    if (scriptParentNode) {
      scriptParentNode.appendChild(script);
      return () => {
        if (scriptParentNode.firstChild) {
          scriptParentNode.removeChild(scriptParentNode.firstChild);
        }
      };
    }
  }, []);

  return <div id={commentNodeId} />;
};

export default Comments;
