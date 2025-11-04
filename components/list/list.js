import styles from './list.module.css'

const ListIndex = ({ title, description, selection }) => {
  return (
    <ul style={{ margin: '0' }}>
      <li className={styles.list}>
        <a className={styles.ul}>{title}</a>
        <span style={{ color: 'var(--colors-secondary)' }}> {selection} </span>
        <span style={{ color: 'var(--colors-secondary)' }}>{description}</span>
      </li>
    </ul>
  )
}

export default ListIndex
