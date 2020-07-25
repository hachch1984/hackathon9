

var txt = document.getElementById('userText');
var arrData = [];
var step = 0;
var selectedExerciseCode = "";

function userText_keyEvent_Enter(event) {

    if (event.keyCode === 13 && selectedExerciseCode === "") {
        var exerciseCode = txt.value.trim();
        if (txt.value.toLowerCase().trim() === "cls") {
            document.getElementById('textList').innerHTML = '';
            fxLoad();
        }
        else if (1 <= Number(exerciseCode) && Number(exerciseCode) <= 15) {
            selectedExerciseCode = exerciseCode;

            fxConsole_AddText('*** EJERCICIO NUMERO ' + exerciseCode + ' ***', 'yellow');

            txt.removeEventListener('keyup', userText_keyEvent_Enter);
            var exercise;
            var img;
            switch (Number(selectedExerciseCode)) {
                case 1:
                    exercise = exercise1;
                    img=1;
                    break;
                case 2:
                    exercise = exercise2;
                    img=2;
                    break;
                case 3:
                    exercise = exercise3;
                    img=3;
                    break;
                case 4:
                    exercise = exercise4;
                    img=4;
                    break;
                case 5:
                    exercise = exercise5;
                    img=5;
                    break;
                case 6:
                    exercise = exercise6;
                    img=6;
                    break;
                case 7:
                    exercise = exercise7;
                    img=7;
                    break;
                case 8:
                    exercise = exercise8;
                    img=8;
                    break;
                case 9:
                    exercise = exercise9;
                    img=9;
                    break;
                case 10:
                    exercise = exercise10;
                    img=10;
                    break;
                case 11:
                    exercise = exercise11;
                    img=11;
                    break;
                case 12:
                    exercise = exercise12;
                    img=12;
                    break;
                case 13:
                    exercise = exercise13;
                    img=13;
                    break
                case 14:
                    exercise = exercise14;
                    img=14;
                    break;
                case 15:
                    exercise = exercise15;
                    img=15;
                    break;
            }
            txt.addEventListener('keyup', exercise);
            txt.dispatchEvent(new KeyboardEvent('keyup', { 'key': '%' }));
            document.getElementById('image').src='./images/'+img+'.png';
        }
        else {
            fxConsole_AddText('codigo de ejercicio incorrecto, el valor debe ser entre los numeros 1 y 15', 'red');
        }
    }

}
function fxGetNumber() {
    return Number(txt.value);
}
function fxGetString() {
    return String(txt.value);
}
function fxConsole_AddText_Yellow(value, color) {
    fxConsole_AddText(value, "yellow");
}
function fxConsole_AddText_White(value, color) {
    fxConsole_AddText(value, "white");
}
function fxConsole_AddText(value, color) {
    var textList = document.getElementById('textList');
    textList.innerHTML += "<p style='color:" + color + ";'> > " + value + "</p>";
    document.getElementById('userText').value = '';
    textList.scrollTop = textList.scrollHeight + 150;
}
function fxLoad() {
    fxConsole_AddText('Bienvenido a la consola, para utilizar esta consola de ejercicios, digite los numeros entre el 1 y el 15', 'lightgreen');
}
function fxResetKeyUpEvent(oldFunction) {
    txt.removeEventListener('keyup', oldFunction);
    txt.addEventListener('keyup', userText_keyEvent_Enter);
    selectedExerciseCode = "";
    step = 0;
    arrData = [];
    document.getElementById('image').src='./images/0.png';
    fxLoad();
}

//*********************************************************************************** */

function exercise1(event) {
    if (event.keyCode === 13 || event.key === '%') {
        switch (step) {
            case 0:
                fxConsole_AddText_Yellow("ingrese el primer numero");
                step++;
                break;
            case 1:
                arrData.push(fxGetNumber());
                fxConsole_AddText_White(arrData[0]);
                fxConsole_AddText_Yellow("ingrese el segundo numero");

                step++;
                break;
            case 2:
                arrData.push(fxGetNumber());
                fxConsole_AddText_White(arrData[1]);
                fxConsole_AddText_Yellow("*** el resultado de la suma es: " + (arrData[0] + arrData[1]));
                fxResetKeyUpEvent(exercise1);
                break;
        }
    }
}


