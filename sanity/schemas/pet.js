const pet ={
    name: 'pet',
    type: 'document',
    title: 'Pet',
    fields: [
      {
        name: 'name1',
        type: 'string',
        title: 'Name'
      },
      {
        name: 'name2',
        type: 'string',
        title: 'Name'
      },
        {
          name: 'des',
          title: 'Description',
          type: 'text',
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
export default pet ;
 