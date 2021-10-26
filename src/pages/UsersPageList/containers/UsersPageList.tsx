import React, { FC, useEffect, useState } from "react";
import axios from "axios";

import UserItem from "../../../commonComponents/UserItem/UserItem";
import List from "../../../commonComponents/List/List";
import { IUser } from "../../../types";
import { useHistory } from "react-router-dom";

const UsersPageList: FC = () => {
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
    <List
      items={users}
      renderItems={(user: IUser) => (
        <UserItem
          onClick={(user) => {
            history.push(`users/${user.id}`);
          }}
          user={user}
          key={user.id}
        />
      )}
    />
  );
};

export default UsersPageList;
