import type { DishKey, ThumbKey } from './images'

export type ServiceItem = {
  id: string
  title: string
  desc: string
  icon: string
  tint: string
  to: string
}

export type TaskItem = {
  id: string
  type: string
  status: '进行中' | '招募中'
  title: string
  price: number
  place: string
  time: string
  user: string
  signups: number
  thumb: ThumbKey
}

export type Product = {
  id: string
  title: string
  price: number
  tag: string
  note: string
  kind: 'book' | 'ebike' | 'bike' | 'laptop' | 'bag' | 'earphone'
}

export type Post = {
  id: string
  tag: string
  body: string
  user: string
  place: string
  time: string
  likes: number
  comments: number
  thumb?: ThumbKey
}

export type Stall = {
  id: string
  name: string
  badge: string
  rating: number
  monthly: number
  dishes: { name: string; price: number; img: DishKey }[]
}

export type Message = {
  id: string
  name: string
  preview: string
  time: string
  unread?: number
  kind: 'ai' | 'system' | 'user' | 'info'
}

export const homeServices: { title: string; icon: string; tint: string; to: string }[] = [
  { title: '生活互助', icon: 'heart', tint: '#ffe0e6', to: '/tasks' },
  { title: '结伴出行', icon: 'bus', tint: '#dcebff', to: '/tasks' },
  { title: '失物招领', icon: 'bag', tint: '#fff3c4', to: '/info' },
  { title: '附近美食', icon: 'food', tint: '#ffe4cc', to: '/food' },
  { title: '课表查询', icon: 'cal', tint: '#e6deff', to: '/schedule' },
  { title: '阳光萌宠', icon: 'sun', tint: '#fff4c2', to: '/pet' },
  { title: '校园任务', icon: 'task', tint: '#dff6c9', to: '/tasks' },
  { title: '二手交易', icon: 'shop', tint: '#ffe0c2', to: '/market' },
]

export const campusServices: ServiceItem[] = [
  { id: '1', title: '生活互助', desc: '跑腿·代取·互助', icon: 'heart', tint: '#ffe0e6', to: '/tasks' },
  { id: '2', title: '结伴出行', desc: '拼车·结伴·出行', icon: 'bus', tint: '#dcebff', to: '/tasks' },
  { id: '3', title: '失物招领', desc: '丢失·拾获·归还', icon: 'bag', tint: '#fff3c4', to: '/info' },
  { id: '4', title: '附近美食', desc: '探店·美食·优惠', icon: 'food', tint: '#ffe4cc', to: '/food' },
  { id: '5', title: '课表查询', desc: '一键查询学期课表', icon: 'cal', tint: '#e6deff', to: '/schedule' },
  { id: '6', title: '校园活动', desc: '讲座·社团·比赛', icon: 'paw', tint: '#dff6c9', to: '/info' },
  { id: '7', title: '校园任务', desc: '互助任务一键接单', icon: 'task', tint: '#e4f7d2', to: '/tasks' },
  { id: '8', title: '二手交易', desc: '闲置转转更环保', icon: 'shop', tint: '#ffe0c2', to: '/market' },
  { id: '9', title: '校园信息站', desc: '公告·活动·互助', icon: 'chat', tint: '#d8efff', to: '/info' },
  { id: '10', title: '快捷代取', desc: '快递代取更省心', icon: 'flash', tint: '#ffe4cc', to: '/tasks' },
]

export const hotServices: { title: string; sub: string; kind: ThumbKey; to: string }[] = [
  { title: '代取快递', sub: '北门驿站随时可取', kind: 'box', to: '/tasks' },
  { title: '二手交易', sub: '教材数码低价转', kind: 'goods', to: '/market' },
  { title: '校园食堂', sub: '档口热销盖饭', kind: 'meal', to: '/food' },
]

export const tasks: TaskItem[] = [
  {
    id: 't1',
    type: '代取快递',
    status: '进行中',
    title: '帮忙取快递（北门驿站）',
    price: 8,
    place: '快递',
    time: '今天 18:00',
    user: '小白同学',
    signups: 3,
    thumb: 'box',
  },
  {
    id: 't2',
    type: '结伴出行',
    status: '招募中',
    title: '一起去食堂吃饭（4人）',
    price: 10,
    place: '食堂',
    time: '今天 12:00',
    user: '小明同学',
    signups: 1,
    thumb: 'canteen',
  },
  {
    id: 't3',
    type: '生活互助',
    status: '进行中',
    title: '帮忙打印资料',
    price: 6,
    place: '打印店',
    time: '今天 16:00',
    user: '小绿',
    signups: 2,
    thumb: 'printer',
  },
  {
    id: 't4',
    type: '结伴出行',
    status: '招募中',
    title: '周末出爬山',
    price: 20,
    place: '后山',
    time: '周六 09:00',
    user: '山风',
    signups: 2,
    thumb: 'mountain',
  },
]

export const latestFeed: { kind: '求助' | '二手'; title: string; sub: string; price: number; thumb: ThumbKey; to: string }[] = [
  { kind: '求助', title: '帮忙取快递', sub: '北门驿站 · 今天 18:00', price: 8, thumb: 'box', to: '/tasks' },
  { kind: '二手', title: '9成新无线耳机', sub: '数码 · 可议价', price: 99, thumb: 'earphone', to: '/market' },
]

