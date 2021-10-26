import React, { FC, useEffect, useState } from "react";
import axios from "axios";
import { useHistory, useParams } from "react-router-dom";

import { IUser } from "../../../types";

interface UserDetailsParams {
  id: string;
}

const UserDetailsContainer: FC = () => {
  const [user, setUser] = useState<IUser | null>(null);
  const params = useParams<UserDetailsParams>();
  const history = useHistory();

  useEffect(() => {
    fetchUser();
  }, []);

  async function fetchUser() {
    try {
      const response = await axios.get<IUser>(
        `https://jsonplaceholder.typicode.com/users/${params.id}`
      );
      setUser(response.data);
    } catch (error) {
      console.log(error);
    }
  }

  return (
    <div>
      <button onClick={() => history.goBack()}>Back</button>
      {user ? (
        <>
          <h3>{user.name}</h3>
          <p>email: {user.email}</p>
          <p>
            Address: {user.address.zipcode} {user.address.street}{" "}
            {user.address.city}
          </p>
        </>
      ) : (
        <h4>User's not found</h4>
      )}
    </div>
  );
};

export default UserDetailsContainer;
