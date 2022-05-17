package com.perritos;

public class Perro {
	
		//Atributos o propiedades
		String nombre;
		int edad;
		String raza;
		String tamanio;
		
		//Constructor
		public Perro(String nombre, int edad) {
			this.nombre = nombre;
			this.edad = edad;
			//(this.nombre = nom;)
		}

		//Metodos
		public void ladrar() {
			System.out.println("El perro" +  nombre + " hace ¡Guauf!");
		}
		
		public int edadPerruna () {
			return edad * 7;
		}
		
		//Metodos estaticos
		//static = Nos permite utilizarlo sin instanciar un objeto
		
		public static void mensaje() {
		System.out.println("Esta es una clase Perro");
		}
	
}
