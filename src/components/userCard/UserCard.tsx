import React, { memo } from "react";
import { UserCardPropsTypes } from "./userCard.types";
import "./userCard.style.scss";

const UserCard: React.FC<UserCardPropsTypes> = (props) => {
  const { picture, name, email } = props;

  return (
    <div
      className="user-card-wrapper flex-center"
      aria-label="user-card-wrapper"
    >
      <div className="user-card-wrapper__picture flex-center">
        {picture?.thumbnail || "No picture"}
      </div>
      <div className="user-card-wrapper__first-name flex-center">
        {name?.first || "-"}
      </div>
      <div className="user-card-wrapper__last-name flex-center">
        {name?.last || "-"}
      </div>
      <div className="user-card-wrapper__email flex-center">{email || "-"}</div>
    </div>
  );
};

export default memo(UserCard);
