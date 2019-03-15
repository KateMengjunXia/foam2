foam.CLASS({
  package: 'foam.u2.view',
  name: 'JSONTextView',
  extends: 'foam.u2.View',
  requires: [
    'foam.u2.tag.TextArea'
  ],
  properties: [
    {
      class: 'String',
      name: 'data_',
      expression: function(data) {
        // return foam.json.Pretty.stringify(data);
        var str = "";
        Object.values(data).map(function(v) {str += v});
        return str;
      },
      postSet: function(_, n) {
        // try {
        //   this.data = foam.json.parseString(n);
        //   this.clearProperty('datsa_');
        //   this.error = '';
        // } catch ( e ) {
        //   this.error = e;
        // }
        this.data = n;
      }
    },
    // {
    //   class: 'String',
    //   name: 'error'
    // }
  ],
  methods: [
    function initE() {
      this
        .start(this.TextArea, { data$: this.data_$ }).end()
        // .start('div').add(this.error$).end();
    }
  ]
}); 