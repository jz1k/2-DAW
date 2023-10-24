package Ficha3.Fecha;
public class Fecha {
    private int dia;
    private int mes;
    private int anio;

    public Fecha(int dia, int mes, int anio) {
        this.dia = dia;
        this.mes = mes;
        this.anio = anio;
    }

    public Fecha(String fechaString, int dia, int anio) {
        this.dia = dia;
        this.anio = anio;
        this.mes = obtenerNumeroMes(fechaString);
    }

    public Fecha(int diaDelAnio, int anio) {
        this.dia = diaDelAnio;
        this.anio = anio;
        this.mes = obtenerMesDesdeDiaAnio(diaDelAnio, anio);
    }

    public void imprimirFormato1() {
        System.out.printf("%02d/%02d/%04d%n", mes, dia, anio);
    }

    public void imprimirFormato2() {
        String nombreMes = obtenerNombreMes(mes);
        System.out.printf("%s %d, %04d%n", nombreMes, dia, anio);
    }

    public void imprimirFormato3() {
        System.out.printf("%03d %04d%n", dia, anio);
    }

    private int obtenerNumeroMes(String nombreMes) {
        String[] meses = {
            "Enero", "Febrero", "Marzo", "Abril", "Mayo", "Junio",
            "Julio", "Agosto", "Septiembre", "Octubre", "Noviembre", "Diciembre"
        };

        for (int i = 0; i < meses.length; i++) {
            if (nombreMes.equals(meses[i])) {
                return i + 1;
            }
        }

        return -1; // Mes no válido
    }

    private String obtenerNombreMes(int numeroMes) {
        String[] meses = {
            "Enero", "Febrero", "Marzo", "Abril", "Mayo", "Junio",
            "Julio", "Agosto", "Septiembre", "Octubre", "Noviembre", "Diciembre"
        };

        if (numeroMes >= 1 && numeroMes <= 12) {
            return meses[numeroMes - 1];
        } else {
            return "Mes no válido";
        }
    }

    private int obtenerMesDesdeDiaAnio(int diaDelAnio, int anio) {
        int mes = 1;
        int[] diasPorMes = {
            31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31
        };

        if (anio % 4 == 0 && (anio % 100 != 0 || anio % 400 == 0)) {
            // Año bisiesto, febrero tiene 29 días
            diasPorMes[1] = 29;
        }

        for (int i = 0; i < 12; i++) {
            if (diaDelAnio <= diasPorMes[i]) {
                mes = i + 1;
                break;
            }
            diaDelAnio -= diasPorMes[i];
        }

        return mes;
    }
}
