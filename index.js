
// Завдання 1

// Отримати масив імен всіх користувачів (поле name).

// const users = [
//     { id: '1', name: 'Moore Hensley', balance: 150 },
//     { id: '2', name: 'Sharlene Bush', balance: 200 },
//     { id: '3', name: 'Ross Vazquez', balance: 50 },
// ]

// const getUserNames = users => {
//     return users.map(user => user.name);
//   };

//   console.log(getUserNames(users));
  
//   Завдання 2

// Отримати масив об'єктів користувачів за кольором очей (поле eyeColor).

// const users = [
//     {
//       id: '1',
//       name: 'Moore Hensley',
//       friends: ['Sheree Anthony', 'Elma Head'],
//     },
//     {
//       id: '2',
//       name: 'Sharlene Bush',
//       friends: ['Briana Decker', 'Carey Barr'],
//     },
//     {
//       id: '3',
//       name: 'Ross Vazquez',
//       friends: ['Blackburn Dotson', 'Sheree Anthony'],
//     },
//     {
//       id: '4',
//       name: 'Elma Head',
//       friends: ['Goldie Gentry', 'Briana Decker'],
//     },
//     {
//       id: '5',
//       name: 'Carey Barr',
//       friends: ['Blackburn Dotson', 'Ross Vazquez'],
//     },
//     {
//       id: '6',
//       name: 'Blackburn Dotson',
//       friends: ['Ross Vazquez', 'Carey Barr'],
//     },
//     {
//       id: '7',
//       name: 'Sheree Anthony',
//       friends: ['Goldie Gentry', 'Briana Decker'],
//     },
//   ];

//   const getUsersWithFriend = (users, friendName) => {
//     return users
//       .filter(user => user.friends.includes(friendName))
//       .map(user => user.name);
//   };
//   console.log(getUsersWithFriend(users, 'Briana Decker'));

//   Завдання 3

// Отримати масив імен користувачів за статтю (поле gender).

// const users = [
//     { id: '1', name: 'Moore Hensley', gender: 'male' },
//     { id: '2', name: 'Sharlene Bush', gender: 'female' },
//     { id: '3', name: 'Ross Vazquez', gender: 'male' },
//     { id: '4', name: 'Elma Head', gender: 'female' },
//     { id: '5', name: 'Carey Barr', gender: 'male' },
//     { id: '6', name: 'Blackburn Dotson', gender: 'male' },
//     { id: '7', name: 'Sheree Anthony', gender: 'female' },
//   ];
//   const getUsersWithGender = (users, gender) => {
//     return users
//       .filter(user => user.gender === gender) 
//       .map(user => user.name); 
//   }
//   console.log(getUsersWithGender(users, 'male'));

  
// Завдання 4

// Отримати масив тільки неактивних користувачів (поле isActive).

// const users = [
//     { id: '1', name: 'Moore Hensley', isActive: false },
//     { id: '2', name: 'Sharlene Bush', isActive: true },
//     { id: '3', name: 'Ross Vazquez', isActive: false },
//     { id: '4', name: 'Elma Head', isActive: true },
//     { id: '5', name: 'Carey Barr', isActive: true },
//     { id: '6', name: 'Blackburn Dotson', isActive: false },
//     { id: '7', name: 'Sheree Anthony', isActive: true },
//   ];
//   const getInactiveUsers = users => {
//     return users.filter(user => !user.isActive); 
//   };

//   console.log(getInactiveUsers(users));

//   Завдання 5

// Отримати користувача (не масив) по email (поле email, він унікальний).

// const users = [
//     { id: '1', name: 'Moore Hensley', email: 'moorehensley@index.com' },
//     { id: '2', name: 'Sharlene Bush', email: 'sharlenebush@tmail.com' },
//     { id: '3', name: 'Ross Vazquez', email: 'rossvazquez@domain.net' },
//     { id: '4', name: 'Elma Head', email: 'elmahead@omatom.com' },
//     { id: '5', name: 'Carey Barr', email: 'careybarr@gmail.com' },
//     { id: '6', name: 'Blackburn Dotson', email: 'blackburndotson@site.org' },
//     { id: '7', name: 'Sheree Anthony', email: 'shereeanthony@kog.com' },
//   ];

//   const getUserWithEmail = (users, email) => {
//     return users.find(user => user.email === email);
//   }
//   console.log(getUserWithEmail(users, 'shereeanthony@kog.com'));

//   Завдання 6

// Отримати масив користувачів, які потрапляють у вікову категорію від min до max років (поле age).

const users = [
    { id: '1', name: 'Moore Hensley', age: 30 },
    { id: '2', name: 'Sharlene Bush', age: 25 },
    { id: '3', name: 'Ross Vazquez', age: 40 },
    { id: '4', name: 'Elma Head', age: 35 },
    { id: '5', name: 'Carey Barr', age: 20 },
    { id: '6', name: 'Blackburn Dotson', age: 50 },
    { id: '7', name: 'Sheree Anthony', age: 28 },
  ];

  const getUsersWithinAgeRange = (users, min, max) => {
    return users.filter(user => user.age >= min && user.age <= max);
  };

  console.log(getUsersWithinAgeRange(users, 25, 35));