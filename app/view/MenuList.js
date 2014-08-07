/**
 * Created by gu.jun on 2014/7/22 0022.
 */
Ext.define('Weixin.view.MenuList', {
  extend: 'Ext.dataview.DataView',
  xtype: 'menulist',
  config: {
    id: 'menulist',
    defaultType: 'menuitem',
    useComponents: true,
    cls: 'menu-list',
    items: [
      {
        xtype: 'button',
        id: 'summit',
        text: '下单',
        docked: 'bottom',
        cls: 'menu-item-btn'
      }
    ]
  }
});