using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Famillia
{
    internal class Familia
    {

        private Persona padre;
        private Persona madre;
        private Persona hijo;
        private Persona hija;

        public Familia(Persona padre, Persona madre, Persona hijo, Persona hija)
        {
            this.padre = padre;
            this.madre = madre;
            this.hija = hija;
            this.hijo = hijo;
        }

        public void presentacion()
        {
            Console.WriteLine("Hola! Nos presentamos:\n" +
                "El padre es: "+padre.getNombre()+"\n" +
                "La madre es: "+madre.getNombre()+"\n" +
                "El hijo es: "+hijo.getNombre()+"\n" +
                "La hija es: "+hija.getNombre());
        }





    }
}
