import { useNavigate } from 'react-router-dom'
import styles from './PublishSheet.module.css'

const OPTIONS = [
  { title: '发布任务', desc: '跑腿、结伴、互助', to: '/tasks' },
  { title: '发布闲置', desc: '教材、数码、出行', to: '/market' },
  { title: '发布信息', desc: '活动、招领、搭子', to: '/info' },
  { title: '发起求助', desc: '让同学帮你一把', to: '/tasks' },
]

export function PublishSheet({ onClose }: { onClose: () => void }) {
  const nav = useNavigate()
  return (
    <div className={styles.mask} onClick={onClose}>
      <div className={styles.sheet} onClick={(e) => e.stopPropagation()}>
        <div className={styles.handle} />
        <div className={styles.title}>想发布点什么？</div>
        <div className={styles.grid}>
          {OPTIONS.map((o) => (
            <button
              key={o.title}
              className={styles.opt}
              onClick={() => {
                onClose()
                nav(o.to)
              }}
            >
              <b>{o.title}</b>
              <span>{o.desc}</span>
            </button>
          ))}
        </div>
        <button className={styles.cancel} onClick={onClose}>
          取消
        </button>
      </div>
    </div>
  )
}
