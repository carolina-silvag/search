var listBusqueda = ['hola', 'chao', 'bienvenido', 'buen dia', 'adios']
var busca = prompt ('¿ingrese palabra?')

function busqueda(listBusqueda, busca){
	for(var i = 0; i < listBusqueda.length; i++){
		if (listBusqueda[i]== busca){
			console.log(i)
			break
		}
	}
}
busqueda(listBusqueda, busca)
