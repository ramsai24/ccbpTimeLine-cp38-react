// Write your code here

import {Chrono} from 'react-chrono'
import CourseTimelineCard from '../CourseTimelineCard'
import ProjectTimelineCard from '../ProjectTimelineCard'
import './index.css'

const TimelineView = props => {
  const {timelineItemsList} = props
  console.log(timelineItemsList)

  const itemsList = timelineItemsList.map(each => ({title: each.title}))
  //   console.log(itemsList)

  const renderSwitch = each => {
    const {categoryId} = each
    console.log(categoryId)
    // console.log(each)
    switch (categoryId) {
      case 'COURSE':
        return <CourseTimelineCard data={each} />
      case 'PROJECT':
        return <ProjectTimelineCard data={each} />
      default:
        return null
    }
  }

  return (
    <div>
      <h1>MY JOURNEY OF</h1>
      <h1>CCBP 4.0</h1>
      <div className="chrono-container">
        <Chrono mode="VERTICAL_ALTERNATING" items={itemsList}>
          {timelineItemsList.map(each => (
            <li key={each.id}>{renderSwitch(each)}</li>
          ))}
        </Chrono>
      </div>
    </div>
  )
}

export default TimelineView
