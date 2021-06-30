import React, { useState, useEffect } from "react";
import Card from "./Card";
import data from "./data";
function App() {
  const [people, setPeople] = useState(data);
  const [index, setIndex] = useState(0);
  useEffect(() => {
    let slider = setInterval(() => {
      index === people.length - 1 ? setIndex(0) : setIndex(index + 1);
    }, 3000);
    return () => {
      clearInterval(slider);
    };
  }, [index, people.length]);
  return (
    <section className="section">
      <div className="title">
        <h2>
          <span>/</span>reviews
        </h2>
      </div>
      <Card people={people} index={index} setIndex={setIndex} />
    </section>
  );
}
export default App;
