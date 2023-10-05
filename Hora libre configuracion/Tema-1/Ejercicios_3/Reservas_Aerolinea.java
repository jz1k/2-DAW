package Ejercicios_3;

import java.util.Scanner;

public class Reservas_Aerolinea {
    public static void main(String[] args) {
        boolean[] asientos = new boolean[10]; // Array para representar los asientos (inicialmente todos disponibles)
        Scanner scanner = new Scanner(System.in);

        while (true) {
            // Mostrar opciones al usuario
            System.out.println("¿Donde quieres tu asiento?\n1 - Primera Clase \n2 - Económico:");
            int eleccion = scanner.nextInt();

            if (eleccion == 1 || eleccion == 2) {
                int asientoAsignado;
                if (eleccion == 1) {
                    asientoAsignado = asignarAsiento(asientos, 1);
                } else {
                    asientoAsignado = asignarAsiento(asientos, 2);
                }

                if (asientoAsignado != -1) {
                    imprimirTarjetaEmbarque(asientoAsignado, eleccion);
                } else {
                    System.out.println("Lo siento, el avión está lleno. ¿Desea ser colocado en otra seccion? (1: Sí, 2: No)");
                    int eleccionOpuesta = scanner.nextInt();

                    if (eleccionOpuesta == 1) {
                        int seccionOpuesta;
                        if (eleccion == 1) {
                            seccionOpuesta = 2;
                        } else {
                            seccionOpuesta = 1;
                        }
                        int asientoOpuesto = asignarAsiento(asientos, seccionOpuesta);

                        if (asientoOpuesto != -1) {
                            imprimirTarjetaEmbarque(asientoOpuesto, seccionOpuesta);
                        } else {
                            System.out.println("Lo siento, ambas secciones están llenas. El próximo vuelo sale en 3 horas.");
                            break;
                        }
                    } else {
                        System.out.println("El próximo vuelo sale en 3 horas.");
                        break;
                    }
                }
            } else {
                System.out.println("Selección no válida. Por favor, escriba 1 para Primera Clase o 2 para Económico.");
            }
        }
    }

    public static int asignarAsiento(boolean[] asientos, int seccion) {
        int asientoAsignado = -1;

        if (seccion == 1) {
            for (int i = 0; i < 5; i++) {
                if (!asientos[i]) {
                    asientos[i] = true;
                    asientoAsignado = i + 1; // Sumamos 1 para que el asiento se muestre como 1-indexed
                    break;
                }
            }
        } else if (seccion == 2) {
            for (int i = 5; i < 10; i++) {
                if (!asientos[i]) {
                    asientos[i] = true;
                    asientoAsignado = i + 1; // Sumamos 1 para que el asiento se muestre como 1-indexed
                    break;
                }
            }
        }

        return asientoAsignado;
    }

    public static void imprimirTarjetaEmbarque(int asiento, int seccion) {
        String seccionNombre;
        if (seccion == 1) {
            seccionNombre = "Primera Clase";
        } else {
            seccionNombre = "Económico";
        }
        System.out.println("\nTarjeta de Embarque:");
        System.out.println("Sección: " + seccionNombre);
        System.out.println("Asiento: " + asiento + "\n");
    }
}
