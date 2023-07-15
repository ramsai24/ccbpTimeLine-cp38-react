// Write your code here
import {AiFillClockCircle} from 'react-icons/ai'
import './index.css'

const CourseTimelineCard = props => {
  const {data} = props
  //   console.log(data)
  const {courseTitle, description, duration, tagsList} = data

  return (
    <div>
      <div>
        <h1>{courseTitle}</h1>
        <div>
          <AiFillClockCircle />
          <p>{duration}</p>
        </div>
      </div>
      <p>{description}</p>
      <ul>
        {tagsList.map(item => (
          <p key={item.id}>{item.name}</p>
        ))}
      </ul>
    </div>
  )
}

export default CourseTimelineCard
