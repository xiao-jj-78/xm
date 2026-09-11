import type { ReactNode } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { IconGrid, IconHome, IconBell, IconUser, IconPlus } from './Icons'
import styles from './TabBar.module.css'

const SERVICE_ROUTES = new Set(['/services', '/tasks', '/market', '/info', '/food'])
const PROFILE_ROUTES = new Set(['/profile', '/contact'])

export function TabBar({ onPlus }: { onPlus: () => void }) {
  const { pathname } = useLocation()
  return (
    <nav className={styles.wrap}>
      <Tab to="/" label="首页" icon={<IconHome size={22} />} active={pathname === '/'} />
      <Tab
        to="/services"
        label="服务"
        icon={<IconGrid size={22} />}
        active={SERVICE_ROUTES.has(pathname)}
      />
      <div className={styles.plusSlot}>
        <button className={styles.plus} aria-label="发布" onClick={onPlus}>
          <IconPlus />
        </button>
        <span className={styles.plusLabel}>发布</span>
      </div>
      <Tab to="/messages" label="消息" icon={<IconBell size={22} />} active={pathname === '/messages'} />
      <Tab to="/profile" label="我的" icon={<IconUser size={22} />} active={PROFILE_ROUTES.has(pathname)} />
    </nav>
  )
}

function Tab({
  to,
  label,
  icon,
  active,
}: {
  to: string
  label: string
  icon: ReactNode
  active: boolean
}) {
  return (
    <Link to={to} className={`${styles.item} ${active ? styles.on : ''}`}>
      {icon}
      <span>{label}</span>
    </Link>
  )
}
