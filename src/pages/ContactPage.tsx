import { PageHeader } from '../components/PageHeader'
import { IconCopy, IconPhone, IconWechat } from '../components/Icons'
import { useToast } from '../context/ToastContext'
import { hero } from '../data/images'
import styles from './me.module.css'

export function ContactPage() {
  const toast = useToast()
  return (
    <div className={styles.page}>
      <PageHeader title="联系管理员" />
      <div className={styles.contactHero} style={{ backgroundImage: `url(${hero.contact})` }}>
        <div>
          <h2>
            有问题？
            <br />
            找我们！
          </h2>
          <p>我们会尽快为你解答</p>
        </div>
      </div>

      <div className={styles.row}>
        <IconWechat size={28} />
        <div className={styles.grow}>
          <b>微信联系</b>
          <span>官方微信号：sunshine_help</span>
        </div>
        <button
          className={styles.btn}
          onClick={() => {
            void navigator.clipboard?.writeText('sunshine_help')
            toast('已复制微信号')
          }}
        >
          <IconCopy /> 复制
        </button>
      </div>

      <div className={styles.row}>
        <span
          style={{
            width: 36,
            height: 36,
            borderRadius: 12,
            background: '#e9f8d6',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
          }}
        >
          <IconPhone />
        </span>
        <div className={styles.grow}>
          <b>服务电话</b>
          <span>400-123-4567</span>
        </div>
        <a className={styles.btn} href="tel:4001234567">
          拨打
        </a>
      </div>

      <div className={styles.row}>
        <span
          style={{
            width: 36,
            height: 36,
            borderRadius: 12,
            background: '#e9f8d6',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            color: 'var(--green)',
            fontWeight: 800,
          }}
        >
          ⏱
        </span>
        <div className={styles.grow}>
          <b>服务时间</b>
          <span>09:00 — 22:00</span>
        </div>
      </div>

      <div className={styles.tipBtn}>♥ 如需帮助请优先在此联系</div>
    </div>
  )
}
