import React, { useEffect, useMemo, useState } from "react";
import "./usersList.style.scss";
import { Divider } from "ui-components";
import InfiniteScroll from "react-infinite-scroll-component";
import { UsersDto } from "pages/home/home.types";
import { UsersListPropsTypes } from "./usersList.types";
import UserCard from "../userCard/UserCard";

const UsersList: React.FC<UsersListPropsTypes> = (props) => {
  const {
    usersList = [],
    headerItems,
    onUpdatePageNumber,
    isFirstPage,
    isFilterActive,
  } = props;

  const [list, setList] = useState<UsersDto[]>([]);

  useEffect(() => {
    if (usersList.length && !isFirstPage) {
      return setList((prevState) => [...new Set([...prevState, ...usersList])]);
    }

    if (usersList.length && isFirstPage) setList(usersList);
  }, [usersList]);

  const renderListHeader = useMemo(
    () =>
      headerItems.map((item) => (
        <div
          className="users-list-wrapper__header--item flex-center"
          key={item}
        >
          {item}
        </div>
      )),
    []
  );

  return (
    <div className="users-list-wrapper">
      <div className="users-list-wrapper__header flex-center">
        {renderListHeader}
      </div>

      <Divider />

      <InfiniteScroll
        dataLength={list?.length}
        next={onUpdatePageNumber}
        loader={
          <div className="flex-center">
            {isFilterActive ? "" : "Loading Users"}
          </div>
        }
        hasMore={!isFilterActive}
      >
        {list?.map((item) => (
          <UserCard {...item} key={item.login.uuid} />
        ))}
      </InfiniteScroll>
    </div>
  );
};

export default UsersList;
