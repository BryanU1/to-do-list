export default function project(title, indexNumber) {
  let list = [];
  const add = (item) => list.push(item);
  const remove = (index) => list.splice(index, 1);
  const getTitle = () => title;
  const setTitle = (newTitle) => title = newTitle;
  const getList = () => list;
  const getIndexNumber = () => indexNumber;
  return {
    add,
    remove,
    getTitle,
    setTitle,
    getList,
    getIndexNumber
  };
}