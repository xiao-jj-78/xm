import { productImg, thumbImg, type ThumbKey } from '../data/images'
import styles from './Thumbs.module.css'

export function ProductArt({ kind }: { kind: string }) {
  const src =
    kind in productImg
      ? productImg[kind as keyof typeof productImg]
      : kind in thumbImg
        ? thumbImg[kind as ThumbKey]
        : undefined
  if (!src) return <div className={styles.art} />
  return <img className={styles.img} src={src} alt="" loading="lazy" />
}

export function Avatar({ name, hue, src }: { name: string; hue?: string; src?: string }) {
  if (src) {
    return <img className={styles.avatar} src={src} alt={name} />
  }
  return (
    <span className={styles.avatar} style={{ background: hue || '#c8ec8a' }}>
      {name.slice(0, 1)}
    </span>
  )
}
