using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Sistema_Banco
{
    internal class Cliente
    {

        private String nombre;
        private Double monto;       //Double 1000.

        public Cliente(String nombre, Double monto)
        {
            this.nombre = nombre;
            this.monto = monto;
        }

        public void depositarDinero(Double cantidadIngresada)
        {
            this.monto = this.monto + cantidadIngresada; 
        }

        public void extraerDinero(Double cantidadExtraida)
        {
            this.monto = this.monto - cantidadExtraida;
        }

        public Double getMonto()
        {
            return this.monto;
        }

    }
}
