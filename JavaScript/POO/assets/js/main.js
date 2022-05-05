class Persona {
    //atributos
    #id = 0;
    static #contador = 0;
    #nombre = '';//variable privada
    #edad = 0;
    #correo = '';


    constructor(nombre, edad, correo){
        this.#nombre = nombre;
        this.#edad = edad;
        this.#correo = correo;
        this.#id = ++Persona.#contador;
    }

    //Setters & getters
    //set & get 
    //fijar & obtener
    //se usan y se llaman como si fueran atributos
    //se usan como parametros
    get getNombre(){
        return this.#nombre;
    }

    set setNombre(nombre){
        this.#nombre = nombre;
    }

    get getEdad(){
        return this.#edad;
    }

    set setEdad(nombre){
        this.#edad = edad;
    }

    get getCorreo(){
        return this.#correo;
    }

    set setCorreo(nombre){
        this.#correo = correo;
    }


    //metodos 

    cambiarNombre(nombre){
        this.#nombre = nombre;
    }

    #saludar(){
        let mensaje = `Hola mi nombre es ${this.#nombre}`
        return mensaje;
        /* let mensaje = `Hola mi nombre es ${this.#nombre}` */ //tambien se puede usar asi 
    }

    mostrarSaludo(){
        return this.#saludar();
    }

    static mostrarContador(){
        return Persona.#contador;
    }
}

//instancia de la clase personal
const persona1 = new Persona('Pedro', 18, 'pedro@gmail.com');
const persona2 = new Persona('Gabriel', 25, 'gabriel@gmail.com');
const persona3 = new Persona('Martin', 40, 'martin@gmail.com')


persona1.setNombre = 'Jose'

//persona1.cambiarNombre('Antonio')

console.log(persona1);
console.log(persona2);
console.log(persona3);

console.log(persona1.mostrarSaludo());
console.log(persona2.mostrarSaludo());

/* console.log(persona1.contador); */
console.log(Persona.mostrarContador());

























































































