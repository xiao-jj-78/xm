type IconProps = { size?: number; color?: string }

export function IconHeart({ size = 22, color = '#ff6b88' }: IconProps) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill={color}>
      <path d="M12 20s-7-4.4-7-9.2C5 8 6.8 6.4 9 6.4c1.2 0 2.2.6 3 1.5.8-.9 1.8-1.5 3-1.5 2.2 0 4 1.6 4 4.4C19 15.6 12 20 12 20z" />
    </svg>
  )
}

export function IconBus({ size = 22, color = '#4d8dff' }: IconProps) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="1.8">
      <rect x="4" y="4" width="16" height="13" rx="3" />
      <path d="M4 11h16M8 17v2M16 17v2" />
      <circle cx="8" cy="14.2" r="1" fill={color} />
      <circle cx="16" cy="14.2" r="1" fill={color} />
    </svg>
  )
}

export function IconBag({ size = 22, color = '#e0b000' }: IconProps) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="1.8">
      <path d="M6 8h12l-1 11H7L6 8z" />
      <path d="M9 8V7a3 3 0 0 1 6 0v1" />
    </svg>
  )
}

export function IconFood({ size = 22, color = '#ff8a2a' }: IconProps) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="1.8">
      <path d="M4 11h16v2a6 6 0 0 1-6 6h-4a6 6 0 0 1-6-6v-2z" />
      <path d="M8 11V6M12 11V5M16 11V7" />
    </svg>
  )
}

export function IconCal({ size = 22, color = '#8b7dff' }: IconProps) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="1.8">
      <rect x="4" y="5" width="16" height="15" rx="3" />
      <path d="M8 3v4M16 3v4M4 10h16" />
    </svg>
  )
}

export function IconSunMini({ size = 22 }: IconProps) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24">
      <circle cx="12" cy="12" r="6" fill="#ffd44a" />
      <g stroke="#ffc107" strokeWidth="1.6" strokeLinecap="round">
        <path d="M12 2.6v1.8M12 19.6v1.8M2.6 12h1.8M19.6 12h1.8M5.2 5.2l1.3 1.3M17.5 17.5l1.3 1.3M5.2 18.8l1.3-1.3M17.5 6.5l1.3-1.3" />
      </g>
      <circle cx="10" cy="11.2" r="0.8" fill="#3a2a10" />
      <circle cx="14" cy="11.2" r="0.8" fill="#3a2a10" />
      <path d="M10 14c.8 1.2 3.2 1.2 4 0" stroke="#3a2a10" strokeWidth="1.1" fill="none" />
    </svg>
  )
}

export function IconTask({ size = 22, color = '#67c23a' }: IconProps) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="1.8">
      <rect x="5" y="4" width="14" height="16" rx="2.5" />
      <path d="M8 9h8M8 13h5" />
    </svg>
  )
}

export function IconShop({ size = 22, color = '#ff8a2a' }: IconProps) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="1.8">
      <path d="M6 9h12l-1 10H7L6 9z" />
      <path d="M9 9V8a3 3 0 0 1 6 0v1" />
    </svg>
  )
}

export function IconPaw({ size = 22, color = '#67c23a' }: IconProps) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill={color}>
      <circle cx="8" cy="8.5" r="2" />
      <circle cx="16" cy="8.5" r="2" />
      <circle cx="6.2" cy="13" r="1.7" />
      <circle cx="17.8" cy="13" r="1.7" />
      <ellipse cx="12" cy="15.5" rx="3.4" ry="3" />
    </svg>
  )
}

export function IconChat({ size = 22, color = '#4db0ff' }: IconProps) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="1.8">
      <path d="M5 6h14v10H9l-4 3V6z" />
    </svg>
  )
}

export function IconFlash({ size = 22, color = '#ff8a2a' }: IconProps) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill={color}>
      <path d="M13 2 4 14h7l-1 8 10-14h-7l0-6z" />
    </svg>
  )
}

export function IconSearch({ size = 18, color = '#8aa08a' }: IconProps) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="2">
      <circle cx="11" cy="11" r="6.5" />
      <path d="M16 16l4.2 4.2" strokeLinecap="round" />
    </svg>
  )
}

export function IconBack({ size = 20, color = '#2c3a2c' }: IconProps) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="2.2">
      <path d="M15 5 8 12l7 7" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  )
}

export function IconHome({ size = 22, color = 'currentColor' }: IconProps) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="1.9">
      <path d="M4 11 12 4l8 7v8a1.5 1.5 0 0 1-1.5 1.5h-13A1.5 1.5 0 0 1 4 19v-8z" />
    </svg>
  )
}

export function IconGrid({ size = 22, color = 'currentColor' }: IconProps) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="1.9">
      <rect x="4" y="4" width="7" height="7" rx="1.6" />
      <rect x="13" y="4" width="7" height="7" rx="1.6" />
      <rect x="4" y="13" width="7" height="7" rx="1.6" />
      <rect x="13" y="13" width="7" height="7" rx="1.6" />
    </svg>
  )
}

