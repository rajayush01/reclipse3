import img1 from "../assets/img1.webp"
import img2 from "../assets/img2.webp"
import img3 from "../assets/img3.webp"


export type Film = {
  slug: string
  title: string
  duration: string
  location: string
  poster: string
  url: string
}

export const films: Film[] = [
  {
    slug: 'salt-and-static-film',
    title: 'Salt & Static',
    duration: '04:12',
    location: 'Faro, Portugal',
    poster:
      img1,
    url: 'https://www.youtube.com/watch?v=aqz-KE-bpKQ',
  },
  {
    slug: 'the-quiet-hour-film',
    title: 'The Quiet Hour',
    duration: '03:47',
    location: 'Kyoto, Japan',
    poster:
      img2,
    url: 'https://www.youtube.com/watch?v=aqz-KE-bpKQ',
  },
  {
    slug: 'nine-rooms-film',
    title: 'Nine Rooms',
    duration: '05:03',
    location: 'Turin, Italy',
    poster:
      img3,
    url: 'https://www.youtube.com/watch?v=aqz-KE-bpKQ',
  },
]
