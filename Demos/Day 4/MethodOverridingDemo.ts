class Parent{
    putDemo():void{
      console.log(' putDemo() in Parent ');
    }
 }
 class Child extends Parent{
    putDemo():void{
      console.log(' putDemo() in Child ');
      super.putDemo();
    }
 }
 let objChild:Child = new Child();
 objChild.putDemo();