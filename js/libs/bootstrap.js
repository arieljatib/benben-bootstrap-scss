//= require bootstrap/affix
//= require bootstrap/alert
//= require bootstrap/button
//= require bootstrap/carousel
//= require bootstrap/collapse
//= require bootstrap/dropdown
//= require bootstrap/tab
//= require bootstrap/transition
//= require bootstrap/scrollspy
//= require bootstrap/modal
//= require bootstrap/tooltip
//= require bootstrap/popover
// what is this stuff? tl;dr - It's Ruby notation
// http://stackoverflow.com/questions/23061768/what-is-the-require-bootstrap-affix-notation-for-is-there-any-grunt-tool

// let's write something that works in the browser. 
var bsPlugIns = "js/libs/bootstrap/"

$.getScript(bsPlugIns+"affix.js", function(){
   console.log("Script loaded and executed.");
   // Here you can use anything you defined in the loaded script
});