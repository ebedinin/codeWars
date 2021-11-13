function generateShape(integer){
    return integer === 1?"+":(("+".repeat(integer)+'\n').repeat(integer)).slice(0, -1);
}

console.log(generateShape(5));