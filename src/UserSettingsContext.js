import React, { createContext, useContext, useState } from 'react';

const UserSettingsContext = createContext();

export const UserSettingsProvider = ({ children }) => {
  const [settings, setSettings] = useState({
    theme: 'light',
    language: 'english',
    displayPreferences: [],
  });

  const updateSettings = (newSettings) => {
    setSettings({ ...settings, ...newSettings });
  };

  return (
    <UserSettingsContext.Provider value={{ settings, updateSettings }}>
      {children}
    </UserSettingsContext.Provider>
  );
};

export const useUserSettings = () => useContext(UserSettingsContext);
