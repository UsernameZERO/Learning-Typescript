
// class decorators
// function Component(constructor: Function) {
//   // Here we have a chance to modify members of 
//   // the target class
//   constructor.prototype.uniqueId = Date.now();
//   }
   
//   @Component
//   class ProfileComponent { 

//   }

type ComponentOptions = {
  selector: string
}

  //Parameterized decorators
  function Component(options: ComponentOptions) { return (constructor: Function) => {
    // Here we have a chance to modify members of
     // the target class. 
     console.log("component decorator called");
     constructor.prototype.options = options;
     constructor.prototype.uniqueId = Date.now();
    }; 
  }
  // @Component(1)
  // class ProfileComponent {

  // }

  //Decorator composition

  // Multiple decorators are applied in reverse order.
  // Pipe followed by Component.
   function Pipe(constructor: Function){
    console.log('Pipe decorator called');
    constructor.prototype.pipe = true;
    
   }
  @Component({ selector: '#my-profile'})
  @Pipe
  class ProfileComponent {

  }
    