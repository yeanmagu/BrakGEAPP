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
    
    public partial class TipoMOntaje
    {
        public TipoMOntaje()
        {
            this.DetalleActas = new HashSet<DetalleActa>();
        }
    
        public int ID { get; set; }
        public string Descripcion { get; set; }
        public Nullable<bool> Estado { get; set; }
    
        public virtual ICollection<DetalleActa> DetalleActas { get; set; }
    }
}