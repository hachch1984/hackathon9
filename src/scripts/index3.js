/*
declaracion de variales que representan a elementos de la pagina
*/
const objTitle = document.getElementById("title");//titulo del card derecho 
const objTextArea = document.getElementById("tb0");//etiqueta textAtea donde se muestra el argoritmo  
const objResult = document.getElementById("result");//etiquepa P que muestra el resultado  

/************************************************************************************************************************
***DETALLE IMPORTANTE***
1).- "objTitle" y "objResult" son etiquedas html 
estas siven para realizar el maquetado de la pagina
y su contenido normalmente no es manipulado por el usuario 
por tanto cuando el programador de la aplicacion necesite manipular su contenido
se usara la propiedad "innerHTML"
2).- "objResult" que es un control de usuario 
por tanto su contenido puede ser manipulado por el usuario de la pagina web
por tal motivo cuando se necesite manipular su contenido
se usara la propiedad "value"
*/


/*************************************************************************************************************************************** 
funcion invocada por el evento "onClick" del boton "Ejecutar Algoritmo"   
 */
function bnExecute_click() {
    /*
    se obtiene el texto que esta dentro del "objTextArea"
    se pasa ese texto a la funcion "eval"
    y el resultado se muestra en "objResult"
    */
    objResult.innerHTML = eval(objTextArea.value)
}



/*************************************************************************************************************************************** 
funcion invocada con el radioButton al cuando se dispara el evento click
tiene un parametro llamado "number" el cual es diferente para cada radioButton
*/
function mostrarArgoritmo(number) {

    //limpiesa de los objetos objTitle, objResult, objTextArea
    objTitle.innerHTML = '';
    objResult.innerHTML = '';
    objTextArea.value = '';


    var code = "";//variable que contendra el algoritmo segun el valor de la variable "number"

    try {
        switch (number) {
            case 1:
                code = `
                function sum(number1, number2) {
                    return number1 + number2
                }

                sum( 1 , 3 );
                   `;
                break;
            case 2:
                code = `
                function subtraction(number1, number2) {
                    return number1 - number2
                }

                subtraction( 8 , 3 );
                 `;
                break;

        }
    }
    catch (ex) {
        console.log(ex)//en caso de ocurri un error se mostrara el detalle de este en la consola
    }

    //se asigna el valor de code a "objTextArea", recuerda que "objTextArea" es un control de usuario, por tanto se utiliza la propiedad "value"
    objTextArea.value = code;

    //al texto informtivo al "objTitle", recuerda que "objTitle" es una etiqueta html por eso usamos su propiedad "innerHTML"
    objTitle.innerHTML = "Ejercicio Numero: " + number + ", Algoritmo:";
}
