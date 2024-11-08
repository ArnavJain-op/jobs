import React, { useState } from "react";

const JobSearchBar = ({ onSearch }) => {
  // State for search input
  const [keywords, setKeywords] = useState("");
  const [selectedCity, setSelectedCity] = useState("");
  const [selectedSalary, setSelectedSalary] = useState("");

  // List of major Indian cities
  const cities = [
    "Mumbai",
    "Delhi",
    "Bengaluru",
    "Hyderabad",
    "Ahmedabad",
    "Chennai",
    "Kolkata",
    "Pune",
    "Jaipur",
    "Surat",
    "Lucknow",
    "Kanpur",
    "Nagpur",
    "Patna",
    "Indore",
    "Bhopal",
    "Vadodara",
    "Ghaziabad",
    "Ludhiana",
    "Agra"
    // Add more cities as needed
  ];

  // List of salary ranges (in INR)
  const salaryRanges = [
    "0 - 3 LPA",
    "3 - 6 LPA",
    "6 - 10 LPA",
    "10 - 15 LPA",
    "15 - 20 LPA",
    "20+ LPA"
  ];

  // Handle form submission
  const handleSearch = () => {
    onSearch({ keywords, city: selectedCity, salaryRange: selectedSalary });
  };

  return (
    <div className="job-search-bar">
      <input
        type="text"
        value={keywords}
        onChange={(e) => setKeywords(e.target.value)}
        placeholder="Enter job title or skills (e.g., JavaScript Developer)"
        className="search-input"
      />

      <select
        value={selectedCity}
        onChange={(e) => setSelectedCity(e.target.value)}
        className="city-select"
      >
        <option value="">Select City</option>
        {cities.map((city) => (
          <option key={city} value={city}>
            {city}
          </option>
        ))}
      </select>

      <select
        value={selectedSalary}
        onChange={(e) => setSelectedSalary(e.target.value)}
        className="salary-select"
      >
        <option value="">Select Salary Range</option>
        {salaryRanges.map((range) => (
          <option key={range} value={range}>
            {range}
          </option>
        ))}
      </select>

      <button onClick={handleSearch} className="search-button">
        Search
      </button>
    </div>
  );
};

export default JobSearchBar;
