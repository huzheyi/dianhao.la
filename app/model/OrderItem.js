/**
 * Created by GuJun on 2014/7/23 0023.
 */
Ext.define('Weixin.model.OrderItem', {
  extend: 'Ext.data.Model',
  config: {
    fields: [
      {name: 'menuItemId', type: 'string'},
      {name: 'amount', type: 'string'}
    ]
//    belongsTo: 'Weixin.model.Order',
//    proxy: {
//      reader: {
//        type: 'json'
//      },
//      writer: {
//        type: 'json'
//      }
//    }
  }
});