import React from "react";
import { UsersListPropsTypes } from "./usersList.types";
import UserCard from "../userCard/UserCard";

const UsersList: React.FC<UsersListPropsTypes> = (props) => {
  const { usersList } = props;

  return (
    <>
      {usersList
        ? usersList.map((item) => <UserCard {...item} key={item.cell} />)
        : "Not found"}
    </>
  );
};

export default UsersList;
