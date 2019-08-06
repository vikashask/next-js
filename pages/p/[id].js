import Layout from '../../components/MyLayout';
import fetch from 'isomorphic-unfetch';

const Post = props => (
  <Layout>
    <h1>{props.data.firstName}</h1>
    <p>{props.data.lastName} Age of {props.data.age}</p>
  </Layout>
);

Post.getInitialProps = async function(context) {
  const { id } = context.query;
  const res = await fetch(`http://localhost:8080/userbyid/${id}`);
  const show = await res.json();
  let data = show.data;
  console.log(`Fetched show: ${data.email}`);

  return { data };
};

export default Post;