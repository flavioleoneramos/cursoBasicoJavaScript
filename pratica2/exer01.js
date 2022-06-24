function contar(){
    var inicio = document.getElementById('inicio')
    var fim = document.getElementById('fim')
    var passo = document.getElementById('passo')
    var res = document.getElementById('res')
    var i = Number(inicio.value)
    var f = Number(fim.value)
    var p = Number(passo.value)

    if(i < f){
        for(var c = i; c < f; c+=passo){
            document.write(`Valor ${c}</br>`)
        }
    }else if(f > i){
        for(var c = f; f > i; c-=passo){
            document.write(`Valor ${c}</br>`)
        }
    }
}