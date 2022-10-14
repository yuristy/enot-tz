import { memo } from "react";
import { Box, Typography } from "@mui/material";
import { useQuery } from "@tanstack/react-query";
import { fetchNews } from "../../api";

import styles from './NewsLine.module.css';

const NewsLine = () => {
  const { isLoading, isError, data, error } = useQuery(["news"], fetchNews);

  if (isLoading)
    return (
      <Box className={styles.newsLine}>
        <Typography className={styles.loadingText}
        >
          Loading News...
        </Typography>
      </Box>
    );

  if (isError)
    return (
      <Box className={styles.newsLine}>
        <Typography
          className={styles.text}
        >
          {error}
        </Typography>
      </Box>
    );

  return (
    <Box className={styles.newsLine}>
      <Typography
        className={styles.text}
      >
        {data && data.title}
      </Typography>
    </Box>
  )
}

export default memo(NewsLine);