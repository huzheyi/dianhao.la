/**
 * Created by gu.jun on 2014/7/22 0022.
 */
Ext.define('Weixin.controller.MenuList', {
  extend: 'Ext.app.Controller',
  requires: [
    'Weixin.model.Order',
    'Weixin.model.OrderItem'
  ],
  config: {
    refs: {
      menuList: {
        selector: 'menulist',
        xtype: 'menulist',
        autoCreate: true
      },
      amountField: 'spinnerfield',
      summitBtn: '#summit'
    },
    control: {
      menuList: {
        itemtap: 'showMenuDetail'
      },
      amountField: {
        change: 'changeAmount'
      },
      summitBtn: {
        tap: 'summitOrder'
      }
    },
    routes: {
      'shops/:id/menus': 'findMenus'
    },
    shopId: 0,
    orderItems: {}
  },

  changeAmount: function (field, newValue) {
    var item = {menuItemId: field.menuItemId, amount: newValue};
    var items = this.getOrderItems();
    if (newValue > 0) {
      items[item.menuItemId] = item;
    } else {
      delete items[item.menuItemId];
    }
  },

  summitOrder: function () {
    var shopId = this.getShopId();
    var orderItems = this.getOrderItems();
    var customerId = "1";

    var order = Ext.create('Weixin.model.Order', {
      shopId: shopId,
      customerId: customerId
    });

    for (var menuItemId in orderItems) {
      order.items().add(orderItems[menuItemId]);
    }

    order.save({
      success: function (order) {
        console.log('success', order);
      }
    });

    this.getAmountField().setValue(0);

    var route = 'shops';
    this.redirectTo(route);
  },

  showMenuDetail: function (view, index, target, record) {
  },

  findMenus: function (id) {
    this.setShopId(id);
    this.setOrderItems({});
    var menuStore = Ext.getStore('MenuStore');
    var menuList = this.getMenuList();
    var amountFields = menuList.query('spinnerfield');
    for (var i = 0; i < amountFields.length; i++) {
      amountFields[i].setValue(0);
    }

    var url = '/weixin/api/shops/' + id + '/menus';
    menuStore.setProxy({
      type: 'rest',
      url: url,
      reader: {
        type: 'json',
        rootProperty: 'data.items'
      }
    });
    menuStore.load({
      callback: function (records, operation, success) {
        if (success) {
          menuList.setStore(menuStore);
          Ext.Viewport.setActiveItem(menuList);
        }
      }
    });
  }
});