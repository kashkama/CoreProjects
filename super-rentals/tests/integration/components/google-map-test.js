import { moduleForComponent, test } from 'ember-qunit';
import hbs from 'htmlbars-inline-precompile';

moduleForComponent('google-map.hbs', 'Integration | Component | google map.hbs', {
  integration: true
});

test('it renders', function(assert) {

  // Set any properties with this.set('myProperty', 'value');
  // Handle any actions with this.on('myAction', function(val) { ... });

  this.render(hbs`{{google-map.hbs}}`);

  assert.equal(this.$().text().trim(), '');

  // Template block usage:
  this.render(hbs`
    {{#google-map.hbs}}
      template block text
    {{/google-map.hbs}}
  `);

  assert.equal(this.$().text().trim(), 'template block text');
});
