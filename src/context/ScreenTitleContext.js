import React, { createContext, useContext, useState } from 'react';

const ScreenTitleContext = createContext();

export function ScreenTitleProvider({ children }) {
  const [screenTitle, setScreenTitle] = useState('TranslaTalk');

  return (
    <ScreenTitleContext.Provider value={{ screenTitle, setScreenTitle }}>
      {children}
    </ScreenTitleContext.Provider>
  );
}

export function useScreenTitle(title) {
  const { setScreenTitle } = useContext(ScreenTitleContext);
  
  React.useEffect(() => {
    setScreenTitle(title);
    return () => setScreenTitle('TranslaTalk');
  }, [title, setScreenTitle]);
}


export function useGetScreenTitle() {
  const { screenTitle } = useContext(ScreenTitleContext);
  return screenTitle;
}
