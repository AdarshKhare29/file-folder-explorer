import React, { useState } from "react";
import json from "../../data.json";
import "../App.css";
import List from "./list";
const HomePage = () => {
  const [data, setData] = useState(json);
  return (
    <div>
      File\Folder Explorer
      <List list={data} />
    </div>
  );
};
export default HomePage;
