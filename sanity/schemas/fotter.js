const fotter =  {
    name: 'fotter',
    title: 'fotter',
    type: 'document',
    fields: [
      {
        name: 'fotter',
        title: 'Title',
        type: 'string',
      },
      {
        name: 'body',
        title: 'Body',
        type: 'string',
      },
     
      {
        name: 'fotter2',
        title: '2',
        type: 'string',
      },
      {
        name: 'fotter3',
        title: '3',
        type: 'string',
      },
      {
        name: 'fotter4',
        title: '4',
        type: 'string',
      },
      {
        name: 'fotter5',
        title: '5',
        type: 'string',
      },
      {
        name: 'fotter6',
        title: '6',
        type: 'string',
      },
      {
        name: 'fotterImg',
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
      }, {
        name: 'end',
        title: 'endName',
        type: 'string',
      },
    
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
  export default fotter ;