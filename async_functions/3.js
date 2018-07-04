// асинхронный метод литерала объекта
const obj = {
  // новый синтаксис
  async asyncFunc() {
    console.log('async method');
  }
  // старый синтаксис
  //   asyncFunc: async function() {
  //     console.log('async method');  
  //   }
}

obj.asyncFunc();