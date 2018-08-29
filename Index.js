(function (){
	//Variables
	var lista = document.getElementById("lista"),
		tareaInput = document.getElementById("tareaInput"), 
		btnNuevaTarea = document.getElementById("btn-agregar")

	//Funciones

	//Funcion de agregar tarea del boton
	function agregarTarea(){
		var tarea = tareaInput.value,
			nuevaTarea = document.createElement("li"),
			Enlace = document.createElement("a"),
			contenido = document.createTextNode(tarea);

		if (tarea === "") { //Si tarea es igual a nada 
			tareaInput.setAttribute("placeholder","Agrega una tarea valida");
			alert("Ingrese una tarea");
			tareaInput.className = "error";
			return false;//Por que queremos salirnos ya de esa funcion
		}

		//Agregando la tarea a la lista
		Enlace.appendChild(contenido); 
		//Agregamos el atributo de la etiqueta <a> al elemento
		Enlace.setAttribute("href","#");
		//Agregamos el enlace con el contenido al elemento <li>
		nuevaTarea.appendChild(Enlace);
		//Agregamos el elmento <li> que tiene el enlace y el contendio de tarea
		lista.appendChild(nuevaTarea);

		tareaInput.value = ""; //Cuando despues de crear la tarea la caja de texto quede limpia nuevamente

		//Con este ciclo lo que se hara es que cuando se cree una nueva tarea 
		//el usuario le de click y se elimine la tarea
		for (var i=0; i <= lista.children.length-1; i++) {
			lista.children[i].addEventListener("click", function(){
				this.parentNode.removeChild(this);
			});
		}
	};

	//Funcion comprobar input de agregar tarea
	function comprobarInput(){ //Cuando le indique un error y despues agregue la tarea se actualize el placeholder
		tareaInput.className ="";
		tareaInput.setAttribute("placeholder","Agregue tu tarea");		
	}
	//Funcion eliminar tarea
	function eliminarTarea(){ //Cuando este tag hijo tome  su tag padre osea <ul> en el html, este hijo remueva es decir se elimine cuando se ejecute el evento click
		this.parentNode.removeChild(this);
	}

	//Borrando los elementos de la lista
	for (i=0; i<=lista.children.length-1; i++) {
		lista.children[i].addEventListener("click",eliminarTarea);
	}

	//Eventos
	//Funcion agregar tarea
	btnNuevaTarea.addEventListener("click", agregarTarea);	

	//Comprobar input
	tareaInput.addEventListener("click",comprobarInput);
}());