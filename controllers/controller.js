"use strict";
var car;
function createCar() {
    var plate = document.getElementById("plate").value;
    var brand = document.getElementById("brand").value;
    var color = document.getElementById("color").value;
    var formValidate = validateCar(plate, brand, color);
    if (formValidate == true) {
        console.log(plate, brand, color);
        var car1 = new Car(plate, color, brand);
        console.log(car1);
        car = car1;
        document.getElementById("form-car").classList.add("d-none");
        document.getElementById("carInfo").classList.remove("d-none");
        document.getElementById("form-wheels").classList.remove("d-none");
    }
}
function addWheels() {
    car;
    console.log(car);
    var formWheelsValidate = validateWheels();
    if (formWheelsValidate === true) {
        document.getElementById("form-wheels").classList.add("d-none");
        for (var i = 1; i < 5; i++) {
            var diameter = document.getElementById("diameter" + i).value;
            var brandRueda = document.getElementById("brand" + i).value;
            var diametervalue = Number(diameter);
            car.addWheel(new Wheel(diametervalue, brandRueda));
        }
        var mensaje = "";
        for (var j = 0; j < car.wheels.length; j++) {
            mensaje += " \n                <li>diameter:" + car.wheels[j].diameter + ", brand:" + car.wheels[j].brand + "</li>\n            \n            ";
        }
        var carInfo = document.getElementById("carInfo");
        var element = document.createElement('div');
        element.innerHTML = "\n            <div class=\"card text-center\">\n                <div class=\"card-body\">\n                    <p>CAR:</>\n                        <ul style = \"list-style:none;\">\n                            <li>PLATE: " + car.plate + "</li>\n                            <li>COLOR: " + car.color + "</li>\n                            <li>BRAND: " + car.brand + "</li>\n                            <li>WHEELS:\n                            <ol>\n                            " + mensaje + "\n                            </ol>\n                            </li>\n                        </ul>\n                </div>\n            </div>\n        ";
        carInfo.appendChild(element);
    }
}
function validateCar(plate, brand, color) {
    var acumErrores = 0;
    var form = document.getElementById("form-car");
    form.classList.remove('is-invalid');
    if (plate == "") {
        document.getElementById("plate").classList.add("is-invalid");
        document.getElementById("errorPlate").textContent = "Añade la matrícula";
        acumErrores++;
    }
    //matricula 4 numeros i tres lletres
    var plate1 = /^(\d{4})([a-zA-Z]{3})$/;
    if (!plate1.test(plate)) {
        document.getElementById("plate").classList.add("is-invalid");
        document.getElementById("errorPlate").textContent = "la matrícula debe tener 4 números y 3 letras";
        acumErrores++;
    }
    if (brand == "") {
        document.getElementById("brand").classList.add("is-invalid");
        document.getElementById("errorBrand").textContent = "Añade la Marca";
        acumErrores++;
    }
    if (color == "") {
        document.getElementById("color").classList.add("is-invalid");
        document.getElementById("errorColor").textContent = "Añade el color";
        acumErrores++;
    }
    if (acumErrores > 0) {
        return false;
    }
    else {
        return true;
    }
}
function validateWheels() {
    var acumErrores = 0;
    var formWheels = document.getElementById("form-wheels");
    formWheels.classList.remove('is-invalid');
    for (var i = 1; i < 5; i++) {
        var diameter = document.getElementById("diameter" + i).value;
        var brand = document.getElementById("brand" + i).value;
        if (brand == "") {
            document.getElementById("brand" + i).classList.add("is-invalid");
            document.getElementById("errorBrandWheel" + i).textContent = "Añade la Marca de la rueda";
            acumErrores++;
        }
        if (diameter == "") {
            document.getElementById("diameter" + i).classList.add("is-invalid");
            document.getElementById("errorDiameter" + i).textContent = "Añade un diametro";
            acumErrores++;
        }
        if (diameter !== "") {
            if (Number(diameter) < 0.4 || Number(diameter) > 2) {
                document.getElementById("diameter" + i).classList.add("is-invalid");
                document.getElementById("errorDiameter" + i).textContent = "Añade un diametro correcto";
                alert("El diametro de la rueda " + i + " no es correcto");
                acumErrores++;
            }
        }
    }
    if (acumErrores > 0) {
        return false;
    }
    else {
        return true;
    }
}
window.addEventListener('keypress', function (event) {
    console.log(event);
    if (event.target.value != '') {
        event.target.classList.remove('is-invalid');
        event.target.textContent = "";
    }
}, true);
window.addEventListener('keypress', function (event) {
    console.log(event);
    if (event.target.value != '') {
        event.target.classList.remove('is-invalid');
        event.target.textContent = "";
    }
}, true);
