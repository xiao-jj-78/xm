import { useNavigate } from 'react-router-dom'
import { IconBack, IconSearch } from './Icons'
import styles from './PageHeader.module.css'
import type { ReactNode } from 'react'

export function PageHeader({
  title,
  right,
  onBack,
}: {
  title: string
  right?: ReactNode
  onBack?: () => void
}) {
  const nav = useNavigate()
  return (
    <header className={styles.head}>
      <button className={styles.back} onClick={onBack ?? (() => nav(-1))} aria-label="返回">
        <IconBack />
      </button>
      <h1 className={styles.title}>{title}</h1>
      <div className={styles.right}>{right}</div>
    </header>
  )
}

export function SearchField({ placeholder }: { placeholder: string }) {
  return (
    <label className={styles.search}>
      <IconSearch />
      <input placeholder={placeholder} />
    </label>
  )
}

export function HeaderWithSearch({
  title,
  placeholder,
}: {
  title: string
  placeholder: string
}) {
  const nav = useNavigate()
  return (
    <header className={styles.head}>
      <button className={styles.back} onClick={() => nav(-1)} aria-label="返回">
        <IconBack />
      </button>
      <div className={`${styles.title} ${styles.left}`} style={{ flex: '0 0 auto', marginRight: 0 }}>
        {title}
      </div>
      <SearchField placeholder={placeholder} />
    </header>
  )
}
