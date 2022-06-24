

function verificar(){
    var data = new Date()
    var ano = data.getFullYear()
    var fano = document.getElementById('txtano')
    var img = document.getElementById('imagem')
    var res = document.getElementById('res')
    var fsex = document.getElementsByTagName('radsex')
    var idade = ano - Number(fano.value)
    //document.write(typeof(idade))
    //var genero = ''
    if(fano.value == 0 || Number(fano.value) > ano){
        window.alert('Verifique os dados inseridos!')
    }else{
        
        /*var img = document.createElement('img')
        img.setAttribute('id','foto')*/
        //alert('olá mundo')
        //if(fsex[0].checked){
            //genero = 'Homem'
            if(idade >= 0 && idade < 10){
                //criança
                //img.setAttribute('src','child.jpg')
                img.src = 'child.jpg'
            }else if(idade < 21){
                //jovem
                //img.setAttribute('src','jovem.jpg')
                img.src = 'jovem.jpg'
            }else if(idade < 50){
                //adulto
                //img.setAttribute('src','homem.jpg')
                img.src = 'homem.jpg'
            }else{
                //idoso
                //img.setAttribute('src','idoso.jpg')
                img.src = 'idoso.jpg'
            }

        //}else if(fsex[1].checked){
            //genero = 'Mulher'
            /*if(idade >= 0 && idade < 10){
                //criança
                //img.setAttribute('src','childm.jpg')
                img.src = 'childm.jpg'
            }else if(idade < 21){
                //jovem
                //img.setAttribute('src','jovemm.jpg')
                img.src = 'jovemm.jpg'
            }else if(idade < 50){
                //adulto
                //img.setAttribute('src','mulher.jpg')
                img.src = 'mulher.jpg'
            }else{
                //idoso
                //img.setAttribute('src','idosa.jpg')
                img.src = 'idosa.jpg'
            }
        //}*/
        //res.innerHTML = `Detectamos ${genero} com idade ${idade}`
    }
}
