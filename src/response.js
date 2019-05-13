export default {
  form: {
    id: 'insert_1020',
    label: 'Publicar anuncio',
    type: 'group',
    actionlabel: 'Publicar anuncio',
    fields: [
      {
        id: 'region',
        type: 'picker',
        label: 'Estado',
        hint: 'Selecciona estado',
        display: 'picker',
        constraints: [
          {
            property: {
              minlength: '1'
            },
            message: 'Selecciona un estado para continuar.'
          }
        ],
        required: true,
        datalist: [
          {
            value: '3',
            text: 'Aguascalientes'
          },
          {
            value: '4',
            text: 'Baja California'
          },
          {
            value: '5',
            text: 'Baja California Sur'
          },
          {
            value: '6',
            text: 'Campeche'
          },
          {
            value: '9',
            text: 'Chiapas'
          },
          {
            value: '10',
            text: 'Chihuahua'
          },
          {
            value: '11',
            text: 'Ciudad de México'
          },
          {
            value: '7',
            text: 'Coahuila'
          },
          {
            value: '8',
            text: 'Colima'
          },
          {
            value: '12',
            text: 'Durango'
          },
          {
            value: '17',
            text: 'Estado de México'
          },
          {
            value: '13',
            text: 'Guanajuato'
          },
          {
            value: '14',
            text: 'Guerrero'
          },
          {
            value: '15',
            text: 'Hidalgo'
          },
          {
            value: '16',
            text: 'Jalisco'
          },
          {
            value: '18',
            text: 'Michoacán'
          },
          {
            value: '19',
            text: 'Morelos'
          },
          {
            value: '20',
            text: 'Nayarit'
          },
          {
            value: '21',
            text: 'Nuevo León'
          },
          {
            value: '22',
            text: 'Oaxaca'
          },
          {
            value: '23',
            text: 'Puebla'
          },
          {
            value: '24',
            text: 'Querétaro'
          },
          {
            value: '25',
            text: 'Quintana Roo'
          },
          {
            value: '26',
            text: 'San Luis Potosí'
          },
          {
            value: '27',
            text: 'Sinaloa'
          },
          {
            value: '28',
            text: 'Sonora'
          },
          {
            value: '29',
            text: 'Tabasco'
          },
          {
            value: '30',
            text: 'Tamaulipas'
          },
          {
            value: '31',
            text: 'Tlaxcala'
          },
          {
            value: '32',
            text: 'Veracruz'
          },
          {
            value: '33',
            text: 'Yucatán'
          },
          {
            value: '34',
            text: 'Zacatecas'
          }
        ]
      },
      {
        id: 'municipality',
        type: 'picker',
        label: 'Ciudad o Municipio',
        hint: 'Selecciona ciudad o municipio',
        display: 'picker',
        constraints: [
          {
            property: {
              minlength: '1'
            },
            message: 'Selecciona una ciudad para continuar.'
          }
        ],
        disabled: true,
        required: true,
        value: ''
      },
      {
        id: 'area',
        type: 'picker',
        label: 'Colonia',
        hint: 'Selecciona colonia',
        display: 'picker',
        constraints: [
          {
            property: {
              minlength: '1'
            },
            message: 'Selecciona una colonia para continuar.'
          }
        ],
        disabled: true,
        required: true,
        value: ''
      }
    ],
    rules: {
      area: [
        {
          when: [
            {
              operator: 'CHANGED',
              id: 'municipality',
              value: []
            }
          ],
          then: {
            data: {
              value: '',
              datalist: [],
              hidden: false,
              disabled: true
            },
            remote: true
          }
        }
      ],
      municipality: [
        {
          when: [
            {
              operator: 'CHANGED',
              id: 'region',
              value: []
            }
          ],
          then: {
            data: {
              value: '',
              datalist: [],
              hidden: false,
              disabled: true
            },
            remote: true
          }
        }
      ]
    }
  }
}
