//------------------------------------------------------------------------------
// <auto-generated>
//    Este código se generó a partir de una plantilla.
//
//    Los cambios manuales en este archivo pueden causar un comportamiento inesperado de la aplicación.
//    Los cambios manuales en este archivo se sobrescribirán si se regenera el código.
// </auto-generated>
//------------------------------------------------------------------------------

namespace Generals.business.Data
{
    using System;
    using System.Collections.Generic;
    
    public partial class Empresa
    {
        public Empresa()
        {
            this.Bodegas = new HashSet<Bodega>();
            this.Grupoes = new HashSet<Grupo>();
            this.Marcas = new HashSet<Marca>();
        }
    
        public int ID { get; set; }
        public string Nombre { get; set; }
        public string PaginaWeb { get; set; }
        public string Direccion { get; set; }
        public string Telefono { get; set; }
        public string Logo { get; set; }
        public string Resolucion { get; set; }
        public Nullable<System.DateTime> FechaResolucion { get; set; }
        public string Contacto { get; set; }
        public string Notas { get; set; }
        public Nullable<bool> Estado { get; set; }
    
        public virtual ICollection<Bodega> Bodegas { get; set; }
        public virtual ICollection<Grupo> Grupoes { get; set; }
        public virtual ICollection<Marca> Marcas { get; set; }
    }
}