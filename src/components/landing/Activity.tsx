import StyledCard from '@/components/utils/StyledCard'
import { type ActivityInterface } from '@/data/activities'
import styles from '@/styles/landing/Activities.module.scss'
import { Icon } from '@iconify-icon/react'

interface Props {
  item: ActivityInterface
}

export default function Activiy({ item }: Props) {
  return (
    <StyledCard className={styles.education} variant="smallfull" glow={item.color}>
      <div className={styles.header}>
        <span className={styles.chip}>
          {' '}
          <Icon
            icon="ci:book-open"
            style={{
              color: `var(--${item.color}-color)`,
            }}
            className={styles.icon}
          />
          {item.type}
        </span>
        <span className={styles.time}>{item.time}</span>
      </div>
      <div className={styles.text}>
        <span className={styles.bold}>{item.name}</span> in {item.university}
      </div>
    </StyledCard>
  )
}
