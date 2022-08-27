let info = {
    personagem: 'Margarida',
    origem: 'Pato Donald',
    nota: 'Namorada do personagem principal nos quadrinhos do Pato Donald',
    recorrente: 'Sim',
};

let infoDois = {
    personagem: 'Tio Patinhas',
    origem: 'Christmas on Bear Mountain, Dell\'s Four Color Comics #178',
    nota: 'O último MacPatinhas',
    recorrente: 'Sim',
};

  console.log("Bem vinda, " + info.personagem);

  console.log(info);

  for (let keys in info) {
    console.log(keys);
  }

  for (let keys in info) {
    console.log(info[keys]);
  }

  for (let keys in info, infoDois) {
    if (info[keys] != infoDois[keys]) {
    console.log(info[keys] + ' ' + infoDois[keys]);
    }
    else {
        console.log('Ambos recorrentes');
    }
  }

