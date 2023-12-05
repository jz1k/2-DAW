public class Repartidor extends Empleado {
    private String zona;

    public Repartidor(String nombre, int edad, double salario, String zona) {
        super(nombre, edad, salario);
        this.zona = zona;
    }

    public String getZona() {
        return zona;
    }

    public void setZona(String zona) {
        this.zona = zona;
    }

    @Override
    public void plus() {
        if (getEdad() < 25 && zona.equals("zona 3")) {
            setSalario(getSalario() + 300);
        }
    }

    @Override
    public String toString() {
        return "Repartidor [nombre=" + getNombre() + ", edad=" + getEdad() + ", salario=" + getSalario() + ", zona="
                + zona + "]";
    }
}