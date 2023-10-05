package Ejercicios_3;

import java.util.Scanner;

public class Ventas_Totales {
    public static void main(String[] args) {
        Scanner scanner = new Scanner(System.in);
        double[][] ventas = new double[5][4]; // Array bidimensional para almacenar las ventas

        // Leer las ventas del mes pasado
        for (int vendedor = 0; vendedor < 4; vendedor++) {
            for (int producto = 0; producto < 3; producto++) {
                System.out.print("Ingrese las ventas del vendedor " + (vendedor + 1) + " para el producto " + (producto + 1) + ": ");
                ventas[producto][vendedor] = scanner.nextDouble();
            }
        }

        // Calcular totales de ventas por vendedor
        double[] ventasPorVendedor = new double[4];
        for (int vendedor = 0; vendedor < 4; vendedor++) {
            for (int producto = 0; producto < 3; producto++) {
                ventasPorVendedor[vendedor] += ventas[producto][vendedor];
            }
        }

        // Calcular totales de ventas por producto
        double[] ventasPorProducto = new double[3];
        for (int producto = 0; producto < 3; producto++) {
            for (int vendedor = 0; vendedor < 4; vendedor++) {
                ventasPorProducto[producto] += ventas[producto][vendedor];
            }
        }

        // Imprimir resultados
        System.out.println("\nVentas Totales:");
        System.out.println("Producto\tVendedor 1\tVendedor 2\tVendedor 3\tVendedor 4\tTotal");
        System.out.println("--------------------------------------------------------------------------------------");
        for (int producto = 0; producto < 3; producto++) {
            System.out.print("Producto " + (producto + 1) + "\t");
            for (int vendedor = 0; vendedor < 4; vendedor++) {
                System.out.print(ventas[producto][vendedor] + "\t\t");
            }
            System.out.println(ventasPorProducto[producto]);
        }
        System.out.println("--------------------------------------------------------------------------------------");
        System.out.print("Total\t\t");
        for (int vendedor = 0; vendedor < 4; vendedor++) {
            System.out.print(ventasPorVendedor[vendedor] + "\t\t");
        }
        System.out.println();
    }
}
