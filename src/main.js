import './css/styles.css';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import $ from 'jquery';
import DinoIpsum from './dino-ipsum.js';

$(document).ready(function() {
  $('#results').click(function() {
    // clearFields();
    let promise = DinoIpsum.getDinos(); 
    promise.then(function(response) {
      const body = JSON.parse(response); 
      console.log(body); 
      let input = $('#userInput').val().toLowerCase();
      let letterArray = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z' ];
      if (letterArray.includes(input)) {
        for (let i = 0; i < letterArray.length; i++)
          if (letterArray[i] === input) {
            $('.output').text(`${body[0][i]}`);
          }
      } else {
        $('.output').text("Please enter a letter!");
      }
      // for (let i = 0; i < body.length; i++) {
        
      //   $('.output').append(`${body[i].join(" ")}` + `<br>` + `<br>`);
      // // $('.output').html(`${body.join(' ')}`);
      
    }, 
    function(error) {
      $(".showErrors").text(`There was an error processing your request ${error}`);
    });
  });
});