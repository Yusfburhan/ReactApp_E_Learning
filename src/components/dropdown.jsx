import React, { useState } from "react";

const Dropdown = (props) => {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedOption, setSelectedOption] = useState(null);
  const [selectedname, setSelectedname] = useState(null);

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  const handleOptionClick = (id, name) => {
    setSelectedOption(id);
    setSelectedname(name);
    setIsOpen(false);
    // Call the callback function with the selected value
    props.onSelect(id, name);
  };

  return (
    <div className="flex flex-col w-full mb-10">
      <button
        id="dropdownDelayButton"
        onClick={toggleDropdown}
        className="text-center border-b-4 focus:outline  focus:ring-4 focus:outline-none  font-medium rounded-lg text-sm px-5 py-2.5  inline-flex items-center "
        type="button"
      >
        {selectedname ? selectedname : "Select an option"}{" "}
        <svg
          className="w-2.5 h-2.5 ms-3"
          aria-hidden="true"
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 10 6"
        >
          <path
            stroke="currentColor"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="m1 1 4 4 4-4"
          />
        </svg>
      </button>

      {isOpen && (
        <div
          id="dropdownDelay"
          className="z-10 bg-white divide-y divide-gray-100 rounded-lg shadow  dark:bg-gray-700 w-full"
        >
          <ul
            className="py-2 text-sm text-gray-700 dark:text-gray-200 h-32 overflow-y-auto"
            aria-labelledby="dropdownDelayButton"
          >
            {props.data &&
              Array.isArray(props.data.categories) &&
              props.data.categories.map((items) => (
                <li
                  key={items.id}
                  onClick={() => handleOptionClick(items.id, items.name)}
                  className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                >
                  {items.name}
                </li>
              ))}
          </ul>
        </div>
      )}
    </div>
  );
};

export default Dropdown;
