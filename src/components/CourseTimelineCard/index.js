// Write your code here
import {AiFillClockCircle} from 'react-icons/ai'
import './index.css'

const CourseTimelineCard = props => {
  const {courseTitle, description, duration, tagsList} = props

  return (
    <div>
      <div>
        <h1>{courseTitle}</h1>
        <AiFillClockCircle>{duration}</AiFillClockCircle>
      </div>
      <p>{description}</p>
      <ul>
        {tagsList.map(each => (
          <li key={each.id}>{each}</li>
        ))}
      </ul>
    </div>
  )
}

export default CourseTimelineCard
