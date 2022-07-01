using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Famillia
{
    internal class Persona
    {

        private String nombre;
        private String apellido;
        private int edad;
        private String tipo;

        public Persona(String nombre, String apellido, int edad, String tipo)
        {
            this.nombre = nombre;
            this.apellido = apellido;
            this.edad = edad;
            this.tipo = tipo;
        }





        public void saludar()
        {
            Console.WriteLine("Hola que tal!, mi nombre es: " + this.nombre);
        }

        public void verTipo()
        {
            Console.WriteLine("Yo soy: "+this.tipo);
        }

        public String getNombre()
        {
            return nombre;
        }

        public void setNombre(String nombre)
        {
            this.nombre = nombre;
        }



    }
}
