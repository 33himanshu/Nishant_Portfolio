import { MilestoneTypes } from '@/types';

export const ExperienceData = [
  {
    id: 1,
    type: MilestoneTypes.Education,
    date: '2022 - 2026',
    title: 'Bachelor of Technology in Information Technology',
    img: '/company-logo/niet.png',
    organization: 'Noida Institute of Engineering and Technology',
    location: 'Greater Noida, India',
    gpa: 7.38,
    description: [
      'Pursuing Bachelor of Technology with focus on Information Technology, cloud computing, and software development.',
      'Maintaining CGPA of 7.38 while actively participating in technical projects and cultural activities.',
    ],
    technologies: [
      'Java',
      'Python',
      'Data Structures',
      'Algorithms',
      'Object-Oriented Programming',
      'Database Management',
      'Computer Networks',
      'Operating Systems',
    ],
  },
  {
    id: 2,
    type: MilestoneTypes.Work,
    date: 'October 2024 - November 2024',
    title: 'Cloud Computing Trainee',
    img: '/company-logo/niet.png',
    organization: 'Noida Institute of Engineering and Technology',
    location: 'Greater Noida, India',
    description: [
      'Trained on core Azure services including VMs, Containers, Azure Web Apps, and MySQL.',
      'Deployed real-time VMs, containers, and Docker images using Azure CLI and Portal.',
      'Built a final project on traffic-based auto-scaling of a web page using Azure Cloud Services.',
    ],
    technologies: [
      'Microsoft Azure',
      'Virtual Machines',
      'Docker',
      'Azure CLI',
      'Azure Web Apps',
      'MySQL',
      'Container Services',
      'Auto-scaling',
    ],
  },
];
