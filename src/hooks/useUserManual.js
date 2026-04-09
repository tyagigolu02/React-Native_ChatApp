import { useState } from 'react';

const useUserManual = () => {
  const [expandedSections, setExpandedSections] = useState({});

  const toggleSection = (index) => {
    setExpandedSections((previousSections) => ({
      ...previousSections,
      [index]: !previousSections[index],
    }));
  };

  const isExpanded = (index) => expandedSections[index] || false;

  const webScrollViewStyles =
    typeof document !== 'undefined'
      ? {
          maxHeight: 'calc(100vh - 80px)',
          overflowY: 'auto',
          WebkitOverflowScrolling: 'touch',
        }
      : {};

  return {
    expandedSections,
    toggleSection,
    isExpanded,
    webScrollViewStyles,
  };
};

export default useUserManual;
