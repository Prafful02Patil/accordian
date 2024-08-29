import React, { useState } from 'react';
import Api from './Api';
import './Accordian.css';
import Myaccordian from './Myaccordian';

const Accordian = () => {
  const [data, setData] = useState(Api);

  return (
    <section className="accordian-section">
      <h1>React Interview Questions</h1>
      {data.map((currVal) => (
        <Myaccordian key={currVal.id} {...currVal} />
      ))}
    </section>
  );
};

export default Accordian;
