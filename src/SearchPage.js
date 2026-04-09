import React from "react";
import { useLocation } from "react-router-dom";

const SearchPage = () => {
  const query = new URLSearchParams(useLocation().search).get("q");

  return (
    <div style={{padding:"100px 20px"}}>
      <h2>Search Results for: {query}</h2>

      {/* 👉 You can filter pages here */}
      <p>Show related treatments, doctors, or services...</p>
    </div>
  );
};

export default SearchPage;