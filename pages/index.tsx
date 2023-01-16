import { Button } from "@nextui-org/react";
import { NextPage, GetStaticProps } from "next";

import { Layout } from "../components/layouts";

const HomePage: NextPage = (props) => {
  console.log(props);

  return (
    <Layout title="Pokemons List">
      <Button color="gradient">Hola Mundo</Button>
    </Layout>
  );
};

export const getStaticProps: GetStaticProps = async (ctx) => {
  console.log("Hola Mundo");

  return {
    props: {},
  };
};

export default HomePage;
