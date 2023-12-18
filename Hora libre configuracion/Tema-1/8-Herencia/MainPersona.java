public class MainPersona {
    public static void main(String[] args) {
        Persona persona1 = new Persona();
        System.out.println("Persona 1 - NIF: " + persona1.getNif() +
                ", Altura: " + persona1.getAltura() +
                " cm, Edad: " + persona1.getEdad() + " años");

        Persona persona2 = new Persona("22222222B", 180, 30);
        System.out.println("Persona 2 - NIF: " + persona2.getNif() +
                ", Altura: " + persona2.getAltura() +
                " cm, Edad: " + persona2.getEdad() + " años");
    }
}
