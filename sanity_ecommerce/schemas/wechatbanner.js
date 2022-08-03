export default {
  name: 'wechatbanner',
  title: 'Wechatbanner',
  type: 'document',
  fields: [
    {
      name: 'weimage',
      title: 'Weimage',
      type: 'image',
      options: {
        hotspot: true,
      },
    },    
    {
      name: 'wename',
      title: 'Wename',
      type: 'string',
    },
  ],
};