public class Tipo07 extends Articulo {
    public static final double TIPO = 7.0;

    public Tipo07(String nombre, double precio) {
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
