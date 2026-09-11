import { useState } from 'react'
import { stalls } from '../data/mock'
import { PageHeader } from '../components/PageHeader'
import { SunMascot } from '../components/SunMascot'
import { useToast } from '../context/ToastContext'
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
      <div className={styles.banner}>
        <div>
          <h2>逛档口</h2>
          <p style={{ fontSize: 12, color: '#6aa24a', marginTop: 4 }}>热辣盖饭 · 轻食沙拉都在这</p>
        </div>
        <SunMascot pose="wave" size={96} />
        <button className={styles.spin} onClick={spin}>
          {spinning ? '转转…' : '吃啥\n转盘'}
        </button>
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
                ★ {s.rating} · 月售 {s.monthly} · {s.badge}
              </div>
            </div>
          </div>
          <div className={`${styles.dishes} hide-scroll`}>
            {s.dishes.map((d) => (
              <div key={d.name} className={styles.dish}>
                <div className={styles.dishPic} style={{ background: d.flavor }} />
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
