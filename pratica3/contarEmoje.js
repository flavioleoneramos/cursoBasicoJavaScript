function contar(){
    let ini = document.getElementById('txti')
    let fim = document.getElementById('txtf')
    let passo = document.getElementById('txtp')
    let res = document.getElementById('res')

    if(ini.value.length == 0 || fim.value.length == 0 || passo.value.length == 0){
        alert('Erro, dados inválidos')
    }else{
        res.innerHTML = `Contando: `
        var i = Number(ini.value)
        var f = Number(fim.value)
        var p = Number(passo.value)
        if(p == 0){
            p = 1;
            alert('Considerando passo 1')
        }
        if( i < f){
            for(let c = i; c <= f; c += p){
                res.innerHTML += `${c} \u{1F449}`
            }
            
        }else{
            //contagem regressiva
            for(let c = i; c >= f;c-=p){
                res.innerHTML += `${c} \u{1F449}`
            }
        }
        res.innerHTML+= `\u{1F3C1}`
    }


}