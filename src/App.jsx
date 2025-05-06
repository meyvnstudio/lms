import React from "react";
import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { HiH3 } from "react-icons/hi2";
import LandingLayout from "./component/Layout";
import Homepage from "./pages/Homepage";
import HomeCourses from "./pages/Courses";
import HomeCourse from "./pages/Course";
import ErrorPage from "./pages/Error";

const App = () => {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="" element={<LandingLayout />}>
            <Route index element={<Homepage />} />
            <Route path="courses" element={<HomeCourses />} />
            <Route path="course/:id" element={<HomeCourse />} />
            <Route path="*" element={<ErrorPage />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
};

export default App;
