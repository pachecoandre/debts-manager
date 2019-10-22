import React from 'react'

const Dropdown = (props) => (
  <div>
    <select name={props.inputName}>
      {
        props.customers.map((item, index) => (
          <option key={index} value={item}>{item}</option>
        ))
      }
    </select>
  </div>
)

export default Dropdown