import React from 'react';

function SelectField(props){
  return(
    <select onChange={props.onChange} value={props.value}>
    <option value=""> All </option>
    <option value="Drama"> Drama </option>
    <option value="Action"> Action </option>
    <option value="Crime"> Crime </option>
    <option value="Adventure"> Adventure </option>
    </select>
  );
}

export default SelectField;