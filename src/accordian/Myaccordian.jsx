import React, { useState } from 'react';

const Myaccordian = ({ question, answer }) => {
  const [show, setShow] = useState(false);

  return (
    <div className="card">
      <div className="main-heading" onClick={() => setShow(!show)}>
        <p>{show ? "➖" : "➕"}</p>
        <h3>{question}</h3>
      </div>
      {show && <p className="answer">{answer}</p>}
    </div>
  );
};

export default Myaccordian;
