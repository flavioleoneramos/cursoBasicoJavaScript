function tabuada(){
    let num = document.getElementById('txtn')
    //var num = Number(numero.value)
    let tab = document.getElementById('seltab')
    //document.write(`${num}</br>`)
    if(num.value.length == 0){
        alert('Informe um dado válido')
    }else{
        let n = Number(num.value)
        let c = 1
        tab.innerHTML = ``
        while(c <= 10){
            let item = document.createElement('option')
            item.Text = `${n} x ${c} = ${n*c}`
            item.value = tab + ` ${c}`
            tab.appendChild(item)
            c++
        }
    }
}