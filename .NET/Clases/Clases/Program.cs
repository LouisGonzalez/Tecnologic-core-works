// See https://aka.ms/new-console-template for more information
using System;

namespace Clases
{

    class Program
    {
        static void Main(String[] args)
        {
            Class1 miClase = new Class1();
           
            miClase.mostrarValor();     //2
            miClase.CambioValor(8);      //8
            miClase.mostrarValor();     //8

            miClase.cambioNombre("Luis");
            miClase.mostrarNombre();

        }

    }

}