// const arr = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
// const fin = arr.map(function (a) {
//     return {
//         value: a,
//         isEven: a % 2 === 0,
//         con: function (isEven) {
//             if (isEven) {
//                 console.log("Even");
//             } else {
//                 console.log("Odd");
//             }
//         }
//     }
// });

//                                      remained not successful
// const arr = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
// const dbl = arr.map(function (a) {
//     return a;
// });

// const dbl2 = [];
// for(arrayof in arr){
//     dbl2.push(arrayof *2);
// }

// const dbl3 = arr.map(function (y){
//     return y * 3;
// }
// );

//  value = ()=>{
//     return 'something' 
// }

// const tryit = ()=> {
//     return "Try Again";
// }

// const come = (x,y)=>{
//     if (x >= y){
//         return `x is Greater`
//     }else{
//         return 'y is greater'
//     }
// }

// const square = x =>{
//     return x;
// }

// const square = (n)=> n*n;    Implicit Return


// const triple = (n) =>(        Implicit Return (We Only Can to return one thing like one expression  )
//     n*n*n
// )

// const come = (x,y)=>(
//     if (x >= y){
//         return `x is Greater`       this code is Error because it has more returns not only one expression
//     }else{
//         return 'y is greater'
//     }
// )


// const arr = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
// const triple = arr.map(n => n*3)


// const arr = ['try','wish','get','wind'];
// const getit = arr.find(f =>{
//     return f.includes('wi');
// })

// const num = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
// const word = ['some','again','try','going','sort','trust','gorgeous','agreculture','thing'];
// const letnum = num.filter(n =>(n%2==0))      // this code is working

// const letword = word.filter(w=>(w.toString().concat('something')));  // this code is outputing unexpected result

const arr = ['the main point','world of the game','live of the people'];
const result = arr.filter(r =>{
    return r.includes('the');
})