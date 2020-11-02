import React from "react";
import "./App.css";
import { useQuery, gql } from "@apollo/client";

const POST_DATA_QUERY: any = gql`
  {
    posts {
      title
      slug
    }
  }
`;
const App = () => {
  const { loading, error, data } = useQuery(POST_DATA_QUERY);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error :(</p>;

  return data.posts.map(({ title, slug }: any) => (
    <div key={title}>
      <p style={{ color: "green" }}>{title}</p>
      <p style={{ color: "red" }}>{slug}</p>
    </div>
  ));
};

export default App;
