/* 7. Write a TypeScript program that defines an enumeration 'Color' with values 'Red', 'Green', 'White' and Blue. Create a variable
   'selectedColor' of type 'Color' and assign it one of the enumeration values. */
var Color;
(function (Color) {
    Color["Red"] = "Red";
    Color["Green"] = "Green";
    Color["White"] = "White";
    Color["Blue"] = "Blue";
})(Color || (Color = {}));
var selectedColor;
selectedColor = Color.Red;
console.log("Selected Enumeration = ", selectedColor);
