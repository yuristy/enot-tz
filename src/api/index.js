import moment from 'moment';
import axios from 'axios';
import { nanoid } from 'nanoid';
import { PRIORITY_COLORS } from '../utils/constants';
import { chunckedArray } from '../utils';

export const getTodos = async () => {
  const { data } = await axios.get('https://jsonplaceholder.typicode.com/todos?_start=0&_limit=21')
  const splittedArray = chunckedArray(data, 3)
    .map((todos, index) => {
      return {
        date: moment().add(index, 'days').calendar(),
        id: nanoid(8),
        isExpanded: false,
        todos: todos.map((todo, index) => ({ ...todo, priority: PRIORITY_COLORS[index] }))
      }
    })
  return splittedArray;
}

export const fetchNews = async () => {
  const { data } = await axios('https://saurav.tech/NewsAPI/top-headlines/category/health/us.json');
  return data.articles[0];
};