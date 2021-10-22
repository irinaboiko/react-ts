import React, { FC } from "react";
import { IUser } from "../../../types";

interface UserPageProps {
  users: IUser[];
}

const UserPageContainer: FC<UserPageProps> = ({ users }) => {
  return (
    <div>
      {users.map((user) => {
        return (
          <div key={user.id}>
            {user.id}. {user.name} - {user.address.city}
          </div>
        );
      })}
    </div>
  );
};

export default UserPageContainer;
