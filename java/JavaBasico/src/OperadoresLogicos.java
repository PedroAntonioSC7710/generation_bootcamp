import java.util.Objects;

public class OperadoresLogicos {

	public static void main(String[] args) {
		//una sola linea
		
		/*
		 * un comentario
		 * multilinea
		 * */
		
		//operadores de asignacion 
		
		int num = 12; 
		num = 45;
		num = Integer.parseInt("4");
		
		//System.out.println(num);
		
		//Operadores de comparacion 
		
		int num1, num2;
		num1 = 10;
		num2 = 20;
		
		//System.out.println("num1: " + num1);
		//System.out.println("num2: " + num2);
		//== operador de comparacion
		//System.out.println(num1 == num2);
		
		//.equals()
		
		//System.out.println(Objects.equals(num1, num2));
		
		//<, >, <=, =>
		int num3, num4;
		
		num3 = 15;
		num4 = 20;
		
		//System.out.println(num < num4);
		//System.out.println(num > num4);
		//System.out.println(num <= num4);
		//System.out.println(num >= num4);
		
		if (num3 < num4) {
			//codigo a ejecutar
			//System.out.println("Numero 3 es menor");
		}else {
			//System.out.println("Numero 3 es menor");
		}
		

		// != 
		
		//System.out.println(num3 != num4);
		
		boolean comparacion = num3 != num4;
		//System.out.println(comparacion);
		
		
		//operadores logicos 
		// AND = && =====> ambos valores deben ser true para que regrese true
		// OR = || =====> solo uno debe ser verdadero pra que regerse un true
		// NOT = !
		
		
		System.out.println(true && true);
		
		System.out.println(true || true);
		
		System.out.println(!true && true);
		
		System.out.println(!(false && true));
		
		
		
	}

}





















































