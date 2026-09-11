import styles from './StatusBar.module.css'

export function StatusBar() {
  return (
    <div className={styles.bar}>
      <span>9:41</span>
      <div className={styles.icons}>
        <span className={styles.sig}>
          <i style={{ height: 4 }} />
          <i style={{ height: 6 }} />
          <i style={{ height: 8 }} />
          <i style={{ height: 11 }} />
        </span>
        <span className={styles.dot} />
        <span className={styles.bat}>
          <b />
        </span>
      </div>
    </div>
  )
}
