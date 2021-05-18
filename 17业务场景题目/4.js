// 假设本机无法做加法，需要通过请求远程服务端来实现
// 以加法为例，现有远程API的模拟实现
const addRemote = async (a, b) => new Promise((resolve) => {
  setTimeout(() => resolve(a + b), 1000);
});

// 请实现本地的add方法（add参数不定长），调用addRemote，最优实现输入数字的加法
const add = async (...args) => {
  // 实现




};

const main = async () => {

  console.log(await add(2, 3)); // 5

  console.log(await add(1, 2, 3, 4, 5, 6, 7, 8, 9, 10)); // 55
}

main();
