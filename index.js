// LOOPS

// 1. create a loop that prints out the numbers 0 - 5 using a while loop
let x=0;
let y=5;
while(x<=y){
    console.log(x);
    x += 1;
}

console.log("-----------")

// 2. create a loop that prints out the numbers 0 - 5 using a for loop
for(let i = 0; i<= 5; i += 1){
    console.log(i)
}

console.log("-----------")

// 3. create a loop that prints out the numbers 0 - 5 using a for loop but for each number return the squared version
for(let i = 0; i<= 5; i += 1){
    console.log(i*i)
}

console.log("-----------")

//4. iterate over the string below and print out each character
let string = "the fox jumps over the moon"; 
for(let i= 0; i <= string.length; i += 1){
    console.log("the char in the string", string[i])
}
