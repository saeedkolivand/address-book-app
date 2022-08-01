import React from "react";
import { Image } from "ui-components";
import "./userCard.style.scss";
import { UserCardPropsTypes } from "./userCard.types";

const UserCard: React.FC<UserCardPropsTypes> = (props) => {
  const { picture, name, email, login, onClick, ...rest } = props;

  const handleOnClick = () => {
    if (onClick) {
      onClick({
        picture,
        name,
        email,
        login,
        ...rest,
      });
    }
  };

  return (
    <div
      className="user-card-wrapper flex-center"
      aria-label="user-card-wrapper"
      onClick={handleOnClick}
    >
      <div
        className="user-card-wrapper__picture flex-center"
        aria-label="user-card-wrapper__picture"
      >
        <Image src={picture?.thumbnail} onError={() => "No picture"} />
      </div>

      <div
        className="user-card-wrapper__first-name flex-center"
        aria-label="user-card-wrapper__first-name"
      >
        {name?.first || "-"}
      </div>

      <div
        className="user-card-wrapper__last-name flex-center"
        aria-label="user-card-wrapper__last-name"
      >
        {name?.last || "-"}
      </div>

      <div
        className="user-card-wrapper__username flex-center"
        aria-label="user-card-wrapper__username"
      >
        {login.username || "-"}
      </div>

      <div
        className="user-card-wrapper__email flex-center"
        aria-label="user-card-wrapper__email"
      >
        {email || "-"}
      </div>
    </div>
  );
};

export default UserCard;
