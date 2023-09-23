const header ={
    name: 'header',
    type: 'document',
    title: 'Header',
    fields: [
      {
        name: 'header1',
        type: 'string',
        title: 'Name'
      },
      {
        name: 'header2',
        type: 'string',
        title: 'Name'
      },
        {
          name: 'headerdes',
          title: 'Description',
          type: 'text',
        },
        {
          name: 'btt',
          title: 'btt',
          type: 'string',
        },
      {
        name: 'mainImage',
        title: 'Main image',
        type: 'image',
        options: {
          hotspot: true,
        },
        fields: [
          {
            name: 'alt',
            type: 'string',
            title: 'Alternative Text',
          }
        ]
      },
    ]
  }
export default header ;
 