import React, { FC } from "react";

import EventsExample from "../../../commonComponents/EventsExample/EventsExample";
import CardPageContainer, {
  CardVariant,
} from "../../CardPage/containers/CartPageContainer";

const EventsExamplesContainer: FC = () => {
  return (
    <>
      <EventsExample />
      <CardPageContainer
        width="200px"
        height="200px"
        variant={CardVariant.outlined}
        onClick={(num) => console.log("clicked!!!", num)}
      >
        <button>click me</button>
      </CardPageContainer>
    </>
  );
};

export default EventsExamplesContainer;
