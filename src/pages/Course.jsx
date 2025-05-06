import React from "react";
import { useParams } from "react-router-dom";

const HomeCourse = () => {
  const id = useParams();

  return (
    <>
      <div className="course-page">single course </div>
    </>
  );
};

export default HomeCourse;
