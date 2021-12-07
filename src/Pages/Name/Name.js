import React from "react";
import MultipleSelect from "../../components/multiSelect/MultipleSelect";

const Name = () => {
  const names = [
    "Oliver Hansen",
    "Van Henry",
    "April Tucker",
    "Ralph Hubbard",
    "Omar Alexander",
    "Carlos Abbott",
    "Miriam Wagner",
    "Bradley Wilkerson",
    "Virginia Andrews",
    "Kelly Snyder",
  ];
  return (
    <div>
      <MultipleSelect names={names} Name=" Name" />
    </div>
  );
};

export default Name;
