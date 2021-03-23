import React from 'react'

const ProjectDetails = (props) => {
  const id = props.match.params.id;
  return (
    <div className="container section project-details">
      <div className="card z-depth-0">
        <div className="card-content">
          <span className="card-title">Project Title - {id}</span>
          <p>Remember when you are creating your layout that all columns must be contained inside a row and that you must add the col class to your inner divs to make them into columns</p>
        </div>
        <div className="card-action grey lighten-4 grey-text">
          <div>Posted by Me</div>
          <div>2nd Sep Jan</div>
        </div>
      </div>
    </div>
  )
}

export default ProjectDetails
