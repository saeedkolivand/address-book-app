import React, { memo } from "react";
import Image from "ui-components/image/Image";
import { UserCardPropsTypes } from "./userCard.types";
import "./userCard.style.scss";

const UserCard: React.FC<UserCardPropsTypes> = (props) => {
  const { picture, name, email, login } = props;

  return (
    <div
      className="user-card-wrapper flex-center"
      aria-label="user-card-wrapper"
    >
      <div className="user-card-wrapper__picture flex-center">
        <Image src={picture?.thumbnail} onError={() => "No picture"} />
      </div>

      <div className="user-card-wrapper__first-name flex-center">
        {name?.first || "-"}
      </div>

      <div className="user-card-wrapper__last-name flex-center">
        {name?.last || "-"}
      </div>

      <div className="user-card-wrapper__last-name flex-center">
        {login.username || "-"}
      </div>

      <div className="user-card-wrapper__email flex-center">{email || "-"}</div>
    </div>
  );
};

export default memo(UserCard);
