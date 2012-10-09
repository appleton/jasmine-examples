define(function(require){
  var Person = require('src/models/person');
  describe('Person model', function(){

    beforeEach(function(){
      this.attrs = {name: 'Andy'};
      this.model = new Person(this.attrs);
    });

    describe('#sayName', function(){
      it('returns the `name` attribute', function(){
        expect(this.model.sayName()).toEqual(this.attrs.name);
      });
    });

    describe('#shoutName', function(){
      it('returns the `name` attribute in CAPS', function(){
        expect(this.model.shoutName()).toEqual(this.attrs.name.toUpperCase());
      });
    });

  });
});