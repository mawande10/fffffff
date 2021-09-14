module.exports = function countAllFromTown(townString) {
    let counter = 0;
    const town = townString.split(',');
    for (var i=0; i<town.length; i++) {
      const carFromTown = town[i];
      if (carFromTown.startsWith('CL')) {
        counter++;
      } else if (carFromTown.startsWith('CF')) {
        counter++;
      }
    }
    return counter;
  }
