// Write your code here
import {AiFillClockCircle} from 'react-icons/ai'
import './index.css'

const CourseTimelineCard = props => {
  const {data} = props
  console.log(data)
  const {courseTitle, description, duration, tagsList} = data

  return (
    <div>
      <div>
        <h1>{courseTitle}</h1>
        <AiFillClockCircle>{duration}</AiFillClockCircle>
      </div>
      <p>{description}</p>
      <ul>
        {tagsList.map(item => (
          <li key={item.id}>{item.name}</li>
        ))}
      </ul>
    </div>
  )
}

export default CourseTimelineCard