export const products: Product[] = [
  { id: 'p1', title: '高数教材 9成新', price: 20, tag: '教材', note: '包邮', kind: 'book' },
  { id: 'p2', title: '九成新电动车', price: 680, tag: '电车', note: '可议价', kind: 'ebike' },
  { id: 'p4', title: '山地自行车 9成新', price: 350, tag: '自行车', note: '可自提', kind: 'bike' },
  { id: 'p6', title: '笔记本电脑 轻薄本', price: 1200, tag: '数码', note: '可议价', kind: 'laptop' },
  { id: 'p3', title: '双肩背包', price: 45, tag: '生活', note: '包邮', kind: 'bag' },
  { id: 'p5', title: '无线耳机', price: 99, tag: '数码', note: '可议价', kind: 'earphone' },
]

export const posts: Post[] = [
  {
    id: 'n1',
    tag: '活动',
    body: '一起喝奶茶，惠园 2 人\n想找搭子下午茶，有没有同学报名～',
    user: '茶茶',
    place: '惠园',
    time: '12分钟前',
    likes: 18,
    comments: 6,
    thumb: 'tea',
  },
  {
    id: 'n2',
    tag: '互助',
    body: '求一支黑色签字笔\n明天早八考试，谁有多余的借一下，用完马上还！',
    user: '阿木',
    place: '图书馆',
    time: '28分钟前',
    likes: 9,
    comments: 4,
    thumb: 'pen',
  },
  {
    id: 'n3',
    tag: '互助',
    body: '求帮忙取快递\n下午有课去不了驿站，小件，可给跑腿费。',
    user: '小北',
    place: '北门驿站',
    time: '1小时前',
    likes: 11,
    comments: 3,
    thumb: 'box',
  },
  {
    id: 'n4',
    tag: '活动',
    body: '招羽毛球球友（周末下午）\n风雨操场，新手友好，球拍可共用。',
    user: '羽球君',
    place: '风雨操场',
    time: '2小时前',
    likes: 24,
    comments: 8,
    thumb: 'badminton',
  },
]

export const stalls: Stall[] = [
  {
    id: 's1',
    name: '阳光美食',
    badge: '招牌盖饭',
    rating: 4.9,
    monthly: 1280,
    dishes: [
      { name: '黄焖鸡米饭', price: 12, img: 'chicken' },
      { name: '经典盖饭', price: 10, img: 'rice' },
      { name: '芒果西米露', price: 6, img: 'mango' },
      { name: '香辣鸡腿饭', price: 13, img: 'chicken' },
    ],
  },
  {
    id: 's2',
    name: '青椒小炒肉',
    badge: '人气档口',
    rating: 4.7,
    monthly: 860,
    dishes: [
      { name: '青椒小炒肉', price: 7, img: 'pepperPork' },
      { name: '番茄炒蛋', price: 6, img: 'tomatoEgg' },
      { name: '招牌盖饭', price: 9, img: 'rice' },
    ],
  },
  {
    id: 's3',
    name: '轻食沙拉吧',
    badge: '低卡推荐',
    rating: 4.8,
    monthly: 540,
    dishes: [
      { name: '鸡胸沙拉', price: 15, img: 'salad' },
      { name: '酸奶杯', price: 8, img: 'yogurt' },
      { name: '芒果西米露', price: 6, img: 'mango' },
    ],
  },
]

export const messages: Message[] = [
  {
    id: 'm1',
    name: '小海·阳光',
    preview: '你好呀，今天想查课表还是找食堂？',
    time: '刚刚',
    unread: 1,
    kind: 'ai',
  },
  {
    id: 'm2',
    name: '系统通知',
    preview: '你发布的「帮忙取快递」已有 3 人报名',
    time: '10:21',
    unread: 2,
    kind: 'system',
  },
  {
    id: 'm3',
    name: '小白同学',
    preview: '快递我已经放到宿舍楼下啦～',
    time: '昨天',
    kind: 'user',
  },
  {
    id: 'm4',
    name: '校园信息站',
    preview: '有人回复了你的帖子「求一支黑色签字笔」',
    time: '昨天',
    kind: 'info',
  },
]

export const courses = [
  { day: 1, slot: 1, name: '高等数学', place: '教A201', color: '#7eb6ff' },
  { day: 2, slot: 1, name: '线性代数', place: '教B105', color: '#b39bff' },
  { day: 3, slot: 1, name: '线性代数', place: '教B105', color: '#b39bff' },
  { day: 1, slot: 2, name: '大学英语', place: '教C302', color: '#7ed67a' },
  { day: 2, slot: 2, name: '大学英语', place: '教C302', color: '#7ed67a' },
  { day: 3, slot: 2, name: '大学英语', place: '教C302', color: '#7ed67a' },
  { day: 1, slot: 3, name: '数据结构', place: '实验楼', color: '#f6c35b' },
  { day: 2, slot: 3, name: '计算机网络', place: '教A401', color: '#f0a0c0' },
  { day: 3, slot: 3, name: '大学英语', place: '语音室', color: '#7ed67a' },
  { day: 4, slot: 3, name: '体育', place: '操场', color: '#6fd0c4' },
  { day: 1, slot: 4, name: '数据库原理', place: '教B210', color: '#8ab4ff' },
  { day: 2, slot: 4, name: '体育', place: '操场', color: '#6fd0c4' },
  { day: 5, slot: 4, name: '人工智能', place: '教A105', color: '#f08aa8' },
]

export const petItems = [
  { name: '阳光能量', count: 12, emoji: '☀️' },
  { name: '蜂蜜蛋糕', count: 8, emoji: '🍰' },
  { name: '香皂', count: 5, emoji: '🧼' },
  { name: '玩具球', count: 3, emoji: '🎾' },
]

export const achievements = [
  { name: '互助达人', icon: '💛' },
  { name: '早八战士', icon: '📚' },
  { name: '美食猎手', icon: '🍱' },
  { name: '阳光满满', icon: '🏅' },
]
