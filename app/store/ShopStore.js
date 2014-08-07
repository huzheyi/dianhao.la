/**
 * Created by gu.jun on 2014/7/22 0022.
 */
Ext.define('Weixin.store.ShopStore', {
  extend: 'Ext.data.Store',
  requires: [
    'Weixin.model.Shop',
    'Ext.data.proxy.Rest'
  ],
  config: {
    model: 'Weixin.model.Shop',
    autoLoad: true,
    proxy: {
      type: 'rest',
      url: '/weixin/api/shops',
      reader: {
        type: 'json',
        rootProperty: 'data'
      }
    }
  }
});