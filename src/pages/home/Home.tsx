import React from "react";
import "./home.style.scss";
import Container from "ui-components/container/Container";
import { HomePropsTypes } from "./home.types";
import { useUsersList } from "./home.hooks";

const Home: React.FC<HomePropsTypes> = () => {
  const { data, isLoading } = useUsersList();

  return <Container loading={isLoading}>Home</Container>;
};

export default Home;
