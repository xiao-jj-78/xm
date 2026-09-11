import heroHome from '../assets/img/hero-home.jpg'
import heroPet from '../assets/img/hero-pet.jpg'
import heroSchedule from '../assets/img/hero-schedule.jpg'
import heroContact from '../assets/img/hero-contact.jpg'
import heroFood from '../assets/img/hero-food.jpg'
import avatarSun from '../assets/img/avatar-sun.jpg'
import avatarStudent from '../assets/img/avatar-student.jpg'
import pBooks from '../assets/img/p-books.jpg'
import pEbike from '../assets/img/p-ebike.jpg'
import pBike from '../assets/img/p-bike.jpg'
import pLaptop from '../assets/img/p-laptop.jpg'
import pBag from '../assets/img/p-bag.jpg'
import pEarbuds from '../assets/img/p-earbuds.jpg'
import dChicken from '../assets/img/d-chicken.jpg'
import dRice from '../assets/img/d-rice.jpg'
import dMango from '../assets/img/d-mango.jpg'
import dPepperPork from '../assets/img/d-pepperpork.jpg'
import dSalad from '../assets/img/d-salad.jpg'
import dYogurt from '../assets/img/d-yogurt.jpg'
import dTomatoEgg from '../assets/img/d-tomatoegg.jpg'
import tParcel from '../assets/img/t-parcel.jpg'
import tTea from '../assets/img/t-tea.jpg'
import tPen from '../assets/img/t-pen.jpg'
import tBadminton from '../assets/img/t-badminton.jpg'
import tPrinter from '../assets/img/t-printer.jpg'
import tMountain from '../assets/img/t-mountain.jpg'
import tCanteen from '../assets/img/t-canteen.jpg'

export const hero = {
  home: heroHome,
  pet: heroPet,
  schedule: heroSchedule,
  contact: heroContact,
  food: heroFood,
}

export const avatar = {
  sun: avatarSun,
  student: avatarStudent,
}

export const productImg = {
  book: pBooks,
  ebike: pEbike,
  bike: pBike,
  laptop: pLaptop,
  bag: pBag,
  earphone: pEarbuds,
} as const

export const dishImg = {
  chicken: dChicken,
  rice: dRice,
  mango: dMango,
  pepperPork: dPepperPork,
  salad: dSalad,
  yogurt: dYogurt,
  tomatoEgg: dTomatoEgg,
} as const

export const thumbImg = {
  box: tParcel,
  tea: tTea,
  pen: tPen,
  badminton: tBadminton,
  printer: tPrinter,
  mountain: tMountain,
  canteen: tCanteen,
  goods: pBag,
  meal: dChicken,
  earphone: pEarbuds,
} as const

export type DishKey = keyof typeof dishImg
export type ThumbKey = keyof typeof thumbImg
