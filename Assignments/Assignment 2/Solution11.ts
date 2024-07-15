/* 
11. Write a TypeScript utility class with static methods for common utility functions, such as formatDate, generateRandomString, and 
	capitalizeString. Each method should provide the respective utility functionality and be accessible without creating an instance of the
	 class. Test the utility class by using its static methods to perform various tasks. */

     class Utility{

        static formatDate(date:Date){
            const year = date.getFullYear();
            const month = `${date.getMonth() +1}`
            const day = `${date.getDate()}`
            return `${year} - ${month} - ${day}`;

        }

        static generateRandomString(length:number):string{
            const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
            let result = '';
            for(let i=0;i<length;i++){
                result += characters.charAt(Math.floor(Math.random() * characters.length));

            }
            return result;


        }

        static capitalizeString(str:string):string{

            return str.charAt(0).toUpperCase() + str.slice(1)

        }
     }

     let currentDate = new Date()

    console.log( Utility.formatDate(currentDate))
     console.log(Utility.generateRandomString(10))
    console.log( Utility.capitalizeString("shashi"))