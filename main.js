                                            // EJERCICIO 1 

// alert('Escribe tus cinco canciones favoritas');

// const songOne = prompt('Ingresa la primera canción');
// const songTwo = prompt('Ingresa la segunda canción');
// const songThree = prompt('Ingresa la tercera canción');
// const songFour = prompt('Ingresa la cuarta canción');
// const songFive = prompt('Ingresa la quinta canción');

// const lista = document.getElementById('lista');
// const canciones = `
// <li>${songOne}</li>
// <li>${songTwo}</li>
// <li>${songThree}</li>
// <li>${songFour}</li>
// <li>${songFive}</li>
// `;
// lista.innerHTML = canciones;

                                            // EJERCICIO 2
// contador
// Crear un documento html que muestre un número (empezando en 0) y 6 botones con los siguientes valores: -1, +1, -5, +5, -10, +10. Cuando se clickea un botón, se tiene que sumar o restar la cantidad correspondiente, y actualizar el número mostrado.

// 1.- en html escribir numero 0
// 2.- generar 6 botones con los siguientes valores  -1, +1, -5, +5, -10, +10
// 3.- hacer la operacion de suma o resta segun corresponda
// 4.- actualizar el numero inicial en el html
// ¿como detectamos a que boton le das click?
// id
// ¿como detectamos el valor del boton?
// programar el evento click
// acceder al valor del boton 

// const menos1 = document.getElementById('-1');
// const mas1 = document.getElementById('+1');
// const menos5 = document.getElementById('-5');
// const mas5 = document.getElementById('+5');
// const menos10 = document.getElementById('-10');
// const mas10 = document.getElementById('+10');

// const count = document.getElementById('count');

// menos1.addEventListener('click', () => {
//     count.innerHTML = parseInt(count.innerHTML) - 1
// } );

// mas1.addEventListener('click', () => {
//     count.innerHTML = parseInt(count.innerHTML) + 1
// } );

// menos5.addEventListener('click', () => {
//     count.innerHTML = parseInt(count.innerHTML) - 5
// } );
// mas5.addEventListener('click', () => {
//     count.innerHTML = parseInt(count.innerHTML) + 5
// } );

// menos10.addEventListener('click', () => {
//     count.innerHTML = parseInt(count.innerHTML) - 10
// } );

// mas10.addEventListener('click', () => {
//     count.innerHTML = parseInt(count.innerHTML) + 10
// } );

// const count = document.getElementById('count');
// const buttons = document.getElementsByTagName('button');

// Array.from(buttons).forEach(button => {
//     button.addEventListener('click', ()=>{
//         count.innerHTML = parseInt(count.innerHTML) + parseInt(button.id)
//     });
// });

                                            // EJERCICIO 3

// const respuesta = document.getElementById('respuesta');
// const correcto = document.getElementById('correcto');
// const incorrecto1 = document.getElementById('incorrecto1');
// const incorrecto2 = document.getElementById('incorrecto2');

// correcto.addEventListener('click', ()=>{
//     respuesta.innerHTML = '¡Respuesta Correcta!'
//     correcto.style.backgroundColor = 'lightgreen'
// });

// const incorrecto = () => {
//     respuesta.innerHTML = '¡Respuesta Incorrecta!'
//     incorrecto1.style.backgroundColor = 'red'
//     incorrecto2.style.backgroundColor = 'red'
//     correcto.style.backgroundColor = 'lightgreen'
// };

// incorrecto1.addEventListener('click', incorrecto);
// incorrecto2.addEventListener('click', incorrecto);

                                            // EJERCICIO 4

// const cuadrado = document.getElementById('cuadrado');
// const buttons = document.getElementsByTagName('button');

// Array.from(buttons).forEach(button =>{
//     button.addEventListener('click', ()=>{
//         cuadrado.style.backgroundColor = button.id
//     });
// });

                                            // EJERCICIO 5

// const lista = document.getElementsByTagName('li')
// Array.from(lista).forEach(li => {
//     li.addEventListener('click', ()=>{
//         li.style.color = 'lightgrey';
//     });
// });

                                            // EJERCICIO 6

// const menos = document.getElementById('menos');
// const mas = document.getElementById('mas');
// const chica = document.getElementById('chica');
// const titulo = document.getElementById('titulo');
// let count = 10;
// chica.style.width = `${count}%`;
// titulo.innerHTML = count;

// mas.addEventListener('click', () => {
//     if(count < 100){
//         count = count + 10;
//         chica.style.width = `${count}%`;
//         titulo.innerHTML = count;
//     };
// });
// menos.addEventListener('click', () => {
//     if(count > 0){
//         count = count - 10;
//         chica.style.width = `${count}%`;
//         titulo.innerHTML = count;
//     };
// });

                                            // EJERCICIO 7

// const body = document.getElementById('body');
// const boton = document.getElementById('boton');
// const icono = document.getElementById('icono');

// const oscuro = () =>{
//     body.classList.toggle('oscuro');
//     boton.classList.toggle('sun');
//     icono.classList.toggle('fa-sun');
// };
// boton.addEventListener('click', oscuro);

                                            // EJERCICIO 8

