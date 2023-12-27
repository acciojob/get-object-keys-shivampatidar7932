//your JS code here. If required.
// Creating an object called student with a property called name
var student = {
  name: "John Doe"
};

// Adding a property to the Object prototype called getKeys()
Object.prototype.getKeys = function() {
  return Object.keys(this);
};

// Testing the getKeys() method on the student object
var keysArray = student.getKeys();
console.log(keysArray); // Output: ['name']
