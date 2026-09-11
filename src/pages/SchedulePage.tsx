import { useState } from 'react'
import { courses } from '../data/mock'
import { PageHeader } from '../components/PageHeader'
import { SunMascot } from '../components/SunMascot'
import { useToast } from '../context/ToastContext'
import styles from './SchedulePage.module.css'

const DAYS = ['一', '二', '三', '四', '五', '六', '日']
const SLOTS = ['1-2', '3-4', '5-6', '7-8']
const STEPS = ['选择方式', '填写信息', '获取课表', '完成']

export function SchedulePage() {
  const toast = useToast()
  const [step, setStep] = useState(0)

  return (
    <div className={styles.page}>
      <PageHeader title="课表查询" />
      <div className={styles.hero}>
        <div>
          <h2>四步轻松查课表</h2>
          <p>快速 · 准确 · 方便</p>
        </div>
        <SunMascot pose="grad" size={108} />
      </div>

      <div className={styles.steps}>
        {STEPS.map((s, i) => (
          <div key={s} className={`${styles.step} ${i <= step ? styles.on : ''}`}>
            <div className={styles.dot}>{i + 1}</div>
            {s}
          </div>
        ))}
      </div>

      <div className={styles.ways}>
        <article className={styles.way}>
          <b>自动代填</b>
          <p>输入学号 / 密码 / 验证码</p>
          <button
            className={styles.go}
            onClick={() => {
              setStep(3)
              toast('已为你拉取本学期课表')
            }}
          >
            立即查询
          </button>
        </article>
        <article className={styles.way}>
          <b>Cookie 会话导入</b>
          <p>一键导入无需验证码</p>
          <button
            className={`${styles.go} ${styles.ghost}`}
            onClick={() => {
              setStep(3)
              toast('已从会话导入课表')
            }}
          >
            立即导入
          </button>
        </article>
      </div>

      <section className={styles.card}>
        <h3>我的课表</h3>
        <div className={styles.grid}>
          <div className={styles.head} />
          {DAYS.map((d) => (
            <div key={d} className={styles.head}>
              周{d}
            </div>
          ))}
          {SLOTS.map((slot, si) => (
            <SlotRow key={slot} label={slot} si={si + 1} />
          ))}
        </div>
      </section>
    </div>
  )
}

function SlotRow({ label, si }: { label: string; si: number }) {
  return (
    <>
      <div className={styles.time}>{label}</div>
      {DAYS.map((_, di) => {
        const c = courses.find((x) => x.day === di + 1 && x.slot === si)
        if (!c) return <div key={di} className={styles.slot} />
        return (
          <div key={di} className={styles.block} style={{ background: c.color }}>
            {c.name}
            <br />
            <span style={{ fontWeight: 500, opacity: 0.8 }}>{c.place}</span>
          </div>
        )
      })}
    </>
  )
}