export function IconBell({ size = 22, color = 'currentColor' }: IconProps) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="1.9">
      <path d="M6 16V11a6 6 0 1 1 12 0v5l1.2 2H4.8L6 16z" />
      <path d="M10 20a2 2 0 0 0 4 0" />
    </svg>
  )
}

export function IconUser({ size = 22, color = 'currentColor' }: IconProps) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="1.9">
      <circle cx="12" cy="8" r="3.2" />
      <path d="M5 19c1.4-3.2 3.6-4.6 7-4.6s5.6 1.4 7 4.6" />
    </svg>
  )
}

export function IconPlus({ size = 26, color = '#fff' }: IconProps) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="2.6">
      <path d="M12 5v14M5 12h14" strokeLinecap="round" />
    </svg>
  )
}

export function IconStar({ size = 20, color = '#ffc107' }: IconProps) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill={color}>
      <path d="m12 3 2.4 6.4H21l-5.2 3.9 2 6.4L12 16.6 6.2 19.7l2-6.4L3 9.4h6.6z" />
    </svg>
  )
}

export function IconSend({ size = 18, color = '#fff' }: IconProps) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill={color}>
      <path d="M3 12 21 4l-7 17-2.4-6.6z" />
    </svg>
  )
}

export function IconPin({ size = 14, color = 'currentColor' }: IconProps) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill={color}>
      <path d="M12 22s7-7.2 7-12a7 7 0 1 0-14 0c0 4.8 7 12 7 12zm0-9.5a2.5 2.5 0 1 1 0-5 2.5 2.5 0 0 1 0 5z" />
    </svg>
  )
}

export function IconClock({ size = 14, color = 'currentColor' }: IconProps) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="2">
      <circle cx="12" cy="12" r="8" />
      <path d="M12 8v5l3 2" strokeLinecap="round" />
    </svg>
  )
}

export function IconWechat({ size = 22 }: IconProps) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="#07c160">
      <path d="M9.5 7.2c-3.6 0-6.5 2.4-6.5 5.3 0 1.7.9 3.2 2.4 4.2l-.6 2.1 2.4-1.2c.7.2 1.5.3 2.3.3.3 0 .6 0 .9-.1-.2-.6-.3-1.2-.3-1.8 0-3.2 3-5.8 6.7-5.8.2 0 .4 0 .6 0C16.8 8.8 13.5 7.2 9.5 7.2zm-2.2 3.1a.9.9 0 1 1 0-1.8.9.9 0 0 1 0 1.8zm4.4 0a.9.9 0 1 1 0-1.8.9.9 0 0 1 0 1.8z" />
      <path d="M20.8 14.8c0-2.5-2.5-4.5-5.6-4.5s-5.6 2-5.6 4.5 2.5 4.5 5.6 4.5c.6 0 1.2-.1 1.8-.2l2 .9-.5-1.8c1.4-.8 2.3-2.1 2.3-3.4zm-7.4-1a.75.75 0 1 1 0-1.5.75.75 0 0 1 0 1.5zm3.6 0a.75.75 0 1 1 0-1.5.75.75 0 0 1 0 1.5z" />
    </svg>
  )
}

export function IconPhone({ size = 20, color = '#67c23a' }: IconProps) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill={color}>
      <path d="M7.2 3.5h2.3l1 4.2-1.7 1a12.5 12.5 0 0 0 5.5 5.5l1-1.7 4.2 1v2.3c0 .8-.7 1.5-1.5 1.5C9.8 17.3 6.7 14.2 6.7 5c0-.8.7-1.5 1.5-1.5z" />
    </svg>
  )
}

export function IconCopy({ size = 16, color = '#67c23a' }: IconProps) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="1.8">
      <rect x="8" y="8" width="11" height="11" rx="2" />
      <path d="M6 16H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1" />
    </svg>
  )
}

export function IconSpeaker({ size = 16, color = '#67c23a' }: IconProps) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill={color}>
      <path d="M4 9h4l6-4v14l-6-4H4z" />
      <path d="M17 9.5c.9.8.9 3.2 0 4" fill="none" stroke={color} strokeWidth="1.6" />
    </svg>
  )
}

export const serviceIconMap: Record<string, (p?: IconProps) => ReturnType<typeof IconHeart>> = {
  heart: (p) => <IconHeart {...p} />,
  bus: (p) => <IconBus {...p} />,
  bag: (p) => <IconBag {...p} />,
  food: (p) => <IconFood {...p} />,
  cal: (p) => <IconCal {...p} />,
  sun: (p) => <IconSunMini {...p} />,
  task: (p) => <IconTask {...p} />,
  shop: (p) => <IconShop {...p} />,
  paw: (p) => <IconPaw {...p} />,
  chat: (p) => <IconChat {...p} />,
  flash: (p) => <IconFlash {...p} />,
}
