import { useContext } from 'react';
import { Box, Switch, Typography } from '@mui/material';
import { ReactContext } from '../../../context';

import styles from './SettingsWindow.module.css'

const SettingsWindow = () => {
  const { newsLineVisibility, setNewsLineVisibility } = useContext(ReactContext);

  const handleSettingsClick = () => {
    setNewsLineVisibility(prevState => !prevState)
  }

  return (
    <Box className={styles.settingsWindow}>
      <Switch
        checked={newsLineVisibility}
        onChange={handleSettingsClick}
      />
      <Typography>Enable News Line</Typography>
    </Box>
  )
}

export default SettingsWindow;