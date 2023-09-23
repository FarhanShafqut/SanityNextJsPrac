import Blog from "@/app/blog/page";

const contact =  {
    name: 'contact',
    title: 'contact',
    type: 'document',
    fields: [
      {
        name: 'contact1',
        title: 'location',
        type: 'string',
      },
      {
        name: 'contact2',
        title: '2',
        type: 'string',
      },
     
      {
        name: 'contact3',
        title: '3',
        type: 'string',
      },
      {
        name: 'contact4',
        title: '4',
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
  export default contact ;