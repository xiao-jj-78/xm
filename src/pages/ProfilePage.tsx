import { Link } from 'react-router-dom'
import { SunMascot } from '../components/SunMascot'
import { useToast } from '../context/ToastContext'
import styles from './me.module.css'

const ROLES = [
  { title: '内容管理', desc: '审核 · 管理 · 发布', color: '#67c23a' },
  { title: '档口工作台', desc: '订单 · 商品 · 经营', color: '#ff9a3c' },
  { title: '骑手工作台', desc: '接单 · 配送 · 结算', color: '#4d9fff' },
  { title: '我的小店', desc: '店铺 · 商品 · 经营', color: '#9b8cff' },
]

export function ProfilePage() {
  const toast = useToast()
  return (
    <div className={styles.page}>
      <header style={{ padding: '2px 18px 4px', fontWeight: 800, fontSize: 18 }}>我的</header>
      <div className={styles.hero}>
        <div className={styles.avatar}>
          <SunMascot pose="mini" size={64} />
        </div>
        <div className={styles.who}>
          <b>
            小阳同学 <span className={styles.badge}>学生</span>
          </b>
          <p>在校 · 计算机学院</p>
        </div>
      </div>

      <div className={styles.row4}>
        <Link to="/info" className={styles.mini}>
          <span className={styles.circle} style={{ background: '#fff4c2' }}>
            ★
          </span>
          我的收藏
        </Link>
        <Link to="/tasks" className={styles.mini}>
          <span className={styles.circle} style={{ background: '#dcebff' }}>
            ✈
          </span>
          我的发布
        </Link>
        <Link to="/pet" className={styles.mini}>
          <span className={styles.circle} style={{ background: '#e9f8d6' }}>
            ☀
          </span>
          我的阳光
        </Link>
        <button className={styles.mini} onClick={() => toast('设置页即将开放')}>
          <span className={styles.circle} style={{ background: '#eee' }}>
            ⚙
          </span>
          设置
        </button>
      </div>

      <Link to="/contact" className={styles.admin}>
        <SunMascot pose="mega" size={48} />
        <span className={styles.grow}>
          <b>联系管理员</b>
          <span>有问题？找我们！</span>
        </span>
        <span style={{ color: '#c5d0c5' }}>›</span>
      </Link>

      <section className={styles.sec}>
        <h3>角色工作台</h3>
        <p className={styles.hint}>根据身份显示</p>
        <div className={styles.roles}>
          {ROLES.map((r) => (
            <article key={r.title} className={styles.role} style={{ background: r.color }}>
              <b>{r.title}</b>
              <span>{r.desc}</span>
            </article>
          ))}
        </div>
      </section>
    </div>
  )
}
