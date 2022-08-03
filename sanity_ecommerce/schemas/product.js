export default {
  name: 'product',
  title: 'Product',
  type: 'document',
  fields: [
    {
      name: 'image',
      title: 'Image',
      type: 'array',
      of: [{ type: 'image' }],
      options: {
        hotspot: true,
      }
    },
    {
      name: 'name',
      title: 'Name',
      type: 'string',
    },
    {
      name: 'slug',
      title: 'Slug',
      type: 'slug',
      options: {
        source: 'name',
        maxLength: 90,
      }
    },
    {
      name: 'tag',
      title: 'Tag',
      type: 'string',
    },
    {
      name: 'price',
      title: 'Price',
      type: 'number',
    },
    {
      name: 'size',
      title: 'Size',
      type: 'string',
    },
    {
      name: 'size1',
      title: 'Size1',
      type: 'string',
    },
    {
      name: 'ruler',
      title: 'Ruler',
      type: 'string',
    },
    {
      name: 'params1',
      title: 'Params1',
      type: 'string',
    },
    {
      name: 'params2',
      title: 'Params2',
      type: 'string',
    },
    {
      name: 'params3',
      title: 'Params3',
      type: 'string',
    },
    {
      name: 'params4',
      title: 'Params4',
      type: 'string',
    },
    {
      name: 'params5',
      title: 'Params5',
      type: 'string',
    },
    {
      name: 'params6',
      title: 'Params6',
      type: 'string',
    },
    {
      name: 'details',
      title: 'Details',
      type: 'string',
    },
    {
      name: 'application',
      title: 'Application',
      type: 'string',
    },
    {
      name: 'application1',
      title: 'Application1',
      type: 'string',
    },
    {
      name: 'application2',
      title: 'Application2',
      type: 'string',
    }
  ]
}