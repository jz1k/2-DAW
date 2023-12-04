public class Main {
    public static void main(String[] args) {
        Comercial comercial1 = new Comercial("Juan", 35, 1500, 250);
        Repartidor repartidor1 = new Repartidor("Ana", 22, 1200, "zona 3");

        System.out.println(comercial1.toString());
        comercial1.plus();
        System.out.println("Después de aplicar plus: " + comercial1.toString());

        System.out.println(repartidor1.toString());
        repartidor1.plus();
        System.out.println("Después de aplicar plus: " + repartidor1.toString());
    }
}