export const chunckedArray = (arr, count) => {
  const newArray = [];
  while (arr.length > 0) {
    newArray.push(arr.splice(0, count));
  }
  return newArray;
}