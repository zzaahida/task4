import React from 'react';
import { useUserSettings } from './UserSettingsContext';

const SettingsPage = () => {
  const { settings, updateSettings } = useUserSettings();

  const handleThemeChange = () => {
    const newTheme = settings.theme === 'light' ? 'dark' : 'light';
    updateSettings({ theme: newTheme });
  };

  const handleLanguageChange = (e) => {
    updateSettings({ language: e.target.value });
  };

  return (
    <div className={`app ${settings.theme}`}>
      <h1>{settings.language === 'english' ? 'User Settings' : 'Настройки пользователя'}&hearts;</h1>
      <div>
        <label>
        {settings.language === 'english' ? 'Theme: ' : 'Тема: '}
          <button onClick={handleThemeChange}>{settings.theme === 'light' ? 'Dark' : 'Light'} &hearts;</button>
        </label>
      </div>
      <div>
        <label>
          {settings.language === 'english' ? 'Language: ' : 'Язык: '}
          <select value={settings.language} onChange={handleLanguageChange}>
            <option value="english">English&hearts;</option>
            <option value="russian">Русский&hearts;</option>
          </select>
        </label>
      </div>
    </div>
  );
};

export default SettingsPage;
