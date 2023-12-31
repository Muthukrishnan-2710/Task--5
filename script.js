                       //Task - 5
 // Write a “person” class to hold all the details.

class Person {
    constructor(firstName, lastName, age, gender) {
      this.firstName = firstName;
      this.lastName = lastName;
      this.age = age;
      this.gender = gender;
    }
  
    // Method to get the full name of the person
    getFullName() {
      return `${this.firstName} ${this.lastName}`;
    }
  

    // Method to display information about the person
    displayDetails() {
      console.log(`Name: ${this.getFullName()}`);
      console.log(`Age: ${this.age}`);
      console.log(`Gender: ${this.gender}`);
    }
  }
  
  // Example usage:
  const Muthukrishnan = new Person("Muthu", "Krishnan", 26, "Male");
  
  Muthukrishnan.displayDetails(); // Display initial details
  
  // write a class to calculate the uber price.

  class UberCalculator {
    constructor(baseRatePerKilometer, baseRatePerMinute, surgeMultiplier) {
      this.baseRatePerKilometer = baseRatePerKilometer;
      this.baseRatePerMinute = baseRatePerMinute;
      this.surgeMultiplier = surgeMultiplier || 1; // Default surge multiplier is 1 (no surge).
    }
  
    calculatePrice(distanceInKilometers, timeInMinutes) {
      const basePrice = this.calculateBasePrice(distanceInKilometers, timeInMinutes);
      const totalPrice = this.applySurge(basePrice);
  
      return totalPrice;
    }
  
    calculateBasePrice(distanceInKilometers, timeInMinutes) {
      const distanceCost = this.baseRatePerKilometer * distanceInKilometers;
      const timeCost = this.baseRatePerMinute * timeInMinutes;
  
      return distanceCost + timeCost;
    }
  
    applySurge(basePrice) {
      return basePrice * this.surgeMultiplier;
    }
  }
  
  // Example usage:
  const uberCalculator = new UberCalculator(20, 12, 5); // Base rate, rate per kilometer, rate per minute, and surge multiplier
  
  const distance = 10; // Distance in kilometers
  const time = 60; // Time in minutes
  
  const totalPrice = uberCalculator.calculatePrice(distance, time);
  
  console.log(`Uber Price: $${totalPrice.toFixed(2)}`);
  
 // The class Movie is stated below. An instance of class Movie represents a film. This class has the following three properties:
//title, which is a String representing the title of the movie
//studio, which is a String representing the studio that made the movie
// rating, which is a String representing the rating of the movie (i.e. PG­13, R, etc)
// a) Write a constructor for the class Movie, which takes a String representing the title of the movie, a String representing the studio, and a String representing the rating as its arguments, and sets the respective class properties to these values.
// b) The constructor for the class Movie will set the class property rating to "PG" as default when no rating is provided.
// c) Write a method getPG, which takes an array of base type Movie as its argument, and returns a new array of only those movies in the input array with a rating of "PG". You may assume the input array is full of Movie instances. The returned array need not be full.
//d) Write a piece of code that creates an instance of the class Movie with the title “Casino Royale”, the studio “Eon Productions”, and the rating “PG­13”

class Movie {
    constructor(title, studio, rating = "PG") {
      this.title = title;
      this.studio = studio;
      this.rating = rating;
    }
  
    static getPG(movies) {
      return movies.filter(movie => movie.rating === "PG");
    }
  }
  
  // Example usage:
  const casinoRoyale = new Movie("Casino Royale", "Eon Productions", "PG-13");
  
  // Creating an array of Movie instances
  const movies = [
    new Movie("Movie 1", "Studio 1", "PG"),
    new Movie("Movie 2", "Studio 2", "R"),
    new Movie("Movie 3", "Studio 3", "PG"),
  ];
  const pgMovies = Movie.getPG(movies);
  console.log(pgMovies);
  