//tipo de datos


//existen diversos tipos de datos

let pokemon = "pikachu";
//el string se define con dos comillas para cadenas de texto
let vida = 100;
//el int para numeros enteros estos no usan comillas, usualmente para datos de numero o contables enteros

//tambien se puede usar const en las variables para datos que no se van a cambiar
const danoAtaque1 = 50
let vidaActual = vida - danoAtaque1;
console.log("nombre del pokemon " + pokemon);
console.log("la vida de tu pokemon es de "+vida)
console.log("ha sido danado por un ataque le quito "+danoAtaque1);
console.log("su vida actual es "+vidaActual);

//como se observa, vemos como se puede declarar y manipular de manera facil  con los datos

//ahora se procede usar el tipo de dato array que no es primitivo

let tiposPokemon = ['fuego','agua','hierva']
console.log(tiposPokemon)
//se imprime todo el array
console.log('el primer tipo es '+tiposPokemon[0]);
//accdemos con [0] al primer elemento

//se accede al elemento 3 y se cambia el tipo por el hielo
tiposPokemon [2] = 'hielo';
console.log(tiposPokemon);
//la variable de array se puede  modificar de manera directa debido a que es un elemento tipo mutable
console.log(tiposPokemon.length);
//con la propiedad lengh podemos saber cuantos elementos tiene nuestra matriz
tiposPokemon[tiposPokemon.length - 1];

tiposPokemon[tiposPokemon.length - 1]

console.log(tiposPokemon);
