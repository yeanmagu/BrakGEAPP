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
    
    public partial class TipoPersona
    {
        public TipoPersona()
        {
            this.Personas = new HashSet<Persona>();
        }
    
        public int ID { get; set; }
        public string Descripcion { get; set; }
        public Nullable<bool> Estado { get; set; }
    
        public virtual ICollection<Persona> Personas { get; set; }
    }
}
