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
    
    public partial class Grupo
    {
        public Grupo()
        {
            this.SubGrupoes = new HashSet<SubGrupo>();
            this.Marcas = new HashSet<Marca>();
        }
    
        public int ID { get; set; }
        public Nullable<int> IdEmpresa { get; set; }
        public string Descripcion { get; set; }
        public Nullable<bool> Estado { get; set; }
        public Nullable<int> IdUsuario { get; set; }
        public Nullable<System.DateTime> Fecha { get; set; }
    
        public virtual Empresa Empresa { get; set; }
        public virtual ICollection<SubGrupo> SubGrupoes { get; set; }
        public virtual ICollection<Marca> Marcas { get; set; }
    }
}
