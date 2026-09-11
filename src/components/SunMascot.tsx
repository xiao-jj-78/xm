import { useId } from 'react'

type Pose = 'idle' | 'wave' | 'backpack' | 'grad' | 'mega' | 'sit' | 'mini' | 'hero'

type Props = {
  pose?: Pose
  size?: number
}

export function SunMascot({ pose = 'idle', size = 120 }: Props) {
  const gid = useId().replace(/:/g, '')
  const s = size
  if (pose === 'mini') {
    return (
      <svg width={s} height={s} viewBox="0 0 80 80" aria-hidden>
        <SunFace cx={40} cy={40} r={22} gid={gid} />
      </svg>
    )
  }

  return (
    <svg width={s} height={s} viewBox="0 0 160 160" aria-hidden>
      {pose === 'grad' ? <GradCap /> : null}
      {pose === 'mega' ? <Megaphone /> : null}
      {pose === 'backpack' || pose === 'hero' ? <Backpack /> : null}
      <SunFace
        cx={80}
        cy={78}
        r={42}
        gid={gid}
        wave={pose === 'wave' || pose === 'hero'}
        sit={pose === 'sit'}
      />
      {pose === 'wave' || pose === 'hero' ? <ArmWave /> : null}
    </svg>
  )
}

function Rays({ cx, cy, r }: { cx: number; cy: number; r: number }) {
  const rays = Array.from({ length: 10 }, (_, i) => i)
  return (
    <g>
      {rays.map((i) => {
        const a = (i / 10) * Math.PI * 2 - Math.PI / 2
        const x1 = cx + Math.cos(a) * (r + 4)
        const y1 = cy + Math.sin(a) * (r + 4)
        const x2 = cx + Math.cos(a) * (r + 16)
        const y2 = cy + Math.sin(a) * (r + 16)
        return (
          <line
            key={i}
            x1={x1}
            y1={y1}
            x2={x2}
            y2={y2}
            stroke="#ffc107"
            strokeWidth="7"
            strokeLinecap="round"
          />
        )
      })}
    </g>
  )
}

function SunFace({
  cx,
  cy,
  r,
  gid,
  wave,
  sit,
}: {
  cx: number
  cy: number
  r: number
  gid: string
  wave?: boolean
  sit?: boolean
}) {
  return (
    <g>
      <Rays cx={cx} cy={cy} r={r} />
      <defs>
        <radialGradient id={gid} cx="35%" cy="30%" r="70%">
          <stop offset="0%" stopColor="#ffe98a" />
          <stop offset="100%" stopColor="#ffd54a" />
        </radialGradient>
      </defs>
      <circle cx={cx} cy={cy} r={r} fill="#ffd54a" />
      <circle cx={cx} cy={cy} r={r} fill={`url(#${gid})`} />
      <ellipse cx={cx - r * 0.38} cy={cy + r * 0.18} rx={r * 0.16} ry={r * 0.1} fill="#ffb3c1" opacity="0.85" />
      <ellipse cx={cx + r * 0.38} cy={cy + r * 0.18} rx={r * 0.16} ry={r * 0.1} fill="#ffb3c1" opacity="0.85" />
      <ellipse cx={cx - r * 0.22} cy={cy - r * 0.08} rx={r * 0.14} ry={r * 0.18} fill="#fff" />
      <ellipse cx={cx + r * 0.22} cy={cy - r * 0.08} rx={r * 0.14} ry={r * 0.18} fill="#fff" />
      <circle cx={cx - r * 0.2} cy={cy - r * 0.06} r={r * 0.08} fill="#3a2a12" />
      <circle cx={cx + r * 0.24} cy={cy - r * 0.06} r={r * 0.08} fill="#3a2a12" />
      <circle cx={cx - r * 0.17} cy={cy - r * 0.1} r={r * 0.035} fill="#fff" />
      <circle cx={cx + r * 0.27} cy={cy - r * 0.1} r={r * 0.035} fill="#fff" />
      <path
        d={`M ${cx - r * 0.22} ${cy + r * 0.28} c ${r * 0.18} ${r * 0.28}, ${r * 0.26} ${r * 0.28}, ${r * 0.44} 0`}
        fill="none"
        stroke="#3a2a12"
        strokeWidth={r * 0.08}
        strokeLinecap="round"
      />
      {wave ? (
        <g>
          <path
            d={`M ${cx - r * 0.95} ${cy + 8} q -18 10 -8 28`}
            fill="none"
            stroke="#ffd54a"
            strokeWidth="10"
            strokeLinecap="round"
          />
        </g>
      ) : null}
      {sit ? (
        <g>
          <path
            d={`M ${cx - 18} ${cy + r - 4} q -6 18 8 18`}
            fill="none"
            stroke="#ffd54a"
            strokeWidth="10"
            strokeLinecap="round"
          />
          <path
            d={`M ${cx + 18} ${cy + r - 4} q 6 18 -8 18`}
            fill="none"
            stroke="#ffd54a"
            strokeWidth="10"
            strokeLinecap="round"
          />
        </g>
      ) : null}
    </g>
  )
}

function Backpack() {
  return (
    <g>
      <rect x="58" y="108" width="44" height="28" rx="8" fill="#67c23a" />
      <rect x="70" y="116" width="20" height="12" rx="3" fill="#e8f8d6" />
    </g>
  )
}

function GradCap() {
  return (
    <g>
      <polygon points="80,8 130,28 80,48 30,28" fill="#2d3a2d" />
      <rect x="68" y="28" width="24" height="10" fill="#2d3a2d" />
      <circle cx="128" cy="30" r="3.5" fill="#ffd44a" />
      <path d="M128 30 v18" stroke="#ffd44a" strokeWidth="2" />
    </g>
  )
}

function Megaphone() {
  return (
    <g transform="translate(108,70) rotate(-18)">
      <path d="M0 8 h18 l12 -10 v28 l-12 -10 h-18z" fill="#67c23a" />
      <rect x="-8" y="4" width="10" height="12" rx="2" fill="#5cb82e" />
      <path d="M32 4 q10 10 0 20" fill="none" stroke="#67c23a" strokeWidth="3" />
    </g>
  )
}

function ArmWave() {
  return (
    <path
      d="M118 88 q22 -28 8 -46"
      fill="none"
      stroke="#ffd54a"
      strokeWidth="10"
      strokeLinecap="round"
    />
  )
}