function exercise2(event) {
    var nota1, nota2, nota3, nota4;
    if (event.keyCode === 13 || event.key === '%') {
        switch (step) {
            case 0:
                fxConsole_AddText_Yellow("ingrese la nota 1");
                step++;
                break;
            case 1:
                nota1 = fxGetNumber();
                arrData.push(nota1);
                fxConsole_AddText_White(nota1);
                fxConsole_AddText_Yellow("ingrese la nota 2");
                step++;
                break
            case 2:
                nota2 = fxGetNumber();
                arrData.push(nota2);
                fxConsole_AddText_White(nota2);
                fxConsole_AddText_Yellow("ingrese la nota 3");
                step++;
                break
            case 3:
                nota3 = fxGetNumber();
                arrData.push(nota3);
                fxConsole_AddText_White(nota3);
                fxConsole_AddText_Yellow("ingrese la nota 4");
                step++;
                break
            case 4:
                nota4 = fxGetNumber();
                fxConsole_AddText_Yellow(4);
                fxConsole_AddText_White(nota4);
                nota1 = arrData[0];
                nota2 = arrData[1];
                nota3 = arrData[2];
                fxConsole_AddText_Yellow("*** el promedio es " + ((nota1 + nota2 + nota3 + nota4) / 4));
                fxResetKeyUpEvent(exercise2);
                break;

        }
    }
}

function exercise3(event) {
    if (event.keyCode === 13 || event.key === '%') {
        switch (step) {
            case 0:
                fxConsole_AddText_Yellow("ingrese la base");
                step++;
                break;
            case 1:
                arrData.push(fxGetNumber());
                fxConsole_AddText_White(arrData[0]);
                fxConsole_AddText_Yellow("ingrese la altura");
                step++;
                break;
            case 2:
                arrData.push(fxGetNumber());
                fxConsole_AddText_White(arrData[1]);
                fxConsole_AddText_Yellow("*** el area del rectangulo es : " + (arrData[0] * arrData[1]));
                fxResetKeyUpEvent(exercise3);
                break;
        }
    }
}

function exercise4(event) {
    if (event.keyCode === 13 || event.key === '%') {
        switch (step) {
            case 0:
                fxConsole_AddText_Yellow("ingrese la base");
                step++;
                break;
            case 1:
                arrData.push(fxGetNumber());
                fxConsole_AddText_White(arrData[0]);
                fxConsole_AddText_Yellow("ingrese la altura");
                step++;
                break;
            case 2:
                arrData.push(fxGetNumber());
                fxConsole_AddText_White(arrData[1]);
                fxConsole_AddText_Yellow("*** el area del triangulo es : " + ((arrData[0] * arrData[1]) / 2));
                fxResetKeyUpEvent(exercise4);
                break
        }
    }
}


function exercise5(event) {
    if (event.keyCode === 13 || event.key === '%') {
        switch (step) {
            case 0:
                fxConsole_AddText_Yellow("ingrese el radio");
                step++;
                break;
            case 1:
                var radio = fxGetNumber();
                fxConsole_AddText_Yellow(radio);
                fxConsole_AddText_Yellow("*** el area del circulo es : " + (radio * radio * Math.PI));
                fxResetKeyUpEvent(exercise5);
                break;

        }
    }
}


function exercise6(event) {
    if (event.keyCode === 13 || event.key === '%') {
        switch (step) {
            case 0:
                fxConsole_AddText_Yellow("ingrese las horas");
                step++;
                break;
            case 1:
                arrData.push(fxGetNumber());
                fxConsole_AddText_White(arrData[0]);
                fxConsole_AddText_Yellow("ingrese el pago por hora");
                step++;
                break;
            case 2:
                arrData.push(fxGetNumber());
                fxConsole_AddText_White(arrData[1]);
                fxConsole_AddText_Yellow("*** el pago total de la semana es : " + (arrData[0] * arrData[1] * 7));
                fxResetKeyUpEvent(exercise6);
                break;
        }
    }
}



