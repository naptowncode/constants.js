define(['helpers/format'], function(format) {
 'use strict';

  describe('Format', function() {
    it('should return same string when no replacements are made', function() {
      expect(format('Hello world!')).toEqual('Hello world!');
    });

    it('should return same string when replacements are made', function() {
      expect(format('Hello {name}!', { name: 'world' })).toEqual('Hello world!');
    });
  });
});