import React, { useState, useEffect } from "react";
import "./App.css";
import { Select, Input } from "antd";
import axios from "axios";
import "bootstrap/dist/css/bootstrap.min.css";
import ForestCardView from "./components/ForestCardView";

function App() {
  const { Option } = Select;
  const { Search } = Input;
  const [forestList, setForestCard] = useState([{}]);
  const [foundForests, setFoundForests] = useState(forestList);
  const apiUrlBase = "http://localhost:8000/api/";
  const conservation = "conservation";
  const reforestation = "reforestation";

  // the value of the search field
  const [name, setName] = useState("");

  function getAllForests() {
    axios.get(apiUrlBase + "forests").then((res) => {
      setForestCard(res.data);
      setFoundForests(res.data);
    });
  }

  // Read all forests
  useEffect(() => {
    getAllForests();
  }, []);

  //filter by forest type
  function handleChange(value) {
    if (value === conservation || value === reforestation) {
      axios.get(apiUrlBase + "forests/" + value).then((res) => {
        setFoundForests(res.data);
      });
    } else {
      getAllForests();
    }
  }

  //search by name
  const filter = (e) => {
    const keyword = e.target.value;

    if (keyword !== "") {
      const results = forestList.filter((user) => {
        // Use the toLowerCase() method to make it case-insensitive
        return user.name.toLowerCase().startsWith(keyword.toLowerCase());
      });
      setFoundForests(results);
    } else {
      // If the text field is empty, show all forests
      setFoundForests(forestList);
    }

    setName(keyword);
  };

  return (
    <div data-testid="app" className="app">
      <Search
        className="search"
        data-testid="search"
        defaultValue=""
        placeholder="Search by forest name"
        value={name}
        allowClear
        onChange={filter}
      />
      <Select
        className="filter"
        placeholder="Forest Type"
        onChange={handleChange}
      >
        <Option value="all">All</Option>
        <Option value={conservation}>Conservation</Option>
        <Option value={reforestation}>Reforestation</Option>
      </Select>
      <ForestCardView forestList={foundForests} />
    </div>
  );
}

export default App;
