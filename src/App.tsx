import "./styles.css";
import React, { useEffect } from "react";
import useSWR, { SWRConfig } from "swr";
import Loading from "./Loading";
import Error from "./Error";
import { getPokemonById } from "./Fetcher";

export default function App() {
  const { data, error } = useSWR("1", getPokemonById);

  useEffect(() => {
    console.log(data);
  }, [data, error]);

  if (!data) {
    return <Loading />;
  }

  if (error) {
    return <Error error={error} />;
  }

  const { name, sprites } = data;

  return (
    <div className="App">
      <h2>{name}</h2>
      <img src={sprites.front_default} alt={name} />
    </div>
  );
}
