const assert = require('assert')
const Park = require('../park.js')
const Dino = require('../dino.js')


describe('Park:', function(){

let park;
let dino1;
let dino2;
let dino3;

beforeEach(function(){
  park = new Park ('Jurassic Park', 150)
  dino1 = new Dino ('T-Rex', 'carnivore', 100)
  dino2 = new Dino ('Triceratops', 'herbivore', 50)
  dino3 = new Dino ('Velociraptor', 'carnivore', 80)
})

  it('should have a name', function(){
    const actual = park.name;
    assert.strictEqual(actual, 'Jurassic Park')
  });

  it('should have a ticket price', function(){
    const actual = park.ticket_price;
    assert.strictEqual(actual, 150)
  });

  it('should start with no dinosaurs', function(){
      const actual = park.dino_collection;
      assert.deepStrictEqual(actual, [])
    });

  it('should add a dinosaur to the collection', function(){
    park.addDino(dino1);
    assert.deepStrictEqual(park.dino_collection, [dino1])
  });
  // doesn't actually return anything, so just need to check the array.

  it('remove a dinosaur from the collection', function(){
    park.addDino(dino1)
    park.addDino(dino2)
    park.removeDino(dino1)
    assert.deepStrictEqual(park.dino_collection, [dino2])
  });


  xit('should find the dinosaur that attracts the most visitors', function(){
    park.addDino(dino1)
    park.addDino(dino2)
    park.addDino(dino3)
    assert.strictEqual(park.mostVisited, dino1)
  });

  it('should find all dinosaurs of a particular species', function(){
    park.addDino(dino1)
    park.addDino(dino2)
    const actual = park.dinoSpecies("Triceratops")
    assert.deepStrictEqual(actual, [dino2])

  });

  it('should calculate the total number of visitors per day', function(){
    park.addDino(dino1)
    park.addDino(dino2)
    assert.strictEqual(park.daily_visitors, 150)
  });

  xit('should calculate the total number of visitors per year', function(){

  });

  xit('should calculate the total revenue from ticket sales for one year', function(){

  });





})
