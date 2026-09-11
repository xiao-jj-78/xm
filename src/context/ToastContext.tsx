import { createContext, useCallback, useContext, useRef, useState, type ReactNode } from 'react'

type ToastFn = (msg: string) => void

const ToastContext = createContext<ToastFn>(() => {})

export function ToastProvider({ children }: { children: ReactNode }) {
  const [msg, setMsg] = useState<string | null>(null)
  const timer = useRef<number | null>(null)

  const show = useCallback((text: string) => {
    setMsg(text)
    if (timer.current) window.clearTimeout(timer.current)
    timer.current = window.setTimeout(() => setMsg(null), 1600)
  }, [])

  return (
    <ToastContext.Provider value={show}>
      {children}
      {msg ? <div className="app-toast">{msg}</div> : null}
    </ToastContext.Provider>
  )
}

export function useToast() {
  return useContext(ToastContext)
}
