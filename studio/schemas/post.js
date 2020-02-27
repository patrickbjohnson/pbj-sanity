export default {
  name: 'post',
  title: 'Post',
  type: 'document',
  fields: [
    {
      name: 'title',
      title: 'Title',
      type: 'string',
    },
    {
      required: true,
      name: 'slug',
      title: 'Slug',
      type: 'slug',
      options: {
        source: 'title',
        maxLength: 96,
      },
    },
    {
      name: 'mainImage',
      title: 'Main image',
      type: 'image',
      options: {
        hotspot: true,
      },
    },
    {
      name: 'publishedAt',
      title: 'Published at',
      type: 'datetime',
    },
    // {
    //   name: 'body',
    //   title: 'Body',
    //   type: 'blockContent',
    // },
    {
      name: 'excerpt',
      title: 'Excerpt',
      type: 'string',
      options: {
        source: 'title',
        maxLength: 150,
      },
    },
  ],

  preview: {
    select: {
      title: 'title',
      media: 'mainImage',
      imageUrl: 'asset.url',
    },
  },
};
