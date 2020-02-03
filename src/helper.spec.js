const helpers = require('./helper')


describe("Helper test", function() {

    beforeEach(function() {

    });
  
    it("Test convert path to dot path start with bar", function() {
      const path = helpers.urlToDotPath('/donuts/a')
      expect(path).toEqual('donuts.a.content');
    });

    it("Test convert path to dot path contains double bars", function() {
      const path = helpers.urlToDotPath('//donuts//a')
      expect(path).toEqual('donuts.a.content');
    });

    it("Test convert path to dot contains multi bars", function() {
      const path = helpers.urlToDotPath('//donuts/a//')
      expect(path).toEqual('donuts.a.content');
    });

    it("Test convert path to dot contains ens bars", function() {
      const path = helpers.urlToDotPath('//donuts/a/')
      expect(path).toEqual('donuts.a.content');
    });
    it("Test convert path to dot contains ens bars", function() {
      const path = helpers.urlToDotPath('a/a')
      expect(path).toEqual('a.a.content');
    });
  
  
  });
  