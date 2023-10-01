package Ejercicios_2;

public class Ej_10_TodosCaracterDeDigitos {
    public static void main(String[] args) {
        System.out.println("Códigos y caracteres correspondientes:");
        for (int codigo = 0; codigo <= 255; codigo++) {
            char caracter = (char) codigo;
            System.out.println(codigo + "\t" + caracter);
        }
    }
}