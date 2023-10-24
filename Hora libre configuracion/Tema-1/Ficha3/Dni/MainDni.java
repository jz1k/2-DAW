package Ficha3.Dni;

public class MainDni {
    public static void main(String[] args) {
        // Crear un objeto Dni con un número de DNI inicial
        Dni miDni = new Dni(77249364);

        // Obtener y mostrar el número de DNI y el NIF completo
        System.out.println("Número de DNI: " + miDni.getNumeroDni());
        System.out.println("NIF completo: " + miDni.getNif());

        // Cambiar el DNI proporcionando un NIF completo
        try {
            miDni.setDni("12345678Z");
            System.out.println("Nuevo número de DNI: " + miDni.getNumeroDni());
        } catch (IllegalArgumentException e) {
            System.out.println("Asegurate de introducir todo bien");
        }

        // Cambiar el DNI proporcionando solo el número de DNI
        try {
            miDni.setDni(77249364);
            System.out.println("Nuevo número de DNI: " + miDni.getNumeroDni());
        } catch (IllegalArgumentException e) {
            System.out.println("Asegurate de introducir todo bien");
        }
    }
}
