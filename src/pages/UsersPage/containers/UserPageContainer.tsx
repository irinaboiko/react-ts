import React, { FC, useEffect, useState } from "react";
import { useHistory } from "react-router-dom";
import axios from "axios";

import { IUser } from "../../../types";
import UserItem from "../../../commonComponents/UserItem/UserItem";

const UserPageContainer: FC = () => {
  const [users, setUsers] = useState<IUser[]>([]);
  const history = useHistory();

  useEffect(() => {
    fetchUsers();
  }, []);

  async function fetchUsers() {
    try {
      const response = await axios.get<IUser[]>(
        "https://jsonplaceholder.typicode.com/users"
      );
      setUsers(response.data);
    } catch (error) {
      console.log(error);
    }
  }

  return (
    <div>
      {users.map((user) => (
        <UserItem
          onClick={(user) => {
            history.push(`users/${user.id}`);
          }}
          user={user}
          key={user.id}
        />
      ))}
    </div>
  );
};

export default UserPageContainer;
