using System;


namespace Clases
{
    internal class Class1
    {
        //ENCAPSULAMIENTO DE DATOS
        //private       
        //protected
        //public
        //default 

        private int valor = 2;
        private String nombre;

        public void CambioValor(int nuevoValor)     //8
        {
            valor = nuevoValor;         //valor = 8
        }

        public void mostrarValor()
        {
            Console.WriteLine(valor);
        }

        public void cambioNombre(String nombre)
        {
            this.nombre = nombre;
        }

        public void mostrarNombre()
        {
            Console.WriteLine(this.nombre);
        }


    }
}
