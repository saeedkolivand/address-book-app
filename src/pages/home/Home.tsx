import React, { ChangeEvent, useState } from "react";
import "./home.style.scss";
import { Container, Divider, Input } from "ui-components";
import UsersList from "components/usersList/UsersList";
import useDebounce from "app/hooks/useDebounce";
import { HomePropsTypes } from "./home.types";
import { useFilterUsersList, useUsersList } from "./home.hooks";

const Home: React.FC<HomePropsTypes> = () => {
  const [searchValue, setSearchValue] = useState("");
  const [pageNumber, setPageNumber] = useState(1);

  const debouncedValue = useDebounce(searchValue, 500);

  const { data, isLoading, error, isError } = useUsersList({
    page: pageNumber,
    results: 50,
    inc: "name,nat,email,picture,login",
  });

  const { filterResult } = useFilterUsersList(
    data?.data.results!,
    debouncedValue
  );

  console.log(data?.data.results);

  const handleUpdatePageNumber = () =>
    setPageNumber((prevState) => prevState + 1);

  const handleSearchValue = (event: ChangeEvent<HTMLInputElement>) =>
    setSearchValue(event.target.value);

  const handleClearSearchValue = () => setSearchValue("");

  return (
    <Container
      loading={isLoading}
      hasError={isError}
      errorMessage={
        error instanceof Error
          ? error.response?.data.error
          : "Something went wrong"
      }
      className="home-wrapper"
    >
      <section className="home-wrapper__search absolute-center">
        <Input
          value={searchValue}
          onClear={handleClearSearchValue}
          onChange={handleSearchValue}
          placeholder="Search Users..."
          style={{
            border: (filterResult?.length > 0 && "1px solid #38C775") || "",
          }}
        />

        <Divider />
      </section>

      <section className="home-wrapper__users-list">
        <UsersList
          headerItems={[
            "Picture",
            "First Name",
            "Last Name",
            "Username",
            "Email",
          ]}
          usersList={filterResult?.length ? filterResult : data?.data.results}
          onUpdatePageNumber={handleUpdatePageNumber}
          isFirstPage={pageNumber === 1 || filterResult?.length > 0}
        />
      </section>
    </Container>
  );
};

export default Home;
