import { useMemo, useState } from 'react'
import { posts } from '../data/mock'
import { PageHeader } from '../components/PageHeader'
import { ProductArt, Avatar } from '../components/Thumbs'
import { useToast } from '../context/ToastContext'
import styles from './campus.module.css'

const FILTERS = ['全部', '公告', '活动', '失物招领', '互助'] as const

export function InfoPage() {
  const [filter, setFilter] = useState<(typeof FILTERS)[number]>('全部')
  const [liked, setLiked] = useState<Record<string, boolean>>({})
  const toast = useToast()

  const list = useMemo(() => {
    if (filter === '全部' || filter === '公告') {
      if (filter === '公告') return posts.slice(0, 1)
      return posts
    }
    return posts.filter((p) => p.tag === filter)
  }, [filter])

  return (
    <div className={styles.page}>
      <PageHeader title="校园信息站" />
      <div className={`${styles.chips} hide-scroll`}>
        {FILTERS.map((f) => (
          <button key={f} className={`${styles.chip} ${filter === f ? styles.on : ''}`} onClick={() => setFilter(f)}>
            {f}
          </button>
        ))}
      </div>
      <div className={styles.feed}>
        {list.length === 0 ? <p className={styles.empty}>这一栏暂时还没有帖子</p> : null}
        {list.map((p) => (
          <article key={p.id} className={styles.post}>
            <span className={styles.tag}>{p.tag}</span>
            <div className={styles.postMain}>
              <div>
                <div className={styles.postBody}>
                  <b>{p.body.split('\n')[0]}</b>
                  {p.body.split('\n').slice(1).join('\n')}
                </div>
              </div>
              {p.thumb ? (
                <div className={styles.thumb}>
                  <ProductArt kind={p.thumb} />
                </div>
              ) : null}
            </div>
            <div className={styles.postFoot}>
              <span className={styles.user} style={{ display: 'flex', alignItems: 'center', gap: 6 }}>
                <Avatar name={p.user} />
                {p.user} · {p.place} · {p.time}
              </span>
              <span className={styles.acts}>
                <button
                  onClick={() => setLiked((s) => ({ ...s, [p.id]: !s[p.id] }))}
                >
                  {liked[p.id] ? '♥' : '♡'} {p.likes + (liked[p.id] ? 1 : 0)}
                </button>
                <button onClick={() => toast('评论功能即将开放')}>💬 {p.comments}</button>
              </span>
            </div>
          </article>
        ))}
      </div>
      <div className={styles.fabWrap}>
        <button className={styles.fab} onClick={() => toast('发布一条校园信息')} aria-label="发布">
          +
        </button>
      </div>
    </div>
  )
}
