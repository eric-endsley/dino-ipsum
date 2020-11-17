import './css/styles.css';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import $ from 'jquery';
import DinoIpsum from './dino-ipsum.js';

$(document).ready(function() {
  $('#results').click(function() {
    let numberP = ('#paragraphs').val();
    let numberW =('#words').val();
    let promise = DinoIpsum.getDinos(numberP, numberW); {
      promise.then(function(response) {
        const body = JSON.parse(response); {
          $('.output').text(`${body[0][1]}` );
        },
        function (error) {
          $(".showErrors").text(`There was an error processing your request ${error}`);
        }
      });
    }
  });
});