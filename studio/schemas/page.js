export default {
  name: 'homepage',
  title: 'Home Page',
  type: 'document',
  fields: [
    {
      name: 'title',
      title: 'Title',
      type: 'string'
    },
    {
      name: 'featuredProjects',
      title: 'Featured Projects',
      type: 'array',
      of: [
        {
          type: 'reference',
          to: {
            type: 'project'
          }
        }
      ]
    },
    {
      name: 'featuredClients',
      title: 'Featured Clients',
      type: 'array',
      of: [
        {
          type: 'reference',
          to: {
            type: 'project'
          }
        }
      ]
    },
    {
      name: 'featuredCards',
      title: 'Featured Cards',
      type: 'array',
      of: [
        {
          type: 'reference',
          name: 'project',
          to: {
            type: 'project'
          }
        },
        {
          type: 'reference',
          name: 'post',
          to: {
            type: 'post'
          }
        }
      ]
    }
  ],
  preview: {
    select: {
      title: 'title',
      media: 'mainImage',
      imageUrl: 'asset.url',
    }
  }
}