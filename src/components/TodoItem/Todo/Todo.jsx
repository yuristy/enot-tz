import { memo } from 'react'
import { Box, Switch, Typography } from '@mui/material'
import { makeStyles } from '@mui/styles'
import cn from 'classnames'
import TodoLine from '../../../assets/TodoLine'
import UncheckedIcon from '../../../assets/UncheckedIcon'
import CheckedIcon from '../../../assets/CheckedIcon'
import { TODO_DESCRIPTION } from '../../../utils/constants'

import styles from './Todo.module.css'

const useStyles = makeStyles(() => ({
  toggle: {
    width: '60px',
    height: '40px',
    '& .MuiSwitch-track': {
      backgroundColor: '#366EFF',
    }
  },
}))

const Todo = ({ todo, itemId, onTodoCompletedChange }) => {

  const classes = useStyles();

  return (
    <Box className={styles.todo}>
      <TodoLine color={todo.priority} />
      <Box
        sx={{ marginLeft: 2 }}
        className={styles.text}
      >
        <Typography
          className={cn(styles.textTitle, todo.completed && styles.crossed)}
          variant='h4'
          fontSize={24}
          title={todo.title}
        >
          {todo.title}
        </Typography>
        <Typography
          className={styles.textDescription}
          variant='p'
          fontSize={14}
          title={TODO_DESCRIPTION}
        >
          {TODO_DESCRIPTION}
        </Typography>
      </Box>
      <Switch
        className={classes.toggle}
        onChange={() => onTodoCompletedChange({ itemId: itemId, todoId: todo.id })}
        checked={todo.completed}
        icon={<UncheckedIcon />}
        color='success'
        checkedIcon={<CheckedIcon />} />
    </Box>
  )
}

export default memo(Todo);