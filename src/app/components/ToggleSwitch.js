import React from 'react'

function ToggleSwitch({ id, label, checked, onChange }) {
  return (
  <>
  <div className="form-check form-switch">
      <input
        className="form-check-input"
        type="checkbox"
        id={id}
        checked={checked}
        onChange={onChange}
      />
      <label className="form-check-label" htmlFor={id}>
        {label}
      </label>
    </div>
  </>
  )
}

export default ToggleSwitch
