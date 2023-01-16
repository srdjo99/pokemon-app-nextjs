import { FC, ReactNode } from "react";

import Head from "next/head";

interface Props {
  children: ReactNode;
  title?: string;
}

export const Layout: FC<Props> = ({ children, title = "Pokemon App" }) => {
  return (
    <>
      <Head>
        <title>{title}</title>
        <meta name="author" content="Srdjan Coralic" />
        <meta
          name="description"
          content="Basic information about Pokemons xxxxxx"
        />
        <meta name="keywords" content="XXX, pokemon, pokedex" />
      </Head>

      {/* Navbar */}

      <main>{children}</main>
    </>
  );
};
