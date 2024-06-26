// console.log("TRAIN AREA!");

// MIT Task - M
// function a(array) {
//     let newarr:Object[] = [];
//     array.map( ele => {
//         newarr.push({
//             number: ele,
//             square: ele*ele,
//         })
//     })
//     return newarr;
// }

// console.log(a([1,2,3]));
// function ikkiKarra(arr: number[]): { [key: number]: number } {
//     const count: { [key: number]: number } = {};
//     arr.forEach((number) => {
//         if (count[number]) {
//             count[number]++;
//         } else {
//             count[number] = 1;
//         }
//     });

//     const kvadrant: { [key: number]: number } = {};
//     Object.keys(count).forEach((key) => {
//         kvadrant[parseInt(key)] = count[parseInt(key)] * count[parseInt(key)];
//     });

//     return kvadrant;
// }

// const son = [1, 2, 2, 3, 3, 3, 4, 4, 4, 4];
// console.log(ikkiKarra(son));

// // MIT Task - L

// function ongdanChapga(a: string): string {
//     return a.split(' ')
//     .map(soz => soz.split('')
//     .reverse().join(''))
//     .join(' ');
//   }
  
//   console.log(ongdanChapga("Bugun yakshanba!"));

//  MIT TASK - K

// function unlilar(str: string): number {
//     const unli = 'aeiou';
//     let count = 0;
  
//     for (const ele of str.toLowerCase()) {
//       if (unli.includes(ele)) {
//         count++;
//       }
//     }
  
//     return count;
//   }
  
//   console.log(unlilar("Salom Dunyo"));

// // MIT TASK - J

// function engUzuni(a: string): string {
//     const lugat = a.split(' ');
//     let uzuni = '';
  
//     for (const soz of lugat) {
//       if (soz.length > uzuni.length) {
//         uzuni = soz;
//       }
//     }
//     return uzuni;
//   }
  
//   console.log(engUzuni("Hi I am SAMANDAR and I am 21 years old"));

// function engKopi(a: number[]): number | undefined {
//     const b: { [key: number]: number } = {};
  
//     for (const num of a) {
//       b[num] = (b[num] || 0) + 1;
//     }
  
//     let c = 0;
//     let eng: number | undefined;
  
//     for (const key in b) {
//       if (b[key] > c) {
//         c = b[key];
//         eng = Number(key);
//       }
//     }
  
//     return eng;
// }
// console.log(engKopi([1, 2, 3, 0, 4, 5, 0, 6, 0, 7, 8, 9, 9, 9, 9, 9]));

// // H2 - TASK

// let b: string;

// function faqatRaqam(b: string): string {
//     const raqam: string[] = [];
//     const a = b.split("");
//     for( let  i = 0; i <= a.length; i++) {
//         if(!isNaN(Number(a[i]))) {
//          raqam.push(a[i]);
//         }
//     }
//     return raqam.join("");
// }

// console.log(faqatRaqam("salom123qalesan?321"));

// // H - TASK

// let a: number[];

// function plus(a: number[]) {
//     const musbat: number[] = [];
//     for (let i = 0; i <=a.length; i++) {
//         if(a[i] > 0) {
//             musbat.push(a[i]);
//         }
//     }
//     const b =  musbat.toString();
//     // const b =  musbat.join("");
//     return b;
// }

// console.log(plus([1, -7, 2, 3, 4, -9, 5, 6, -1, -5]));

// // G -TASK

// function Katta(a) {
// const kattaIndex = a.reduce((kattaIndex, son, index) => {
//   if (son > a[kattaIndex]) {
//     return index;
//   }
//   return kattaIndex;
// }, 0);
// return kattaIndex;
// }

// console.log(Katta([1, 2, 3, 4, 5, 5, 5, 1, 6, 6]));

// // F - TASK

// function ikki(a) {
//   const b = a.split("").filter((ele, index, self) => {
//   const c = self.indexOf(ele);
//   const d = self.lastIndexOf(ele);
//   return c!== d;
// });
// if (b.length >= 2) {
//   console.log(true);
//   }
// }
// ikki("hello");


// // E - TASK


// function teskari(a) {

//   const b =  a.split("");

//   const c = b.reverse("");

//   const z = c.join("");

//   return z;
// }

// console.log(teskari("apple"));



// // D - TASK

// function birXil(a,b) {

// let i = a.split("").sort().join("");
// let z = b.split("").sort().join("");

// if (i === z) {
//   console.log(true);
// } else {
//   console.log(false);
// }
// }
// birXil("eshit", "ishte");

// // C - TASK

// const date = new Date();
// const hour = date.getHours();
// const min = date.getMinutes();
// class Shop {
    
//     constructor(qoldiq, sotuv, qabul) {
//       this.qoldiq = qoldiq;
//       this.sotuv = sotuv;
//       this.qabul = qabul;
//     }

//     product() {
//           console.log(`${this.qoldiq}`);
//           console.log(hour,min);
//     }

