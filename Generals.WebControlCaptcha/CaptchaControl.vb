Imports System.ComponentModel
Imports System.Web
Imports System.Web.UI
Imports System.Web.UI.WebControls
Imports System.Collections
Imports System.Collections.Specialized

''' <summary>
''' CAPTCHA ASP.NET 2.0 user control
''' </summary>
''' <remarks>
''' add a reference to this DLL and add the CaptchaControl to your toolbox;
''' then just drag and drop the control on a web form and set properties on it.
'''
''' Jeff Atwood
''' http://www.codinghorror.com/
''' </remarks>
<DefaultProperty("Text")> _
Public Class CaptchaControl
    Inherits System.Web.UI.WebControls.WebControl
    Implements INamingContainer
    Implements IPostBackDataHandler
    Implements IValidator

    Public Enum Layout
        Horizontal
        Vertical
    End Enum

    Public Enum CacheType
        HttpRuntime
        Session
    End Enum

    Private _timeoutSecondsMax As Integer = 90
    Private _timeoutSecondsMin As Integer = 3
    Private _userValidated As Boolean = True
    Private _text As String = ""
    Private _font As String = ""
    Private _captcha As CaptchaImage = New CaptchaImage
    Private _layoutStyle As Layout = Layout.Vertical
    Private _prevguid As String
    Private _errorMessage As String = ""
    'Private __cacheStrategy As CacheType '= CacheType.HttpRuntime
    Private _cacheStrategy As CacheType = CacheType.HttpRuntime

    'Public Property _cacheStrategy() As CacheType
    '    Get
    '        Dim cachetype_conf As String = System.Configuration.ConfigurationSettings.AppSettings("CaptchaCacheType")

    '        If String.IsNullOrEmpty(cachetype_conf) Then
    '            Return CacheType.HttpRuntime
    '        Else : cachetype_conf = "Session"
    '            Return CacheType.HttpRuntime
    '        End If
    '    End Get
    '    Set(ByVal value As CacheType)
    '        __cacheStrategy = value
    '    End Set
    'End Property


