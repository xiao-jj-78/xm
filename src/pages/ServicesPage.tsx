import { Link, useNavigate } from 'react-router-dom'
import { campusServices } from '../data/mock'
import { HeaderWithSearch } from '../components/PageHeader'
import { serviceIconMap } from '../components/Icons'
import styles from './campus.module.css'

export function ServicesPage() {
  const nav = useNavigate()
  return (
    <div className={styles.page}>
      <HeaderWithSearch title="校园生活服务" placeholder="搜索服务、任务、商品" />
      <div className={styles.tabs}>
        <button className={`${styles.tab} ${styles.on}`}>校园服务</button>
        <button className={styles.tab} onClick={() => nav('/tasks')}>
          校园任务
        </button>
        <button className={styles.tab} onClick={() => nav('/market')}>
          校园二手
        </button>
        <button className={styles.tab} onClick={() => nav('/info')}>
          校园信息
        </button>
      </div>
      <div className={styles.svcGrid}>
        {campusServices.map((s) => (
          <Link key={s.id} to={s.to} className={styles.svc}>
            <span className={styles.svcIcon} style={{ background: s.tint }}>
              {serviceIconMap[s.icon]?.({ size: 22 })}
            </span>
            <span>
              <b>{s.title}</b>
              <span>{s.desc}</span>
            </span>
          </Link>
        ))}
      </div>
    </div>
  )
}
