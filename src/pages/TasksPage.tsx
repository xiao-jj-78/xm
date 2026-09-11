import { useMemo, useState } from 'react'
import { tasks } from '../data/mock'
import { PageHeader } from '../components/PageHeader'
import { Avatar } from '../components/Thumbs'
import { IconClock, IconPin } from '../components/Icons'
import styles from './campus.module.css'

const TABS = ['任务大厅', '我的收藏', '我的发布'] as const

export function TasksPage() {
  const [tab, setTab] = useState<(typeof TABS)[number]>('任务大厅')
  const list = useMemo(() => {
    if (tab === '我的收藏') return tasks.slice(0, 2)
    if (tab === '我的发布') return tasks.slice(0, 1)
    return tasks
  }, [tab])

  return (
    <div className={styles.page}>
      <PageHeader title="校园任务" />
      <div className={styles.tabs}>
        {TABS.map((t) => (
          <button key={t} className={`${styles.tab} ${tab === t ? styles.on : ''}`} onClick={() => setTab(t)}>
            {t}
          </button>
        ))}
      </div>
      {list.length === 0 ? <p className={styles.empty}>还没有内容，去大厅看看吧</p> : null}
      {list.map((t) => (
        <article key={t.id} className={styles.task}>
          <div className={styles.taskTop}>
            <span className={styles.tag}>{t.type}</span>
            <span
              className={styles.status}
              style={{
                color: t.status === '进行中' ? '#67c23a' : '#ff8c22',
                background: t.status === '进行中' ? '#e9f8d6' : '#fff1e0',
              }}
            >
              {t.status}
            </span>
          </div>
          <div className={styles.taskTitle}>{t.title}</div>
          <div className={styles.price}>¥{t.price}</div>
          <div className={styles.meta}>
            <span>
              <IconPin size={12} /> {t.place}
            </span>
            <span>
              <IconClock size={12} /> {t.time}
            </span>
          </div>
          <div className={styles.foot}>
            <span className={styles.user}>
              <Avatar name={t.user} />
              {t.user}
            </span>
            <span>{t.signups}人已报名</span>
          </div>
        </article>
      ))}
    </div>
  )
}
