var a=10 
console.log(a)

a=20 
console.log(a)


var a=30 
console.log(a)

let b=40 
console.log(b)

b=50 
console.log(b)


// let b=60 Error: cannot redeclare

const c=70 
console.log(c)


// c=80 Error: cannot reassign 
// const c=90  Error: cannot redeclare 



var namee="Allwin Marshal J"
var age=22 
var programming_knowledge="python"

console.log(namee)
console.log(age);
console.log(programming_knowledge);

console.log(typeof(namee));
console.log(typeof(age));
console.log(typeof(programming_knowledge));



var fruits=["apple","pineapple","orange","pomegranate"]

console.log(fruits)
console.log(fruits[0])
console.log(fruits[fruits.length-1])


var marksheet={

    name:"Allwin Marshal J",
    Role:"Python Full Stack Developer",
    GCPA:8.9 
}

console.log(marksheet)

console.log(marksheet.name)
console.log(marksheet.Role)
console.log(marksheet.GCPA)



// var username=prompt()
// var age=prompt()

// alert(username)
// alert(age)



var a=5
var t=10 

console.log(a+t)
console.log(a-t)
console.log(a*t)
console.log(a/t)
console.log(a%t)
console.log(a**t)


var a=5
console.log(a++)
console.log(a)
console.log(++a);

// Solution
// 5
// 6
// 7

var a=10
var e=a--
var f=--a

console.log(a)
console.log(e)
console.log(f);

// Solution
// 8
// 10
// 8


var a=5
var z=10 

console.log(a+=z)
console.log(a-=z)
console.log(a*=z)
console.log(a/=z)
console.log(a%=z)




console.log(5=="5")
// output: true 

console.log(5==="5")
//output: False

console.log(10!=10)
//output:false

console.log(10!=="10")
//output:Ture 


var a=6

if(a>0 && a<5){
    console.log(true)
}
else{
    console.log(false)
}


var a=7

if(a>0 || a<5){
    console.log(true)
}
else{
    console.log(false)
}

var a=9

if(a!=9){
    console.log(true)
}
else{
    console.log(false)
}



var age=2

var result=age>=18? "eligible" : "not eligible"

console.log(result)


console.log(typeof ("hello" + 10))
console.log(typeof (10 + true))
console.log(typeof (10 + null))
console.log(typeof ("hello" + undefined))

// output
// string
// number
// number
// string


var value=prompt("enter a number: ")
var number=Number(value)
console.log(number+10)



console.log(Boolean(""))
console.log(Boolean("Hello"))
console.log(Boolean(0))
console.log(Boolean(true))


// output
// false
// true
// false
// true


var a=55 

if(a<0){
    console.log("negative")
}

else{
    console.log("positive")
}