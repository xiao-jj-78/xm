import styles from './Thumbs.module.css'

export function ProductArt({ kind }: { kind: string }) {
  if (kind === 'book') return <div className={`${styles.art}`}><div className={styles.book} /></div>
  if (kind === 'ebike')
    return (
      <div className={styles.art}>
        <div className={styles.ebike}>
          <i className={styles.deck} />
          <i className={styles.stem} />
        </div>
      </div>
    )
  if (kind === 'bike')
    return (
      <div className={styles.art} style={{ position: 'relative' }}>
        <i className={styles.wheel} style={{ left: 8 }} />
        <i className={styles.wheel} style={{ right: 8 }} />
        <i className={styles.frame} />
      </div>
    )
  if (kind === 'laptop')
    return (
      <div className={styles.art} style={{ position: 'relative' }}>
        <div className={styles.laptop} />
      </div>
    )
  if (kind === 'bag') return <div className={styles.art}><div className={styles.bag} /></div>
  if (kind === 'earphone') return <div className={styles.art}><div className={styles.pods} /></div>
  if (kind === 'box') return <div className={styles.art}><div className={styles.box} /></div>
  if (kind === 'goods') return <div className={styles.art}><div className={styles.bag} /></div>
  if (kind === 'meal') return <div className={styles.art}><div className={styles.meal} /></div>
  if (kind === 'tea') return <div className={styles.art}><div className={styles.tea} /></div>
  if (kind === 'pen') return <div className={styles.art}><div className={styles.pen} /></div>
  if (kind === 'badminton') return <div className={styles.art}><div className={styles.badminton} /></div>
  return <div className={styles.art} />
}

export function Avatar({ name, hue }: { name: string; hue?: string }) {
  return (
    <span
      style={{
        width: 26,
        height: 26,
        borderRadius: '50%',
        background: hue || '#c8ec8a',
        display: 'inline-flex',
        alignItems: 'center',
        justifyContent: 'center',
        fontSize: 11,
        fontWeight: 700,
        color: '#2c3a2c',
        flexShrink: 0,
      }}
    >
      {name.slice(0, 1)}
    </span>
  )
}
