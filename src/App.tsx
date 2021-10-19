import React from "react";
import CardPageContainer, {
  CardVariant,
} from "./pages/CardPage/containers/CartPageContainer";

function App() {
  return (
    <CardPageContainer
      width="200px"
      height="200px"
      variant={CardVariant.outlined}
      onClick={(num) => console.log("clicked!!!", num)}
    >
      <button>click me</button>
    </CardPageContainer>
  );
}

export default App;
