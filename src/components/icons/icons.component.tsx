import React from "react";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faThumbTack,
  faLightbulb,
  faBrain,
} from "@fortawesome/free-solid-svg-icons";

interface Props {
  category: string;
}

const Icons: React.FC<Props> = ({ category }) => {
  //This component returns correct icon for note categories
  switch (category) {
    case "Task":
      return <FontAwesomeIcon icon={faThumbTack} />;
    case "Idea":
      return <FontAwesomeIcon icon={faLightbulb} />;
    default:
      return <FontAwesomeIcon icon={faBrain} />;
  }
};

export default Icons;
