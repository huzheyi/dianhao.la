/**
 * Created by GuJun on 2014/7/23 0023.
 */
Ext.define('Weixin.model.Order', {
  extend: 'Ext.data.Model',
//  requires:['Weixin.data.writer.OrderJsonWriter'],
  config: {
    fields: [
      {name: 'shopId', type: 'string'},
      {name: 'customerId', type: 'string'}
    ],
    hasMany: {
      model: 'Weixin.model.OrderItem',
      name: 'items',
      associationKey: 'items',
      associatedName: 'items'
    },
    proxy: {
      type: 'rest',
      url: '/weixin/api/orders',
      reader: {
        type: 'json',
        rootProperty: 'data'
      },
      writer: {
        type: 'orderjson'
      }
    }
  }
});
