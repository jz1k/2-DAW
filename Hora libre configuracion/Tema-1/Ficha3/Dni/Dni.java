package Ficha3.Dni;

public class Dni {
    private int numeroDni;

    public Dni(int numeroDni) {
        this.numeroDni = numeroDni;
    }

    public int getNumeroDni() {
        return numeroDni;
    }

    public String getNif() {
        return Integer.toString(numeroDni) + calcularLetraNIF(numeroDni);
    }

    public void setDni(String nif) throws IllegalArgumentException {
        if (validarNif(nif)) {
            this.numeroDni = extraerNumeroDni(nif);
        } else {
            throw new IllegalArgumentException("El NIF proporcionado es incorrecto.");
        }
    }

    public void setDni(int numeroDni) throws IllegalArgumentException {
        if (numeroDni >= 0 && numeroDni <= 99999999) {
            this.numeroDni = numeroDni;
        } else {
            throw new IllegalArgumentException("El número de DNI proporcionado es incorrecto.");
        }
    }

    private static char calcularLetraNIF(int numeroDni) {
        String letras = "TRWAGMYFPDXBNJZSQVHLCKE";
        int index = numeroDni % 23;
        return letras.charAt(index);
    }

    private static boolean validarNif(String nif) {
        if (nif == null || nif.length() != 9) {
            return false;
        }

        int numeroDni = extraerNumeroDni(nif);
        char letra = extraerLetraNif(nif);

        return calcularLetraNIF(numeroDni) == letra;
    }

    private static char extraerLetraNif(String nif) {
        return nif.charAt(8);
    }

    private static int extraerNumeroDni(String nif) {
        String numeroStr = nif.substring(0, 8);
        return Integer.parseInt(numeroStr);
    }
}
