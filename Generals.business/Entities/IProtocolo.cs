namespace Generals.business.Entities
{
    public interface IProtocolo
    {
        string codigoResponse { get; set; }
        string CodLaboratorio { get; set; }
        decimal Ensayo1Activa { get; set; }
        decimal Ensayo1Reactiva { get; set; }
        decimal Ensayo2Activa { get; set; }
        decimal Ensayo2Reactiva { get; set; }
        decimal Ensayo3Activa { get; set; }
        decimal Ensayo3Reactiva { get; set; }
        decimal Ensayo4Activa { get; set; }
        decimal Ensayo4Reactiva { get; set; }
        decimal Ensayo5Activa { get; set; }
        decimal Ensayo5Reactiva { get; set; }
        decimal Ensayo6Activa { get; set; }
        decimal Ensayo6Reactiva { get; set; }
        decimal Ensayo7Activa { get; set; }
        decimal Ensayo7Reactiva { get; set; }
        decimal Ensayo8Activa { get; set; }
        decimal ErrorporcenEnEnergiaReactiva { get; set; }
        string ErrorPorcentual { get; set; }
        string Fecha_Res_Exactitud { get; set; }
        int ID { get; set; }
        decimal Incertidumbre1Activa { get; set; }
        decimal Incertidumbre1Reactiva { get; set; }
        decimal Incertidumbre2Activa { get; set; }
        decimal Incertidumbre2Reactiva { get; set; }
        decimal Incertidumbre3Activa { get; set; }
        decimal Incertidumbre3Reactiva { get; set; }
        decimal Incertidumbre4Activa { get; set; }
        decimal Incertidumbre4Reactiva { get; set; }
        decimal Incertidumbre5Activa { get; set; }
        decimal Incertidumbre5Reactiva { get; set; }
        decimal Incertidumbre6Activa { get; set; }
        decimal Incertidumbre6Reactiva { get; set; }
        decimal Incertidumbre7Activa { get; set; }
        decimal Incertidumbre7Reactiva { get; set; }
        decimal Incertidumbre8Activa { get; set; }
        string mensajeResponse { get; set; }
        string Nic { get; set; }
        string Nis { get; set; }
        string NumCertificado { get; set; }
        int NumeroActa { get; set; }
        string NumeroMedidor { get; set; }
        string ResultadoArranque { get; set; }
        string ResultadoEnsayoFuncioSinCarga { get; set; }
        string ResultadoExactitud { get; set; }
        string ResultadoInspeccionVisual { get; set; }
        string ResultadoPropieDialectrica { get; set; }
        string ResultadoVerificacionConstante { get; set; }
        string TipoEnergia { get; set; }
    }
}