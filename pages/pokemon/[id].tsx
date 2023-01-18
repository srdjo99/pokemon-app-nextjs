import { GetStaticPaths, GetStaticProps, NextPage } from "next";
import { pokeApi } from "../../api";
import { Layout } from "../../components/layouts";
import { Pokemon } from "../../interfaces";

interface Props {
  id: string;
  name: string;
}

const PokemonPage: NextPage<{ pokemon: Pokemon }> = ({ pokemon }) => {
  return (
    <Layout title="Some pokemon">
      <h1>{pokemon.name}</h1>
    </Layout>
  );
};

export const getStaticPaths: GetStaticPaths = async () => {
  const pokemons151 = [...Array(151)].map((_, index) => `${index + 1}`);

  return {
    paths: pokemons151.map((id) => ({
      params: { id },
    })),
    fallback: false,
  };
};

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const { id } = params as { id: string };

  const { data: pokemon } = await pokeApi.get<Pokemon>(`/pokemon/${id}`);

  console.log(pokemon, "pokemon");

  return {
    props: {
      pokemon,
    },
  };
};

export default PokemonPage;
