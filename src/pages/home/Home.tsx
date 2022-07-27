import React from "react";
import "./home.style.scss";
import Container from "ui-components/container/Container";
import UsersList from "components/usersList/UsersList";
import { HomePropsTypes } from "./home.types";
import { useUsersList } from "./home.hooks";

const Home: React.FC<HomePropsTypes> = () => {
  const { data, isLoading, error, isError } = useUsersList();

  return (
    <Container
      loading={isLoading}
      hasError={isError}
      errorMessage={
        error instanceof Error
          ? error.response?.data.error
          : "Something went wrong"
      }
    >
      <UsersList
        usersList={data?.data.results}
        headerItems={[
          "Picture",
          "First Name",
          "Last Name",
          "Username",
          "Email",
        ]}
      />
    </Container>
  );
};

export default Home;
