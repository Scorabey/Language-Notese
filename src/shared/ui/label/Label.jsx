import styles from './Label.module.scss'

export const Label = (props) => {
  const { title } = props

  return (
    <div className={styles.tableSearchLabel}>
      <h3 className={styles.tableTitle}>{title}</h3>
    </div>
  )
}

export default Label
