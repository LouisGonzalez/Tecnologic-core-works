// See https://aka.ms/new-console-template for more information
using System;

namespace Proyecto1
{

    class Program
    {

        static void Main(String[] args)
        {
           try
            {
                int a1 = Convert.ToInt32(Console.ReadLine());
                Console.WriteLine(a1);

                Funcion1();
            }
            catch (Exception ex)
            {
                Console.WriteLine(ex.Message);
            }




        }


        static void Funcion1()
        {

                int a1 = Convert.ToInt32(Console.ReadLine());
                Console.WriteLine(a1);
           

        }

}




