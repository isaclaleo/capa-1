import React from "react";
import PositiveInteger from "../../../exercises/exercise4/exercise4";
import { Link } from "react-router-dom";

function exercese3Page() {
  return (
    <div className="">
      <PositiveInteger />
      <div className="">
          <Link to="/">
            Back to home
          </Link>
      </div>
    </div>
  )
}

export default exercese3Page;