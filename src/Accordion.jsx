import React, { useState } from "react";
import "./index.css";
import { FaBeer } from 'react-icons/fa';

class Question extends React.Component {
  render() {
    return <h3> Lets go for a <FaBeer />? </h3>
  }
}

import { FaAngleUp } from "react-icons/fa6";
import { FaAngleLeft } from "react-icons/fa6";
const Accordion = () => {
  const [data,setData] = useState([
    { title: "Stage 1", content: "This belongs to Stage 1" },
    { title: "Stage 2", content: "This belongs to Stage 2" },
    { title: "Stage 3", content: "This belongs to Stage 3" },
  ]);

  const [display, setdisplay] = useState(null);

  const toggle = (index) => {
    setdisplay(display === index ? null : index);
  };

  return (
    <div className="accordion-container">
      {data.map((item, index) => (
        <div className="accordion-item" key={index}>
          
          <h3 className="accordion-title" onClick={() => toggle(index)}>
            {item.title}
            <span className="arrow">{display === index ? <FaAngleUp /> : <FaAngleLeft />}</span>
          </h3>

          {display === index && (
            <p className="accordion-content">{item.content}</p>
          )}

          {index !== data.length - 1 && <div className="divider"></div>}
        </div>
      ))}
    </div>
  );
};

export default Accordion;

