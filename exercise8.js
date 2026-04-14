/*8. Animal and Dog Classes with Sound

Write a JavaScript program that creates a class called 'Animal' 
with properties for species and sound. Include a method to make 
the animal's sound. Create a subclass called 'Dog' that inherits
from the 'Animal' class and adds an additional property for color. 
Override the make sound method to include the dog's color. Create 
an instance of the 'Dog' class and make it make its sound.*/

class Animal{
    species;
    sound;
    constructor(species, sound){
        this.species = species;
        this.sound = sound
    }
    createSoundAnimal(){
        return `The species: ${this.species} makes the sound ${this.sound}`
    }
}
class Dog extends Animal{
    color;
    constructor(species, sound, color){
        super(species, sound);
        this.color = color;
    }
    createSoundAnimal(){
        return `The species ${this.species} makes the sound ${this.sound} and is of color ${this.color}`
    }
}
const dogito = new Dog("chihuahua", "ᵍᵘᵃᵘ ᵍᵘᵃᵘ", "brown")
console.log(dogito.createSoundAnimal());