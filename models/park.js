const Park = function(name, ticketPrice){
  this.name = name;
  this.ticketPrice = ticketPrice;
  this.dinos = [];
};

Park.prototype.addDino = function(dinosaur){
  (this.dinos.push(dinosaur));
};

Park.prototype.removeDino = function(){
  (this.dinos.pop());
};

// Park.prototype.findMostPopular = function(){
// return (Math.max(this.dinos.guestsAttractedPerDay));
// };

Park.prototype.findMostPopular = function(){
for dino of this.dinos

};

module.exports = Park;
