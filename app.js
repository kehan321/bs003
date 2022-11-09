var a = ["a","b","c","d","e"]
// push  last main value aik add karna

a.push("2");
console.log(a);

// pop :last sai ek value nikalna
 
a.pop();
console.log(a);
// shift :start sai ek value nikaldega

a.shift();
console.log(a);

// unshift :start m ek value add krega

a.unshift("x");
console.log(a);


// slice :array sai value copy krnna

var b=a.slice(0,2);   (a,b)
console.log(b);

// splice :array sai value nikal daita h depend number
//  2,2 do k bd do wali value use krna hai mtlb a b c d e to b kai bd c d
a.splice         
console.log(a);

// 2,2 do k bd do wali value use krna hai mtlb a b c d e to b kai bd c d but jo m nikal rha hun to os jga kuch add krna chah rha "a"
a.splice(2,2,"azam","khan");
console.log(a);


var d =  a.indexOf("azam");
console.log(d);

// a,a,a,a,a,a,a,,a,a,a,a,a,a,a,a,a,,a,a,,a,a,a,a,a,
// array kai ander kitni values hen oska count nikalna

var b=a.length;
console.log(b);


// ek hi kam ko barbar kam krna mtlb kai ending point daidna yhn sai yhn tk krna hai

for (var i=0; i < 3; i++){
alert("abc");
}  



num = +prompt("Enter any no you want to a multiplication table")

console.log("Multiplication table of "+num + " is:")

for(var i=0; i < 10; i++){
    console.log(num + " x " + (i+1) + "  =  " + num*(i+1));
}
