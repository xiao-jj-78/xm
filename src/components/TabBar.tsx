import type { ReactNode } from 'react'
import { NavLink } from 'react-router-dom'
import { IconGrid, IconHome, IconBell, IconUser, IconPlus } from './Icons'
import styles from './TabBar.module.css'

export function TabBar({ onPlus }: { onPlus: () => void }) {
  return (
    <nav className={styles.wrap}>
      <Tab to="/" label="首页" icon={<IconHome size={22} />} />
      <Tab to="/services" label="服务" icon={<IconGrid size={22} />} />
      <div className={styles.plusSlot}>
        <button className={styles.plus} aria-label="发布" onClick={onPlus}>
          <IconPlus />
        </button>
      </div>
      <Tab to="/messages" label="消息" icon={<IconBell size={22} />} />
      <Tab to="/profile" label="我的" icon={<IconUser size={22} />} />
    </nav>
  )
}

function Tab({ to, label, icon }: { to: string; label: string; icon: ReactNode }) {
  return (
    <NavLink to={to} end={to === '/'} className={({ isActive }) => `${styles.item} ${isActive ? styles.on : ''}`}>
      {icon}
      <span>{label}</span>
    </NavLink>
  )
}
