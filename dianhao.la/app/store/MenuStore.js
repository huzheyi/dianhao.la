/**
 * Created by gu.jun on 2014/7/22 0022.
 */
Ext.define('Weixin.store.MenuStore', {
  extend: 'Ext.data.Store',
  requires: [
    'Weixin.model.Menu'
  ],
  config: {
    model: 'Weixin.model.Menu',
    autoLoad: true
  }
});