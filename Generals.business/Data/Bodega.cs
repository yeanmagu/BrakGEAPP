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
    
    public partial class Bodega
    {
        public Bodega()
        {
            this.TipoMovimientoes = new HashSet<TipoMovimiento>();
        }
    
        public int ID { get; set; }
        public int IDEmpresa { get; set; }
        public string Nombre { get; set; }
        public string Descripcion { get; set; }
        public string Direccion { get; set; }
        public string Telefono { get; set; }
        public string Publicidad { get; set; }
        public int IdMunicipio { get; set; }
        public string Notas { get; set; }
        public int IDUsuario { get; set; }
        public System.DateTime FechaModificacion { get; set; }
        public Nullable<bool> Estado { get; set; }
        public string Responsable { get; set; }
    
        public virtual Empresa Empresa { get; set; }
        public virtual Municipio Municipio { get; set; }
        public virtual User User { get; set; }
        public virtual ICollection<TipoMovimiento> TipoMovimientoes { get; set; }
    }
}
