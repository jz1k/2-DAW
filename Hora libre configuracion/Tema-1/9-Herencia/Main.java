public class Main {
    public static void main(String[] args) {
        Tipo04 articuloTipo04 = new Tipo04("Articulo 1", 100);
        Tipo07 articuloTipo07 = new Tipo07("Articulo 2", 150);
        Tipo016 articuloTipo016 = new Tipo016("Articulo 3", 200);

        System.out.println("Precio total con IVA (4%): " + articuloTipo04.getPrecio());
        System.out.println("Precio total con IVA (7%): " + articuloTipo07.getPrecio());
        System.out.println("Precio total con IVA (16%): " + articuloTipo016.getPrecio());
    }
}
