import { useParams } from 'react-router-dom';

export default function BlogPost() {
  const { slug } = useParams();
  return <h2>Blog Post: {slug}</h2>;
}
