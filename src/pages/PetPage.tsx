import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { achievements, petItems } from '../data/mock'
import { PageHeader } from '../components/PageHeader'
import { SunMascot } from '../components/SunMascot'
import { useToast } from '../context/ToastContext'
import styles from './me.module.css'

const ACTS = [
  { name: '喂食', emoji: '🍽', key: 'food' },
  { name: '清洁', emoji: '🫧', key: 'clean' },
  { name: '晒太阳', emoji: '☀️', key: 'sun' },
  { name: '摸摸', emoji: '🫶', key: 'pet' },
  { name: '聊天', emoji: '💬', key: 'chat' },
]

export function PetPage() {
  const toast = useToast()
  const nav = useNavigate()
  const [food, setFood] = useState(85)
  const [clean, setClean] = useState(78)
  const [mood, setMood] = useState(92)

  function interact(key: string) {
    if (key === 'chat') {
      nav('/chat')
      return
    }
    if (key === 'food') setFood((n) => Math.min(100, n + 4))
    if (key === 'clean') setClean((n) => Math.min(100, n + 5))
    if (key === 'sun' || key === 'pet') setMood((n) => Math.min(100, n + 3))
    toast(key === 'food' ? '阳光吃得很开心！' : key === 'clean' ? '焕然一新～' : '心情变好了！')
  }

  return (
    <div className={styles.page}>
      <PageHeader title="我的阳光" />
      <div className={styles.petHero}>
        <div className={styles.speech}>和我一起收获阳光吧！</div>
        <SunMascot pose="wave" size={168} />
        <div className={styles.lv}>
          Lv.8
          <span className={styles.xp}>
            <i style={{ width: '52%' }} />
          </span>
          <span style={{ fontSize: 11, fontWeight: 600, color: '#97a697' }}>520/1000</span>
        </div>
      </div>

      <div className={styles.card}>
        <Stat label="饱食度" value={food} color="#67c23a" />
        <Stat label="清洁度" value={clean} color="#4db0ff" />
        <Stat label="心情" value={mood} color="#ff8aa0" />
        <div className={styles.stat} style={{ marginTop: 8 }}>
          <span style={{ width: 48 }}>亲密度</span>
          <span className={styles.bar}>
            <i style={{ width: '70%', background: '#7ed957' }} />
          </span>
          <span>熟悉</span>
        </div>
      </div>

      <div className={styles.card}>
        <h3 style={{ fontSize: 14, marginBottom: 8 }}>互动玩法</h3>
        <div className={styles.acts}>
          {ACTS.map((a) => (
            <button key={a.key} className={styles.act} onClick={() => interact(a.key)}>
              <i>{a.emoji}</i>
              {a.name}
            </button>
          ))}
        </div>
      </div>

      <div className={styles.card}>
        <h3 style={{ fontSize: 14, marginBottom: 8 }}>道具背包</h3>
        <div className={styles.bagGrid}>
          {petItems.map((it) => (
            <div key={it.name} className={styles.item}>
              <b>{it.emoji}</b>
              {it.name}
              <div style={{ color: '#97a697' }}>x{it.count}</div>
            </div>
          ))}
        </div>
      </div>

      <div className={styles.card}>
        <h3 style={{ fontSize: 14, marginBottom: 4 }}>每日任务</h3>
        <div className={styles.taskRow}>
          <span>完成 3 次互助</span>
          <span style={{ color: 'var(--green-text)', fontWeight: 700 }}>2/3 去完成</span>
        </div>
      </div>

      <div className={styles.card}>
        <h3 style={{ fontSize: 14, marginBottom: 8 }}>成就勋章</h3>
        <div className={`${styles.medals} hide-scroll`}>
          {achievements.map((m) => (
            <div key={m.name} className={styles.medal}>
              <i>{m.icon}</i>
              {m.name}
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

function Stat({ label, value, color }: { label: string; value: number; color: string }) {
  return (
    <div className={styles.stat}>
      <span style={{ width: 48 }}>{label}</span>
      <span className={styles.bar}>
        <i style={{ width: `${value}%`, background: color }} />
      </span>
      <span>{value}%</span>
    </div>
  )
}
