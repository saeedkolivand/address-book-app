import React from "react";
import { Divider } from "ui-components";
import { UsersListPropsTypes } from "./usersList.types";
import UserCard from "../userCard/UserCard";
import "./usersList.style.scss";

const UsersList: React.FC<UsersListPropsTypes> = (props) => {
  const { usersList, headerItems } = props;

  return (
    <div className="users-list-wrapper">
      <div className="users-list-wrapper__header flex-center">
        {headerItems.map((item) => (
          <div
            className="users-list-wrapper__header--item flex-center"
            key={item}
          >
            {item}
          </div>
        ))}
      </div>

      <Divider />

      {usersList
        ? usersList.map((item) => <UserCard {...item} key={item.cell} />)
        : ""}
    </div>
  );
};

export default UsersList;
