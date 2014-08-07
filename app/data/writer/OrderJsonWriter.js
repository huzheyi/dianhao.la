/**
 * Created by GuJun on 2014/7/26 0026.
 */
Ext.define('Weixin.data.writer.OrderJsonWriter', {
  extend: 'Ext.data.writer.Json',
  alias: 'writer.orderjson',
  getRecordData: function (record) {
    var order = {
      shopId: record.get('shopId'),
      customerId: record.get('customerId'),
      items: []
    };
    record.items().each(function (item) {
      var orderItem = {
        menuItemId: item.get('menuItemId'),
        amount: item.get('amount')
      };
      order.items.push(orderItem);
    });

    return order;
  }
});