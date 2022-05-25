package com.pokemon;

public class Chikorita extends TipoPlanta{
	
	//atributos especificos
	private int numeroCuernitos;
	
	//constructor
	public Chikorita(int id, int edad, int nivel, String nombre, boolean evolucion, int numeroHojas, int numeroCuernitos) {
		super(id, edad, nivel, nombre, evolucion, numeroHojas);
		this.numeroCuernitos = numeroCuernitos;
	}
	
	//metodo especifico
	public void latigo() {
		System.out.println(getNombre() + " uso latigo");
	}
	
	public void atacar2() {
		System.out.println(getNombre() + " tipo planta esta atacando x2");
	}
	
	//getters and setters
	public int getNumeroCuernitos() {
		return numeroCuernitos;
	}

	public void setNumeroCuernitos(int numeroCuernitos) {
		this.numeroCuernitos = numeroCuernitos;
	}

	
	
	
	
	
	
	
	
}
