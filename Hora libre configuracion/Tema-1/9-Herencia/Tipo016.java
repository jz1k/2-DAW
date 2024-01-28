public class Tipo016 extends Articulo {
    public static final double TIPO = 16.0;

    public Tipo016(String nombre, double precio) {
        super(nombre, precio);
    }

    public double getParteIVA() {
        return getPrecio() * (TIPO / 100);
    }

    @Override
    public double getPrecio() {
        return super.getPrecio() + getParteIVA();
    }
}
