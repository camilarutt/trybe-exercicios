var arraya = [0]

for (index = 0; arraya.length <= 25; index +=1) {
    arraya.push(arraya[index] += 1);
}

console.log(arraya);

for (let divisor of arraya) {
    divisor /= 2;
    console.log(divisor);
}
