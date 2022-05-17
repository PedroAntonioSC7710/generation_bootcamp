package com.calculadora;

public class PruebaCalculadora {

	public static void main(String[] args) {
		System.out.println("Vamos a calcular");

		//Instanciar - crear un objeto a partir de una clase
		Calculadora cal = new Calculadora();
//		objeto cal = new Calculadora();
		
		//Metodo que ni retirna nada - void
		cal.sumarMensaje();
		
		//metodo que regresa un valor
		String mensaje = cal.mensaje();
		System.out.println(cal.mensaje());
		
		
		double prueba = cal.prueba();
		System.out.println(prueba);
		
		//metodos con parametros
		int suma =cal.sumar(5, 20);
		System.out.println(suma);
		
		cal.sumarM(8, 5);
		
		int restar = cal.restar(8, 1);
		System.out.println(restar);
		
		//Instanciar
		Areas calAreas = new Areas();
		
		calAreas.mensaje();
		
		int areaC = calAreas.areaCuadrado(5);
		System.out.println(areaC);
		
		double areaT = calAreas.areaTriangulo(5, 10);
		System.out.println(areaT);
	}

}


































