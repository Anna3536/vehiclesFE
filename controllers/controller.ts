let car: Car; 

function createCar(){ 
    let plate:string=(<HTMLInputElement>document.getElementById("plate")).value;
    let brand:string=(<HTMLInputElement>document.getElementById("brand")).value;
    let color:string=(<HTMLInputElement>document.getElementById("color")).value;
    let formValidate=validateCar(plate,brand,color); 
    if(formValidate==true){
        console.log(plate,brand,color); 
        let car1=new Car(plate,color,brand);
        console.log(car1);
        car =car1;          
    
        (<HTMLFormElement>document.getElementById("form-car")).classList.add("d-none");
        (<HTMLElement>document.getElementById("carInfo")).classList.remove("d-none");
        (<HTMLFormElement>document.getElementById("form-wheels")).classList.remove("d-none");
    } 
        
}


function addWheels(){
    car; 
    console.log(car); 
    let formWheelsValidate=validateWheels(); 
    if(formWheelsValidate===true){
        (<HTMLFormElement>document.getElementById("form-wheels")).classList.add("d-none");
        for(let i=1; i<5;i++){
            let diameter:string=(<HTMLInputElement>document.getElementById("diameter"+ i)).value;
            let brandRueda:string=(<HTMLInputElement>document.getElementById("brand"+i)).value;
            let diametervalue:number=Number(diameter);
            car.addWheel(new Wheel(diametervalue, brandRueda));
        }   
     
        let mensaje:string="";  
        for(let j=0; j<car.wheels.length; j++){
            mensaje+=` 
                <li>diameter:${car.wheels[j].diameter}, brand:${car.wheels[j].brand}</li>
            
            `; 
        }

        const carInfo=(<HTMLElement>document.getElementById("carInfo"))
        const element= (<HTMLElement>document.createElement('div')); 
        element.innerHTML=`
            <div class="card text-center">
                <div class="card-body">
                    <p>CAR:</>
                        <ul style = "list-style:none;">
                            <li>PLATE: ${car.plate}</li>
                            <li>COLOR: ${car.color}</li>
                            <li>BRAND: ${car.brand}</li>
                            <li>WHEELS:
                            <ol>
                            ${mensaje}
                            </ol>
                            </li>
                        </ul>
                </div>
            </div>
        `;
    
        carInfo.appendChild(element);

    }           
        
}
         

function validateCar(plate:string,brand:string,color:string){
    
    let acumErrores:number = 0;
    let form= (<HTMLFormElement>document.getElementById("form-car"));
    form.classList.remove('is-invalid');
  

    if(plate==""){
        (<HTMLInputElement>document.getElementById("plate")).classList.add("is-invalid"); 
        (<HTMLElement>document.getElementById("errorPlate")).textContent = "Añade la matrícula";
        acumErrores++;
    }
    
    //matricula 4 numeros i tres lletres
   
    let plate1=/^(\d{4})([a-zA-Z]{3})$/

    if(!plate1.test(plate)){
        (<HTMLInputElement>document.getElementById("plate")).classList.add("is-invalid"); 
        (<HTMLElement>document.getElementById("errorPlate")).textContent = "la matrícula debe tener 4 números y 3 letras";
        acumErrores++;
    } 


  
 


    if(brand==""){
        (<HTMLInputElement>document.getElementById("brand")).classList.add("is-invalid"); 
        (<HTMLElement>document.getElementById("errorBrand")).textContent = "Añade la Marca";
        acumErrores++;
    }



    if(color==""){
        (<HTMLInputElement>document.getElementById("color")).classList.add("is-invalid"); 
        (<HTMLElement>document.getElementById("errorColor")).textContent = "Añade el color";
        acumErrores++;
    }



    if (acumErrores > 0) { 
        return false;
    } else {
        return true;
    }


}





function validateWheels(){
    
    let acumErrores:number = 0;
    let formWheels= (<HTMLFormElement>document.getElementById("form-wheels"));
    formWheels.classList.remove('is-invalid');
    
    for(let i=1; i<5;i++){
        
    let diameter:string=(<HTMLInputElement>document.getElementById("diameter"+ i)).value;
    let brand:string=(<HTMLInputElement>document.getElementById("brand"+i)).value;

        if(brand==""){
            (<HTMLInputElement>document.getElementById("brand"+i)).classList.add("is-invalid"); 
            (<HTMLElement>document.getElementById("errorBrandWheel"+i)).textContent = "Añade la Marca de la rueda";
            acumErrores++;
        }

        if(diameter==""){
        (<HTMLInputElement>document.getElementById("diameter"+ i)).classList.add("is-invalid"); 
        (<HTMLElement>document.getElementById("errorDiameter"+i)).textContent = "Añade un diametro";
        acumErrores++;
        }

        if(diameter!==""){
            if(Number(diameter)<0.4 || Number(diameter)>2){
                (<HTMLInputElement>document.getElementById("diameter"+ i)).classList.add("is-invalid"); 
                (<HTMLElement>document.getElementById("errorDiameter"+i)).textContent = "Añade un diametro correcto";
                alert("El diametro de la rueda " + i + " no es correcto");
                acumErrores++;
            }
 
        }
    }
    if (acumErrores > 0) {
        return false;
    } else {
        return true;
    }


}



window.addEventListener('keypress', (event:Event) => {
    console.log(event);
    if ((<HTMLInputElement>event.target).value != ''){
        (<HTMLInputElement>event.target).classList.remove('is-invalid');
        (<HTMLInputElement>event.target).textContent = "";
        
    } 
}, true);




window.addEventListener('keypress', (event:Event) => {
    console.log(event);
    if ((<HTMLInputElement>event.target).value != ''){
        (<HTMLInputElement>event.target).classList.remove('is-invalid');
        (<HTMLInputElement>event.target).textContent = "";
       

    } 
}, true);


