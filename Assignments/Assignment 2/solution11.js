/*
11. Write a TypeScript utility class with static methods for common utility functions, such as formatDate, generateRandomString, and
    capitalizeString. Each method should provide the respective utility functionality and be accessible without creating an instance of the
     class. Test the utility class by using its static methods to perform various tasks. */
var Utility = /** @class */ (function () {
    function Utility() {
    }
    Utility.formatDate = function (date) {
        var year = date.getFullYear();
        var month = "".concat(date.getMonth() + 1);
        var day = "".concat(date.getDate());
        return "".concat(year, " - ").concat(month, " - ").concat(day);
    };
    Utility.generateRandomString = function (length) {
        var characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
        var result = '';
        for (var i = 0; i < length; i++) {
            result += characters.charAt(Math.floor(Math.random() * characters.length));
        }
        return result;
    };
    Utility.capitalizeString = function (str) {
        return str.charAt(0).toUpperCase() + str.slice(1);
    };
    return Utility;
}());
var currentDate = new Date();
console.log(Utility.formatDate(currentDate));
console.log(Utility.generateRandomString(10));
console.log(Utility.capitalizeString("shashi"));
