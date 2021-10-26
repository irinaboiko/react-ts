import React, { FC } from "react";
import { IUser } from "../../types";

interface UserItemProps {
  user: IUser;
  onClick: (user: IUser) => void;
}

const UserItem: FC<UserItemProps> = ({ user, onClick }) => {
  return (
    <div onClick={() => onClick(user)} style={{ cursor: "pointer" }}>
      {user.id}. {user.name} - {user.address.city}
    </div>
  );
};

export default UserItem;
