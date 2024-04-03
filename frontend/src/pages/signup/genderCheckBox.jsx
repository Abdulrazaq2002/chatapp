import React from "react";

export default function GenderCheckBox({ onCheckBoxClick, selectedGender }) {
  return (
    <div className='flex'>
      <div className='form-control'>
        <label
          htmlFor=''
          className={`label gap-2 cursor-pointor ${
            selectedGender === "male" ? "selected" : ""
          } `}>
          <span className='label-text'>Male</span>
          <input
            type='checkbox'
            className='checkbox border-slate-900'
            checked={selectedGender === "male"}
            onChange={() => onCheckBoxClick("male")}
          />
        </label>
      </div>
      <div className='form-control'>
        <label
          htmlFor=''
          className={`label gap-2 cursor-pointor ${
            selectedGender === "female" ? "selected" : ""
          } `}>
          <span className='label-text'>Female</span>
          <input
            type='checkbox'
            className='checkbox border-slate-900'
            checked={selectedGender === "female"}
            onChange={() => onCheckBoxClick("female")}
          />
        </label>
      </div>
    </div>
  );
}
