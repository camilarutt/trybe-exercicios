let n = 3;
let simbolo = "*";
let linha = "";

    for (index = 1; index <= n; index +=1) {
        for (let coluna = 1; coluna <= n - index; coluna += 1) {
                linha = linha.concat(" ");
        }
        for (let estrela = 0; estrela < 2 * index - 1; estrela += 1) {
                linha = linha.concat(simbolo);
        }
            linha += "\n";
      }
        console.log(linha);
