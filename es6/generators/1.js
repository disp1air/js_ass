function* generator() {
  console.log('start');
  yield;
  console.log('finish');
}

generator();