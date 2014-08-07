/**
 * Created by gu.jun on 2014/7/22 0022.
 */
Ext.define('Weixin.view.ShopList', {
  extend: 'Ext.dataview.List',
  xtype: 'shoplist',
  config: {
    id: 'shoplist',
    itemTpl: '{name}'
  }
});