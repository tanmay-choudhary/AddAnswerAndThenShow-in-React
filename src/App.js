import logo from "./logo.svg";
import "./App.css";
import React from "react";
import { useState } from "react";

function App() {
  const [count, setCount] = useState(1);
  const [data, setData] = useState("");
  const [answer, setAns] = useState([]);
  const handleChange = () => {
    setCount(function (prevcount) {
      return prevcount + 1;
    });
    setData("");
    let currentAns = {
      id: count,
      data: data,
    };
    setAns([...answer, currentAns]);
  };

  return (
    <div>
      {count <= 3 ? (
        <div className="flex">
          <div className="ml-5">
            <p>Question no. {count}?</p>
          </div>
          <div>
            <input
              value={data}
              type="text"
              name="data"
              onChange={(event) => {
                setData(event.target.value);
              }}
              align="left"
            />
            <button
              className="bg-green-500 rounded h-10 w-16 "
              onClick={handleChange}
            >
              next
            </button>
          </div>
        </div>
      ) : (
        <ul>
          {answer.map((ans) => {
            return <li key={ans.id}>{ans.data}</li>;
          })}
        </ul>
      )}
    </div>
  );
}

export default App;
