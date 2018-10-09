const assert = require('assert')
const Dino = require('../dino.js')


describe('Dino:', function(){

let dino;

beforeEach(function(){
  dino = new Dino('triceratops', 'herbivore', 35)
})

  it('should have a species', function(){
    const actual = dino.species;
    assert.strictEqual(actual, 'triceratops')
  });

  it('should have a diet', function(){
    const actual = dino.diet;
    assert.strictEqual(actual, 'herbivore')
  });

  it('should have an average number of visitors', function(){
    const actual = dino.average_visitors;
    assert.strictEqual(actual, 35)
  })



})
