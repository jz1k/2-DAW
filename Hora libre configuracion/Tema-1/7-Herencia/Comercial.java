public class Comercial extends Empleado {
    private double comision;

    public Comercial(String nombre, int edad, double salario, double comision) {
        super(nombre, edad, salario);
        this.comision = comision;
    }

    public double getComision() {
        return comision;
    }

    public void setComision(double comision) {
        this.comision = comision;
    }

    @Override
    public void plus() {
        if (getEdad() > 30 && comision > 200) {
            setSalario(getSalario() + 300);
        }
    }

    @Override
    public String toString() {
        return "Comercial [nombre=" + getNombre() + ", edad=" + getEdad() + ", salario=" + getSalario() + ", comision="
                + comision + "]";
    }
}