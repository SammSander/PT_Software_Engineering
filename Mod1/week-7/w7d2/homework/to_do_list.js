
$(() => {



    const list = [];

 $('button').on('click', (event) =>{


  let input = $('#input-box').val();
      console.log(input);
      list.push(input);


      event.preventDefault();
      $(event.currentTarget).trigger('reset');
      render();
});


const render = () => {
  console.log('list:', list);

  $('ul').empty();

  list.forEach((item) => {
       console.log(item);
      $('#to-do-list').append('<li>' +  item +  '<button id = "done" val = "complete" </button> Completed'  +  '</li>');                    

  });


  $('li').on('click', (event) => {
      $(event.currentTarget).css('text-decoration', 'line-through');


});

}


const completedArr =[];

$('button').on('click', (event) =>{



  let doneInput = $('#complete').val();
      console.log(doneInput);
      completedArr.push(doneInput);

      event.preventDefault();           
     $(event.currentTarget).append(doneInput);    

      completeFunc();
});



const completeFunc = () => {    

  $('button').on('click', (event) =>{

      $(event.currentTarget).css('background-color', '#ED6495');

      console.log('Secondlist:', completedArr);    
      $('ul').empty();        
      completedArr.forEach((item) => {
           console.log(item);
          $('#completed').append('<li>' +  item +  '<button id = "deleted" </button> delete'  +  '</li>');

      $( "button" ).click(function() {
          $('li' ).remove();
        });        


     });     

      });


}


}); 
