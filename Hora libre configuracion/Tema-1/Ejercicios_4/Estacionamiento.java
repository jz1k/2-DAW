

import java.util.*;

public class Estacionamiento {
    public static void main(String[] args) {
        Scanner scanner = new Scanner(System.in);
        double totalRecibosAyer = 0.0;

        while (true) {
            System.out.print("Ingrese las horas de estacionamiento (0 para salir): ");
            double horasEstacionamiento = scanner.nextDouble();

            if (horasEstacionamiento == 0) {
                break;
            }

            double pago = calcularPagos(horasEstacionamiento);
            totalRecibosAyer += pago;

            System.out.println("Pago para este cliente: " + pago + "euros");
        }

        System.out.println("Total de recibos de ayer: " + totalRecibosAyer + "euros");
    }

    public static double calcularPagos(double horasEstacionamiento) {
        double tarifaMinima = 2.00;
        double tarifaPorHora = 0.50;
        double tarifaMaxima = 10.00;
        double totalPago = 0.0;

        if (horasEstacionamiento <= 3.0) {
            totalPago = tarifaMinima;
        } else if (horasEstacionamiento <= 24.0) {
            totalPago = tarifaMinima + Math.ceil(horasEstacionamiento - 3.0) * tarifaPorHora;
            totalPago = Math.min(totalPago, tarifaMaxima);
        } else {
            totalPago = tarifaMaxima;
        }

        return totalPago;
    }
}
