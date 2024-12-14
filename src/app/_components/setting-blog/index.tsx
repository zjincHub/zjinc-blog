'use client';

import { useState, useEffect } from 'react';
import SettingSwitch from '../setting-switch';
import SettingTheme from '../setting-theme';
import SettingVoice from '../setting-voice';
import classNames from 'classnames';
import SettingDirectory from '../setting-directory';

export default function Index() {
  const [isShowSettings, setIsShowSettings] = useState(false);
  const [isVoice, setIsVoice] = useState(false);
  const [isLight, setIsLight] = useState(true);
  const [isShowDirectory, setIsShowDirectory] = useState(false);

  useEffect(() => {
    document.documentElement.setAttribute(
      'data-theme',
      isLight ? 'light' : 'dark'
    );
  }, [isLight]);

  return (
    <div className="setting-blog">
      <SettingDirectory
        className={classNames('setting-button setting-button-3', {
          'setting-button-hidden': !isShowSettings,
        })}
        value={isShowDirectory}
        onClick={(value) => setIsShowDirectory(value)}
      />
      <SettingVoice
        className={classNames('setting-button setting-button-2', {
          'setting-button-hidden': !isShowSettings,
        })}
        value={isVoice}
        onClick={(value) => setIsVoice(value)}
      />
      <SettingTheme
        className={classNames('setting-button setting-button-1', {
          'setting-button-hidden': !isShowSettings,
        })}
        value={isLight}
        onClick={(value) => setIsLight(value)}
      />
      <SettingSwitch
        className="setting-button setting-button-0"
        value={isShowSettings}
        onClick={(value) => setIsShowSettings(value)}
      />
    </div>
  );
}
