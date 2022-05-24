package com.calculadora;

public class Calculadora {
	
	//atributos o propiedades
	private int a;
	private int b;
	private int c;
	private String nombre;
	private int resultado;
	
	//constructor 
	public Calculadora(int a, int b) {
		this.a = a;
		this.b = b;
	}
	
	public Calculadora(int a, int b, int c) {
		this.a = a;
		this.b = b;
		this.c = c;
	}
	
	public Calculadora(int a, int b, int c, String nombre) {
		this.a = a;
		this.b = b;
		this.c = c;
		this.nombre = nombre;
	}
	
	//metodo
	public int sumar(int a, int b) {
		resultado = a + b;
		System.out.println("El resultado de la suma es: " + resultado);
		return 0;
	}
	
	public void sumar(int a, int b, int c) {
		resultado = a + b + c;
		System.out.println("El resultado de la suma es: " + resultado);
	}
	
	public void sumar(int a, int b, int c, int d) {
		resultado = a + b + c + d;
		System.out.println("El resultado de la suma es: " + resultado);
	}
	
	public void sumar(float a, float b, float c, float d) {
		resultado = (int) (a + b + c + d);
		System.out.println("El resultado de la suma es: " + resultado);
	}
	
	//Getters y setters

	public int getA() {
		return a;
	}

	public void setA(int a) {
		this.a = a;
	}

	public int getB() {
		return b;
	}

	public void setB(int b) {
		this.b = b;
	}

	public int getResultado() {
		return resultado;
	}

	public void setResultado(int resultado) {
		this.resultado = resultado;
	}
	
}
