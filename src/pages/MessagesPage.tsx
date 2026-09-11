import { Link } from 'react-router-dom'
import { messages } from '../data/mock'
import { SunMascot } from '../components/SunMascot'
import { Avatar } from '../components/Thumbs'
import styles from './me.module.css'

export function MessagesPage() {
  return (
    <div className={styles.page}>
      <header style={{ padding: '2px 18px 10px', fontWeight: 800, fontSize: 18 }}>消息</header>
      <div className={styles.inbox}>
        {messages.map((m) => {
          const inner = (
            <>
              {m.kind === 'ai' ? (
                <SunMascot pose="mini" size={44} />
              ) : (
                <Avatar name={m.name} hue={m.kind === 'system' ? '#ffe4cc' : '#dcebff'} />
              )}
              <span className={styles.grow}>
                <b>
                  {m.name}
                  <em>{m.time}</em>
                </b>
                <p>{m.preview}</p>
              </span>
              {m.unread ? <span className={styles.unread}>{m.unread}</span> : null}
            </>
          )
          if (m.kind === 'ai') {
            return (
              <Link key={m.id} to="/chat" className={styles.msg}>
                {inner}
              </Link>
            )
          }
          return (
            <button key={m.id} className={styles.msg}>
              {inner}
            </button>
          )
        })}
      </div>
    </div>
  )
}
