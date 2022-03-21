import React from "react";
import {
  Route,
  BrowserRouter as Router,
  Routes
} from "react-router-dom";
import { NavBar } from "../components/ui/NavBar";
import { CountryScreen } from "./../components/countries/CountryScreen";
import { DashbourdRoutes } from "./DashbourdRoutes";

export const AppRoutes = () => {
  
  return (
    <Router>
      
      
      <NavBar />
      <Routes>
     
        <Route  path="/" element={<CountryScreen />} />
        <Route  path="/*" element={<DashbourdRoutes />} />
      </Routes>
    </Router>
  );
};
