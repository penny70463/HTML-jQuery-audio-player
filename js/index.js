$(function(){
  //初始狀態pause隱藏
  $('#btnPause').hide();
  //initial
  function initAudio(){
    $('#audio1').attr('src',$('#0 a').attr('href'));
    $('#btnPlay').show();
    $('li a').removeClass('active');
    $('#0 a').addClass('active');
    
    $('#btnPlay').on('click',function(){
    $('#audio1')[0].play();
    $('#btnPlay').hide();
    $('#btnPause').show();
    
  }); 
  };
 //stop鍵
  $('#btnStop').on('click',function(){
    initAudio();
  });
  
  //pause鍵
  $('#btnPause').on('click',function(){
    $('#audio1')[0].pause();
    $('#btnPause').hide();
    $('#btnPlay').show();
  });
  //play鍵
  $('#btnPlay').one('click',function(){
    initAudio();
  });
 $('#btnPlay').on('click',function(){
    $('#audio1')[0].play();
    $('#btnPlay').hide();
    $('#btnPause').show();
  });
  
  //forward建
  $('#btnForward').on('click',function(){
  $("#audio1").prop("currentTime",$("#audio1").prop("currentTime")+5);
 });
  
  //backward鍵
  $('#btnBackward').on('click',function(){
  $("#audio1").prop("currentTime",$("#audio1").prop("currentTime")-5);
 });
  //volume
 volumeslider = document.getElementById("volumeslider");
  volumeslider.addEventListener("mousemove", setvolume);
  function setvolume(){
	    $('#audio1')[0].volume = volumeslider.value / 100;
    }
  //duration+current
   $('#audio1').on('timeupdate',function(e){
     onTrack(this.currentTime,this.duration);
   });
  function onTrack(currentTime,duration){
    var ss=parseInt(currentTime%60);
    if(ss < 10){ss = '0'+ss;}
   var s=parseInt(duration%60);
    if(s < 10){s = '0'+s;} 
 if(!currentTime|!duration){$("#current").text('00:00')  }else{ $("#current").text(parseInt(currentTime/60)%60+':'+ss+'/'+parseInt(duration/60)%60+':'+s); }
    var value=0;
    if(currentTime>0){
      value=Math.floor((currentTime/duration)*100);}
    $('#audio1').on('timeupdate',function(){
     $('#progress').attr('value',value);
   });
    }
 
  
                       
    //playList click
  $('#playList li a').click(function(e){
    e.preventDefault();
    $('#btnPlay').hide();
     $('#btnPause').show();
    $('#audio1').attr('src',$(this).attr('href'));
    $('li a').removeClass('active');
    $(this).addClass('active');
     var link=document.getElementsByClassName("active")[0].href;
  $('#source').text("Source:"+link);
    var d = new Date();
    $("#mainImg").attr("src", "https://source.unsplash.com/360x240/?nature,water"+d.getTime());
    $('#audio1')[0].play();
    
  });
})