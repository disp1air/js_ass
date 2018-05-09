// function applyForVisa(documents, resolve, reject) {
//     console.log('Обработка заявления...');
//     setTimeout(() => {
//         Math.random() > 0.5 ? resolve({}) : reject('В визе отказано!');
//     }, 2000);
// }

function applyForVisa(documents) {
  console.log('Обработка заявления...');
  let promise = new Promise((resolve, reject) => {
      setTimeout(() => {
          Math.random() > 0.5 ? resolve({}) : reject('В визе отказано!');
      }, 2000);
  });
  return promise;
}

function getVisa(visa) {
  console.info('Виза получена');
  return new Promise((resolve, reject) => {
      resolve(visa);
  });
}

function bookHotel(visa) {
  console.log(visa);
  console.log('Бронируем отель');
  return Promise.resolve(visa);
}

function buyTickets(booking) {
  console.log('Покупаем билеты');
  console.log('Бронь', booking);
}

applyForVisa({})
  .then(getVisa)
  .then(bookHotel)
  .then(buyTickets)
  .catch(error => console.error(error))

// applyForVisa(
//     {},
//     visa => {
//         console.info('Виза получена');
//         bookHotel(
//             visa,
//             (reservation) => {
//                 buyTickets(
//                     reservation,
//                     () => {},
//                     () => {}
//                 )
//             },
//             (error) => {}
//         );
//     },
//     (reason) => console.error(reason)
// );