import { useParams } from "react-router";

function Article() {
  const { id } = useParams();

  return <h1>Hello from Article {id}</h1>;
}

export default Article;