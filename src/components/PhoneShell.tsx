import { useState, type ReactNode } from 'react'
import { useLocation } from 'react-router-dom'
import { ToastProvider } from '../context/ToastContext'
import { PublishSheet } from './PublishSheet'
import { StatusBar } from './StatusBar'
import { TabBar } from './TabBar'
import styles from './PhoneShell.module.css'

const TAB_ROUTES = new Set(['/', '/services', '/messages', '/profile'])
const FILL_ROUTES = new Set(['/chat'])

export function PhoneShell({ children }: { children: ReactNode }) {
  const loc = useLocation()
  const [open, setOpen] = useState(false)
  const withTab = TAB_ROUTES.has(loc.pathname)
  const fill = FILL_ROUTES.has(loc.pathname)

  return (
    <div className={styles.chrome}>
      <div className={styles.phone}>
        <ToastProvider>
          <StatusBar />
          <div className={styles.body}>
            <div
              className={`${styles.page} hide-scroll ${withTab ? styles.withTab : ''} ${fill ? styles.fill : ''}`}
            >
              {children}
            </div>
            {withTab ? <TabBar onPlus={() => setOpen(true)} /> : null}
            {open ? <PublishSheet onClose={() => setOpen(false)} /> : null}
          </div>
        </ToastProvider>
      </div>
    </div>
  )
}
