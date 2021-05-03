//import { JsonpClientBackend } from '@angular/common/http'
import { Component } from '@angular/core'
import { FormGroup } from '@angular/forms'
import { FormlyFieldConfig, FormlyFormOptions } from '@ngx-formly/core'
//import jsPDF from 'jspdf'

@Component({
  selector: 'app-formularios',
  templateUrl: './formularios.component.html',
  styleUrls: ['./formularios.component.scss']
})
export class FormulariosComponent {
	title = 'Envio de Bolsines'
  form = new FormGroup({})
  options: FormlyFormOptions = {};
  model: any = {
  }

  fields: FormlyFieldConfig[] = [
    {
      className: 'datos-solicitante',
      template: '<div class="coltit"><h2 style="color:#53aae0;">Envíos CAPITAL Miércoles:</h2></div>',
    },


    // BOLSINES ENVIO A CENTRO CIVICO

    {
      key: 'bolsin',
      type: 'no repeat',
      templateOptions: {
        addText: 'Envíos a SUAC CENTRO CIVICO',
      },
      fieldArray: {
        fieldGroup: [
        {
          className: 'datos-persona',
          template: '<div><h2>Sólo registrar los ENVIOS a otros SUAC:</h2></div>',
        },



        {
          key: 'Fecha de envio',
          type: 'input',
          templateOptions: {
            type: 'date',
            label: 'Fecha de envio',
            //placeholder: 'Fecha de envio dd/mm/aaaa',
            required: true,
          },
        },
        {
          key: 'Precinto',
          type: 'input',
          templateOptions: {
            label: 'N° Precinto',
            placeholder: 'N° Precinto',
            required: true,
          },
        },
        {
          key: 'Cantidad de tramites',
          type: 'input',
          templateOptions: {
            label: 'Cantidad de tramites',
            placeholder: 'Solo numeros',
            required: true,
          },
  	 },
     {
      key: 'Contenido',
      type: 'select',
      templateOptions: {
        label: 'Contenido',
        placeholder: 'Placeholder',
        options: [
          { value: "vacio", label: 'Vacio'  },
          { value: "condocumentacion", label: 'Con documentacion'  },

        ],
        required: true,
      },
    },
        {
          key: 'Expedientes',
          type: 'input',
          templateOptions: {
            label: 'Expedientes',
            placeholder: 'Expedientes',
            required: true,
          },
        },
        {
          key: 'Notas',
          type: 'input',
          templateOptions: {
            label: 'Notas',
            placeholder: 'Notas',
            required: true,
          },
        },
        {
          key: 'conexion ',
          type: 'input',
          templateOptions: {
            label: 'En CONEXIÓN (Agregar cantidad y después REPARTICIÓN)',
            placeholder: 'Son SIN Sticker',
            required: true,
          },
  	 },
     {
      key: 'otros ',
      type: 'input',
      templateOptions: {
        label: 'OTROS (en Conexión) Ej: examen ERSEP',
        placeholder: 'OTROS (en Conexión) Ej: examen ERSEP',
        required: true,
      },
 },
 {
  key: 'Aquienva ',
  type: 'input',
  templateOptions: {
    label: 'Conexión (a quien enviar)',
    placeholder: 'Conexión (a quien enviar)',
    required: true,
  },
},
{
  key: 'otrosmal ',
  type: 'input',
  templateOptions: {
    label: 'OTROS (Trámites MAL pasados físicamente SIN pase electrónico). Agregar Sticker',
    placeholder: 'OTROS (Trámites MAL pasados físicamente SIN pase electrónico). Agregar Sticker',
    required: true,
  },
},
//--------------------------------------------------------------------------------------------------------

      ],
    },
  },

// Envíos  SUAC CORDOBA JOVEN

{
  key: 'BOLSIN-CBA-JOVEN',
  type: 'no repeat',
  templateOptions: {
    addText: 'Envíos a SUAC CORDOBA JOVEN',
  },
  fieldArray: {
    fieldGroup: [
    {
      className: 'datos-persona',
      template: '<div><h2>Envíos a SUAC CORDOBA JOVEN:</h2></div>',
    },



    {
      key: 'Fecha de envio',
      type: 'input',
      templateOptions: {
        type: 'date',
        label: 'Fecha de envio',
        //placeholder: 'Fecha de envio dd/mm/aaaa',
        required: true,
      },
    },
    {
      key: 'Precinto',
      type: 'input',
      templateOptions: {
        label: 'N° Precinto',
        placeholder: 'N° Precinto',
        required: true,
      },
    },
    {
      key: 'Cantidad de tramites',
      type: 'input',
      templateOptions: {
        label: 'Cantidad de tramites',
        placeholder: 'Solo numeros',
        required: true,
      },
 },
 {
  key: 'Contenido',
  type: 'select',
  templateOptions: {
    label: 'Contenido',
    placeholder: 'Placeholder',
    options: [
      { value: "vacio", label: 'Vacio'  },
      { value: "condocumentacion", label: 'Con documentacion'  },

    ],
    required: true,
  },
},
    {
      key: 'Expedientes',
      type: 'input',
      templateOptions: {
        label: 'Expedientes',
        placeholder: 'Expedientes',
        required: true,
      },
    },
    {
      key: 'Notas',
      type: 'input',
      templateOptions: {
        label: 'Notas',
        placeholder: 'Notas',
        required: true,
      },
    },

   {
     key: 'otros ',
     type: 'input',
     templateOptions: {
     label: 'OTROS (EXTRACTINES)',
     placeholder: '',
     required: true,
       },
    },

     {
       key: 'otrosmalpasados ',
       type: 'input',
       templateOptions: {
       label: 'OTROS (Trámites MAL pasados físicamente SIN pase electrónico). Agregar Sticker',
       placeholder: '',
       required: true,
        },
        },
      ],
      },
     },


     // Envíos  SUAC DESARROLLO SOCIAL

{
  key: 'BOLSIN-DESARROLLO-SOCIAL',
  type: 'no repeat',
  templateOptions: {
    addText: 'Envíos a SUAC MINISTERIO DESARROLLO SOCIAL',
  },
  fieldArray: {
    fieldGroup: [
    {
      className: 'datos-persona',
      template: '<div><h2>Envíos a SUAC MINISTERIO DESARROLLO SOCIAL:</h2></div>',
    },



    {
      key: 'Fecha de envio',
      type: 'input',
      templateOptions: {
        type: 'date',
        label: 'Fecha de envio',
        //placeholder: 'Fecha de envio dd/mm/aaaa',
        required: true,
      },
    },
    {
      key: 'Precinto',
      type: 'input',
      templateOptions: {
        label: 'N° Precinto',
        placeholder: 'N° Precinto',
        required: true,
      },
    },
    {
      key: 'Cantidad de tramites',
      type: 'input',
      templateOptions: {
        label: 'Cantidad de tramites',
        placeholder: 'Solo numeros',
        required: true,
      },
 },
 {
  key: 'Contenido',
  type: 'select',
  templateOptions: {
    label: 'Contenido',
    placeholder: 'Placeholder',
    options: [
      { value: "vacio", label: 'Vacio'  },
      { value: "condocumentacion", label: 'Con documentacion'  },

    ],
    required: true,
  },
},
    {
      key: 'Expedientes',
      type: 'input',
      templateOptions: {
        label: 'Expedientes',
        placeholder: 'Expedientes',
        required: true,
      },
    },
    {
      key: 'Notas',
      type: 'input',
      templateOptions: {
        label: 'Notas',
        placeholder: 'Notas',
        required: true,
      },
    },

   {
     key: 'otros ',
     type: 'input',
     templateOptions: {
     label: 'OTROS (EXTRACTINES)',
     placeholder: '',
     required: true,
       },
    },

     {
       key: 'otrosmalpasados ',
       type: 'input',
       templateOptions: {
       label: 'OTROS (Trámites MAL pasados físicamente SIN pase electrónico). Agregar Sticker',
       placeholder: '',
       required: true,
        },
        },
      ],
      },
     },

     // Envíos  SUAC TRIBUNAL DE CUENTAS

{
  key: 'BOLSIN-TRIBUNAL-DE-CUENTAS',
  type: 'no repeat',
  templateOptions: {
    addText: 'Envíos a SUAC TRIBUNAL DE CUENTAS',
  },
  fieldArray: {
    fieldGroup: [
    {
      className: 'datos-persona',
      template: '<div><h2>Envíos a SUAC TRIBUNAL DE CUENTAS:</h2></div>',
    },



    {
      key: 'Fecha de envio',
      type: 'input',
      templateOptions: {
        type: 'date',
        label: 'Fecha de envio',
        //placeholder: 'Fecha de envio dd/mm/aaaa',
        required: true,
      },
    },
    {
      key: 'Precinto',
      type: 'input',
      templateOptions: {
        label: 'N° Precinto',
        placeholder: 'N° Precinto',
        required: true,
      },
    },
    {
      key: 'Cantidad de tramites',
      type: 'input',
      templateOptions: {
        label: 'Cantidad de tramites',
        placeholder: 'Solo numeros',
        required: true,
      },
 },
 {
  key: 'Contenido',
  type: 'select',
  templateOptions: {
    label: 'Contenido',
    placeholder: 'Placeholder',
    options: [
      { value: "vacio", label: 'Vacio'  },
      { value: "condocumentacion", label: 'Con documentacion'  },

    ],
    required: true,
  },
},
    {
      key: 'Expedientes',
      type: 'input',
      templateOptions: {
        label: 'Expedientes',
        placeholder: 'Expedientes',
        required: true,
      },
    },
    {
      key: 'Notas',
      type: 'input',
      templateOptions: {
        label: 'Notas',
        placeholder: 'Notas',
        required: true,
      },
    },

   {
     key: 'otros ',
     type: 'input',
     templateOptions: {
     label: 'OTROS (EXTRACTINES)',
     placeholder: '',
     required: true,
       },
    },

     {
       key: 'otrosmalpasados ',
       type: 'input',
       templateOptions: {
       label: 'OTROS (Trámites MAL pasados físicamente SIN pase electrónico). Agregar Sticker',
       placeholder: '',
       required: true,
        },
        },
      ],
      },
     },


 //---------envios a CEDER MARTES-----------------------------------------------------------------------------------------------

  {
    className: 'datos-empresa',
    template: '<div><h2>Envios a CEDER martes:</h2></div>',
  },

  {
    key: 'Envios desde SUAC a CEDER',
    type: 'no repeat',
    templateOptions: {
      addText: 'Envios desde SUAC a CEDER',
    },
    fieldArray: {
      fieldGroup: [
        {
          key: 'Fecha de envio',
          type: 'input',
          templateOptions: {
            type: 'date',
            label: 'Fecha de envio',
            //placeholder: 'Fecha de envio dd/mm/aaaa',
            required: true,
          },
        },
        {
          key: 'Precinto',
          type: 'input',
          templateOptions: {
            label: 'N° Precinto',
            placeholder: 'N° Precinto',
            required: true,
          },
        },

     {
      key: 'Contenido',
      type: 'select',
      templateOptions: {
        label: 'Vacio',
        placeholder: 'Placeholder',
        options: [
          { value: "SI", label: 'SI - Bolsín vacío (Debe llevar PRECINTO)'  },
          { value: "NO", label: 'NO - Completar debajo cantidad de trámites enviados'  },

        ],
        required: true,
      },
    },
    {
      key: 'cederes',
      type: 'select',
      templateOptions: {
        label: 'CEDER',
        required: true,
        options: [
          { value: 'ALEJO LEDESMA', label: 'ALEJO LEDESMA'},
          { value: 'ALMAFUERTE', label: 'ALMAFUERTE'},
          { value: 'ALTA GRACIA', label: 'ALTA GRACIA'},
          { value: 'BELL VILLE', label: 'BELL VILLE'},
          { value: 'CORRAL DE BUSTOS', label: 'CORRAL DE BUSTOS'},
          { value: 'CRUZ DEL EJE', label: 'CRUZ DEL EJE'},
          { value: 'DEAN FUNES', label: 'DEAN FUNES'},
          { value: 'EMBALSE', label: 'EMBALSE'},
          { value: 'ETRURIA', label: 'ETRURIA'},
          { value: 'GENERAL CABRERA', label: 'GENERAL CABRERA'},
          { value: 'JESÚS MARÍA', label: 'JESÚS MARÍA'},
          { value: 'LA CALERA', label: 'LA CALERA'},
          { value: 'LABORDE', label: 'LABORDE'},
          { value: 'LABOULAYE', label: 'LABOULAYE'},
          { value: 'LAGUNA LARGA', label: 'LAGUNA LARGA'},
          { value: 'LAS PERDICES', label: 'LAS PERDICES'},
          { value: 'MARCOS JUAREZ', label: 'MARCOS JUAREZ'},
          { value: 'MINA CLAVERO', label: 'MINA CLAVERO'},
          { value: 'MIRAMAR', label: 'MIRAMAR'},
          { value: 'OBISPO TREJO', label: 'OBISPO TREJO'},
          { value: 'PASCANAS', label: 'PASCANAS'},
          { value: 'PORTEÑA', label: 'PORTEÑA'},
          { value: 'RIO CEBALLOS', label: 'RIO CEBALLOS'},
          { value: 'RIO CUARTO', label: 'RIO CUARTO'},
          { value: 'RIO TERCERO', label: 'RIO TERCERO'},
          { value: 'SALSACATE', label: 'SALSACATE'},
          { value: 'SAN FRANCISCO', label: 'SAN FRANCISCO'},
          { value: 'SAN FRANCISCO DEL CHAÑAR', label: 'SAN FRANCISCO DEL CHAÑAR'},
          { value: 'VILLA ALLENDE', label: 'VILLA ALLENDE'},
          { value: 'VILLA CARLOS PAZ', label: 'VILLA CARLOS PAZ'},
          { value: 'VILLA DOLORES', label: 'VILLA DOLORES'},
          { value: 'VILLA GIARDINO', label: 'VILLA GIARDINO'},
          { value: 'VILLA HUIDOBRO', label: 'VILLA HUIDOBRO'},
          { value: 'VILLA MARIA', label: 'VILLA MARIA'},
          { value: 'VILLA VALERIA', label: 'VILLA VALERIA'},

           ],
      }
    },

    {
      key: 'cantidad de tramites',
      type: 'input',
      templateOptions: {
        label: 'Cantidad de trámites para cada área',
        placeholder: 'Solo numeros',
        required: true,
      },
    },
    {
      key: 'Administracion',
      type: 'input',
      templateOptions: {
        label: 'Administracion',
        placeholder: '',
        required: true,
      },
    },
    {
      key: 'FP',
      type: 'input',
      templateOptions: {
        label: 'Formación Profesional',
        placeholder: '',
        required: true,
      },
    },

    {
      key: 'RRHH',
      type: 'input',
      templateOptions: {
        label: 'RRHH',
        placeholder: '',
        required: true,
      },
    },

    {
      key: 'Para otras Areas con NOMBRE Y CANTIDAD',
      type: 'input',
      templateOptions: {
        label: 'Para otras áreas agregar NOMBRE del área y CANTIDAD de trámites',
        placeholder: 'Recuerden que la presentación de los trámites de Programas de Empleo es vía e-tramites',
        required: true,
      },
    },

    {
      key: 'Otras Areas',
      type: 'input',
      templateOptions: {
        label: 'Otras áreas',
        placeholder: '',
        required: true,
      },
    },

    {
      key: 'cantidad de precintos',
      type: 'input',
      templateOptions: {
        label: 'Cantidad de precintos enviados',
        placeholder: '',
        required: true,
      },
    },
  ],
},
},


{
  template: '<br><br><br></br></br></br>'
},

//--------------------------------------------------------------------------------------------------------

  {
    className: 'datos-necesidades-a-cubrir',
    template: '<div><h2>RECEPCION DE BOLSIN:</h2></div>',
  },

//--------------------------------------------------------------------------------------------------------
  {
    className: 'datos-emprendimiento',
    template: '<div><h2>Recepcion en SUAC desde:</h2></div>',
  },


  // Recepción SUAC Centro Cívico-----------------

{
  key: 'BOLSIN-Recepción-SUAC-Centro Cívico',
  type: 'no repeat',
  templateOptions: {
    addText: 'Recepción SUAC Centro Cívico',
  },
  fieldArray: {
    fieldGroup: [
    {
      className: 'datos-persona',
      template: '<div><h2>Recepción SUAC Centro Cívico:</h2></div>',
    },

    {
      key: 'Responsable-de-cargar',
      type: 'select',
      templateOptions: {
        label: 'Responsable de cargar la información',
        placeholder: 'Placeholder',
        options: [
          { value: "FAVIO", label: 'FAVIO'  },
          { value: "TATA", label: 'TATA'  },
          { value: "JULIO", label: 'JULIO'  },
          { value: "NATALIA", label: 'NATALIA'  },

        ],
        required: true,
      },
    },

    {
      key: 'Fecha de recepcion',
      type: 'input',
      templateOptions: {
        type: 'date',
        label: 'Fecha de recepción',
        //placeholder: 'Fecha de envio dd/mm/aaaa',
        required: true,
      },
    },
    {
      key: 'Precinto',
      type: 'input',
      templateOptions: {
        label: 'N° Precinto',
        placeholder: 'N° Precinto',
        required: true,
      },
    },
    {
      key: 'Cantidad de tramites',
      type: 'input',
      templateOptions: {
        label: 'Agregar cantidad de trámites de SUAC CENTRO CIVICO',
        placeholder: 'Solo numeros',
        required: true,
      },
 },

    {
      key: 'Expedientes',
      type: 'input',
      templateOptions: {
        label: 'Expedientes',
        placeholder: 'Expedientes',
        required: true,
      },
    },
    {
      key: 'Notas',
      type: 'input',
      templateOptions: {
        label: 'Notas',
        placeholder: 'Notas',
        required: true,
      },
    },

   {
     key: 'otros ',
     type: 'input',
     templateOptions: {
     label: 'OTROS (Mal enviados)-SIN pase ELECTRONICO',
     placeholder: 'En OTROS (Mal enviados) ingresar cantidad de trámites que fueron mal enviados FISICAMENTE, pero SIN pase ELECTRONICO',
     required: true,
       },
    },

     {
       key: 'OTROS-Extractines ',
       type: 'input',
       templateOptions: {
       label: 'OTROS (Extractines)',
       placeholder: '',
       required: true,
        },
        },

      {
        key: 'OTROS-Mal enviados2 ',
        type: 'input',
        templateOptions: {
        label: 'OTROS (Mal enviados)',
        placeholder: '',
        required: true,
       },
      },

      {
        key: 'Cantidad de Tramites ',
        type: 'input',
        templateOptions: {
        label: 'Agregar cantidad de trámites de SUAC CONEXION',
        placeholder: 'Trámites que NO fueron cargados en SUAC CENTRO CIVICO',
        required: true,
       },
      },
          {
           key: 'Expedientes2',
           type: 'input',
           templateOptions: {
           label: 'Expedientes',
           placeholder: 'Expedientes',
           required: true,
        },
      },
       {
        key: 'Notas2',
        type: 'input',
        templateOptions: {
          label: 'Notas',
          placeholder: 'Notas',
          required: true,
        },
      },
      {
        key: 'OTROS-Extractines3 ',
        type: 'input',
        templateOptions: {
          label: 'OTROS (Extractines)',
          placeholder: '',
          required: true,
        },
      },

       {
         key: 'OTROS-Mal enviados3 ',
         type: 'input',
         templateOptions: {
         label: 'OTROS (Mal enviados)',
         placeholder: '',
         required: true,
        },
       },
       {
          key: 'Observaciones',
          type: 'textarea',
          templateOptions: {
            label: 'Observaciones',
            placeholder: '',
            description: '',
            rows: 10,
          },
          expressionProperties: {
            'templateOptions.focus': 'formState.awesomeIsForced',
          },
        }

      ],
      },
     },


// Recepción SUAC Cordoba Joven-----------------

{
  key: 'BOLSIN-Recepción-SUAC-CbaJoven',
  type: 'no repeat',
  templateOptions: {
    addText: 'Recepción SUAC Cordoba Joven',
  },
  fieldArray: {
    fieldGroup: [
    {
      className: 'datos-persona',
      template: '<div><h2>Recepción SUAC Córdoba Joven:</h2></div>',
    },

    {
      key: 'Responsable-de-cargar',
      type: 'select',
      templateOptions: {
        label: 'Responsable de cargar la información',
        placeholder: 'Placeholder',
        options: [
          { value: "FAVIO", label: 'FAVIO'  },
          { value: "TATA", label: 'TATA'  },
          { value: "JULIO", label: 'JULIO'  },
          { value: "NATALIA", label: 'NATALIA'  },

        ],
        required: true,
      },
    },

    {
      key: 'Fecha de recepcion',
      type: 'input',
      templateOptions: {
        type: 'date',
        label: 'Fecha de recepción',
        //placeholder: 'Fecha de envio dd/mm/aaaa',
        required: true,
      },
    },
    {
      key: 'Precinto',
      type: 'input',
      templateOptions: {
        label: 'N° Precinto',
        placeholder: 'N° Precinto',
        required: true,
      },
    },
    {
      key: 'Cantidad de tramites',
      type: 'input',
      templateOptions: {
        label: 'Agregar cantidad de trámites de CORDOBA JOVEN',
        placeholder: 'Solo numeros',
        required: true,
      },
 },

    {
      key: 'Expedientes',
      type: 'input',
      templateOptions: {
        label: 'Expedientes',
        placeholder: 'Expedientes',
        required: true,
      },
    },
    {
      key: 'Notas',
      type: 'input',
      templateOptions: {
        label: 'Notas',
        placeholder: 'Notas',
        required: true,
      },
    },

   {
     key: 'otros ',
     type: 'input',
     templateOptions: {
     label: 'OTROS (Mal enviados)-SIN pase ELECTRONICO',
     placeholder: 'En OTROS (Mal enviados) ingresar cantidad de trámites que fueron mal enviados FISICAMENTE, pero SIN pase ELECTRONICO',
     required: true,
       },
    },

     {
       key: 'OTROS-Extractines ',
       type: 'input',
       templateOptions: {
       label: 'OTROS (Extractines)',
       placeholder: '',
       required: true,
        },
        },

      {
        key: 'OTROS-Mal enviados2 ',
        type: 'input',
        templateOptions: {
        label: 'OTROS (Mal enviados)',
        placeholder: '',
        required: true,
       },
      },

      {
        key: 'Cantidad de Tramites ',
        type: 'input',
        templateOptions: {
        label: 'Agregar cantidad de trámites de SUAC CONEXION',
        placeholder: 'Trámites que NO fueron cargados en Ministerio de Desarrollo Social',
        required: true,
       },
      },
          {
           key: 'Expedientes2',
           type: 'input',
           templateOptions: {
           label: 'Expedientes',
           placeholder: 'Expedientes',
           required: true,
        },
      },
       {
        key: 'Notas2',
        type: 'input',
        templateOptions: {
          label: 'Notas',
          placeholder: 'Notas',
          required: true,
        },
      },
      {
        key: 'OTROS-Extractines3 ',
        type: 'input',
        templateOptions: {
          label: 'OTROS (Extractines)',
          placeholder: '',
          required: true,
        },
      },

       {
         key: 'OTROS-Mal enviados3 ',
         type: 'input',
         templateOptions: {
         label: 'OTROS (Mal enviados)',
         placeholder: '',
         required: true,
        },
       },
       {
          key: 'Observaciones',
          type: 'textarea',
          templateOptions: {
            label: 'Observaciones',
            placeholder: '',
            description: '',
            rows: 10,
          },
          expressionProperties: {
            'templateOptions.focus': 'formState.awesomeIsForced',
          },
        }

      ],
      },
     },


// Recepción SUAC DESARROLLO SOCIAL-----------------

{
  key: 'BOLSIN-Recepción-SUAC-Desarrollo-social',
  type: 'no repeat',
  templateOptions: {
    addText: 'Recepción SUAC Desarrollo Social',
  },
  fieldArray: {
    fieldGroup: [
    {
      className: 'datos-persona',
      template: '<div><h2>Recepción SUAC Desarollo Social:</h2></div>',
    },

    {
      key: 'Responsable-de-cargar',
      type: 'select',
      templateOptions: {
        label: 'Responsable de cargar la información',
        placeholder: 'Placeholder',
        options: [
          { value: "FAVIO", label: 'FAVIO'  },
          { value: "TATA", label: 'TATA'  },
          { value: "JULIO", label: 'JULIO'  },
          { value: "NATALIA", label: 'NATALIA'  },

        ],
        required: true,
      },
    },

    {
      key: 'Fecha de recepcion',
      type: 'input',
      templateOptions: {
        type: 'date',
        label: 'Fecha de recepción',
        //placeholder: 'Fecha de envio dd/mm/aaaa',
        required: true,
      },
    },
    {
      key: 'Precinto',
      type: 'input',
      templateOptions: {
        label: 'N° Precinto',
        placeholder: 'N° Precinto',
        required: true,
      },
    },
    {
      key: 'Cantidad de tramites',
      type: 'input',
      templateOptions: {
        label: 'Agregar cantidad de trámites de SUAC MINISTERIO DE DESARROLLO SOCIAL',
        placeholder: 'Solo numeros',
        required: true,
      },
 },

    {
      key: 'Expedientes',
      type: 'input',
      templateOptions: {
        label: 'Expedientes',
        placeholder: 'Expedientes',
        required: true,
      },
    },
    {
      key: 'Notas',
      type: 'input',
      templateOptions: {
        label: 'Notas',
        placeholder: 'Notas',
        required: true,
      },
    },

   {
     key: 'otros ',
     type: 'input',
     templateOptions: {
     label: 'OTROS (Mal enviados)-SIN pase ELECTRONICO',
     placeholder: 'En OTROS (Mal enviados) ingresar cantidad de trámites que fueron mal enviados FISICAMENTE, pero SIN pase ELECTRONICO',
     required: true,
       },
    },

     {
       key: 'OTROS-Extractines ',
       type: 'input',
       templateOptions: {
       label: 'OTROS (Extractines)',
       placeholder: '',
       required: true,
        },
        },

      {
        key: 'OTROS-Mal enviados2 ',
        type: 'input',
        templateOptions: {
        label: 'OTROS (Mal enviados)',
        placeholder: '',
        required: true,
       },
      },

      {
        key: 'Cantidad de Tramites ',
        type: 'input',
        templateOptions: {
        label: 'Agregar cantidad de trámites de SUAC CONEXION',
        placeholder: 'Trámites que NO fueron cargados en Ministerio de Desarrollo Social',
        required: true,
       },
      },
          {
           key: 'Expedientes2',
           type: 'input',
           templateOptions: {
           label: 'Expedientes',
           placeholder: 'Expedientes',
           required: true,
        },
      },
       {
        key: 'Notas2',
        type: 'input',
        templateOptions: {
          label: 'Notas',
          placeholder: 'Notas',
          required: true,
        },
      },
      {
        key: 'OTROS-Extractines3 ',
        type: 'input',
        templateOptions: {
          label: 'OTROS (Extractines)',
          placeholder: '',
          required: true,
        },
      },

       {
         key: 'OTROS-Mal enviados3 ',
         type: 'input',
         templateOptions: {
         label: 'OTROS (Mal enviados)',
         placeholder: '',
         required: true,
        },
       },
       {
          key: 'Observaciones',
          type: 'textarea',
          templateOptions: {
            label: 'Observaciones',
            placeholder: '',
            description: '',
            rows: 10,
          },
          expressionProperties: {
            'templateOptions.focus': 'formState.awesomeIsForced',
          },
        }

      ],
      },
     },


// Recepción SUAC TRIBUNAL DE CUENTAS-----------------

{
  key: 'BOLSIN-Recepción-SUAC-Tribunal-de-cuentas',
  type: 'no repeat',
  templateOptions: {
    addText: 'Recepción SUAC Tribunal de cuentas',
  },
  fieldArray: {
    fieldGroup: [
    {
      className: 'datos-persona',
      template: '<div><h2>Recepción SUAC Tribunal de Cuentas:</h2></div>',
    },

    {
      key: 'Responsable-de-cargar',
      type: 'select',
      templateOptions: {
        label: 'Responsable de cargar la información',
        placeholder: 'Placeholder',
        options: [
          { value: "FAVIO", label: 'FAVIO'  },
          { value: "TATA", label: 'TATA'  },
          { value: "JULIO", label: 'JULIO'  },
          { value: "NATALIA", label: 'NATALIA'  },

        ],
        required: true,
      },
    },

    {
      key: 'Fecha de recepcion',
      type: 'input',
      templateOptions: {
        type: 'date',
        label: 'Fecha de recepción',
        //placeholder: 'Fecha de envio dd/mm/aaaa',
        required: true,
      },
    },
    {
      key: 'Precinto',
      type: 'input',
      templateOptions: {
        label: 'N° Precinto',
        placeholder: 'N° Precinto',
        required: true,
      },
    },
    {
      key: 'Cantidad de tramites',
      type: 'input',
      templateOptions: {
        label: 'Agregar cantidad de trámites de SUAC Tribunal de Cuentas',
        placeholder: 'Solo numeros',
        required: true,
      },
 },

    {
      key: 'Expedientes',
      type: 'input',
      templateOptions: {
        label: 'Expedientes',
        placeholder: 'Expedientes',
        required: true,
      },
    },
    {
      key: 'Notas',
      type: 'input',
      templateOptions: {
        label: 'Notas',
        placeholder: 'Notas',
        required: true,
      },
    },

   {
     key: 'otros ',
     type: 'input',
     templateOptions: {
     label: 'OTROS (Mal enviados)-SIN pase ELECTRONICO',
     placeholder: 'En OTROS (Mal enviados) ingresar cantidad de trámites que fueron mal enviados FISICAMENTE, pero SIN pase ELECTRONICO',
     required: true,
       },
    },

     {
       key: 'OTROS-Extractines ',
       type: 'input',
       templateOptions: {
       label: 'OTROS (Extractines)',
       placeholder: '',
       required: true,
        },
        },

      {
        key: 'OTROS-Mal enviados2 ',
        type: 'input',
        templateOptions: {
        label: 'OTROS (Mal enviados)',
        placeholder: '',
        required: true,
       },
      },

      {
        key: 'Cantidad de Tramites ',
        type: 'input',
        templateOptions: {
        label: 'Agregar cantidad de trámites de SUAC CONEXION',
        placeholder: 'Trámites que NO fueron cargados en Ministerio de Desarrollo Social',
        required: true,
       },
      },
          {
           key: 'Expedientes2',
           type: 'input',
           templateOptions: {
           label: 'Expedientes',
           placeholder: 'Expedientes',
           required: true,
        },
      },
       {
        key: 'Notas2',
        type: 'input',
        templateOptions: {
          label: 'Notas',
          placeholder: 'Notas',
          required: true,
        },
      },
      {
        key: 'OTROS-Extractines3 ',
        type: 'input',
        templateOptions: {
          label: 'OTROS (Extractines)',
          placeholder: '',
          required: true,
        },
      },

       {
         key: 'OTROS-Mal enviados3 ',
         type: 'input',
         templateOptions: {
         label: 'OTROS (Mal enviados)',
         placeholder: '',
         required: true,
        },
       },
       {
          key: 'Observaciones',
          type: 'textarea',
          templateOptions: {
            label: 'Observaciones',
            placeholder: '',
            description: '',
            rows: 10,
          },
          expressionProperties: {
            'templateOptions.focus': 'formState.awesomeIsForced',
          },
        }

      ],
      },
     },


// Recepción Bolsines enviados desde CEDER a SUAC-----------------

{
  key: 'BOLSIN-Recepción-desde-ceder-a-suac',
  type: 'no repeat',
  templateOptions: {
    addText: 'Recepción Bolsines enviados desde CEDER a SUAC',
  },
  fieldArray: {
    fieldGroup: [
    {
      className: 'datos-persona',
      template: '<div><h2>Recepción Bolsines enviados desde CEDER a SUAC:</h2></div>',
    },

    {
      key: 'Responsable-de-cargar',
      type: 'select',
      templateOptions: {
        label: 'Responsable de cargar la información',
        placeholder: 'Placeholder',
        options: [
          { value: "FAVIO", label: 'FAVIO'  },
          { value: "TATA", label: 'TATA'  },
          { value: "JULIO", label: 'JULIO'  },
          { value: "NATALIA", label: 'NATALIA'  },

        ],
        required: true,
      },
    },

    {
      key: 'Fecha de recepcion',
      type: 'input',
      templateOptions: {
        type: 'date',
        label: 'Fecha de recepción',
        //placeholder: 'Fecha de envio dd/mm/aaaa',
        required: true,
      },
    },
    {
      key: 'Precinto',
      type: 'input',
      templateOptions: {
        label: 'N° Precinto',
        placeholder: 'N° Precinto (Si no tiene colocar 0)',
        required: true,
      },
    },

    {
      key: 'cederes',
      type: 'select',
      templateOptions: {
        label: 'CEDER',
        required: true,
        options: [
          { value: 'ALEJO LEDESMA', label: 'ALEJO LEDESMA'},
          { value: 'ALMAFUERTE', label: 'ALMAFUERTE'},
          { value: 'ALTA GRACIA', label: 'ALTA GRACIA'},
          { value: 'BELL VILLE', label: 'BELL VILLE'},
          { value: 'CORRAL DE BUSTOS', label: 'CORRAL DE BUSTOS'},
          { value: 'CRUZ DEL EJE', label: 'CRUZ DEL EJE'},
          { value: 'DEAN FUNES', label: 'DEAN FUNES'},
          { value: 'EMBALSE', label: 'EMBALSE'},
          { value: 'ETRURIA', label: 'ETRURIA'},
          { value: 'GENERAL CABRERA', label: 'GENERAL CABRERA'},
          { value: 'JESÚS MARÍA', label: 'JESÚS MARÍA'},
          { value: 'LA CALERA', label: 'LA CALERA'},
          { value: 'LABORDE', label: 'LABORDE'},
          { value: 'LABOULAYE', label: 'LABOULAYE'},
          { value: 'LAGUNA LARGA', label: 'LAGUNA LARGA'},
          { value: 'LAS PERDICES', label: 'LAS PERDICES'},
          { value: 'MARCOS JUAREZ', label: 'MARCOS JUAREZ'},
          { value: 'MINA CLAVERO', label: 'MINA CLAVERO'},
          { value: 'MIRAMAR', label: 'MIRAMAR'},
          { value: 'OBISPO TREJO', label: 'OBISPO TREJO'},
          { value: 'PASCANAS', label: 'PASCANAS'},
          { value: 'PORTEÑA', label: 'PORTEÑA'},
          { value: 'RIO CEBALLOS', label: 'RIO CEBALLOS'},
          { value: 'RIO CUARTO', label: 'RIO CUARTO'},
          { value: 'RIO TERCERO', label: 'RIO TERCERO'},
          { value: 'SALSACATE', label: 'SALSACATE'},
          { value: 'SAN FRANCISCO', label: 'SAN FRANCISCO'},
          { value: 'SAN FRANCISCO DEL CHAÑAR', label: 'SAN FRANCISCO DEL CHAÑAR'},
          { value: 'VILLA ALLENDE', label: 'VILLA ALLENDE'},
          { value: 'VILLA CARLOS PAZ', label: 'VILLA CARLOS PAZ'},
          { value: 'VILLA DOLORES', label: 'VILLA DOLORES'},
          { value: 'VILLA GIARDINO', label: 'VILLA GIARDINO'},
          { value: 'VILLA HUIDOBRO', label: 'VILLA HUIDOBRO'},
          { value: 'VILLA MARIA', label: 'VILLA MARIA'},
          { value: 'VILLA VALERIA', label: 'VILLA VALERIA'},

           ],
      },
    },

    {
      key: 'Contenido',
      type: 'select',
      templateOptions: {
        label: 'Vacio',
        placeholder: 'Placeholder',
        options: [
          { value: "SI", label: 'SI - Bolsín vacío (Debe llevar PRECINTO)'  },
          { value: "NO", label: 'NO - Completar debajo cantidad de trámites enviados'  },

        ],
        required: true,
      },
    },

    {
      key: 'Cantidad de tramites',
      type: 'input',
      templateOptions: {
        label: 'Agregar cantidad de trámites',
        placeholder: 'Solo numeros',
        required: true,
      },
 },

 {
  key: 'Administracion',
  type: 'input',
  templateOptions: {
    label: 'Administracion',
    placeholder: '',
    required: true,
  },
},
{
  key: 'FP',
  type: 'input',
  templateOptions: {
    label: 'Formación Profesional',
    placeholder: '',
    required: true,
  },
},

{
  key: 'RRHH',
  type: 'input',
  templateOptions: {
    label: 'RRHH',
    placeholder: '',
    required: true,
  },
},

{
  key: 'Otra Area',
  type: 'input',
  templateOptions: {
    label: 'Otra Area',
    placeholder: '',
    required: true,
  },
},


{
      key: 'Otros (Extractines)',
      type: 'input',
      templateOptions: {
        label: 'Otros-Extractines',
        placeholder: 'Otros (Extractines)',
        required: true,
      },
    },
       {
          key: 'Observaciones',
          type: 'textarea',
          templateOptions: {
            label: 'Observaciones',
            placeholder: '',
            description: '',
            rows: 10,
          },
          expressionProperties: {
            'templateOptions.focus': 'formState.awesomeIsForced',
          },
        }

      ],
      },
     },

     //FIN----------
  ]
}


