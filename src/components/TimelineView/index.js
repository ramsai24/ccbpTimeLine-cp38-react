// Write your code here

import {Chrono} from 'react-chrono'
import CourseTimelineCard from '../CourseTimelineCard'
import ProjectTimelineCard from '../ProjectTimelineCard'
import './index.css'

const TimelineView = props => {
  const {timelineItemsList} = props
  console.log(timelineItemsList)

  const renderSwitch = each => {
    const {categoryId} = each
    console.log(categoryId)
    switch (categoryId) {
      case 'COURSE':
        return <CourseTimelineCard />
      case 'PROJECT':
        return <ProjectTimelineCard />
      default:
        return null
    }
  }

  return (
    <div>
      <h1>MY JOURNEY OF</h1>
      <h1>CCBP 4.0</h1>
      <div>
        {timelineItemsList.map(each => {
          const {title} = each
          return (
            <Chrono key={each.id} mode="VERTICAL_ALTERNATING" items={title}>
              {renderSwitch(each)}
            </Chrono>
          )
        })}
      </div>
    </div>
  )
}

export default TimelineView
