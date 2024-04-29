import { type ColorType, type SkillCategoryType } from '@/lib/types'

export interface SkillCategoryInterface {
  name: SkillCategoryType
  color: ColorType
  icon: string
}

export interface SkillInterface {
  name: string
  category: SkillCategoryType
  logo: string
  percent: string
}

export const skillCategories: SkillCategoryInterface[] = [
  {
    name: 'code',
    color: 'bluee',
    icon: 'ci:code',
  },
  {
    name: 'design',
    color: 'purple',
    icon: 'ci:swatches-palette',
  },
  {
    name: 'uiframework',
    color: 'pink',
    icon: 'ic:outline-format-paint',
  },
  {
    name: 'other',
    color: 'green',
    icon: 'ic:baseline-bolt',
  },
]

export const skills: SkillInterface[] = [
  //React
  {
    name: 'React.js',
    category: 'code',
    logo: 'simple-icons:react',
    percent: '100%',
  },
  //Node
  {
    name: 'Node.js',
    category: 'code',
    logo: 'simple-icons:nodedotjs',
    percent: '100%',
  },
  //JS
  {
    name: 'Javascript',
    category: 'code',
    logo: 'simple-icons:javascript',
    percent: '75%',
  },
  //TSX
  {
    name: 'Typescript',
    category: 'code',
    logo: 'simple-icons:typescript',
    percent: '75%',
  },
  //Python 5
  {
    name: 'Python',
    category: 'code',
    logo: 'simple-icons:python',
    percent: '75%',
  },
  //c
  {
    name: 'C',
    category: 'code',
    logo: 'simple-icons:c',
    percent: '100%',  
  },
  //c++
  {
    name: 'C++',
    category: 'code',
    logo: 'simple-icons:cplusplus',
    percent: '100%',
  },
  //Java
  {
    name: 'Java',
    category: 'code',
    logo: 'mdi:language-java',
    percent: '75%',
  },
  //html5
  {
    name: 'HTML5',
    category: 'code',
    logo: 'simple-icons:html5',
    percent: '75%',
  },
  //Clean Code 10
  {
    name: 'Clean code principles',
    category: 'other',
    logo: 'mdi:monitor-clean',
    percent: '100%',
  },
  //Github
  {
    name: 'Github',
    category: 'other',
    logo: 'simple-icons:github',
    percent: '100%',
  },
  //Agile 
  {
    name: 'Agile Methodologies',
    category: 'other',
    logo: 'iconoir:agile',
    percent: '75%',
  },
  //Chakra
  {
    name: 'Chakra UI',
    category: 'uiframework',
    logo: 'simple-icons:chakraui',
    percent: '100%',
  },
  //Material ui
  {
    name: 'Material UI',
    category: 'uiframework',
    logo: 'simple-icons:mui',
    percent: '100%',
  },
  //css3 15
  {
    name: 'CSS 3',
    category: 'code',
    logo: 'simple-icons:css3',
    percent: '100%',
  },
  //docker
  {
    name: 'Docker',
    category: 'other',
    logo: 'simple-icons:docker',
    percent: '100%',
  },
  //ui design
  {
    name: 'UI Design',
    category: 'design',
    logo: 'mdi:design',
    percent: '75%',
  },
  //figma
  {
    name: 'Figma',
    category: 'design',
    logo: 'simple-icons:figma',
    percent: '100%',
  },
  //canva 19
  {
    name: 'Canva',
    category: 'design',
    logo: 'simple-icons:canva',
    percent: '100%',
  },
  //oop
  {
    name: 'OOP',
    category: 'other',
    logo: 'simple-icons:blackmagicdesign',
    percent: '100%',
  },
]
