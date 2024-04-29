import { type ColorType } from '@/lib/types'

export interface EducationInterface {
  name: string
  type: string
  university: string
  time: string
  color: ColorType
}

export const educations: EducationInterface[] = [
  {
    name: 'Computer Science Student',
    type: "Bachelor's degree",
    university: 'Nile University',
    time: '2021 to 2025',
    color: 'blue',
  },
  {
    name: 'High School Degree',
    type: "Thanaweya Amma Degree",
    university: 'Collège de La Mère De Dieu',
    time: '2019 to 2022',
    color: 'blue',
  },
]
