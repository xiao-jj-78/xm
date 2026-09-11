# 阳光大学生互助平台

Mobile H5 prototype of **阳光大学生互助平台** (Sunshine College Student Mutual Aid Platform). A campus lifestyle mini-program: errands, second-hand goods, food stalls, schedule lookup, a sun mascot pet, and an on-campus AI helper.

Visual language follows the attached green / yellow mockups: mint canvas, bubbly white cards, grass-green primary, orange prices, and a persistent bottom tab bar with an elevated **+**.

## Run locally

```bash
npm install
npm run dev
```

Then open the printed local URL (dev server binds `0.0.0.0:43123`).

```bash
npm run build    # production build
npm run preview  # serve the build
```

The app is a **375px-wide phone canvas** centered on a light gray desktop chrome. On narrow screens it goes full-bleed.

Data is mock/static only — no backend.

## Page map

| Route | Screen | How to get there |
| --- | --- | --- |
| `/` | 首页 | Tab **首页** |
| `/services` | 校园生活服务 | Tab **服务** |
| `/tasks` | 校园任务 | Home / services grid, or 校园任务 tab |
| `/market` | 校园二手集市 | Home **二手交易**, services tab |
| `/info` | 校园信息站 | Home **失物招领**, services tab |
| `/food` | 校园订餐 | Home **附近美食** / 热门服务 **校园食堂** |
| `/messages` | 消息 | Tab **消息** |
| `/profile` | 我的 | Tab **我的** |
| `/pet` | 我的阳光 | Home **阳光萌宠**, Profile **我的阳光** |
| `/chat` | 小海·阳光 | Messages first thread, pet **聊天** |
| `/schedule` | 课表查询 | Home **课表查询** |
| `/contact` | 联系管理员 | Profile row |

The center **+** opens a publish sheet (任务 / 闲置 / 信息 / 求助).

## Stack

Vite · React 19 · TypeScript · React Router · CSS Modules. No UI kit — components are hand-styled to match the mockups.
