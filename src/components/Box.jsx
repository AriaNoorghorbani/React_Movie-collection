import React from "react";

export default function Box({ setIsOpen, isOpen, children }) {
  return (
    <div className="box">
      <button className="btn-toggle" onClick={() => setIsOpen((open) => !open)}>
        {isOpen ? "–" : "+"}
      </button>
      {children}
    </div>
  );
}
