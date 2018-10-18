$(function () {
    //toggle class .selected by click
    $('.border').on('click', function () {
        if ($(this).is('.selected')!==true){
            $(this).toggleClass('selected');
            var parent = $(this).parents()[0];
            if($(parent).attr('id')=="first"){
                 $(this).next(".info").html("<p>Печень утки разварная с артишоками.</p>Спасибо за покупку!<i class='fa fa-times' aria-hidden='true' style='cursor:pointer; color:#d91667'></i>");
            }else if ($(parent).attr('id')=="second"){
                $(this).next(".info").html("<p>Головы щучьи с чесноком да свежайшая сёмгушка.</p>Спасибо за покупку!<i class='fa fa-times' aria-hidden='true' style='cursor:pointer; color:#d91667'></i>");
            }else{
                $(this).next(".info").html("<p>Филе из цыплят с трюфелями в бульоне.</p>Спасибо за покупку!<i class='fa fa-times' aria-hidden='true' style='cursor:pointer; color:#d91667'></i>");
            };
        }else{
            $(this).toggleClass('selected');
            $(this).next(".info").html('Чего сидишь? Порадуй котэ, <a href="#" class="buy">купи.</a>');
        };
    });
    //close by bytton X
$('.info').on('click','i', function () {
      var name = $(this).parents()[1];
      var selectedId = $(name).attr('id');
      if (selectedId=="first"){
      $('#first .border').removeClass('selected');
      $("#first .info").html('Чего сидишь? Порадуй котэ, <a href="#" class="buy">купи.</a>');
      }else if (selectedId=="second"){
      $('#second .border').removeClass('selected');
      $("#second .info").html('Чего сидишь? Порадуй котэ, <a href="#" class="buy">купи.</a>');    
      }else{
      $('#third .border').removeClass('selected');
      $("#third .info").html('Чего сидишь? Порадуй котэ, <a href="#" class="buy">купи.</a>');    
      };
    });
    //change bottom info-block
    $('.info').on('click','a', function () {
        event.preventDefault();
        var name = $(this).parents()[1];
      var selectedId = $(name).attr('id');
      if (selectedId=="first"){
      $('#first .border').toggleClass('selected');
      $("#first .info").html("<p>Печень утки разварная с артишоками.</p>Спасибо за покупку!<i class='fa fa-times' aria-hidden='true' style='cursor:pointer; color:#d91667'></i>")}else if (selectedId=="second"){
      $('#second .border').toggleClass('selected');
      $("#second .info").html("<p>Головы щучьи с чесноком да свежайшая сёмгушка.</p>Спасибо за покупку!<i class='fa fa-times' aria-hidden='true' style='cursor:pointer; color:#d91667'></i>")}else{
      $('#third .border').toggleClass('selected');
      $("#third .info").html("<p>Филе из цыплят с трюфелями в бульоне.</p>Спасибо за покупку!<i class='fa fa-times' aria-hidden='true' style='cursor:pointer; color:#d91667'></i>")};
    });
//off eventListener for .ended
    $(".ended").off('click');
//hover 
    $('.item_element').on('mouseover','.selected', function(){
     var name = $(this).parents()[0];  
     var nameId = $(name).attr('id');    
     if (nameId=="first"){
      $('#first .item_top').html('Котэ не одобряет?').css('color','#e62e7a');   
     }else if(nameId=="second"){
      $('#second .item_top').html('Котэ не одобряет?').css('color','#e62e7a');   
     }else{
      $('#third .item_top').html('Котэ не одобряет?').css('color','#e62e7a');      
     };
    });
 //fix item_top   
    $('.item_element').on('mouseleave','.selected, .border', function(){
     $('.item_top').html('Сказочное заморское яство').css('color','#7e7e7e');   
    });
     $('.item_element').on('mouseover','.border', function(){
         if($(this).is('.selected')!==true){
             $('.item_top').html('Сказочное заморское яство').css('color','#7e7e7e'); 
         }  
    });
    var css_info = {'color': '#ffff66'};
    //ended class change bottom info-block
    if($("#first .border").is('.ended')==true){
    var taste_1 = $('#first .taste').html();
    
    $('#first .ended').next('.info').html('Печалька, '+ taste_1 +' закончился.').css(css_info);
    };
    if($("#second .border").is('.ended')==true){
      console.log('ok');
    var taste_2 = $('#second .taste').html();
    $('#second .ended').next('.info').html('Печалька, '+ taste_2 +' закончился.').css(css_info);
    };
     if($("#third .border").is('.ended')==true){
      console.log('ok');
    var taste_3 = $('#third .taste').html();
    $('#third .ended').next('.info').html('Печалька, '+ taste_3 +' закончился.').css(css_info);
    };
});