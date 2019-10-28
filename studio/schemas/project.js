export default {
  name: 'project',
  title: 'Project',
  type: 'document',
  fields: [
    {
      name: 'title',
      title: 'Title',
      type: 'string'
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
      name: 'mainImage',
      title: 'Main image',
      type: 'image',
      options: {
        hotspot: true
      }
    },
    {
      name: 'siteUrl',
      title: 'Site URL',
      type: 'url'
    },
    {
      name: 'linkOut',
      title: 'Link out to live site?',
      type: 'boolean'
    },
    {
      name: 'publishedAt',
      title: 'Published at',
      type: 'datetime'
    },
    {
      name: 'projectTypes',
      title: 'Project Types',
      type: 'array',
      of: [{
        type: 'reference', 
        to: {
          type: 'projectType'
        }
      }]
    },
    {
      name: 'testimonial',
      title: 'Testimonials',
      type: 'array',
      of: [{
        type: 'reference', 
        to: {
          type: 'testimonial'
        }
      }]
    },
    {
      name: 'body',
      title: 'Body',
      type: 'blockContent'
    },
  ],
  preview: {
    select: {
      title: 'title',
      media: 'mainImage'
    },
  }
}