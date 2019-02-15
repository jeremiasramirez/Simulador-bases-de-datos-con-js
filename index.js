
 class Client {

  		constructor(names,lastname,age){

  			this.names = names;
  			this.lastname = lastname;
  			this.age = age;

  		}
  		createClient(){
  			// table content id
  				let tableContent = document.getElementById("table__content")
  					let contain = Array.from(tableContent.querySelectorAll('tr'))
  			//elements contents

  			 // container element
  			 	let trContain = document.createElement("tr");
  			 		trContain.setAttribute("class","table__column");

  			 		// element content
  			 		// name
  			 		let namesElement = document.createElement("td")
  			 			namesElement.setAttribute("class","column__names")
  			 			namesElement.textContent = this.names;

  			 			// add content element to content parent
  			 			trContain.appendChild(namesElement )

  			 		// lastnames element
  			 		let lastNamesElement = document.createElement("td")
  			 			lastNamesElement.setAttribute("class","column__names")
  			 			lastNamesElement.textContent = this.lastname;
						trContain.appendChild(lastNamesElement)


  			 			// ages element
  			 			let ageElement = document.createElement("td")
  			 			ageElement.setAttribute("class","column__names")
  			 			ageElement.textContent = this.age;


  			 			// validation dbclick elements delete
  			 			trContain.addEventListener("dblclick",function(e){
                 
                 (function MessageDelete(){
                   let ev = e.target;
                let ovl = document.createElement("div");
                  ovl.setAttribute("class", "ovl");
                  document.body.insertAdjacentElement('beforebegin',ovl);
                  
                let deletes = document.createElement("button");
                  deletes.setAttribute("class", "deletes-blue");
                  deletes.textContent = "Eliminar"

                  let cancel = document.createElement("button");
                  cancel.setAttribute("class", "cancel-blue");
                  cancel.textContent = "Cancelar"

                   ovl.appendChild(deletes);
                   ovl.appendChild(cancel);

                   deletes.addEventListener("click",(e)=>{
                       trContain.remove()
                       ovl.classList.add("trans");
                   })
                   cancel.addEventListener("click",(e)=>{
                      ovl.classList.add("trans");
                   },false )
                   setTimeout((e)=>{
                     ovl.classList.add("trans");
                   },4000)
                 })()
                 
  			 			})
  			 			trContain.appendChild(ageElement)

  			 			return tableContent.insertBefore(trContain,tableContent.children[1])

  		}

  }

// inputs values id
let input__name = document.getElementById("input__name")

let input__lastname = document.getElementById("input__lastname")
let input__age = document.getElementById("input__age")
let addClient = document.getElementById("addClient")
let tabLenghts = document.getElementById("table__content")
let content = Array.from(tabLenghts.querySelectorAll('tr'))

function getValues(name,lastname,age,addClient){

let iteration = 2;

addClient.addEventListener("click",function(){
	
	let time = setInterval(function(){

		addClient.textContent = 'Agregando... ' + iteration--;
		if(iteration <= 1){

			clearInterval(time);
			addClient.textContent = 'Esperando datos..' 


			if(name.value !== '' && lastname.value !== '', age.value !== ''){

	// instance class Client.
	  let newInstance = new Client(name.value,lastname.value,age.value)
		let newConstructor = newInstance.createClient();

		// clean inputs
		name.value = ''
		lastname.value = ''
		age.value = ''


		let input__values = document.getElementById("values")
		input__values.classList.add('count__client')
 		input__values.textContent = content.length++ + ' Usuarios'
 		addClient.textContent = 'Listo!' 

}
 
		}
	},1000)

	 


	 
},false)





}
// arguments 
let values = getValues(input__name,input__lastname,input__age,addClient)

