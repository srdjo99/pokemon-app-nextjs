import { Button } from "@nextui-org/react";
import { NextPage } from "next";

import { Layout } from "../components/layouts";

const HomePage: NextPage = () => {
  return (
    <Layout title="Pokemons List">
      <Button color="gradient">Hola Mundo</Button>
    </Layout>
  );
};

export default HomePage;
