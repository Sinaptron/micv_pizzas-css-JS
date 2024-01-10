/* console.log("hola desde javascript");  */

//******************************
//  --buscar elementos (entre comillas el elemento a buscar)
//  --let palabra reservada y le agregamos una variable para que se almacene ahi la informacion(container)
//  --querySelector---- solo muestra un resultado

/* let tabla =document.querySelector(".table");
console.log(tabla);  */

//   --querySelectroAll ---- muestra todos los elementos
/*  let links =document.querySelectorAll("a");
   console.log(links);   */

//  --recorre cada uno de los elementos (link.forEach)
/* let links =document.querySelectorAll("a");
links.forEach(function(link){
	console.log(link);
});
*/

//******************************

let celdas = document.querySelectorAll("td");

celdas.forEach(function(td){
	td.addEventListener('click',function(){
		console.log("click"); /* este devuelve nombre del elemento seleccionado (this); */
	})
});


		/* obteniendo los elementos .close */

// let links =document.querySelectorAll(".close");

		/* recorriendo los elementos .close */
//  links.forEach(function(link){

		/* agregar un evento click a cada uno */
//  link.addEventListener("click",function(){
//  		console.log("hola hola hola");
// 	});

//******************************

// evitar o bloquear accion o comportamiento al hacer click en un elemento
// bloqueamos boton X (.close) de pagina sensei.html
// link.addEventListener("click",function(ev){ /*ev puede ser event*/
//		ev.preventDefault();

//		return false; /*esto es opcional, sin este codigo funciona tambien */
//	  });
// });

//  ****************************** 

//quitar clases de pagina html-quitaremos las estrellas
// eliminamos las estrellas de pagina index.html

// let iconos =document.querySelectorAll("i");
/*
iconos.forEach(function(icono){
	icono.classList.remove("fa-star");
	icono.classList.remove("fa-star-o");
})  
 ******************************    */
//quitar clases de pagina html-quitaremos las animaciones y agregaremos otras
/*
let links =document.querySelectorAll(".close");

links.forEach(function(link){


		link.addEventListener("click",function(ev){ /*ev puede ser event*/
/*		ev.preventDefault();
		let content = document.querySelector('.content');
		
		//quitamos clases que ya tienes
		content.classList.remove("animate__fadeInDown");
		content.classList.remove("animate__animated");

				//Agregamos nueva clases
		content.classList.add("animate__fadeOutUp");
		content.classList.add("animate__animated");

	return false; /*esto es opcional, sin este codigo funciona tambien */
//	  });
//  }); 


//******************************    */
//redireccionar a otra pagina despues de la animacion

let links =document.querySelectorAll(".close");

links.forEach(function(link){


		link.addEventListener("click",function(ev){ /*ev puede ser event*/
		ev.preventDefault();
		let content = document.querySelector('.content');
		
		//quitamos clases que ya tienes
		content.classList.remove("animate__fadeInDown");
		content.classList.remove("animate__animated");

				//Agregamos nueva clases
		content.classList.add("animate__fadeOutUp");
		content.classList.add("animate__animated");

//redireccionar a pagina con un tiempo de  retraso
setTimeout(function(){
	location.href ="../index.html";  //accion a ejecutar despues del retraso, aqui se redirecciona a pagina index html
},600);

	return false; /*esto es opcional, sin este codigo funciona tambien */
	  });
});


