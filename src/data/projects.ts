import img1 from "../assets/img1.webp"
import img2 from "../assets/img2.webp"
import img3 from "../assets/img3.webp"
import img4 from "../assets/img4.webp"
import img5 from "../assets/img5.webp"
import img6 from "../assets/img6.webp"
import img7 from "../assets/img7.webp"
import img8 from "../assets/img8.webp"
import img9 from "../assets/img9.webp"
import img10 from "../assets/img10.webp"

export type Project = {
  slug: string
  title: string
  location: string
  year: string
  cover: string
  synopsis: string
  gallery: string[]
  quote: string
}

// Editorial, unsplash-sourced placeholders standing in for Kaia's
// own negatives until the real archive is supplied.
export const projects: Project[] = [
  {
    slug: 'salt-and-static',
    title: 'Salt & Static',
    location: 'Faro, Portugal',
    year: '2024',
    cover:
      img4,
    synopsis:
      'A week chasing the last light along the Algarve coast, shot on expired Kodak stock. The story of a town that keeps its secrets at low tide.',
    gallery: [
      img2,img3,img1
    ],
    quote: '“Some places don’t photograph. They confess.”',
  },
  {
    slug: 'the-quiet-hour',
    title: 'The Quiet Hour',
    location: 'Kyoto, Japan',
    year: '2023',
    cover:
      img9,
    synopsis:
      'Before the shops open and the streets fill, Kyoto belongs to its temples and its fog. A study of stillness before the city wakes.',
    gallery: [
      img6,img7,img8
    ],
    quote: '“Silence, it turns out, has a texture.”',
  },
  {
    slug: 'nine-rooms',
    title: 'Nine Rooms',
    location: 'Turin, Italy',
    year: '2022',
    cover:
      img10,
    synopsis:
      'An abandoned palazzo, nine rooms, nine kinds of light. A portrait of a building remembering what it used to hold.',
    gallery: [
      img10,img1,img2
    ],
    quote: '“Every empty room is a held breath.”',
  },
]
