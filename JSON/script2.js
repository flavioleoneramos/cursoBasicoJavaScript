var myJSON = {'nome':'Flávio','idade':31,'cidade':'Caratinga'}
var myObj = JSON.parse(myJSON)
document.getElementById('demo').innerHTML = myObj.nome 