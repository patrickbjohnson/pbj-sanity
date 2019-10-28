// siteSettings.js
export default {
  name: 'testimonial',
  type: 'document',
  title: 'Testimonials',
  fields: [
    {
      name: 'title',
      type: 'string',
      title: 'Title'
    },
    {
      name: 'quote',
      type: 'text',
      title: 'Quote Text',
      description: 'Quote Texts'
    },
    {
      name: 'sourceName',
      type: 'text',
      title: 'Source Name',
      description: 'Quote source'
    },
    {
      name: 'sourceTitle',
      type: 'text',
      title: 'Source Title',
      description: 'Quote title'
    },
  ]
}