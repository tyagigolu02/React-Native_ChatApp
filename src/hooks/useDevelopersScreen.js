import { useMemo } from 'react';

const useDevelopersScreen = ({ navigation }) => {
  const guide = useMemo(
    () => ({
      name: 'Vikas Shrivastva',
      role: 'Project Guide',
      designation: 'HoD, CSE Department',
      college: 'MIET Meerut',
      bio: 'Guiding and mentoring the team with expertise in software engineering and academic excellence.',
      image: require('../assets/VK.jpg'),
      linkedin: 'https://www.linkedin.com/in/dr-vikas-srivastava-540552ab',
      color: '#f59e0b',
      icon: 'school',
    }),
    []
  );

  const developers = useMemo(
    () => [
      {
        id: '1',
        name: 'Deepanshu Tyagi',
        role: 'Frontend Developer & QA Tester',
        designation: 'Student, CSE Department',
        bio: 'Crafting intuitive user interfaces and ensuring top-notch quality through rigorous testing.',
        skills: ['React', 'JavaScript', 'TailwindCSS', 'Testing', 'UI/UX Design', 'Figma'],
        image: require('../assets/tyagi.jpg'),
        linkedin: 'https://www.linkedin.com/in/tyagigolu02/',
        color: '#3b82f6',
        icon: 'brush',
      },
      {
        id: '2',
        name: 'Amit Saini',
        role: 'Backend & Database Developer',
        designation: 'Student, CSE Department',
        bio: 'Building robust backend systems and managing efficient database architectures for seamless data flow.',
        skills: ['Django', 'Python', 'PostgreSQL', 'MongoDB'],
        image: require('../assets/Amit_Saini.jpg'),
        linkedin: 'https://www.linkedin.com/in/amit-saini-5b7858280/',
        color: '#10b981',
        icon: 'code-slash',
      },
      {
        id: '3',
        name: 'Dev Arya',
        role: 'Backend & DevOps Engineer',
        designation: 'Student, CSE Department',
        bio: 'Developing powerful backend APIs and ensuring smooth deployments with modern DevOps practices.',
        skills: ['Django', 'Python', 'Docker', 'Deployment'],
        image: require('../assets/Dev_Arya.jpg'),
        linkedin: 'https://www.linkedin.com/in/dev-arya/',
        color: '#8b5cf6',
        icon: 'server',
      },
      {
        id: '4',
        name: 'Ankit Kumar',
        role: 'Frontend Developer & Documentation',
        designation: 'Student, CSE Department',
        bio: 'Ensuring comprehensive project documentation and contributing to frontend development for an enhanced user experience.',
        skills: ['React', 'Markdown', 'Technical Writing', 'CSS3', 'HTML5'],
        image: require('../assets/Ankit_Kumar.jpg'),
        linkedin: 'https://www.linkedin.com/in/ankit-kumar-4300b425b/',
        color: '#f97316',
        icon: 'document',
      },
    ],
    []
  );

  const stats = useMemo(
    () => [
      { value: '4', label: 'Team Members' },
      { value: '10+', label: 'Languages' },
      { value: '1', label: 'Mission' },
    ],
    []
  );

  const handleGetInTouch = () => {
    navigation.navigate('Feedback');
  };

  return {
    guide,
    developers,
    stats,
    handleGetInTouch,
  };
};

export default useDevelopersScreen;
