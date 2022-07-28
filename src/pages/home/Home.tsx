import React, { ChangeEvent, useState } from "react";
import "./home.style.scss";
import { Container, Divider, Input } from "ui-components";
import UsersList from "components/usersList/UsersList";
import useDebounce from "app/hooks/UseDebounce";
import { HomePropsTypes } from "./home.types";
import { useFilterUsersList, useUsersList } from "./home.hooks";

const Home: React.FC<HomePropsTypes> = () => {
  const [searchValue, setSearchValue] = useState("");

  const debouncedValue = useDebounce(searchValue, 500);
  const { data, isLoading, error, isError } = useUsersList({
    page: 1,
    results: 10,
    inc: "name,nat,email,picture,login,cell",
  });
  const [filteredResult] = useFilterUsersList(
    data?.data.results!,
    debouncedValue
  );

  const handleSearchValue = (event: ChangeEvent<HTMLInputElement>) =>
    setSearchValue(event.target.value);

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
      <Input
        value={searchValue}
        onChange={handleSearchValue}
        placeholder="Search Users..."
      />

      <Divider />

      <UsersList
        usersList={filteredResult || data?.data.results}
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