#Region "  Public Properties"

    <Browsable(False), _
    Bindable(True), _
    Category("Appearance"), _
    DefaultValue("El texto introducido no coincide con el texto de la imagen"), _
    Description("Mensaje que se mostrará en un resumen de validación cuando el CAPTCHA no se valida.")> _
    Public Property ErrorMessage() As String Implements System.Web.UI.IValidator.ErrorMessage
        Get
            If Not _userValidated Then
                Return _errorMessage
            Else
                Return ""
            End If
        End Get
        Set(ByVal value As String)
            _errorMessage = value
        End Set
    End Property

    <Browsable(False), _
    Category("Behavior"), _
    DefaultValue(True), _
    Description("Is Valid"), _
    DesignerSerializationVisibility(DesignerSerializationVisibility.Hidden)> _
    Public Property IsValid() As Boolean Implements System.Web.UI.IValidator.IsValid
        Get
            Return _userValidated
        End Get
        Set(ByVal value As Boolean)
        End Set
    End Property

    Public Overrides Property Enabled() As Boolean
        Get
            Return MyBase.Enabled
        End Get
        Set(ByVal value As Boolean)
            MyBase.Enabled = value
            ' When a validator is disabled, generally, the intent is not to
            ' make the page invalid for that round trip.
            If Not value Then
                _userValidated = True
            End If
        End Set
    End Property


    <DefaultValue(""), _
    Description("Texto informativo se muestra junto a la imagen CAPTCHA."), _
    Category("Appearance")> _
    Public Property [Text]() As String
        Get
            Return _text
        End Get
        Set(ByVal Value As String)
            _text = Value
        End Set
    End Property

    <DefaultValue(GetType(CaptchaControl.Layout), "Horizontal"), _
    Description("Determina si la imagen y el área de entrada se muestra horizontal o verticalmente."), _
    Category("Captcha")> _
    Public Property LayoutStyle() As Layout
        Get
            Return _layoutStyle
        End Get
        Set(ByVal Value As Layout)
            _layoutStyle = Value
        End Set
    End Property

    <DefaultValue(GetType(CaptchaControl.CacheType), "HttpRuntime"), _
    Description("Determina si los códigos CAPTCHA son almacenados en HttpRuntime (rápido, pero local actual del servidor) o una sesión (más portable a través de granjas de servidores web)."), _
    Category("Captcha")> _
    Public Property CacheStrategy() As CacheType
        Get
            Return _cacheStrategy
        End Get
        Set(ByVal value As CacheType)
            _cacheStrategy = value
        End Set
    End Property

    <Description("Devuelve True si el usuario se CAPTCHA validada después de una devolución de datos."), _
    Category("Captcha")> _
    Public ReadOnly Property UserValidated() As Boolean
        Get
            Return _userValidated
        End Get
    End Property


    <DefaultValue(""), _
    Description("Fuente utilizada para representar el texto CAPTCHA. Si el nombre de la fuente está en blanco, un tipo de letra al azar será elegido."), _
    Category("Captcha")> _
    Public Property CaptchaFont() As String
        Get
            Return _font
        End Get
        Set(ByVal Value As String)
            _font = Value
            _captcha.Font = _font
        End Set
    End Property

    <DefaultValue(""), _
    Description("Caracteres que se utilizan para representar el texto CAPTCHA. Un caracter será Escogido al azar de la cadena."), _
    Category("Captcha")> _
    Public Property CaptchaChars() As String
        Get
            Return _captcha.TextChars
        End Get
        Set(ByVal Value As String)
            _captcha.TextChars = Value
        End Set
    End Property

    <DefaultValue(5), _
    Description("Número de CaptchaChars utilizados en el texto CAPTCHA"), _
    Category("Captcha")> _
    Public Property CaptchaLength() As Integer
        Get
            Return _captcha.TextLength
        End Get
        Set(ByVal Value As Integer)
            _captcha.TextLength = Value
        End Set
    End Property

    <DefaultValue(2), _
    Description("Número mínimo de CAPTCHA segundos debe aparecer antes de que sea válida. Si usted es demasiado rápido, usted debe ser un robot. Establecer en cero para desactivarlo."), _
    Category("Captcha")> _
    Public Property CaptchaMinTimeout() As Integer
        Get
            Return _timeoutSecondsMin
        End Get
        Set(ByVal Value As Integer)
            If Value > 15 Then
                Throw New ArgumentOutOfRangeException("CaptchaTimeout", "Tiempo de espera debe ser inferior a 15 segundos. Los seres humanos no son tan lento!")
            End If
            _timeoutSecondsMin = Value
        End Set
    End Property

    <DefaultValue(90), _
    Description("El número máximo de CAPTCHA segundos se almacenan en caché y válida. Si usted es demasiado lento, puede ser un intento de hackear CAPTCHA. Establecer en cero para desactivarlo."), _
    Category("Captcha")> _
    Public Property CaptchaMaxTimeout() As Integer
        Get
            Return _timeoutSecondsMax
        End Get
        Set(ByVal Value As Integer)
            If Value < 15 And Value <> 0 Then
                Throw New ArgumentOutOfRangeException("CaptchaTimeout", "Tiempo de espera debe ser mayor de 15 segundos. Los seres humanos no puede escribir tan rápido!")
            End If
            _timeoutSecondsMax = Value
        End Set
    End Property

    <DefaultValue(50), _
    Description("Altura de la imagen CAPTCHA generado."), _
    Category("Captcha")> _
    Public Property CaptchaHeight() As Integer
        Get
            Return _captcha.Height
        End Get
        Set(ByVal Value As Integer)
            _captcha.Height = Value
        End Set
    End Property

    <DefaultValue(170), _
    Description("Ancho de la imagen CAPTCHA generado."), _
    Category("Captcha")> _
    Public Property CaptchaWidth() As Integer
        Get
            Return _captcha.Width
        End Get
        Set(ByVal Value As Integer)
            _captcha.Width = Value
        End Set
    End Property

    <DefaultValue(GetType(CaptchaImage.FontWarpFactor), "Low"), _
    Description("Cantidad de deformación de la fuente al azar usados ​​en el texto CAPTCHA"), _
    Category("Captcha")> _
    Public Property CaptchaFontWarping() As CaptchaImage.FontWarpFactor
        Get
            Return _captcha.FontWarp
        End Get
        Set(ByVal Value As CaptchaImage.FontWarpFactor)
            _captcha.FontWarp = Value
        End Set
    End Property

    <DefaultValue(GetType(CaptchaImage.BackgroundNoiseLevel), "Low"), _
    Description("Cantidad de ruido de fondo para generar en la imagen CAPTCHA"), _
    Category("Captcha")> _
    Public Property CaptchaBackgroundNoise() As CaptchaImage.BackgroundNoiseLevel
        Get
            Return _captcha.BackgroundNoise
        End Get
        Set(ByVal Value As CaptchaImage.BackgroundNoiseLevel)
            _captcha.BackgroundNoise = Value
        End Set
    End Property

    <DefaultValue(GetType(CaptchaImage.LineNoiseLevel), "None"), _
    Description("Añadir ruido en la línea de la imagen CAPTCHA"), _
    Category("Captcha")> _
    Public Property CaptchaLineNoise() As CaptchaImage.LineNoiseLevel
        Get
            Return _captcha.LineNoise
        End Get
        Set(ByVal Value As CaptchaImage.LineNoiseLevel)
            _captcha.LineNoise = Value
        End Set
    End Property
