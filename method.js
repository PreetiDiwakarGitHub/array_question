// method   of array

// push \\\\\\\\\\

// let arr = ["preeti","priya","arti","kopal"];
// console.log[arr.push("komal")];

// let arr = ["preeti","priya","arti","kopal"];
// let b = arr.push("komal");
// console.log(arr);

// pop  \\\\\\\\\\\\\\\\\\

// let arr = ["preeti","priya","arti","kopal"];
// let = arr.pop();
// console.log(arr);

// shift \\\\\\\\\\\\\\\


// let arr = ["preeti","priya","arti","kopal"];
//  let = arr.shift();
//  console.log(arr);


// unshift  \\\\\\\\\\\\\\\\

// let arr = ["preeti","priya","arti","kopal"];
//  let = arr.unshift("komal");
//  console.log(arr);

// splice  \\\\\\\\\\\\\\\\


//  let arr = ["preeti","priya","arti","kopal"];
//  let del = arr.splice(1,3);
//  console.log(arr);


// replace     \\\\\\\\\\\\\\\\\\\\\\\

// let arr = ["preeti","priya","arti","kopal"];
// let p = arr.splice(1,2,"paras");
// console.log(arr);


// slice \\\\\\\\\\\\\\\

// let arr = ["preeti","priya","arti","kopal"];
// let p = arr.slice(1,3);
// console.log(p);

// Array quesrion

// question 1 \\\\\\\\\\\\\\\\\\\

// let num= [];
// for(let i=1; i<=20; i++){
//     num.push(i);

// }
// console.log(num)


// queston  2  \\\\\\\\\\\\\

// let num = ["preeti","priyanka","arti","kopal"];
// for(let i=0; i<=num.length-1; i++){
//     console.log(num[i]);
//}


// question  3  \\\\\\\\\\\\\\\\\\

// let number = [5,4,9,2,1];
// let p= number.reverse(number);
// console.log(p);


// question   4 \\\\\\\\\\\\\\\\

// let num = [5,4,9,2,1,0];
// for(let i=0; i<num.length; i=i+2);
// console.log(num);

// let num = [5,4,9,2,1,0];
//  let i = 0;
// while(i<num.length){
//     console.log(num[i]);
//     i=i+2;
// }


// question  5  \\\\\\\\\\\\\\\\

// let num = ['a',1,2,5,'b','q'];
// console.log(num[num.length-1]);

// question  6    \\\\\\\\\\\\\\\\\

// let num = parseInt(prompt("enter the number"));
// let arr = [1,2,3,4,5,6,7,8];
// let i=0;
// let p = arr.length;
// while(i<p){
//     if(num===a[i])
//     console.log(a[i]);
//     i=i+1;
// }

                                            //   XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX
// let num =(prompt("Enter the number"));
// let arr = [1, 2, 3, 4, 5, 6, 7, 8];
// let i = 0;
// let p = arr.length;

// while (i < p) {
//     if (num === arr[i]) {
//         console.log(arr[i]);
//     }
//     i = i + 1;
// }

// question  7\\\\\\\\\\\\\\\\\\\

// let num = [1,2,3,4,5,6,7];
// console.log(num.includes(2));


// const prompt = require('prompt-sync')();
// let n = parseInt(prompt("enter the number;"));
// let arr = [];
// let sum =0;
// for(let k=0; k<n; k++){
//     arr.push(parseInt(prompt("enter the number;")));
// }
// for(let i=0; i<arr.length; i++){
//     sum = sum + arr[i];
// }
// let p=sum/n;
// console.log(p);



// question   8 \\\\\\\\\\\\\\\\\\\\\




// const prompt = require('prompt-sync')();
// let n = parseInt(prompt('Enter the number of elements:'));
// let arr = [];
// for (let k = 0; k < n; k++) {
//     arr.push(parseInt(prompt("Enter the element:")));
// }
// for (let i = 0; i < arr.length; i++) {
//     if (arr[i] !== -1) { // Initialize count for each element
//         let count = 1;
//         for (let j = i + 1; j < arr.length; j++) {
//             if (arr[j] === arr[i]) {
//                 count++; // Increment count for each occurrence of the element
//                 arr[j] = -1; // Mark the element as visited
//             }
//         }
//         if(count>1){
//             console.log(arr[i], count);
//         }
//     }
// }


// quetion   9  \\\\\\\\\\\\\\\\\\\\\\\\\

// const prompt = require('prompt-sync')();
// let n = parseInt(prompt('enter the number'));
// let a=[];
// for(let i=0; i<n; i++){
//     a.push(parseInt(prompt('enter the element')));
// }
// for(let k=0; k<a.length; k++){
//     if(a[k]!==-1){
//         let count = 1;
//         for(let j=k+1; j<a.length; j++){
//             if(a[j]===a[k]){
//                 count++;
//                 a[j]=-1;
//             }
//         }
//         if(count>1){
//             console.log(a[k],count);
//         }
//     }
// }


// question  10 \\\\\\\\\\\\\\\\\\\\\\\\\\\\

//  const prompt = require('prompt-sync')();
//  let n = parseInt(prompt('enter the number'));
//  let a=[];
//  let count = 0;
//  let count1 = 0;
//  for(let i=0; i<n; i++){
//     a.push(parseInt(prompt('enter the elements')))
//  }
//  for(let j=0; j<a.length; j++){
//     if(a[j]%2==0){
//         count = count + 1;
//     }
//     else{
//         count1 = count1 + 1;
//     }
   
//  }
//  console.log("even",count,"odd",count1);




// array isarray    \\\\\\\\\\\\\\\\\\\\\\\\\\

// let arr = [1,2,3,4,5,6,7,8];
// let p = Array.isArray(arr);
// console.log(p);

// fill \\\\\\\\\\\\\\\\\\\\\\\\\\\\

// let arr = [1,2,3,4,5,6,7,8,9];
// let p = arr.fill("hello",1,3);
// console.log(p);


// every \\\\\\\\\\\\\\\\\\\\\\\\\

// let arr= [1,2,3,4,5,6,7,8,9];
// function number(num){
//     return num>=1;
// }
// console.log(arr.every(number));

// some \\\\\\\\\\\\\\\\\\\\\\\\\\\\\

// let arr = [1,2,3,4,5,6,7];
// function number (num){
//     return num>=7;
// }
// console.log(arr.some(number));




// git init
// git add README.md
// git commit -m "first commit"
// git branch -M main
// git remote add origin https://github.com/PreetiDiwakarGitHub/arrayquestion.git
// git push -u origin main