/**
 * Created by GuJun on 2014/7/24 0024.
 */
Ext.define('Weixin.store.OrderStore', {
  extend: 'Ext.data.Store',
  requires: [
    'Weixin.model.Order',
    'Ext.data.proxy.Rest'
  ],
  config: {
    model: 'Weixin.model.Order',
    autoLoad: true,
    proxy: {
      type: 'rest',
      url: '/weixin/api/orders?customerId=1',
      reader: {
        type: 'json',
        rootProperty: 'data'
      },
      writer: {
        type: 'json'
      }
    }
  }
});