function exercise7(event) {
    if (event.keyCode === 13 || event.key === '%') {
        switch (step) {
            case 0:
                fxConsole_AddText_Yellow("ingrese el valor en metros");
                step++;
                break;
            case 1:
                var meters = fxGetNumber();
                fxConsole_AddText_Yellow(meters);
                fxConsole_AddText_Yellow("*** el valor en pulgadas es: " + (meters * 39.37));
                fxResetKeyUpEvent(exercise7);
                break;

        }
    }
}


function exercise8(event) {
    if (event.keyCode === 13 || event.key === '%') {
        switch (step) {
            case 0:
                fxConsole_AddText_Yellow("ingrese el valor en soles");
                step++;
                break;
            case 1:
                var soles = fxGetNumber();
                fxConsole_AddText_Yellow(soles);
                fxConsole_AddText_Yellow("*** la cantidad de dolares es: " + (soles / 3.495));
                fxResetKeyUpEvent(exercise8);
                break

        }
    }
}


function exercise9(event) {
    if (event.keyCode === 13 || event.key === '%') {
        switch (step) {
            case 0:
                fxConsole_AddText_Yellow("ingrese el año de nacimiento ");
                step++;
                break;
            case 1:
                var bornYear = fxGetNumber();
                fxConsole_AddText_Yellow(bornYear);
                fxConsole_AddText_Yellow("*** la edad es: " + (2020 / bornYear));
                fxResetKeyUpEvent(exercise9);
                break;

        }
    }
}


function exercise10(event) {
    var str
    if (event.keyCode === 13 || event.key === '%') {
        switch (step) {
            case 0:
                fxConsole_AddText_Yellow("ingrese el primer nombre ");
                step++;
                break;
            case 1:
                str = fxGetString();
                arrData.push(str);
                fxConsole_AddText_Yellow(str);
                fxConsole_AddText_Yellow("ingrese la edad del primer nombre ");
                step++
                break
            case 2:
                str = fxGetNumber();
                arrData.push(str);
                fxConsole_AddText_Yellow(str);
                fxConsole_AddText_Yellow("ingrese el segundo nombre");
                step++;
                break;
            case 3:
                str = fxGetString();
                arrData.push(str);
                fxConsole_AddText_Yellow(str);
                fxConsole_AddText_Yellow("ingrese la edad del segundo nombre ");
                step++;
                break;
            case 4:
                str = fxGetNumber();
                arrData.push(str);
                fxConsole_AddText_Yellow(str);
                fxConsole_AddText_Yellow("ingrese el tercer nombre ");
                step++;
                break;
            case 5:
                str = fxGetString();
                arrData.push(str);
                fxConsole_AddText_Yellow(str);
                fxConsole_AddText_Yellow("ingrese la edad del tercer nombre ");
                step++;
                break;
            case 6:
                var persona1 = arrData[0];
                var persona1edad = arrData[1];
                var persona2 = arrData[2];
                var persona2edad = arrData[3];
                var persona3 = arrData[4];
                var persona3edad = fxGetNumber();

                fxConsole_AddText_Yellow(persona3edad);

                var menor = '';
                var edad = 0;
                if (persona1edad < persona2edad && persona1edad < persona3edad) {
                    menor = persona1;
                    edad = persona1edad;
                } else if (persona2edad < persona1edad && persona2edad < persona3edad) {
                    menor = persona2;
                    edad = persona2edad;
                } else {
                    menor = persona3;
                    edad = persona3edad;
                }
                fxConsole_AddText_Yellow("*** la persona con menor edad es: " + menor);

                fxResetKeyUpEvent(exercise10);
                break;

        }
    }
}



function exercise11(event) {
    if (event.keyCode === 13 || event.key === '%') {
        switch (step) {
            case 0:
                fxConsole_AddText_Yellow("ingrese los años de trabajo ");
                step++;
                break;
            case 1:
                var years = fxGetNumber();
                fxConsole_AddText_Yellow(years);
                var bono;
                if (years > 5)
                    bono = 1000;
                else
                    bono = 100 * years;
                fxConsole_AddText_Yellow("*** el bono es: " + bono);
                fxResetKeyUpEvent(exercise11);
                break;

        }
    }
}


