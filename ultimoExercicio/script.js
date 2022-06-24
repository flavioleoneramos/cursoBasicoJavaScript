

/*var myObj = {"navoverlay":"#nav-overlay","width":100,"height":100,"diameter":1000,"margintop":100, "marginleft":100}
alert('ok')

            // convertendo em JSON
            var myJSON = JSON.stringify(myObj);
            localStorage.setItem("testJSON", myJSON);
            
            
            // convertendo em obj:
            var text = localStorage.getItem("testJSON");
            var obj = JSON.parse(text);
            //vc acesssa qualquer dado
            document.write(obj.diameter)*/



let num = document.querySelector("input#fnum")
let lista = document.querySelector("select#flista")
let res = document.querySelector("div#res")
let valores = []

function isNumero(n){
    if(Number(n) >= 1 && Number(n) <= 100){
        return true
    }else{
        return false
    }
}

function inLista(n,l){
    if(l.indexOf(Number(n)) != -1){
        return true
    }else{
        return false
    }
}

function adicionar(){
    
    if(isNumero(num.value) && !inLista(num.value,valores)){
        //window.alert("ok")
        valores.push(Number(num.value))
        let item = document.createElement("option")
        item.innerText = `Valor ${num.value} adicionado`
        lista.appendChild(item)
        res.innerHTML = ""
    }else{
        window.alert("Valor inválido ou ja encontrado adicionado na lista.")
    }
    num.value = ""
    num.focus()
}

function finalizar(){
    
    if(valores.length == 0){
        alert("Adicione valores antes de finalizar.")
    }else{
        //alert("ok")
        let tot = valores.length
        let maior = valores[0]
        let menor = valores[0]
        let soma = 0
        let media = 0
        for(let pos in valores){
            soma += valores[pos]
            if(valores[pos] > maior){
                maior = valores[pos]
            }
            if(valores[pos] < menor){
                menor = valores[pos]
            }
        }
        media = soma / tot
        res.innerHTML = ""
        res.innerHTML+= `<p>Ao todo temos ${tot} números adicionados</p>`
        res.innerHTML+= `<p>O maior número é ${maior}</p>`
        res.innerHTML+= `<p>O menor número é ${menor}</p>`
        res.innerHTML+= `<p>A soma é ${soma}</p>`
        res.innerHTML+= `<p>A média é ${media}</p>`

    }
}

let header = document.getElementById('nav-fullscreen');
			let overlay = document.querySelector('.overlay');
			let navTogle = document.querySelector('.nav-toggle');
			let resizeNav = () => {
			    let radius = Math.sqrt(Math.pow(window.innerHeight, 2) + Math.pow(window.innerWidth, 2));
			    let diametro = radius * 2;
			    document.querySelector('.overlay') + window.innerWidth + diametro;
			    document.querySelector('.overlay') + window.innerHeight + diametro;
			    document.querySelector('.overlay').style.marginTop + -radius;
			    document.querySelector('.overlay').style.marginLeft + -radius;
			};

			let openMenu = () => {
				overlay.classList.toggle('open');
				header.classList.toggle('open');
				navTogle.classList.toggle('animate-button');
				resizeNav();
			};
			navTogle.addEventListener('click', openMenu);


            
            


        