

function calculateSalary (Salario,ValorVendas){
    let comissao = 0;
    let SalarioTotal = 0
    
    if(ValorVendas <= 1200){
        comissao = ValorVendas * 3 / 100
    } else {
        comissao = ValorVendas * 8 / 100
    }
    SalarioTotal = Salario + comissao
    return SalarioTotal
}

console.log(calculateSalary(2000,1000));

function calculateStock (QtdAtual,QtdMax,QtdMin){
    let media = (QtdMax + QtdMin)/2
    let mensagem = "Efetuar compra"
    if(QtdAtual >= media){
        mensagem = "Não efetuar compra"
    }
    return mensagem
}

console.log(calculateStock(70,100,20))

function calculateAge (Anonascimento,AnoAtual){
    let anos = AnoAtual - Anonascimento;
    let meses = anos * 12;
    let dias = anos * 365
    let semanas = anos * 52
    return `
    a idade dessa pessoa em anos é ${anos}
    a idade dessa pessoa em meses é ${meses} 
    a idade dessa pessoa em dias é ${dias}
    a idade dessa pessoa em semanas é ${semanas}
    `
}

console.log(calculateAge(2003,2021))

function getDiagonal (Matriz){
    let vetores = [];
    for(let indice = 0; indice < Matriz.length; indice++){
        for(let subindice = 0; subindice < Matriz.length; subindice++){
            if(indice === subindice){
                vetores.push(Matriz[indice][subindice])
            }
        }
    }
    return `${vetores}`
}

console.log(getDiagonal([ [1,2,3] , [4,5,6] , [7,8,9] ]))

function cashMachine (Saque){
    let notas = [100,50,20,10,2,1];
    let saldo = Saque
    let quant = [0,0,0,0,0,0];
    for(let indice = 0; indice < notas.length; indice++){
      while(saldo >= notas[indice]){
          saldo -= notas[indice]
          quant[indice]++
      }
  }
  return `
  ${quant[0]} nota(s) de R$ ${notas[0]}
  ${quant[1]} nota(s) de R$ ${notas[1]}
  ${quant[2]} nota(s) de R$ ${notas[2]}
  ${quant[3]} nota(s) de R$ ${notas[3]}
  ${quant[4]} nota(s) de R$ ${notas[4]}
  ${quant[5]} nota(s) de R$ ${notas[5]}
  
  Total do saque de R$ ${Saque}
  `
}

console.log(cashMachine(137))