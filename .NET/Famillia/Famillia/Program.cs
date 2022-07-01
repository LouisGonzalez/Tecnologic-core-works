// See https://aka.ms/new-console-template for more information
using System;

namespace Famillia
{

    class Program
    {

        static void Main(String[] args)
        {
            Persona miPadre = new Persona("Juan","Perez",50,"padre");
            Persona miMadre = new Persona("Emily","Garcia",43,"madre");
            Persona hijo = new Persona("Jose","Perez Garcia", 17, "hijo");
            Persona hija = new Persona("Julia","Perez Garcia",23, "hija");


            Familia miFamilia = new Familia(miPadre, miMadre, hijo, hija);

            miFamilia.presentacion();
            Console.WriteLine("\n\n\n");
            miPadre.saludar();
            miMadre.saludar();
            hijo.saludar();
            hija.saludar();

        }

    }

}