#End Region

    Public Sub Validate() Implements System.Web.UI.IValidator.Validate
        '-- a no-op, since we validate in LoadPostData
    End Sub

    Private Function GetCachedCaptcha(ByVal guid As String) As CaptchaImage
        If _cacheStrategy = CacheType.HttpRuntime Then
            Return CType(HttpRuntime.Cache.Get(guid), CaptchaImage)
        Else
            Return CType(HttpContext.Current.Session.Item(guid), CaptchaImage)
        End If
    End Function

    Private Sub RemoveCachedCaptcha(ByVal guid As String)
        If _cacheStrategy = CacheType.HttpRuntime Then
            HttpRuntime.Cache.Remove(guid)
        Else
            HttpContext.Current.Session.Remove(guid)
        End If
    End Sub

    ''' <summary>
    ''' are we in design mode?
    ''' </summary>
    Private ReadOnly Property IsDesignMode() As Boolean
        Get
            Return HttpContext.Current Is Nothing
        End Get
    End Property

    ''' <summary>
    ''' Validate the user's text against the CAPTCHA text
    ''' </summary>
    Private Sub ValidateCaptcha(ByVal userEntry As String)

        If Not Visible Or Not Enabled Then
            _userValidated = True
            Return
        End If

        '-- retrieve the previous captcha from the cache to inspect its properties
        Dim ci As CaptchaImage = GetCachedCaptcha(_prevguid)
        If ci Is Nothing Then
            Me.ErrorMessage = "El código que ha escrito ha expirado " & Me.CaptchaMaxTimeout & " Segundos."
            _userValidated = False
            Return
        End If

        '--  was it entered too quickly?
        If Me.CaptchaMinTimeout > 0 Then
            If (ci.RenderedAt.AddSeconds(Me.CaptchaMinTimeout) > Now) Then
                _userValidated = False
                Me.ErrorMessage = "Código se ha escrito demasiado rápido. Espere por lo menos " & Me.CaptchaMinTimeout & " Segundos."
                RemoveCachedCaptcha(_prevguid)
                Return
            End If
        End If

        If String.Compare(userEntry, ci.Text, True) <> 0 Then
            Me.ErrorMessage = "El código que ha escrito no coincide con el código de la imagen"
            _userValidated = False
            RemoveCachedCaptcha(_prevguid)
            Return
        End If

        _userValidated = True
        RemoveCachedCaptcha(_prevguid)
    End Sub

    ''' <summary>
    ''' returns HTML-ized color strings
    ''' </summary>
    Private Function HtmlColor(ByVal color As Drawing.Color) As String
        If color.IsEmpty Then Return ""
        If color.IsNamedColor Then
            Return color.ToKnownColor.ToString
        End If
        If color.IsSystemColor Then
            Return color.ToString
        End If
        Return "#" & color.ToArgb.ToString("x").Substring(2)
    End Function

    ''' <summary>
    ''' returns css "style=" tag for this control
    ''' based on standard control visual properties
    ''' </summary>
    Private Function CssStyle() As String
        Dim sb As New System.Text.StringBuilder
        Dim strColor As String

        With sb
            .Append(" style='")

            If BorderWidth.ToString.Length > 0 Then
                .Append("border-width:")
                .Append(BorderWidth.ToString)
                .Append(";")
            End If
            If BorderStyle <> WebControls.BorderStyle.NotSet Then
                .Append("border-style:")
                .Append(BorderStyle.ToString)
                .Append(";")
            End If
            strColor = HtmlColor(BorderColor)
            If strColor.Length > 0 Then
                .Append("border-color:")
                .Append(strColor)
                .Append(";")
            End If

            strColor = HtmlColor(BackColor)
            If strColor.Length > 0 Then
                .Append("background-color:" & strColor & ";")
            End If

            strColor = HtmlColor(ForeColor)
            If strColor.Length > 0 Then
                .Append("color:" & strColor & ";")
            End If

            If Font.Bold Then
                .Append("font-weight:bold;")
            End If

            If Font.Italic Then
                .Append("font-style:italic;")
            End If

            If Font.Underline Then
                .Append("text-decoration:underline;")
            End If

            If Font.Strikeout Then
                .Append("text-decoration:line-through;")
            End If

            If Font.Overline Then
                .Append("text-decoration:overline;")
            End If

            If Font.Size.ToString.Length > 0 Then
                .Append("font-size:" & Font.Size.ToString & ";")
            End If

            If Font.Names.Length > 0 Then
                Dim strFontFamily As String
                .Append("font-family:")
                For Each strFontFamily In Font.Names
                    .Append(strFontFamily)
                    .Append(",")
                Next
                .Length = .Length - 1
                .Append(";")
            End If

            If Height.ToString <> "" Then
                .Append("height:" & Height.ToString & ";")
            End If
            If Width.ToString <> "" Then
                .Append("width:" & Width.ToString & ";")
            End If

            .Append("'")
        End With
        If sb.ToString = " style=''" Then
            Return ""
        Else
            Return sb.ToString
        End If
    End Function

    ''' <summary>
    ''' render raw control HTML to the page
    ''' </summary>
    Protected Overrides Sub Render(ByVal Output As HtmlTextWriter)
        With Output           
            '' master DIV
            .Write("<div")
            If CssClass <> "" Then
                .Write(" class='" & CssClass & "'")
            End If
            .Write(CssStyle)
            .Write(">")

            '-- image DIV/SPAN
            If Me.LayoutStyle = Layout.Vertical Then
                .Write("<div style='text-align:left;margin:5px;'>")
            End If
            '-- this is the URL that triggers the CaptchaImageHandler
            '.Write("<br>")
            .Write("<img src=""CaptchaImage.aspx")
            If Not IsDesignMode Then
                .Write("?guid=" & Convert.ToString(_captcha.UniqueId))
            End If
            If Me.CacheStrategy = CacheType.Session Then
                .Write("&s=1")
            End If
            .Write(""" border='0'")
            If ToolTip.Length > 0 Then
                .Write(" alt='" & ToolTip & "'")
            End If
            .Write(" width=" & _captcha.Width)
            .Write(" height=" & _captcha.Height)
            .Write(">")

            If Me.LayoutStyle = Layout.Vertical Then             
                .Write("</div>")
            Else
                .Write("</span>")
            End If
            '.Write("<br>")
            '-- text input and submit button DIV/SPAN
            If Me.LayoutStyle = Layout.Vertical Then
                .Write("<div style='text-align:left;margin:5px;'>")
            Else
                .Write("<span style='margin:5px;float:left;'>")
            End If
            If _text.Length > 0 Then
                .Write(_text)
                .Write("<br>")
            End If

            .Write("<input name=" & UniqueID & " type=text size=")
            .Write(_captcha.TextLength.ToString)
            .Write(" maxlength=")
            .Write(_captcha.TextLength.ToString)
            If AccessKey.Length > 0 Then
                .Write(" accesskey=" & AccessKey)
            End If
            If Not Enabled Then
                .Write(" disabled=""disabled""")
            End If
            If TabIndex > 0 Then
                .Write(" tabindex=" & TabIndex.ToString)
            End If
            .Write(" style='Width:195;value='' >")
            '.Write("<asp:ImageButton ID='reset' runat='server' Width='10px' />")
            '.Write("/>")

            If Me.LayoutStyle = Layout.Vertical Then
                .Write("</div>")
            Else
                .Write("</span>")
                .Write("<br clear='all'>")
            End If

            '-- closing tag for master DIV
            .Write("</div>")
        End With
    End Sub

    ''' <summary>
    ''' generate a new captcha and store it in the ASP.NET Cache by unique GUID
    ''' </summary>
    Public Sub GenerateNewCaptcha()
        If Not IsDesignMode Then
            If _cacheStrategy = CacheType.HttpRuntime Then
                HttpRuntime.Cache.Add(_captcha.UniqueId, _captcha, Nothing, _
                    DateTime.Now.AddSeconds(Convert.ToDouble(IIf(Me.CaptchaMaxTimeout = 0, 90, Me.CaptchaMaxTimeout))), _
                    TimeSpan.Zero, Caching.CacheItemPriority.NotRemovable, Nothing)
            Else
                HttpContext.Current.Session.Add(_captcha.UniqueId, _captcha)
            End If
        End If
    End Sub

    ''' <summary>
    ''' Retrieve the user's CAPTCHA input from the posted data
    ''' </summary>
    Public Function LoadPostData(ByVal PostDataKey As String, ByVal Values As NameValueCollection) As Boolean Implements IPostBackDataHandler.LoadPostData
        ValidateCaptcha(Convert.ToString(Values(Me.UniqueID)))
        Return False
    End Function

    Public Sub RaisePostDataChangedEvent() Implements IPostBackDataHandler.RaisePostDataChangedEvent
    End Sub

    Protected Overrides Function SaveControlState() As Object
        Return CType(_captcha.UniqueId, Object)
    End Function

    Protected Overrides Sub LoadControlState(ByVal state As Object)
        If state IsNot Nothing Then
            _prevguid = CType(state, String)
        End If
    End Sub

    Protected Overrides Sub OnInit(ByVal e As System.EventArgs)
        MyBase.OnInit(e)
        Page.RegisterRequiresControlState(Me)
        Page.Validators.Add(Me)

    End Sub

    Protected Overrides Sub OnUnload(ByVal e As System.EventArgs)
        If Not (Page Is Nothing) Then
            Page.Validators.Remove(Me)
        End If
        MyBase.OnUnload(e)
    End Sub

    Protected Overrides Sub OnPreRender(ByVal e As System.EventArgs)
        If Me.Visible Then
            GenerateNewCaptcha()
        End If
        MyBase.OnPreRender(e)
    End Sub

End Class