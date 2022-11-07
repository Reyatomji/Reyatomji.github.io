const header = {
  // all the properties are optional - can be left empty or deleted
  homepage: 'https://Reyatomji.github.io',
  title: 'Reya Tomji.',
}

const about = {
  // all the properties are optional - can be left empty or deleted
  name: 'Reya Tomji',
  role: 'Software Engineer',
  description:
    'I\'m a Software Engineer currently pursuing B.Tech in Computer Science and Engineering with Specialization in Cloud Computing from SRM Institute of Science and Technology, KTR.',
  social: {
    github: 'https://github.com/Reyatomji',
  },
}

const projects = [
  // projects can be added an removed
  // if there are no projects, Projects section won't show up
  {
    name: 'Software Design',
    description:
      'In this project, I created programs using Object Oriented Design and Programming.',
    stack: ['OODP', 'C++'],
    sourceCode: 'https://github.com/Reyatomji/OODP'
  },
  {
    name: 'Software Development',
    description:
      'In this project, I created optimized algorithms using Data Structures and Algorithms.',
    stack: ['C', 'DSA'],
  },
]

const skills = [
  // skills can be added or removed
  // if there are no skills, Skills section won't show up
  'C/C++',
  'Object Oriented Design and Programming',
  'Data Structures and Algorithm',
  'Computer Organization and Architecture',
  'JavaScript',
  'Python',
  'HTML',
  'CSS',
  'Git'
]

const contact = {
  // email is optional - if left empty Contact section won't show up
  email: 'rt4575@srmist.edu.in',
}

export { header, about, projects, skills, contact }
