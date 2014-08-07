/**
 * Created by GuJun on 2014/7/26 0026.
 */
Ext.define('Weixin.view.MenuItem', {
  extend: 'Ext.dataview.component.DataItem',
  xtype: 'menuitem',
  requires: ['Ext.Label', 'Ext.field.Spinner'],
  config: {
    layout: 'vbox',
    items: [
      {
        xtype: 'container',
        layout: 'hbox',
        items: [
          {
            xtype: 'label',
            itemId: 'name',
            cls: 'menu-item-name'
          },
          {
            xtype: 'label',
            docked: 'right',
            itemId: 'price'
          }
        ]
      },
      {
        xtype: 'container',
        layout: 'hbox',
        items: [
          {
            xtype: 'label',
            itemId: 'desc'
          },
          {
            xtype: 'spinnerfield',
            itemId: 'amount',
            docked: 'right',
            minValue: 0,
            maxValue: 10,
            stepValue: 1
          }
        ]
      }
    ]
  },
  updateRecord: function (record) {
    var me = this;
    me.down('#name').setHtml(record.get('name'));
    me.down('#price').setHtml(record.get('price'));
    me.down('#desc').setHtml(record.get('desc'));
    me.down('#amount').menuItemId = record.get('id');
    me.callParent(arguments);
  }
});