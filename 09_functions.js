const hello =()=>{
    console.log("Hey how are you")
}

function plustwonumbers(x,y){
    return (x + y)/2
}

const sum =(p, q)=>{
    return p+q
}

let a = 6
let b = 2
let c = 3

console.log("The value of a + b is ", plustwonumbers(a,b))
console.log("The value of a + b is ", plustwonumbers(b,c))
console.log("The value of a + b is ", plustwonumbers(c,a))
console.log("the sum of a + b is ",sum(a,b))

// The value of a + b is  4
// The value of a + b is  2.5
// The value of a + b is  4.5
// 8