// window.addEventListener('scroll', ()=>{
//     console.log(window.scrollY); // para saber el tamaño de la pantalla
//     const tamañoPantalla = document.body.scrollHeight;
//     const tamanoScroll = 500; // diferencia entre el tamaño maximo y el tamaño de la barra
//     const positionY = window.scrollY; // mide la posicion donde esta el scroll
//     const coordenada = positionY + tamanoScroll;
//     console.log(tamañoPantalla)
//     if(coordenada <= 500){
//       document.body.style.backgroundColor = 'lightpink'
//     } else if(coordenada >= 501 && coordenada <= 1000){
//       document.body.style.backgroundColor = 'lightgreen'
//     } else if(coordenada >= 1001 && coordenada <= 1500){
//       document.body.style.backgroundColor = 'lightskyblue'
//     } else if(coordenada >= 1501){
//       document.body.style.backgroundColor = 'lightgoldenrodyellow'
//     }
//   });
                                            // EJERCICIO 9

// const principal = document.getElementById('principal');
// const imagenes = document.getElementsByTagName('img');

// Array.from(imagenes).forEach(img =>{
//     img.addEventListener('click', ()=>{
//         const src = img.getAttribute('src');
//         principal.setAttribute('src',src);
//         principal.style.width = '400px';
//         principal.style.height = '400px';
//     });
// }); 


                                            // EJERCICIO 10

// const principal = document.getElementById('principal');
// const imagenes = document.getElementsByTagName('img');

// Array.from(imagenes).forEach(img =>{
//     img.addEventListener('mouseover', ()=>{
//         const src = img.getAttribute('src');
//         principal.setAttribute('src',src);
//         principal.style.width = '400px';
//         principal.style.height = '400px';
//     });
// });

                                            // EJERCICIO 11
// const ciFi = document.getElementById('ci-fi');
// const drama = document.getElementById('drama');
// const animadas = document.getElementById('animadas');

// const botonTodas = document.getElementById('peliculas-button');
// const botonCiFi = document.getElementById('cifi-button');
// const botonDrama = document.getElementById('drama-button');
// const botonAnimadas = document.getElementById('animadas-button');

// botonCiFi.addEventListener('click', ()=>{
//   ciFi.style.display = 'flex';
//   drama.style.display = 'none';
//   animadas.style.display = 'none';
// });

// botonDrama.addEventListener('click', ()=>{
//   drama.style.display = 'flex';
//   ciFi.style.display = 'none';
//   animadas.style.display = 'none';
// });

// botonAnimadas.addEventListener('click', ()=>{
//   animadas.style.display = 'flex';
//   drama.style.display = 'none';
//   ciFi.style.display = 'none';
// });

// botonTodas.addEventListener('click', ()=>{
//   animadas.style.display = 'flex';
//   drama.style.display = 'flex';
//   ciFi.style.display = 'flex';
// });

                                            // EJERCICIO 12

// const texto = document.getElementById('texto');
// const number = document.getElementsByClassName('number');
// const reset = document.getElementById('reset');
// const borrar = document.getElementById('borrar');

// Array.from(number).forEach(number =>{
//   number.addEventListener('click', ()=>{
//     if(texto.value.length < 6){
//       texto.value = texto.value + number.id;
//     };
//   });
// });

// reset.addEventListener('click', ()=>{
//   texto.value = '';
// });

// borrar.addEventListener('click', ()=>{
//   texto.value = texto.value.slice(0, -1);
//   // texto.value = texto.value.substring(0, texto.value.length -1);  
// });

                                            // EJERCICIO 13

const nuevo = document.getElementById('nuevo');
const imagen = document.getElementsByTagName('figure');

for(let i = 0; i < imagen.length; i ++){
    imagen[i].addEventListener('click', (e)=>{
        nuevo.innerHTML += imagen[i].innerHTML
        const nuevoChildren = nuevo.children
        for(let i = 0; i < nuevoChildren.length; i ++){
            nuevoChildren[i].classList.add('borrar')
        }
    });
};

window.addEventListener('click', (e)=>{
    if(e.target.classList.contains('borrar'))
    e.target.style.display = 'none';
})

                                            // EJERCICIO 14
                                            
// const generarNumero = (numero) => (Math.random()* numero).toFixed(0);

// window.addEventListener('keypress', (e)=>{
//   e.preventDefault();
//   if (e.keyCode == 32 || e.code == "Space"){
//     e.preventDefault();
//     document.body.style.backgroundColor = `rgb(${generarNumero(255)}, ${generarNumero(255)}, ${generarNumero(255)})`;
//   };
// });                                      

                                            // EJERCICIO 15

// const mensaje = document.getElementById('mensaje');
// const reiniciar = document.getElementById('reiniciar');

// const generarNumero = () => (Math.random()* 9).toFixed(0);
// let numeroRandom = generarNumero();

// window.addEventListener('keypress', (e)=>{
//   const teclaPresionada = e.key.valueOf();
//   if(e.key.valueOf() >= 0 && e.key.valueOf() <= 9){
//     if(teclaPresionada > numeroRandom){
//       mensaje.innerHTML = `El número es más chico. Número ingresado: ${teclaPresionada} `;
//     } else if(teclaPresionada < numeroRandom){
//       mensaje.innerHTML = `El número es más grande. Número ingresado: ${teclaPresionada} `;
//     } else{
//       mensaje.innerHTML = `¡Adivinaste! <br>Número ingresado: ${teclaPresionada} `;
//     };
//   }else{
//     alert('¡Presiona solo teclas numéricas!')
//   };
// });

// reiniciar.addEventListener('click', ()=>{
//   numeroRandom = generarNumero();
//   mensaje.innerHTML = `¡Nueva partida! Presiona un número`;
// });

