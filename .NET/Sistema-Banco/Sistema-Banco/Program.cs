using System;

namespace Sistema_Banco
{

    class Program
    {

        static void Main(String[] args)
        {
            Cliente cliente1 = new Cliente("Marvin Orozco", 2500);
            Cliente cliente2 = new Cliente("Jasmin Fernandez", 4000);
            Cliente cliente3 = new Cliente("Ana Ortega", 3000);
            Banco bac = new Banco(cliente1, cliente2, cliente3);

            cliente2.depositarDinero(100);
            Console.WriteLine("El total de cuenta 2 actualmente es de: " + cliente2.getMonto());
            cliente2.extraerDinero(2000);
            Console.WriteLine("El total de cuenta 2 actualmente es de: " + cliente2.getMonto());


            bac.sumaCuentas();

        }

    }

}