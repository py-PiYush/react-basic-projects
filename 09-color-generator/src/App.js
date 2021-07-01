import React, { useState, useEffect } from "react";
import SingleColor from "./SingleColor";

import Values from "values.js";

function App() {
  const [color, setColor] = useState("");
  const [error, setError] = useState(false);
  const [list, setList] = useState(new Values("#f15025").all(10));
  const [alert, setAlert] = useState(false);
  const [mainColor, setMainColor] = useState("#f15025");
  useEffect(() => {
    const timeout = setTimeout(() => {
      setAlert(false);
    }, 2000);
    return () => clearTimeout(timeout);
  }, [alert]);

  const handleSubmit = (e) => {
    e.preventDefault();
    try {
      let colors = new Values(color).all(10);
      setList(colors);
      setMainColor(color);
    } catch (error) {
      setError(true);
    }
  };
  return (
    <>
      <section className="container">
        <h3>color generator</h3>
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            value={color}
            onChange={(e) => setColor(e.target.value)}
            placeholder="#f15025"
            className={`${error ? "error" : null}`}
          />
          <button type="submit" className="btn">
            submit
          </button>
        </form>
      </section>
      <div className="center">
        <article
          className="color"
          style={{
            background: `${mainColor}`,
            height: "100%",
            width: "250px",
          }}
          onClick={() => {
            setAlert(true);
            navigator.clipboard.writeText(mainColor);
          }}
        >
          Main Color
          <p className="color-value">{mainColor}</p>
          {alert && <p className="alert">copied to clipboard</p>}
        </article>
      </div>
      <section className="colors">
        {list.map((color, index) => {
          return (
            <SingleColor key={index} {...color} index={index} hex={color.hex} />
          );
        })}
      </section>
    </>
  );
}

export default App;
