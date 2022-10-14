import { memo, useCallback, useEffect, useState } from "react";
import { Box, Typography } from "@mui/material";
import { useQuery } from '@tanstack/react-query'
import { nanoid } from 'nanoid';
import TodoItem from "../TodoItem";
import { getTodos } from "../../api";

import styles from './TodoList.module.css'

const TodoList = () => {
  const { isLoading, isError, data, error } = useQuery(["todos"], getTodos);

  const [todosData, setTodosData] = useState([]);

  const handleTodoCompletedChange = useCallback(({ itemId, todoId }) => {
    const newTodoData = [...todosData]
    const targetItemIndex = newTodoData.findIndex(item => item.id === itemId)
    const targetTodoIndex = newTodoData[targetItemIndex].todos.findIndex(item => item.id === todoId)
    const targetTodo = newTodoData[targetItemIndex].todos[targetTodoIndex]
    newTodoData[targetItemIndex].todos[targetTodoIndex].completed = !targetTodo.completed
    setTodosData(newTodoData)
  }, [todosData])

  const handleTodoItemClick = useCallback((itemId) => {
    const newTodoData = [...todosData]
    const targetItemIndex = newTodoData.findIndex(item => item.id === itemId)
    newTodoData[targetItemIndex].isExpanded = !newTodoData[targetItemIndex].isExpanded
    setTodosData(newTodoData)
  }, [todosData])

  useEffect(() => {
    if (!data) return
    setTodosData(data)
  }
    , [data])


  if (isLoading)
    return (
      <Box className={styles.list}>
        <Typography>Loading Todos...</Typography>
      </Box>
    );

  if (isError)
    return (
      <Box className={styles.list}>
        <Typography>{error}</Typography>
      </Box>
    );

  return (
    <Box className={styles.list}>
      {todosData.map(
        (todoItem) => {
          return <TodoItem
            key={nanoid(8)}
            item={todoItem}
            onTodoCompletedChange={handleTodoCompletedChange}
            onTodoItemClick={handleTodoItemClick}
          />
        }
      )}
    </Box>
  )
}

export default memo(TodoList);