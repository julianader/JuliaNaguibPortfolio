import Activity from '@/components/landing/Activity'
import SplittedContainer from '@/components/utils/SplittedContainer'
import Title from '@/components/utils/Title'
import { activities } from '@/data/activities'
import styles from '@/styles/landing/Activities.module.scss'

export default function Activities() {
  const midpoint = Math.ceil(activities.length / 2)

  const firstHalf = activities.slice(0, midpoint)
  const secondHalf = activities.slice(midpoint)

  return (
    <div id="activities" className={styles.container}>
      <Title className="animated-title" title="Extracurricular Activities" description="Favourite Part of University" />

      <SplittedContainer className="animated-container">
        <div className={styles.container}>
          {firstHalf.map((item, index) => {
            return <Activity key={index} item={item} />
          })}
        </div>

        <div className={styles.container}>
          {secondHalf.map((item, index) => {
            return <Activity key={index} item={item} />
          })}
        </div>
      </SplittedContainer>
    </div>
  )
}
