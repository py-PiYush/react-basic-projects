import React from "react";
import { FiChevronRight, FiChevronLeft } from "react-icons/fi";
import { FaQuoteRight } from "react-icons/fa";

const Card = ({ people, index, setIndex }) => {
  return (
    <div className="section-center">
      {people.map((person, personIndex) => {
        const { id, image, name, title, quote } = person;
        let position = "nextSlide";
        if (personIndex === index) {
          position = "activeSlide";
        }
        if (
          personIndex === index - 1 ||
          (personIndex === people.length - 1 && index === 0)
        ) {
          position = "lastSlide";
        }
        return (
          <article className={position} key={id}>
            <img src={image} alt={name} className="person-img" />
            <h4>{name}</h4>
            <p className="title">{title}</p>
            <p className="text">{quote}</p>
            <FaQuoteRight className="icon" />
          </article>
        );
      })}
      <button
        className="prev"
        onClick={() => {
          index === 0 ? setIndex(people.length - 1) : setIndex(index - 1);
        }}
      >
        <FiChevronLeft />
      </button>
      <button
        className="next"
        onClick={() => {
          index === people.length - 1 ? setIndex(0) : setIndex(index + 1);
        }}
      >
        <FiChevronRight />
      </button>
    </div>
  );
};
export default Card;
