import { useMemo, useState } from 'react'
import { products } from '../data/mock'
import { PageHeader } from '../components/PageHeader'
import { ProductArt } from '../components/Thumbs'
import styles from './campus.module.css'

const FILTERS = ['全部', '教材', '电车', '自行车', '数码', '生活'] as const
const TABS = ['二手集市', '我的发布'] as const

export function MarketPage() {
  const [tab, setTab] = useState<(typeof TABS)[number]>('二手集市')
  const [filter, setFilter] = useState<(typeof FILTERS)[number]>('全部')

  const list = useMemo(() => {
    const base = tab === '我的发布' ? products.slice(0, 2) : products
    if (filter === '全部') return base
    return base.filter((p) => p.tag === filter)
  }, [filter, tab])

  return (
    <div className={styles.page}>
      <PageHeader title="校园二手集市" />
      <div className={styles.tabs}>
        {TABS.map((t) => (
          <button key={t} className={`${styles.tab} ${tab === t ? styles.on : ''}`} onClick={() => setTab(t)}>
            {t}
          </button>
        ))}
      </div>
      {tab === '二手集市' ? (
        <div className={`${styles.chips} hide-scroll`}>
          {FILTERS.map((f) => (
            <button key={f} className={`${styles.chip} ${filter === f ? styles.on : ''}`} onClick={() => setFilter(f)}>
              {f}
            </button>
          ))}
        </div>
      ) : null}
      {list.length === 0 ? <p className={styles.empty}>暂无闲置，换个分类看看</p> : null}
      <div className={styles.prodGrid}>
        {list.map((p) => (
          <article key={p.id} className={styles.prod}>
            <div className={styles.prodPic}>
              <ProductArt kind={p.kind} />
              <span className={styles.prodTag}>{p.tag}</span>
            </div>
            <b>{p.title}</b>
            <div className={styles.price}>
              <span>¥{p.price}</span>
              <span className={styles.note}>{p.note}</span>
            </div>
          </article>
        ))}
      </div>
    </div>
  )
}
