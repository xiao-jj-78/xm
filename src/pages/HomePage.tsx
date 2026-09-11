import { Link } from 'react-router-dom'
import { homeServices, hotServices, latestFeed } from '../data/mock'
import { IconPin, IconSearch, IconSpeaker, serviceIconMap } from '../components/Icons'
import { ProductArt } from '../components/Thumbs'
import { hero, thumbImg } from '../data/images'
import styles from './HomePage.module.css'

export function HomePage() {
  return (
    <div className={styles.page}>
      <div className={styles.top}>
        <div className={styles.brand}>
          <IconPin size={16} color="#67c23a" />
          生活服务小程序
        </div>
        <span className={styles.dots}>···</span>
      </div>

      <label className={styles.search}>
        <IconSearch />
        <input placeholder="搜索你需要的服务、商品或信息" />
      </label>

      <div className={`${styles.chips} hide-scroll`}>
        {['代取快递', '校园二手', '失物招领', '食堂盖饭'].map((c) => (
          <span key={c} className={styles.chip}>
            {c}
          </span>
        ))}
      </div>

      <div className={styles.hero} style={{ backgroundImage: `url(${hero.home})` }}>
        <div>
          <h2>
            让校园生活
            <br />
            更简单
          </h2>
          <p>互助 · 分享 · 便利 · 成长</p>
        </div>
      </div>

      <div className={styles.grid}>
        {homeServices.map((s) => (
          <Link key={s.title} to={s.to} className={styles.cell}>
            <span className={styles.icon} style={{ background: s.tint }}>
              {serviceIconMap[s.icon]?.({ size: 22 })}
            </span>
            {s.title}
          </Link>
        ))}
      </div>

      <div className={styles.notice}>
        <span className={styles.badge}>校园公告</span>
        <IconSpeaker />
        <div className={styles.marquee}>
          <span>图书馆周末延长开放至 22:00 · 北区食堂三楼档口招商中 · 春季学期课表已可查询</span>
        </div>
      </div>

      <section className={styles.block}>
        <div className={styles.blockHead}>
          <h3>热门服务</h3>
          <Link to="/services" className={styles.more}>
            更多
          </Link>
        </div>
        <div className={`${styles.hots} hide-scroll`}>
          {hotServices.map((h) => (
            <Link key={h.title} to={h.to} className={styles.hot}>
              <div className={styles.hotPic}>
                <ProductArt kind={h.kind} />
              </div>
              <b>{h.title}</b>
              <span>{h.sub}</span>
            </Link>
          ))}
        </div>
      </section>

      <section className={styles.block}>
        <div className={styles.blockHead}>
          <h3>任务&二手最新</h3>
          <Link to="/tasks" className={styles.more}>
            更多
          </Link>
        </div>
        <div className={styles.latest}>
          {latestFeed.map((f) => (
            <Link key={f.title} to={f.to} className={styles.latestRow}>
              <img src={thumbImg[f.thumb]} alt="" loading="lazy" />
              <div className={styles.latestBody}>
                <b>
                  <span className={styles.kind}>{f.kind}</span>
                  {f.title}
                </b>
                <span>{f.sub}</span>
              </div>
              <em>¥{f.price}</em>
            </Link>
          ))}
        </div>
      </section>
    </div>
  )
}
