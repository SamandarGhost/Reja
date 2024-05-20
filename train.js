// console.log("TRAIN AREA!");
// A - TASK

// const setTimeout = require("setTimeOut");
console.log("Jack Ma maslahatlari!");

const list = [
    "Yaxshi talaba bo'ling!",  // 0-20
    "To'gri boshliq tanlang va Ko'proq xaton qiling!",  // 20-30
    "O'zingizga ishlashni boshlang!",  // 30-40
    "Siz kuchli bo'lgan narslarni qiling",  // 40-50
    "Yoshlarga investitsiya qiling",  // 50-60
    "Endi dam oling, Foydasi yo'q"  // 60
];

// define via CALLBACK function
function maslahatBering(a, callback) {
    if (typeof a !== "number") callback("insert a number", null);
    else if (a <= 20) callback(null, list[0]);
    else if (a > 20 && a <= 30) callback(null, list[1]);
    else if (a > 30 && a <= 40) callback(null, list[2]);
    else if (a > 40 && a <= 50) callback(null, list[3]);
    else if (a > 50 && a <= 60) callback(null, list[4]);
    else {
        setInterval(function () {
            callback(null, list[5]);
        }, 1000);

        // setTimeout(function () {
        //     callback(null, list[5]);
        // }, 4000);
    }
};

// call via CALLBACK function
console.log("passed here 0");
maslahatBering(65, (err, data) => {
    if (err) console.log("ERROR:", err);
    else {
        console.log("javob:", data);
    }
});
console.log("passed here 1");

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