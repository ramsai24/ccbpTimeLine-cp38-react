// Write your code here

import {AiFillCalendar} from 'react-icons/ai'
import './index.css'

const ProjectTimelineCard = props => {
  const {data} = props
  console.log(data)
  const {projectTitle, projectUrl, imageUrl, description, duration} = data

  return (
    <div>
      <img className="project-img" src={imageUrl} alt={projectTitle} />
      <div>
        <h1>{projectTitle}</h1>
        <div>
          <AiFillCalendar />
          <p>{duration}</p>
        </div>
        <p>{description}</p>
        <a href={projectUrl}>Visit</a>
      </div>
    </div>
  )
}

export default ProjectTimelineCard
