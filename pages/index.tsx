import { Button } from "@nextui-org/react";
import Image from "next/image";
import { NextPage, GetStaticProps } from "next";
import { pokeApi } from "../api";

import { Layout } from "../components/layouts";
import { PokemonListResponse, SmallPokemon } from "../interfaces";

interface Props {
  pokemons: SmallPokemon[];
}

const HomePage: NextPage<Props> = ({ pokemons }) => {
  return (
    <Layout title="Pokemons List">
      <ul>
        {pokemons.map(({ id, name, image }) => (
          <li key={id}>
            <span>
              #{id} - {name}
            </span>
            <Image src={image} height={60} width={60} alt="pokemon image" />
          </li>
        ))}
      </ul>
    </Layout>
  );
};

export const getStaticProps: GetStaticProps = async (ctx) => {
  const { data } = await pokeApi.get<PokemonListResponse>("/pokemon?limit=151");

  const pokemons: SmallPokemon[] = data.results.map((pokemon, index) => ({
    ...pokemon,
    id: index + 1,
    image: `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/${
      index + 1
    }.svg`,
  }));

  return {
    props: {
      pokemons,
    },
  };
};

export default HomePage;
