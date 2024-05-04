// Modal.js
import React from 'react';

const Modal = ({ children, show, onClose }) => {
  return (
    <div className={`${show ? "block" : "hidden"} fixed inset-0 bg-black bg-opacity-50 z-50 flex justify-center items-center`}>
      <div className="bg-white rounded-xl p-8">
        <div className="flex justify-between items-center">
          <h1 className="text-lg text-green-500">Add Quiz</h1>
          <button
            onClick={onClose}
            className="hover:bg-red-700 py-1 px-3 bg-red-500 text-white font-semibold rounded-tr-xl"
          >
            X
          </button>
        </div>
        {children}
      </div>
    </div>
  );
};

export default Modal;
