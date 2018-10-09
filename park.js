const Dino = require('./dino.js')

const Park = function(name, ticket_price){
  this.name = name
  this.ticket_price = ticket_price
  this.dino_collection = []
};

Park.prototype.addDino = function(dinosaur) {
  this.dino_collection.push(dinosaur)
};

Park.prototype.removeDino = function(dinosaur) {
  let position = this.dino_collection.indexOf(dinosaur);
  this.dino_collection.splice(position, 1)
};
// splice needs 2 values - the position from where to start chopping and how many to chop


// loop over dinosaurs and assign first dinosaur to most visited. Check the next dino to see if there are more visitors - if so, reassign, if not, don't
Park.prototype.mostVisited = function () {
  let most_visited = this.dino_collection[0];
  for (let dino of this.dino_collection){
    if (dino.average_visitors > most_visited.average_visitors)
      most_visited = dino
    }
    return most_visited
// };


// loop over the dinos and for each one, look at the species and see if it matches the input
// output all the dinos that match and put into an array
Park.prototype.dinoSpecies = function (dino_species) {
  let species_count = []
  for (let dino of this.dino_collection){
    if (dino.species === dino_species)
    species_count.push(dino)
  }
  return species_count
};

// loop over all the dinos in the array and pull out the visitor numbers
// add them all together

Park.prototype.daily_visitors = function () {
  let visitor_count = []
  for (let dino of this.dino_collection){
    visitor_count.push(dino.average_visitors)
  }
  return visitor_count
};

// Park.prototype.yearly_visitors = function () {
//
// };



module.exports = Park
