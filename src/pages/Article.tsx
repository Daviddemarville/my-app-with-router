
import { useLoaderData } from "react-router";

type Data = {
  title: string;
  content: string;
}

const allData = [
  {
    id: 1,
    title: "Lorem Ipsum",
    content: "Lorem ipsum dolor sit amet",
  },
  {
    id: 2,
    title: "Schnapsum",
    content: "Lorem Elsass ipsum Salut bisamme",
  },
  {
    id: 3,
    title: "Cupcake Ipsum",
    content: "Tiramisu pastry wafer brownie soufflé",
  },
];



const getSomeData = (id: number) => {
  return allData.find((article) => article.id === id) as Data | null;
};

// router creation

const router = createBrowserRouter([
  {
    element: <App />,
    children: [
      // ...
      {
        path: "/articles/:id",
        element: <Article />,
        loader: ({ params }) => {
          const idAsInt = parseInt(params.id ?? "0");

          return getSomeData(idAsInt);
        },
      },
    ],
  },
]);

function Article() {
  const data = useLoaderData() as Data;

  return (
    <article>
      <h1>{data.title}</h1>
      <p>{data.content}</p>
    </article>
  );
}

export default Article;