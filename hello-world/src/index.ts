
// class decorators
// function Component(constructor: Function) {
//   // Here we have a chance to modify members of 
//   // the target class
//   constructor.prototype.uniqueId = Date.now();
//   }
   
//   @Component
//   class ProfileComponent { 

//   }

//Parameterized decorators
  function Component(value: number) { return (constructor: Function) => {
    // Here we have a chance to modify members of
     // the target class. 
     constructor.prototype.uniqueId = Date.now();
    }; 
  }
  @Component(1)
  class ProfileComponent {

  }

    