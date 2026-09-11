import { useRef, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { IconBack, IconSend } from '../components/Icons'
import { SunMascot } from '../components/SunMascot'
import styles from './ChatPage.module.css'

type Msg = { id: number; from: 'ai' | 'me'; text: string; table?: boolean; menu?: boolean }

const WELCOME: Msg[] = [
  {
    id: 1,
    from: 'ai',
    text: '你好！我是小海，很高兴认识你！\n我可以帮你查课表、解答问题、提供校园生活与学习建议。陪你度过美好的大学生活～',
  },
]

export function ChatPage() {
  const nav = useNavigate()
  const [list, setList] = useState<Msg[]>(WELCOME)
  const [text, setText] = useState('')
  const seq = useRef(10)

  function nextId() {
    seq.current += 1
    return seq.current
  }

  function replyTo(q: string) {
    const me: Msg = { id: nextId(), from: 'me', text: q }
    let ai: Msg = { id: nextId(), from: 'ai', text: '收到啦，我再帮你看看～' }
    if (q.includes('课')) {
      ai = {
        id: nextId(),
        from: 'ai',
        text: '根据你的课表，明天（周三）有 3 节课：',
        table: true,
      }
    } else if (q.includes('食堂') || q.includes('吃')) {
      ai = {
        id: nextId(),
        from: 'ai',
        text: '今日食堂推荐：',
        menu: true,
      }
    } else if (q.includes('心情') || q.includes('倾诉')) {
      ai = {
        id: nextId(),
        from: 'ai',
        text: '我在呢。今天辛苦啦，先深呼吸一下。要不要去晒晒太阳，或者让阳光陪你聊一会儿？',
      }
    } else if (q.includes('求助') || q.includes('帮忙')) {
      ai = {
        id: nextId(),
        from: 'ai',
        text: '可以去「校园任务」发布互助，或看看信息站里有没有搭子。需要我帮你拟一则求助文案吗？',
      }
    }
    setList((xs) => [...xs, me, ai])
  }

  return (
    <div className={styles.page}>
      <header className={styles.head}>
        <button className={styles.back} onClick={() => nav(-1)} aria-label="返回">
          <IconBack />
        </button>
        <SunMascot pose="mini" size={40} />
        <div className={styles.who}>
          <b>小海 · 阳光</b>
          <span>你的校园生活助手</span>
        </div>
      </header>

      <div className={`${styles.list} hide-scroll`}>
        {list.map((m) => (
          <div key={m.id} className={`${styles.row} ${m.from === 'me' ? styles.me : ''}`}>
            {m.from === 'ai' ? <SunMascot pose="mini" size={32} /> : null}
            <div className={styles.bubble}>
              {m.text}
              {m.table ? (
                <table className={styles.table}>
                  <thead>
                    <tr>
                      <th>节次</th>
                      <th>课程</th>
                      <th>地点</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>1-2</td>
                      <td>线性代数</td>
                      <td>教B105</td>
                    </tr>
                    <tr>
                      <td>3-4</td>
                      <td>大学英语</td>
                      <td>教C302</td>
                    </tr>
                    <tr>
                      <td>5-6</td>
                      <td>计算机网络</td>
                      <td>教A401</td>
                    </tr>
                  </tbody>
                </table>
              ) : null}
              {m.menu ? (
                <div style={{ marginTop: 6, fontSize: 12 }}>
                  · 黄焖鸡米饭 — 经典盖饭
                  <br />
                  · 青椒小炒肉 ¥7
                  <br />
                  · 轻食沙拉吧 低卡推荐
                  <br />
                  祝你学习顺利，记得按时吃饭噢！
                </div>
              ) : null}
            </div>
          </div>
        ))}
      </div>

      <div className={`${styles.chips} hide-scroll`}>
        {['查课表', '找食堂', '我想求助', '心情倾诉'].map((c) => (
          <button key={c} className={styles.chip} onClick={() => replyTo(c)}>
            {c}
          </button>
        ))}
      </div>

      <form
        className={styles.composer}
        onSubmit={(e) => {
          e.preventDefault()
          const q = text.trim()
          if (!q) return
          setText('')
          replyTo(q)
        }}
      >
        <input value={text} onChange={(e) => setText(e.target.value)} placeholder="输入你想问的…" />
        <button className={styles.send} type="submit" aria-label="发送">
          <IconSend />
        </button>
      </form>
    </div>
  )
}
