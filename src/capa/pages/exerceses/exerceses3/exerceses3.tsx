import React from "react";
import TargetNums from "../../../exercises/exercise3/exercise3";
import { Link } from "react-router-dom";

function exercese3Page() {
  return (
    <div className="">
      <TargetNums />
      <div className="">
          <Link to="/">
            Back to home
          </Link>
      </div>
    </div>
  )
}

export default exercese3Page;