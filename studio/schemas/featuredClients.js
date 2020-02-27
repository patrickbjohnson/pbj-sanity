export default {
  name: 'featured-clients',
  title: 'Featured Project',
  type: 'object',
  fields: [
    {
      name: 'projects',
      title: 'Projects',
      type: 'array',
      of: [{
        type: 'reference', 
        to: {
          type: 'project'
        }
      }]
    }
  ],
  preview: {
    select: {
      title: 'title',
      media: 'mainImage'
    },
  }
}