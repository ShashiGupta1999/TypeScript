class BaseDemoClass{
    constructor(){
      console.log(' Within class BaseDemo ');
    }
 }
 
 class DerivedDemoClass extends BaseDemoClass{
   constructor(){
      console.log(' Within class DerivedDemo ');     
      super();
    }
 }
 class GrandDerivedDemo extends DerivedDemoClass{
   constructor(){
      super();
      console.log(' Within class GrandDerivedDemo ');
    }
 }
 let objGrandDerivedDemo:GrandDerivedDemo = new GrandDerivedDemo();
 
 