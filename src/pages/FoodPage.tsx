import { useState } from 'react'
import { stalls } from '../data/mock'
import { PageHeader } from '../components/PageHeader'
import { useToast } from '../context/ToastContext'
import { dishImg, hero } from '../data/images'
import styles from './campus.module.css'

export function FoodPage() {
  const toast = useToast()
  const [spinning, setSpinning] = useState(false)

  function spin() {
    if (spinning) return
    setSpinning(true)
    const pick = stalls[Math.floor(Math.random() * stalls.length)]
    window.setTimeout(() => {
      setSpinning(false)
      toast(`今天吃：${pick.name} · ${pick.dishes[0].name}`)
    }, 700)
  }

  return (
    <div className={styles.page}>
      <PageHeader title="校园订餐" />
      <div className={styles.banner} style={{ backgroundImage: `url(${hero.food})` }}>
        <div>
          <h2>逛档口</h2>
          <p style={{ fontSize: 12, color: '#6aa24a', marginTop: 4 }}>多样美食 · 新鲜健康</p>
          <button className={styles.spin} onClick={spin}>
            {spinning ? '转转中…' : '吃啥转盘 ›'}
          </button>
        </div>
      </div>
      <div className={styles.stallHead}>
        <b>营业中档口</b>
        <span style={{ color: '#97a697' }}>全部</span>
      </div>
      {stalls.map((s) => (
        <article key={s.id} className={styles.stall}>
          <div className={styles.stallTop}>
            <div>
              <b>{s.name}</b>
              <div style={{ fontSize: 12, color: '#97a697', marginTop: 4 }}>
                <span style={{ color: '#ffb400' }}>★</span> {s.rating} · 月售 {s.monthly} · {s.badge}
              </div>
            </div>
            <span className={styles.open}>营业中</span>
          </div>
          <div className={`${styles.dishes} hide-scroll`}>
            {s.dishes.map((d) => (
              <div key={d.name} className={styles.dish}>
                <img className={styles.dishPic} src={dishImg[d.img]} alt={d.name} loading="lazy" />
                <span>
                  {d.name}
                  <br />
                  <b style={{ color: 'var(--price)' }}>¥{d.price}</b>
                </span>
              </div>
            ))}
          </div>
        </article>
      ))}
    </div>
  )
}
