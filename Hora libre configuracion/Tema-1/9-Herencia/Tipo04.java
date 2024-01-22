public class Tipo04 extends Articulo {
    public static final double TIPO = 4.0;

    public Tipo04(String nombre, double precio) {
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
