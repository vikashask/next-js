import { useRouter } from 'next/router';
import Markdown from 'react-markdown';
import Layout from '../../components/MyLayout';

export default () => {
  const router = useRouter();
  return (
    <Layout>
      <h1>{router.query.id}</h1>
      <div className="markdown">
        dsadsd
      </div>
      <style jsx global>{`
        .markdown {
          font-family: 'Arial';
        }

        .markdown a {
          text-decoration: none;
          color: blue;
        }

        .markdown a:hover {
          opacity: 0.6;
        }

        .markdown h3 {
          margin: 0;
          padding: 0;
          text-transform: uppercase;
        }
      `}</style>
    </Layout>
  );
};