let grandeprimo = 0;

for (index = 2; index <= 50; index += 1) {
    let primo = true;
    for (indexDois = 2; indexDois < index; indexDois += 1) {
    if (index % indexDois === 0) {
        primo = false;
    }
    if (primo) {
        grandeprimo = index;
    }
}
}


 console.log(grandeprimo);
