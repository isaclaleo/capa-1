import React from "react";
import Palindromo from "../../../exercises/exercise1/exercese1";
import { Link } from "react-router-dom";

function exercese1PAge() {

  return (
    <div className="">
      <Palindromo />
      <div className="">
          <Link to="/">
            Back to home
          </Link>
      </div>
    </div>
  )
}

export default exercese1PAge;