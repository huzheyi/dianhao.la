/**
 * Created by gu.jun on 2014/7/22 0022.
 */
Ext.define('Weixin.controller.ShopList', {
  extend: 'Ext.app.Controller',
  config: {
    refs: {
      shopList: {
        selector: 'shoplist',
        xtype: 'shoplist',
        autoCreate: true
      }
    },
    control: {
      shopList: {
        itemtap: 'showMenus'
      }
    },
    routes: {
      'shops': 'findShops'
    }
  },
  launch: function () {
    this.findShops();
  },

  showMenus: function (view, index, target, record) {
    var data = record.getData();
    var route = 'shops/' + data.id + '/menus';
    this.redirectTo(route);
  },

  findShops: function () {
    var shopStore = Ext.getStore('ShopStore');
    var shopList = this.getShopList();
    shopStore.load({
      callback: function (records, operation, success) {
        if (success) {
          shopList.setStore(shopStore);
          Ext.Viewport.setActiveItem(shopList);
        }
      }
    });
  }
});