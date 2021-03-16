import React from 'react';

const PotentialJob = props => {
  const {company, salary, description, source, title} = props.data;

  return(
    <div className='PotentialJobCard'>
      <p><u>Company</u>: {company}</p>
      <p><u>Job Title</u>: {title}</p>
      <p><u>Link to Listing</u>: <a href={`https://www.${source}`}>{source}</a></p>
      <p><u>Salary</u>: {salary}</p>
      <p><u>Description</u>: {description}</p>
      <input type="checkbox" name="approved" id={props.id} onChange={props.onChange} />
    </div>
  )
}

export default PotentialJob;