//     sale() {
//           console.log(`${this.sotuv}`);
//           console.log(hour,min);
//     }

//     deliver() {
//         console.log(`${this.qabul}`);
//         if(`${this.qoldiq}` >= 0) {
//           console.log(hour,min);
//         }
//     }
// }

// const shop = new Shop(1,2,3);
// shop.deliver();

// // B - TASk

// function raqam(a) {
//   let hisobla = 0;
//   for(let i = 0; i <= a.length; i++) {
//     if(a[i] >= 0) {
//       hisobla++;
//     }
//   }
//   return hisobla;
// }

// console.log(raqam("asd123"));




// // A - TASK
// // function count(z, x) {
// //     return x.split(z).length -1;
// //   }
  
// //   console.log(count('a', 'avtomexanizatsiya')); // 4

// function sozichida(harf, soz) {
//     let hisobla = 0;
//     for (let z = 0; z < soz.length; z++) {
//       if (soz[z] === harf) {
//         hisobla++;
//       }
//     }
//     return hisobla;
//   }
  
//   console.log(Isozichida('a', 'mamlakat')); // 3


// // const setTimeout = require("setTimeOut");
// console.log("Jack Ma maslahatlari!");

// const list = [
//     "Yaxshi talaba bo'ling!",  // 0-20
//     "To'gri boshliq tanlang va Ko'proq xaton qiling!",  // 20-30
//     "O'zingizga ishlashni boshlang!",  // 30-40
//     "Siz kuchli bo'lgan narslarni qiling",  // 40-50
//     "Yoshlarga investitsiya qiling",  // 50-60
//     "Endi dam oling, Foydasi yo'q"  // 60
// ];

// // define via CALLBACK function
// function maslahatBering(a, callback) {
//     if (typeof a !== "number") callback("insert a number", null);
//     else if (a <= 20) callback(null, list[0]);
//     else if (a > 20 && a <= 30) callback(null, list[1]);
//     else if (a > 30 && a <= 40) callback(null, list[2]);
//     else if (a > 40 && a <= 50) callback(null, list[3]);
//     else if (a > 50 && a <= 60) callback(null, list[4]);
//     else {
//         setInterval(function () {
//             callback(null, list[5]);
//         }, 1000);

//         // setTimeout(function () {
//         //     callback(null, list[5]);
//         // }, 4000);
//     }
// };

// // call via CALLBACK function
// console.log("passed here 0");
// maslahatBering(65, (err, data) => {
//     if (err) console.log("ERROR:", err);
//     else {
//         console.log("javob:", data);
//     }
// });
// console.log("passed here 1");

// call via then/catch
// console.log("passed here 0");
// maslahatBering(65)     // async functionlar sync functionlardan keyin ishga tushadi.
//     .then((data) => {
//         maslahatBering(20)    
//     .then((data) => {
//         maslahatBering(35)     
//     .then((data) => {
//         maslahatBering(47)    
//     .then((data) => {
//         maslahatBering(53)     
//     .then((data) => {
//          console.log("javob:", data);
//     })
//     .catch((err) => {
//         console.log("ERROR:", err);
//     });
//          console.log("javob:", data);
//     })
//     .catch((err) => {
//         console.log("ERROR:", err);
//     });
//          console.log("javob:", data);
//     })
//     .catch((err) => {
//         console.log("ERROR:", err);
//     });
//          console.log("javob:", data);
//     })
//     .catch((err) => {
//         console.log("ERROR:", err);
//     });
//          console.log("javob:", data);
//     })
//     .catch((err) => {
//         console.log("ERROR:", err);
//     });
// console.log("passed here 1");


// // define via ASYNC function
// async function maslahatBering(a) {
//     if (typeof a !== "number") throw new Error("insert a number");
//     else if (a <= 20) return list[0];
//     else if (a > 20 && a <= 30) return list[1];
//     else if (a > 30 && a <= 40) return list[2];
//     else if (a > 40 && a <= 50) return list[3];
//     else if (a > 50 && a <= 60) return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             resolve(list[4]);
//         }, 5000);
//     });
//     else {
//         return new Promise((resolve, reject) => {
//             setInterval(() => {
//                 resolve(list[5]);
//             }, 1000);
//         });

//         // return new Promise((resolve, reject) => {
//         //     setTimeout(() => {
//         //         resolve(list[5]);
//         //     }, 5000);
//         // });

//     //     setTimeout(function () {
//     //         return list[5];
//     //     }, 4000);
//     }
// };





// // call via async function with setInterval
// async function run() {
//     let javob = await maslahatBering(20);
//     console.log(javob);
// }    
// run();



//call via ASYNC function
// async function run() {
//     let javob = await maslahatBering(20);
//     console.log(javob);
//     javob = await maslahatBering(55);
//     console.log(javob);
//     javob = await maslahatBering(35);
//     console.log(javob);
//     javob = await maslahatBering(65);
//     console.log(javob);
//     javob = await maslahatBering(44);
//     console.log(javob);
// }
// run();