import React, { useState } from "react";
import CardPageContainer, {
  CardVariant,
} from "./pages/CardPage/containers/CartPageContainer";
import UserPageContainer from "./pages/UserPage/containers/UserPageContainer";
import { IUser } from "./types";

function App() {
  const [users, setUsers] = useState<IUser[]>([]);

  return (
    <>
      <CardPageContainer
        width="200px"
        height="200px"
        variant={CardVariant.outlined}
        onClick={(num) => console.log("clicked!!!", num)}
      >
        <button>click me</button>
      </CardPageContainer>
      <UserPageContainer users={users} />
    </>
  );
}

export default App;
