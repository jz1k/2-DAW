public class IngenieroInformatico extends Ingeniero {
    public IngenieroInformatico() {
        // Constructor por defecto
    }

    public IngenieroInformatico(String nif, int altura, int edad) {
        super(nif, altura, edad);
    }

    public void crearPrograma() {
        System.out.println("El ingeniero informático está creando un programa.");
    }
}
