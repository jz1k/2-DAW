package Ficha3.Fecha;

public class MainFecha {
    public static void main(String[] args) {
        
        Fecha fecha1 = new Fecha(6, 15, 1992);
        Fecha fecha2 = new Fecha("Junio", 15, 1992);
        Fecha fecha3 = new Fecha(167, 1992);

        // Imprimir las fechas en diferentes formatos
        System.out.println("Formato 1: MM/DD/AAAA");
        fecha1.imprimirFormato1();
        fecha2.imprimirFormato1();
        fecha3.imprimirFormato1();

        System.out.println("\nFormato 2: Mes Dia, AAAA");
        fecha1.imprimirFormato2();
        fecha2.imprimirFormato2();
        fecha3.imprimirFormato2();

        System.out.println("\nFormato 3: DDD AAAA");
        fecha1.imprimirFormato3();
        fecha2.imprimirFormato3();
        fecha3.imprimirFormato3();
    }
}

