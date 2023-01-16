import { Button } from "@nextui-org/react";
import { NextPage, GetStaticProps } from "next";
import { pokeApi } from "../api";

import { Layout } from "../components/layouts";
import { PokemonListResponse } from "../interfaces";

const HomePage: NextPage = (props) => {
  console.log(props);

  return (
    <Layout title="Pokemons List">
      <Button color="gradient">Hola Mundo</Button>
    </Layout>
  );
};

export const getStaticProps: GetStaticProps = async (ctx) => {
  const { data } = await pokeApi.get<PokemonListResponse>("/pokemon?limit=151");

  return {
    props: {
      pokemons: data.results,
    },
  };
};

export default HomePage;
