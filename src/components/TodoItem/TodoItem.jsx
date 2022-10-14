import { memo } from "react";
import { Box, Checkbox, Typography } from "@mui/material";
import { nanoid } from 'nanoid';
import Todo from './Todo/'
import TodoLine from "../../assets/TodoLine";
import ArrowDown from "../../assets/ArrowDown";

import styles from './TodoItem.module.css'

const TodoItem = ({ item, onTodoCompletedChange, onTodoItemClick }) => {

  return (
    !item.isExpanded ?
      <Box
        onClick={() => onTodoItemClick(item.id)}
        className={styles.itemWrapper}
      >
        <Box className={styles.leftBlock}>
          <TodoLine className={styles.leftLine} color='#A9A9A9' />
          <Typography
            fontSize={22}
            sx={{ marginLeft: 2 }}
          >
            {item.date}
          </Typography>
        </Box>
        <ArrowDown className={styles.arrow} />
      </Box>
      :
      <Box className={styles.container}>
        <Box
          onClick={() => onTodoItemClick(item.id)}
          sx={{ marginLeft: 2 }}
          className={styles.itemHeader}
        >
          <Checkbox
            checked
            className={styles.checkbox}
            sx={{
              '&.Mui-checked': {
                color: "#F4F4F4",
              }
            }} />
          <Typography
            variant='h3'
            fontSize={20}
          >
            {item.date}
          </Typography>
        </Box>
        <Box className={[styles.itemWrapper, styles.open]}>
          {
            item.todos.map((todo) => {
              return <Todo
                key={nanoid(8)}
                itemId={item.id}
                onTodoCompletedChange={onTodoCompletedChange}
                todo={todo} />
            })
          }
        </Box>
      </Box>
  )
}

export default memo(TodoItem);