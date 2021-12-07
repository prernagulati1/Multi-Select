import React from "react";
import MultipleSelect from "../../components/multiSelect/MultipleSelect";

const City = () => {
  const names = ["New York", "Chicago", "Houston", "San Diego", "Los Angeles"];
  return (
    <div>
      <MultipleSelect names={names} Name="City" />
    </div>
  );
};

export default City;