function exercise12(event) {
    if (event.key === '%') {
        var sueldo = 1500;
        var contador = 2;
        while (contador <= 6) {
            sueldo = sueldo + (sueldo * 0.10);
            fxConsole_AddText_Yellow("*** pago en el año numero: " + contador + ', es: ' + sueldo);
            contador++;
        }

        fxResetKeyUpEvent(exercise12);

    }
}


function exercise13(event) {
    if (event.keyCode === 13 || event.key === '%') {




        if (step === 0) {
            fxConsole_AddText_Yellow("ingrese el numero de notas a procesar ");
            step++;

        }
        else if (step === 1) {
            var max = fxGetNumber();
            arrData.push(max);//0 - max
            arrData.push(1);//1 - cont
            arrData.push(0);//2 - approved
            arrData.push(0);//3 - disapproved

            step++;
            fxConsole_AddText_Yellow(max);
            fxConsole_AddText_Yellow("ingrese la nota numero: " + 1 + ', de: ' + max);
        }
        else {
            var note = fxGetNumber();

            fxConsole_AddText_Yellow(note);

            var max = arrData[0];
            var cont = arrData[1];
            var approved = arrData[2];
            var disapproved = arrData[3];

            if (note >= 11) {
                approved++;
            }
            else {
                disapproved++;
            }
            cont++;

            if (cont > max) {
                fxConsole_AddText_Yellow('*** se procesaron: ' + max + ' notas, aprobados: ' + approved + ', desaprobados: ' + disapproved);
                fxResetKeyUpEvent(exercise13);
            }
            else {
                arrData[1] = cont;
                arrData[2] = approved;
                arrData[3] = disapproved;

                fxConsole_AddText_Yellow("ingrese la nota numero: " + cont + ', de: ' + max);
                step++;
            }

        }




    }
}


function exercise14(event) {
    if (event.keyCode === 13 || event.key === '%') {
        var green, red, white;
        if (event.keyCode === 13 || event.key === '%') {
           
            switch (step) {
                case 0:
                    fxConsole_AddText_Yellow("ingrese el numero de focos verdes");
                    step++;
                    break;
                case 1:
                    green = fxGetNumber();
                    arrData.push(green);
                    fxConsole_AddText_White(green);
                    fxConsole_AddText_Yellow("ingrese el numero de focos rojos");
                    step++;
                    break;
                case 2:
                    red = fxGetNumber();
                    arrData.push(red);
                    fxConsole_AddText_White(red);
                    fxConsole_AddText_Yellow("ingrese el numero de focos blancos");
                    step++;
                    break;
                case 3:
                    white = fxGetNumber();
                    fxConsole_AddText_Yellow(white);
                    green = arrData[0];
                    red = arrData[1];
                    fxConsole_AddText_Yellow("*** el total de focos es " + (green + red + white));
                    fxResetKeyUpEvent(exercise14);
                    break;

            }
        }



    }
}


function exercise15(event) {
    if (event.keyCode === 13 || event.key === '%') {
        var year, month, day;
        if (event.keyCode === 13 || event.key === '%') {
          
            switch (step) {
                case 0:
                    fxConsole_AddText_Yellow("ingrese el año");
                    step++;
                    break;
                case 1:
                    year = fxGetNumber();
                    arrData.push(year);
                    fxConsole_AddText_White(year);
                    fxConsole_AddText_Yellow("ingrese el mes");
                    step++;
                    break;
                case 2:
                    month = fxGetNumber();
                    arrData.push(month);
                    fxConsole_AddText_White(month);
                    fxConsole_AddText_Yellow("ingrese el dia");
                    step++;
                    break;
                case 3:
                    year = arrData[0];
                    month = arrData[1];
                    day = fxGetNumber();
                    fxConsole_AddText_Yellow(day);

                    var years = 0;

                    years = 2021 - year;

                    if (years > 0 && (month > 4 || day > 11)) {
                        years = years - 1;
                    }
                    if (years >= 18) {
                        fxConsole_AddText_Yellow("*** la edad de la persona sera: " + years + ", por tanto SI puede botar");
                    } else {
                        fxConsole_AddText_Yellow("*** la edad de la persona sera: " + years + ", por tanto NO puede botar");

                    }


                    fxResetKeyUpEvent(exercise15);
                    break;

            }
        }



    }
}

//************************************************************************** */
fxLoad();