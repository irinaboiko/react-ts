import React, { FC } from "react";
import { IUser } from "../../../types";
import UserItem from "../../../commonComponents/UserItem/UserItem";

interface UserPageProps {
  users: IUser[];
}

const UserPageContainer: FC<UserPageProps> = ({ users }) => {
  return (
    <div>
      {users.map((user) => (
        <UserItem user={user} key={user.id} />
      ))}
    </div>
  );
};

export default UserPageContainer;
