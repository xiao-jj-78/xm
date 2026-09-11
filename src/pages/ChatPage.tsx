import { useRef, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { IconBack, IconSend } from '../components/Icons'
import { avatar } from '../data/images'
import styles from './ChatPage.module.css'

type Msg = { id: number; from: 'ai' | 'me'; text: string; table?: boolean; menu?: boolean }

const WELCOME: Msg[] = [
  {
    id: 1,
    from: 'ai',
    text: '你好！我是小海，很高兴认识你！\n我可以帮你查课表、解答问题、提供校园生活与学习建议。陪你度过美好的大学生活！',
  },
  { id: 2, from: 'me', text: '明天有几节课？' },
  { id: 3, from: 'ai', text: '根据你的课表，明天（周三）有 3 节课：', table: true },
  { id: 4, from: 'me', text: '食堂今天有什么好吃的？' },
  { id: 5, from: 'ai', text: '今日食堂推荐：', menu: true },
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
        <img className={styles.avatarLg} src={avatar.sun} alt="小海" />
        <div className={styles.who}>
          <b>小海 · 阳光</b>
          <span>你的校园生活助手</span>
        </div>
      </header>

      <div className={`${styles.list} hide-scroll`}>
        {list.map((m) => (
          <div key={m.id} className={`${styles.row} ${m.from === 'me' ? styles.me : ''}`}>
            {m.from === 'ai' ? <img className={styles.avatarSm} src={avatar.sun} alt="" /> : null}
            <div className={styles.bubble}>
              {m.text}
              {m.table ? (
                <div className={styles.lines}>
                  <span>· 08:00–09:40 数据结构（1–2节）</span>
                  <span>· 10:20–12:00 大学英语（3–4节）</span>
                  <span>· 14:00–15:40 计算机网络（5–6节）</span>
                  <span className={styles.tail}>祝你学习顺利，记得带好课本噢！</span>
                </div>
              ) : null}
              {m.menu ? (
                <div className={styles.lines}>
                  <span>· 酸汤牛肉面 · 经典盖饭</span>
                  <span>· 芒果西米露 · 香辣鸡腿饭</span>
                  <span className={styles.tail}>都很受欢迎哦，快去试试吧～</span>
                </div>
              ) : null}
            </div>
            {m.from === 'me' ? <img className={styles.avatarSm} src={avatar.student} alt="" /> : null}
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
