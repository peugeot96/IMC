
// Patron modulo
(()=>{
  
    

    class datos {
    
        constructor(peso,altura){
    
         this.peso=peso
         this.altura=altura   
        }
    
    
        imc(){
    
           let alcuadrado =  this.altura= Math.pow(this.altura,2)
    
            let index =     this.peso/alcuadrado
    
            let indexString = index.toString().slice(4,6)
    
            
            return  `Tu indice es de : <strong> ${indexString} </strong>`
        }
    
    
    
    }
    
    let form = document.querySelector("#calcular-imc")
    
    form.addEventListener("submit", function(e){
    
        e.preventDefault()
    
        const peso = document.querySelector("#peso").value
    
        const altura = document.querySelector("#altura").value
    
        if(peso === "" || altura === ""){
    
          console.log("mal mal")  
        }else{
            
            let div = document.querySelector("#resultado")
    
            let persona = new datos(peso,altura)
    
            div.innerHTML=persona.imc()
    
        }
    
    })

    
})();

