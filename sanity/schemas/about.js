

const about =  {
    name: 'about',
    title: 'about',
    type: 'document',
    fields: [
      {
        name: 'about1',
        title: '1',
        type: 'string',
      },
      {
        name: 'about2',
        title: '2',
        type: 'string',
      },
     
      {
        name: 'aboutimg',
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
      }
    
    ],
  
    preview: {
      select: {
        title: 'title',
        author: 'author.name',
        media: 'mainImage',
      },
      prepare(selection) {
        const {author} = selection
        return {...selection, subtitle: author && `by ${author}`}
      },
    },
  }
  export default about ;