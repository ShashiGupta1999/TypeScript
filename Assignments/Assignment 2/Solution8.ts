/* 
8. Write a TypeScript class called Counter with a static property count initialized to 0. Implement a static method increment() that increments
     the count by 1. Implement another static method getCount() that returns the current count value. Test the class by calling both methods */

     class Counter{
        static count :number =0;

        static increment(){
            Counter.count += 1;
            

        }

        static getCount(){
            return Counter.count;
        }
     }

     
     Counter.increment();
     console.log(Counter.getCount()) 
     Counter.increment();
     console.log(Counter.getCount())
     Counter.increment();
     console.log(Counter.getCount())