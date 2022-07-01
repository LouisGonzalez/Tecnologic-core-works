using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Sistema_Banco
{
    internal class Banco
    {

        private Cliente cliente1;
        private Cliente cliente2;
        private Cliente cliente3;

        public Banco(Cliente cliente1, Cliente cliente2, Cliente cliente3)
        {
            this.cliente1 = cliente1;
            this.cliente2 = cliente2;
            this.cliente3 = cliente3;
        }

        public void sumaCuentas()
        {
            Double total = cliente1.getMonto() + cliente2.getMonto() + cliente3.getMonto();
            Console.WriteLine("El total de las 3 cuentas es de: " + total);
        }

    }
}
