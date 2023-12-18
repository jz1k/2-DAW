public class Ingeniero extends Persona {
    public Ingeniero() {
        // Constructor por defecto
    }

    public Ingeniero(String nif, int altura, int edad) {
        super(nif, altura, edad);
    }

    public void razonar() {
        System.out.println("El ingeniero está razonando.");
    }

    public void trabajarEnGrupo() {
        System.out.println("El ingeniero está trabajando en grupo.");
    }
}
