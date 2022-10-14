import { memo, useState } from "react";
import { Box, Typography } from "@mui/material";
import IconSettings from '../../assets/IconSettings';
import SettingsWindow from "./SettingsWindow";

import styles from './Header.module.css'

const Header = () => {
  const [showMenu, setShowMenu] = useState(false);

  const handleSettingsClick = () => {
    setShowMenu(prevState => !prevState)
  }
  return (
    <Box className={styles.header}>
      <Typography fontSize={36}>
        To Do
      </Typography>
      <IconSettings
        className={styles.icon}
        onClick={handleSettingsClick}
      />
      {showMenu && <SettingsWindow />}
    </Box>
  )
}

export default memo(Header);