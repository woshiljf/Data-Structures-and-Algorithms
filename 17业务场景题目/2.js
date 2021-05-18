setTimeout(() => {
  console.log(1);
}, 0);

var p = new Promise((resolve, reject) => {

  resolve('a')

})
p.then(value => {
  console.log(value);
})