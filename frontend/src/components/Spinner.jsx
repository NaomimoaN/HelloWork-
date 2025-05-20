import React from "react";
import { ClipLoader } from "react-spinners";

const Spinner = ({ loading }) => {
  return (
    <div className="flex justify-center items-center py-4">
      <ClipLoader color="#4338ca" loading={loading} size={100} margin={2} />
    </div>
  );
};

export default Spinner;
