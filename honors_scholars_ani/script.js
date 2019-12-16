jQuery(document).ready(function($){

         ran_ani();
$('.container_sch').on('click touchend', function(){
      /*$.fx.off = true;*/
      TweenMax.killChildTweensOf( document.getElementsByClassName("container_sch")); 
     $('.firstDiv img,.secondDiv img,.thirdDiv img,.fourthDiv img').css({opacity:1});

    });
 
  function ran_ani (){
      var Tween1 = TweenLite.to($('.firstDiv img,.secondDiv img,.thirdDiv img,.fourthDiv img'),3,{opacity:1.0});
    var Tween2 = TweenLite.to($('.firstDiv img,.secondDiv img,.fourthDiv img'),4,{opacity: 0.20, delay: 3});
    var Tween3 = TweenLite.to($('.thirdDiv img'),4,{opacity: 0.20, delay:9});
    var Tween4 = TweenLite.to($('.firstDiv img'),4,{opacity: 1, delay:9});
    var Tween5 = TweenLite.to($('.firstDiv img'),4,{opacity: 0.20, delay: 14});
    var Tween6 = TweenLite.to($('.fourthDiv img'),4,{opacity: 1, delay:14});
    var Tween7 = TweenLite.to($('.fourthDiv img'),4,{opacity: 0.20, delay: 19});
    var Tween8 = TweenLite.to($('.secondDiv img'),4,{opacity: 1, delay:19});
    var Tween9 = TweenLite.to($('.firstDiv img,.thirdDiv img,.fourthDiv img'),4,{opacity: 1, delay:23});

  } 

  function reset_bio_q() {
    $('.bio_txt').css({'display':'inline-block'});
    $('.q_txt').css({'display':'none'});

    
  }

   $('.close_q').click(function(e){
        e.preventDefault();
      $.fx.off = false;
     var imgCon = $('div');
     var cloned = $('.cloned'); 
     var cloned_pos = cloned.position();
     
     if(imgCon.hasClass('images')){

       $('.firstDiv, .secondDiv, .thirdDiv, .fourthDiv').animate({opacity: 1}, 1000);
     $('.fourth_Q,.third_Q,.second_Q,.first_Q').fadeOut(1000);
     }


     if(imgCon.hasClass('cloned') && cloned_pos.left === 337){       
       cloned.animate({left:'-=112px'}, 2000).promise().then(function(){
         $('.fourthDiv').css({'left':'0px','top':'0px','z-index':'0'});
      $('.firstDiv.images').on({mouseover: ovr_fst_el, mouseleave: lv_fst_name});
      $('.fourthDiv.images').on({mouseover: ovr_four_el, mouseleave: lv_four_name});
         $('.secondDiv.images').on({mouseover: ovr_sec_el, mouseleave: lv_sec_name});
         $('.thirdDiv.images').on({mouseover: ovr_thr_el, mouseleave: lv_thr_name});

         return cloned.remove();
       });
     }else if(imgCon.hasClass('cloned') && cloned_pos.left === 0){
        cloned.animate({left:'+=112px'}, 2000).promise().then(function(){
         $('.fourthDiv').css({'left':'0px','top':'0px','z-index':'0'});
        $('.firstDiv.images').on({mouseover: ovr_fst_el, mouseleave: lv_fst_name});
          $('.fourthDiv.images').on({mouseover: ovr_four_el, mouseleave: lv_four_name});
         $('.secondDiv.images').on({mouseover: ovr_sec_el, mouseleave: lv_sec_name});
         $('.thirdDiv.images').on({mouseover: ovr_thr_el, mouseleave: lv_thr_name});

         return cloned.remove();
       });
     }else{
      $('.firstDiv.images').on({mouseover: ovr_fst_el, mouseleave: lv_fst_name});
      $('.fourthDiv.images').on({mouseover: ovr_four_el, mouseleave: lv_four_name});
      $('.secondDiv.images').on({mouseover: ovr_sec_el, mouseleave: lv_sec_name});
      $('.thirdDiv.images').on({mouseover: ovr_thr_el, mouseleave: lv_thr_name});
      }
    $('.fourthDiv').on('click touchend', img_ani.fourth_ani);  
    $('.firstDiv').on('click touchend', img_ani.first_ani);
    $('.secondDiv').on('click touchend', img_ani.sec_ani);      
    $('.thirdDiv').on('click touchend', img_ani.third_ani);
   setTimeout(reset_bio_q, 1000);
   });
  
  var ani_off = function(){$.fx.off = true;};
  var ani_on = function(){$.fx.off = false;};
  
  var  tog_txt1 = function(e){
    e.preventDefault();
    $.fx.off = false;
    $('.first_Q .text').fadeToggle(1000, "swing");
  };
  var  tog_txt2 = function(e){
    e.preventDefault();
    $.fx.off = false;
    $('.second_Q .text').fadeToggle(1000, "swing");
  };
  var  tog_txt3 = function(e){
    e.preventDefault();
    $.fx.off = false;
    $('.third_Q .text').fadeToggle(1000, "swing");
  };
  var  tog_txt4 = function(e){
    e.preventDefault();
    $.fx.off = false;
    $('.fourth_Q .text').fadeToggle(1000, "swing");
  };

  var img_ani = {
  first_ani:function(e){ 
    e.preventDefault();
   setTimeout(ani_on, 8000);
    $('.fourthDiv').off('click touchend');
    $('.secondDiv').off('click touchend');
    $('.thirdDiv').off('click touchend');
    $('.firstDiv.images').off('mouseover');
    $('.thirdDiv.images').off('mouseover');
    $('.secondDiv.images').off('mouseover');
    $('.fourthDiv.images').off('mouseover');

    $('.fourthDiv, .secondDiv, .thirdDiv').animate({'opacity': '0.10'}, 1500).dequeue();
      $('.first_Q').fadeIn(1000);
  },
  sec_ani:function(e) {
    e.preventDefault();
    setTimeout(ani_on, 11000);
    $('.firstDiv').off('click touchend');
    $('.secondDiv').off('click touchend');
    $('.fourthDiv').off('click touchend');
    $('.thirdDiv').off('click touchend');
    $('.firstDiv.images').off('mouseover');
    $('.thirdDiv.images').off('mouseover');
    $('.secondDiv.images').off('mouseover');
    $('.fourthDiv.images').off('mouseover');
    $('.cloned').off('mouseover');

    var copy_img_second = $(this).clone().attr('class', 'cloned').css({
      'position': 'absolute',
      'display': 'inline',
      'top': '0px',
      'left': '112px',
      'z-index': '2',
      'opacity': '1'
    }).insertAfter('.secondDiv');
    var allImgs = $('.firstDiv, .secondDiv, .thirdDiv, .fourthDiv');
        $('.cloned img').css({'opacity': 1});
    $('.cloned .stu_name').remove();
    copy_img_second.animate({
      left: '-=112'
    }, 500);
      allImgs.animate({
        opacity: 0.10
      }, 2000).dequeue();
      
    
    $('.second_Q').delay(1000).fadeIn(2000);
    
  },
  
  third_ani:function(e){
      e.preventDefault();
     setTimeout(ani_on, 11000);
    var copy_img_third = $(this).clone().attr('class','cloned').css({'position':'absolute','display':'inline','top':'0px','left':'225px','z-index':'2', 'opacity': 1}).insertAfter('.thirdDiv');
    var allImgs = $('.firstDiv, .secondDiv, .thirdDiv, .fourthDiv'); 
    $('.cloned img').css({'opacity': 1});
    $('.cloned .stu_name').remove();
      copy_img_third.animate({left :'+=112'}, 500);
      allImgs.animate({opacity: 0.10}, 2000).dequeue();
        $('.third_Q').fadeIn(2000).dequeue(); 
    $('.firstDiv').off('click touchend');
    $('.secondDiv').off('click touchend');
    $('.thirdDiv').off('click touchend');
    $('.fourthDiv').off('click touchend');
    $('.firstDiv.images').off('mouseover');
    $('.thirdDiv.images').off('mouseover');
    $('.secondDiv.images').off('mouseover');
    $('.firstDiv.images').off('mouseover');

  },  
  
  fourth_ani:function(e){
    e.preventDefault();
      setTimeout(ani_on, 8000);
    $('.firstDiv, .secondDiv, .thirdDiv').animate({'opacity': '0.10'}, 1500).dequeue();
    $('.fourth_Q').fadeIn(1000);
 
    $('.firstDiv').off('click touchend');
    $('.secondDiv').off('click touchend');
    $('.thirdDiv').off('click touchend');
    $('.thirdDiv').off('mouseover');
    $('.firstDiv.images').off('mouseover');
    $('.thirdDiv.images').off('mouseover');
    $('.secondDiv.images').off('mouseover');
    $('.fourthDiv.images').off('mouseover');

   
  }
};

  
 var ovr_fst_el = function(){
   var schl_name = $('.first_Q span.name').text();
   var schl_name_para = '<p class="stu_name">' + schl_name + '</p>';
        $('.firstDiv.images').append(schl_name_para);
        $('.stu_name').css({'background':'DimGray','color': 'white','position':'absolute','bottom': '-4px', 'left': '0px', 'width': '112px', 'font-family': 'sans-serif', 'text-align': 'center', 'padding-top': '2px', 'font-size':'9px'});
     }; 
   var lv_fst_name = function(){$('.firstDiv.images').find('.stu_name').remove();};
  
  var ovr_sec_el = function(){
   var schl_name = $('.second_Q span.name').text();
   var schl_name_para = '<p class="stu_name">' + schl_name + '</p>';
        $('.secondDiv.images').append(schl_name_para);
        $('.stu_name').css({'background':'DimGray','color': 'white','position':'absolute','bottom': '-4px', 'left': '0px', 'width': '112px', 'font-family': 'sans-serif', 'text-align': 'center', 'padding-top': '2px', 'font-size':'9px'});
     }; 
   var lv_sec_name = function(){$('.secondDiv.images').find('.stu_name').remove();};
  
  var ovr_thr_el = function(){
   var schl_name = $('.third_Q span.name').text();
   var schl_name_para = '<p class="stu_name">' + schl_name + '</p>';
        $('.thirdDiv.images').append(schl_name_para);
        $('.stu_name').css({'background':'DimGray','color': 'white','position':'absolute','bottom': '-4px', 'left': '0px', 'width': '112px', 'font-family': 'sans-serif', 'text-align': 'center', 'padding-top': '2px', 'font-size':'9px'});
     }; 
   var lv_thr_name = function(){$('.thirdDiv.images').find('.stu_name').remove();};
  
  var ovr_four_el = function(){
   var schl_name = $('.fourth_Q span.name').text();
   var schl_name_para = '<p class="stu_name">' + schl_name + '</p>';
        $('.fourthDiv.images').append(schl_name_para);
        $('.stu_name').css({'background':'DimGray','color': 'white','position':'absolute','bottom': '-4px', 'left': '0px', 'width': '112px', 'font-family': 'sans-serif', 'text-align': 'center', 'padding-top': '2px', 'font-size':'9px'});
     }; 
   var lv_four_name = function(){$('.fourthDiv.images').find('.stu_name').remove();};
  

    
  $('.firstDiv.images').on({mouseover: ovr_fst_el, mouseleave: lv_fst_name});
  $('.secondDiv.images').on({mouseover: ovr_sec_el, mouseleave: lv_sec_name});
  $('.thirdDiv.images').on({mouseover: ovr_thr_el, mouseleave: lv_thr_name});
  $('.fourthDiv.images').on({mouseover: ovr_four_el, mouseleave: lv_four_name});
                      
   
    $('.first_Q .bio_quo_link').click(tog_txt1);
    $('.second_Q .bio_quo_link').click(tog_txt2);
    $('.third_Q .bio_quo_link').click(tog_txt3);
    $('.fourth_Q .bio_quo_link').click(tog_txt4);
    $('.fourthDiv').on('click touchend', img_ani.fourth_ani);  
    $('.firstDiv').on('click touchend', img_ani.first_ani);
    $('.secondDiv').on('click touchend', img_ani.sec_ani);      
    $('.thirdDiv').on('click touchend', img_ani.third_ani);

  
  });
   