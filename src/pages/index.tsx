
import { useEffect } from 'react';
import { useHistory } from '@docusaurus/router';

export default function Home() {
  const history = useHistory();
  useEffect(() => {
    history.replace('/docs/introduction/What is Mokshya AI');
  }, [history]);
  return null;
}
