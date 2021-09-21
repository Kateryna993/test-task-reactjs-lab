import React, { useState, useRef, useEffect } from "react";
import "./DropdownFilter.css";

export default function DropdownFilter({ options, prompt, value, onChange }) {
  const [open, setOpen] = useState(false);
  const [chosenOption, setChosenOption] = useState("");
  const ref = useRef(null);

  const option = options.map((option) => option.adress);
  // const states = option.map((address) => address.state);
  // const state = states.map((state) => state);
  // console.log(...state);

  useEffect(() => {
    document.addEventListener("click", onCLoseDropdown);
    return () => document.removeEventListener("click", onCLoseDropdown);
  }, []);

  function onCLoseDropdown(e) {
    setOpen(e && e.target === ref.current);
  }

  return (
    <div className="dropdown">
      <div className="control" onClick={() => setOpen((prev) => !prev)}>
        <div className="selected-value" ref={ref}>
          {value ? value.state : prompt}
        </div>
        <div className={`arrow ${open ? "open" : null}`}></div>
      </div>
      <div className={`options ${open ? "open" : null}`}>
        {option.map((address, index) => (
          <div
            className={`option ${chosenOption === option ? "selected" : null}`}
            key={address.zip}
            onClick={(e) => {
              onChange(() => setChosenOption(e.target.value));
              setOpen(false);
            }}
          >
            {address.state}
          </div>
        ))}
      </div>
    </div>
  );
}
