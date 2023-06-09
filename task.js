const users = [
  {
  id: 1,
  name: 'John',
  isActive : true
  },
  {
    id: 2,
    name: 'Jack',
    isActive : true
  },
 {
    id: 3,
    name: 'Mike',
    isActive : true
  },
];
const getUserNames = (arr) => {
  const names = [];
  for (let i = 0; i <= users.length - 1; i++) {
    names.push(arr[i].name);
  }
  return(names)
};
const getUsersNames1 = (arr) => arr.map((user) => ({user.name}));
console.log(getUsersNames1(users));



