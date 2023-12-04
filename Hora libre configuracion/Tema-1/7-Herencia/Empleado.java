public class Empleado {
    private String nombre;
    private int edad;
    private double salario;

    public Empleado(String nombre, int edad, double salario) {
        this.nombre = nombre;
        this.edad = edad;
        this.salario = salario;
    }

    public String getNombre() {
        return nombre;
    }

    public void setNombre(String nombre) {
        this.nombre = nombre;
    }

    public int getEdad() {
        return edad;
    }

    public void setEdad(int edad) {
        this.edad = edad;
    }

    public double getSalario() {
        return salario;
    }

    public void setSalario(double salario) {
        this.salario = salario;
    }

    public void plus() {
        // No se puede crear un objeto Empleado directamente, por lo que este método se sobrescribirá en las clases hijas.
    }

    @Override
    public String toString() {
        return "Empleado [nombre=" + nombre + ", edad=" + edad + ", salario=" + salario + "]";
    }
}