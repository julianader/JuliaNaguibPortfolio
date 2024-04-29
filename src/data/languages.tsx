import EN from '@public/image/png/languages/EN.png'
import FR from '@public/image/png/languages/FR.png'
import AR from "@public/image/png/languages/AR.png";
import { type ColorType } from '@/lib/types'
import { type StaticImageData } from 'next/image'

export interface LanguageInterface {
  name: string
  color: ColorType
  image: string | StaticImageData
  percent: string
}

export const languages: LanguageInterface[] = [
  {
    name: 'Arabic (Native)',
    color: 'blue',
    image: AR,
    percent: '100%',
  },
  {
    name: 'French (Fluent)',
    color: 'blue',
    image: FR,
    percent: '90%',
  },  
  {
    name: 'English (Fluent)',
    color: 'blue',
    image: EN,
    percent: '95%',
  },
  // {
  // 	name: "Dutch (Beginner)",
  // 	color: "aqua",
  // 	image: de,
  // 	percent: "15%",
  // },
]
