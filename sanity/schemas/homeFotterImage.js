const homeFotterImage ={
    name: 'homeFotterImage',
    type: 'document',
    title: 'homeFotterImage',
    fields: [
      {
        name: 'homeFotterImage',
        type: 'string',
        title: 'Name'
      },
      {
        name: 'homeFotterImage2',
        type: 'string',
        title: 'Name'
      },
      {
        name: 'homeFotterImage1',
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
export default homeFotterImage ;
 