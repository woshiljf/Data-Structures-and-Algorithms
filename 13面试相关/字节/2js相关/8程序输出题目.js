async function async1 () {
  console.log('async1 start 2'); // 2
  await async2();
  console.log('async1 end'); // 7
}

async function async2 () {
  console.log('async2 start');  //3 
  return new Promise((resolve, reject) => {
    resolve('小狗');
    console.log('async2 promise'); //4
  }).then(value => {
    console.log(value);  // 6
  })
}

console.log('script start  1');  // /1

setTimeout(function () {
  console.log('setTimeout');
}, 0);

async1();

new Promise(function (resolve) {
  console.log('promise1 3'); //5
  resolve();
}).then(function () {
  console.log('promise2'); // 8
}).then(function () {
  console.log('promise3'); //10
});

new Promise(function (resolve) {
  resolve();
}).then(function () {
  console.log('promise5'); // 9 
}).then(function () {
  console.log('promise6'); // 11
});



console.log('script end 4')  // 6 