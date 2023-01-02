// const small = 1;
// const medium = 2;
// const large = 3;

//Pascal scale
// initially starting value starts with 0
enum Size {Small, Medium, Large}
let mySize = Size.Medium;
console.log(mySize);

// if we providing value starting then automatically it would increase
// next element with 1 increment
enum Size1 {Small = 10, Medium, Large}
let mySize1 = Size1.Large;
console.log(mySize1);

// if its string then we have to provide value to all
enum Size2 {Small = 'a', Medium = 'b', Large = 'c'} 
let mySize2 = Size2.Small;
console.log(mySize2);

 

