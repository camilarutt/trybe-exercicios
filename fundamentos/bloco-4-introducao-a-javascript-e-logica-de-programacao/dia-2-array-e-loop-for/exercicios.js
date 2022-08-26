var arraya = [0]

for (index = 0; arraya.length <= 25; index +=1) {
    arraya.push(arraya[index] += 1);
}

console.log(arraya);