import Blog from "@/app/blog/page";

const blog =  {
    name: 'blog',
    title: 'blog',
    type: 'document',
    fields: [
      {
        name: 'blog1',
        title: '1',
        type: 'string',
      },
      {
        name: 'blog2',
        title: '2',
        type: 'string',
      },
     
      {
        name: 'blog3',
        title: '3',
        type: 'string',
      },
      {
        name: 'blog4',
        title: '4',
        type: 'string',
      },
      {
        name: 'blog5',
        title: '5',
        type: 'string',
      },
      {
        name: 'blog6',
        title: '6',
        type: 'string',
      },
      {
        name: 'blog7',
        title: '7',
        type: 'string',
      },
      {
        name: 'blogImg',
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
  export default blog ;