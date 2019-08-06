import Layout from '../components/MyLayout.js';

const indexPageContent = <div>
    <p>Hello Next.js</p>
  </div>;

export default function Index() {
  return <Layout content={indexPageContent} />;
}