const result = document.getElementById("result");
const title = document.getElementById("title");
const textArea = document.getElementById("tb0");
function bnExecute_click() {
    let value;
    try {
        value = eval(textArea.value);
    }
    catch (ex) {
        value = ex;
    }
    console.log(value);
    result.innerHTML = value;
}
function showCode(code) {
    textArea.value = code;
}
function clear() {
    title.innerHTML = "(0_0)";
    result.innerHTML = ''
    textArea.value = ''
}

function showExercise(number) {
    clear();
    let code = "";
    try {
        switch (number) {
            case 1:
                code = `
                function concat(firstName, lastName, age) {
                    return 'Hola mi nombre es: ' + firstName + ' ' + lastName + ', y mi edad es: ' + age
                }

                concat('henry', 'chavez', 35);
                   `;
                showCode(code);
                break;
            case 2:
                code = `
                function sumOfCubes(...numbers) {
                    return numbers.map(x => x * x * x).reduce((a, b) => a + b, 0);
                }

                sumOfCubes(1, 5, 9);
                 `;
                showCode(code);
                break;
            case 3:
                code = `
                function getTypeOf(value) {
                    return typeof (value)
                }

                getTypeOf('jeje')
                `;
                showCode(code);
                break;
            case 4:
                code = `
                function sumNumberArray(...numbers) {
                    return numbers.reduce((a, b) => a + b, 0)
                }
                sumNumberArray(1, 2, 3, 4)
                 `;
                showCode(code);
                break;
            case 5:
                code = `
                function discartString(...values) {
                    return values.filter(x => typeof (x) != 'string')
                }
                discartString(1, 'blue', 2, 'hello', 3, 'car', 4, '5', 6)
                    `;
                showCode(code);
                break;
            case 6:
                code = `
                function minMax(...numbers) {
                    let arr = [(Math.min.apply(null, numbers)), Math.max.apply(null, numbers)];
                    return arr
                }
                minMax(1, 2, 3, 4, 5)
                      `;
                showCode(code);
                break;
            case 7:
                code = `
                function formatPhoneNumber(...numbers) {
                    return '(' + numbers.splice(0, 3) + ') ' + numbers.splice(0, 3) + ' - ' + numbers.splice(0)
                }
                formatPhoneNumber(1, 2, 3, 4, 5, 6, 7, 8, 9, 0)
                          `;
                showCode(code);
                break;
            case 8:
                code = `
                function findLargestNums(arr) {
                    let arrMax = [];
                    arr.forEach((x) => arrMax.push(Math.max.apply(null, x)));
                    return arrMax
                }
                findLargestNums([[4, 2, 7, 1], [20, 70, 40, 90], [1, 2, 0]])
                                     `;
                showCode(code);
                break;
            case 9:
                code = `
                function maxMinCharIndex(word, letter) {
                    return 'the first ' + letter + ' has index: ' + word.indexOf(letter) + ', and the last ' + letter + ' has index ' + word.lastIndexOf(letter)
                }
                maxMinCharIndex('hello', 'l')
                                     `;
                showCode(code);
                break;
            case 10:
                code = `
                //PLEASE USE DE CONSOLE                
                function objetToArray(obj) {
                    let arrKeys = Object.keys(obj)
                    let arrValues = Object.values(obj)                    
                    let arr = []
                    arrKeys.forEach((obj, index) => arr.push([obj, arrValues[index]]))
                    return arr
                }
                objetToArray({ a: 1, b: 2 });                
                                       `;
                showCode(code);
                break;
            case 11:
                code = `                              
                function getBudgets(...arr) {
                    return arr.map((x) => x.budget).reduce((a, b) => a + b, 0);
                }

                getBudgets({ name: "John", age: 21, budget: 23000 },
                    { name: "Steve", age: 32, budget: 40000 },
                    { name: "Martin", age: 16, budget: 2700 }
                );
                                      `;
                showCode(code);
                break;
            case 12:
                code = `   
                //PLEASE USE DE CONSOLE                           
                function getStudentNames(...arr) {
                    return arr.map(x => x.name)
                }

                getStudentNames({ name: "Steve" },
                    { name: "Mike" },
                    { name: "John" }
                );
                                       `;
                showCode(code);
                break;
            case 13:
                code = `
                    //PLEASE USE DE CONSOLE                
                    function objetToArray(obj) {
                        let arrKeys = Object.keys(obj)
                        let arrValues = Object.values(obj)                    
                        let arr = []
                        arrKeys.forEach((obj, index) => arr.push([obj, arrValues[index]]))
                        return arr
                    }
                    objetToArray({
                        likes: 2,
                        dislikes: 3,
                        followers: 10
                       });                
                                           `;
                showCode(code);
                break;
            case 14:
                code = `                                                
                function squaresSum(number) {
                    let arr = [];
                    for (cont = 1; cont <= number; cont++) {
                        arr.push(cont);
                    }
                    return arr.map(x => x * x).reduce((a, b) => a + b, 0);
                }

                squaresSum(3);
                                           `;
                showCode(code);
                break;
            case 15:
                code = `                                                
                function multiplyByLength(...arr) {
                    let length = arr.length;
                    return arr.map(x => x * length);
                }

                multiplyByLength(2, 3, 1, 0);
                                             `;
                showCode(code);
                break;
            case 16:
                code = `                                                
                function countdown(number) {
                    let arr = [];
                    for (cont = number; cont >=0; cont--) {
                        arr.push(cont);
                    }
                    return arr ;
                }

                countdown(5);
                                           `;
                showCode(code);
                break;
            case 17:
                code = `
                    function diferenceBetweenMinMax(...numbers) {
                        let min = Math.min.apply(null, numbers);
                        let max = Math.max.apply(null, numbers);
                        return 'the smallest number is: ' + min + ', the biggest number is: '+max+' the difference is: '+(max-min);
                    }
                    diferenceBetweenMinMax(1, 2, 3, 4, 5)
                          `;
                showCode(code);
                break;
            case 18:
                code = `
                    function filterList(...values) {
                        return values.filter(x => typeof (x) != 'string')
                    }
                    filterList(1, 2, 3, "x", "y", 10)
                        `;
                showCode(code);
                break;
            case 19:
                code = `                                                
                    function repeat(number,times) {
                        let arr = [];
                        for (cont = 1; cont <=times; cont++) {
                            arr.push(number);
                        }
                        return arr ;
                    }
    
                    repeat(25,3);
                                               `;
                showCode(code);
                break;
            case 20:
                code = `                                                
                function replace(value, old, new_) {
                    return value.replace(old, new_);
                }

                replace('hola cat1 que tal cat2', /cat/g, 'dog');
                                             `;
                showCode(code);

                break;
            case 21:
                code = `                                                
                   function findNemo(value) {
                       return  'I found nemo at: '+value.search('Nemo');
                   }
   
                   findNemo('I am finding Nemo !');
                                                `;
                showCode(code);

                break;
            case 22:
                  code = `                                                
                   function capLast(value) {
                      let length = value.length;                      
                      return value.substring(0, length - 1) + value.substring(length - 1).toUpperCase();
                   }
   
                   capLast('Computer');
                                                `;
                showCode(code);


                break;
        }
    }
    catch (ex) {
        // result_show("ERROR " + ex);
    }
    title.innerHTML = "Ejercicio Numero: " + number + ", Algoritmo:";
}
//# sourceMappingURL=index2.js.map