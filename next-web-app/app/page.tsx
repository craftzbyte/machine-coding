"use client";

import React, { useEffect, useRef, useState } from "react";
import { useDebounce } from "./hooks/useDebounce";
const API_URL = "https://en.wikipedia.org";

export default function Page() {
  const [search, setSearch] = useState("");
  const [showResults, setShowResults] = useState(false);
  const skipSearchRef = useRef(true);

  const value = useDebounce(search, 500);
  const [resultData, setResult] = useState([]);

  const handleSearch = async (search_query) => {
    // https://api.duckduckgo.com/?q=your+query&format=json
    const fetch_url = `${API_URL}/w/api.php?action=opensearch&search=${search_query}&format=json&origin=*`;
    const res = await fetch(fetch_url);
    const data = await res.json();
    setResult(data[1] ?? []);
    setShowResults(true);
  };
  const handleSelect = (value) => {
    skipSearchRef.current = false;
    setSearch(value);
    setShowResults(false);
  };
  useEffect(() => {
    if (!value) return;
    if (!skipSearchRef.current) {
      skipSearchRef.current = true;
      return;
    }
    handleSearch(value);
  }, [value]);

  const handleInputChange = (e) => {
    setSearch(e.target.value);
  };
  return (
    <div style={{ display: "flex", justifyContent: "center" }}>
      <div style={{ display: "flex", flexDirection: "column", width: "500px", paddingTop: "40px" }}>
        <input onChange={handleInputChange} value={search} placeholder="Enter your query" />
        {showResults && (
          <div id="suggestion-area" style={{ border: "1px solid red" }}>
            {resultData.map((result, index) => {
              return (
                <div
                  onClick={() => {
                    handleSelect(result);
                  }}
                  key={index}
                >
                  {result}
                </div>
              );
            })}
          </div>
        )}
      </div>
    </div>
  );
}
