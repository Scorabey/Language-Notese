import styles from './Label.module.scss'

interface Props {
  title: string;
}

export const Label = ({ title }: Props) => {

  return (
    <div className={styles.tableSearchLabel}>
      <h3 className={styles.tableTitle}>{title}</h3>
    </div>
  )
}

export default Label
