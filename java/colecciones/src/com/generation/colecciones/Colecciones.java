package com.generation.colecciones;

import java.util.ArrayList;
import java.util.Collection;
import java.util.HashMap;
import java.util.HashSet;
import java.util.List;
import java.util.Map;
import java.util.Set;

public class Colecciones {
	public static void main(String[] args) {
		
		//List - ArrayList
		//picoparentesis
		System.out.println("\tList --- ArrayList");
		List<String> miArray = new ArrayList<String>();
		
		miArray.add("Pedro");
		miArray.add("Yair");
		miArray.add("Maria");
		miArray.add(1, "Raul");
		
		String elemento = miArray.remove(1);
		
		System.out.println(miArray);
		System.out.println(miArray.size());//length
		System.out.println(elemento);
		
		imprimir(miArray);
		
		/*
		 * wrappers
		 * long ==> Long
		 * double ==> Double
		 * int ==> Integer
		 * boolean = Boolean
		 * 
		 */
		
		int num1 = 10;
		Integer num2 = 10;
		
		System.out.println(num1);
		System.out.println(num2.getClass().getSimpleName());
		
//		System.out.println(num2.getClass());
		
		List<Integer> miArray2 = new ArrayList<Integer>();
		
		miArray2.add(3);
		miArray2.add(34);
		miArray2.add(345);
		
		imprimir(miArray2);
		
		System.out.println("\t Set --- HashSet");
		Set<String> miSet = new HashSet<String>();
		//no acepta elementos duplicados
		//no los guarda en un elemento especifico
		//La coleccion que funciona mas rapido
		miSet.add("Martha");
		miSet.add("Martha");
		miSet.add("Lupe");
		miSet.add("Juan");
		miSet.add("Juan");
		miSet.add("Gabriel");
		
		miSet.remove("Lupe");
		
		System.out.println(miSet);
		
		imprimir(miSet);
		
		System.out.println(miSet.contains("Yair"));
		
		//Map -- HasMap -- Indice
		//<Key/llave, value/valor>
		System.out.println("\t Map --- HasMap");
		
		Map<String, Integer> miMap = new HashMap<String, Integer>();
		
		miMap.put("Valor 1", 45);
		miMap.put("Valor 1", 250);
		miMap.put("Valor 2", 50);
		miMap.put("Valor 3", 150);
		miMap.put("Valor 4", 510);
		
		
		System.out.println(miMap);
		System.out.println(miMap.values());//todos los valores
		System.out.println(miMap.keySet());//todas las llaves
	
		System.out.println(miMap.get("Valor 1"));
		
		for(String llave : miMap.keySet()) {
			System.out.println(llave + " : " + miMap.get(llave));
			
		}
	}
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	public static void imprimir(Collection coleccion) {
		for(Object elemento : coleccion) {
			System.out.println("Elemento = " + elemento);
		}
	}
	
	
}













































