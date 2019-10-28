// siteSettings.js
export default {
  name: 'projectType',
  type: 'document',
  title: 'Project Types',
  fields: [
    {
      name: 'title',
      type: 'string',
      title: 'Title'
    },
    {
      name: 'slug',
      title: 'Slug',
      type: 'slug',
      options: {
        source: 'title',
        maxLength: 96
      }
    },
    {
      name: 'description',
      type: 'text',
      title: 'Description',
      description: 'Describe what your project was about.'
    },
  ]
}