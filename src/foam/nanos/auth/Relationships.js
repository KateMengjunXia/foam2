/**
 * @license
 * Copyright 2017 The FOAM Authors. All Rights Reserved.
 * http://www.apache.org/licenses/LICENSE-2.0
 */

foam.RELATIONSHIP({
  cardinality: '*:*',
  sourceModel: 'foam.nanos.auth.Group',
  targetModel: 'foam.nanos.auth.Permission',
  forwardName: 'permissions',
  inverseName: 'groups',
  junctionDAOKey: 'groupPermissionJunctionDAO'
});

/*
foam.RELATIONSHIP({
  cardinality: '*:*',
  sourceModel: 'foam.nanos.auth.User',
  targetModel: 'foam.nanos.auth.Group',
  forwardName: 'groups',
  inverseName: 'users',
  sourceProperty: {
    hidden: true
  },
  targetProperty: {
    hidden: true
  }
});
*/

foam.RELATIONSHIP({
  sourceModel: 'foam.nanos.theme.Theme',
  targetModel: 'foam.nanos.auth.User',
  cardinality: '1:*',
  forwardName: 'users',
  inverseName: 'personalTheme',
  sourceProperty: {
    hidden: true,
    visibility: 'HIDDEN',
  },
  targetProperty: {
    section: 'administrative'
  }
});

foam.RELATIONSHIP({
  cardinality: '1:*',
  sourceModel: 'foam.nanos.auth.UserUserJunction',
  targetModel: 'foam.nanos.notification.NotificationSetting',
  forwardName: 'notificationSettingsForUserUsers',
  inverseName: 'userJunction',
  sourceProperty: {
    hidden: true
  }
});

foam.RELATIONSHIP({
  cardinality: '1:*',
  sourceModel: 'foam.nanos.auth.User',
  targetModel: 'foam.nanos.notification.NotificationSetting',
  forwardName: 'notificationSettings',
  inverseName: 'owner',
  sourceProperty: {
    hidden: true
  }
});
