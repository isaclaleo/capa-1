import React from "react";
import StrictlyIncreasingOrder from "../../../exercises/exercise2/exercise2";
import { Link } from "react-router-dom";

function exercese2Page() {
  return (
    <div className="">
      <StrictlyIncreasingOrder />
      <div className="">
          <Link to="/">
            Back to home
          </Link>
      </div>
    </div>
  )
}

export default exercese2Page;