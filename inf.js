jQuery(document).ready(function(){    
    var reviewTextShort = reviewText.substr(0,120);
    var boxPopup =  jQuery('.inf-popup');
    var boxGrid = jQuery('.inf-grid');
    var boxContent = jQuery('.inf-content');
    var boxCharacters = jQuery('#inf-characters .inf-characters');
    var boxCircle = jQuery('.inf-circle');

    boxContent.css('background-image','url(http://www.lojueguito.com/wp-content/uploads/2018/05/'+bgImg+'');

    var clearP = jQuery('.inf-content p');    
    clearP.remove();

    for (var i = 0; i < character.length; i++){
        if(character[i].img!=null && character[i].name!=null && character.length<7 )
        boxCharacters.append('<div><img src="http://www.lojueguito.com/wp-content/uploads/2018/05/'+character[i].img+'" alt="'+character[i].name+'" title="'+character[i].name+'"/></div>');
    }
    jQuery('.inf-circle .inf-text').append(reviewTextShort+'...<a>Leer más</a>');
       
    //POPUP
    //funcion mostrar popup "review" ocultar grid
    
    function showPopup(){
        boxContent.css('padding','0');
        boxPopup.css('padding','1rem');
        boxPopup.fadeToggle('display');
        boxGrid.fadeToggle('fast');
        boxPopup.css({'display':'flex','align-items':'center'})
        return;
    }

    boxCircle.click(function(){
        var idBoxCircle = jQuery(this).attr('id');
        var reviewPopup = jQuery('.inf-popup .content #review');
        var charactersPopup = jQuery('.inf-popup .content #characters');
        var gameplayPopup = jQuery('.inf-popup .content #gameplay');
        var imagesPopup = jQuery('.inf-popup .content #images');
    
        //funcion mostrar galeria
        function createGallery(){
            for( var i = 0; i < imageUrl.length; i++){
                if(i==0){ 
                    var column ='"col'+i;
                }else{
                    if ((i%2)!=0){
                        column +=' col'+i;
                        if(i==(imageUrl.length-1)){
                            column +='"';
                        }else{
                            column +='" "';
                        }
                    }else{
                        column +='col'+i;
                    }
                }
                if (i==(imageUrl.length-1) && (i%2)==0){
                    column +=' col'+i+'"';
                }                                           
                imagesPopup.append('<div class="img"><img src="http://www.lojueguito.com/wp-content/uploads/2018/05/'+imageUrl[i]+'"/></div>');
                jQuery('.inf-popup .content #images .img:nth-child('+i+')').css({'grid-area':'col'+i+''});
            }      
            imagesPopup.css({'grid-template-columns':'1fr 1fr', 'grid-template-areas':''+column+''});
            jQuery('.inf-popup .content #images .img img').click(function() {
                var srcImg = jQuery(this).attr('src');                
                imagesPopup.empty();
                imagesPopup.css('grid-template-columns','1fr');
                imagesPopup.append('<div id="big" style="display:none"><img src="'+srcImg+'"/>');
                console.log(this)
                jQuery('.inf-popup .content #images #big').fadeToggle('display');
              jQuery('.inf-popup .content #images #big').click(function() {
                imagesPopup.empty();
                createGallery();
              }) 
            })   
            return
        }  
        
        switch (idBoxCircle) {
            case 'inf-review':
                if(!boxPopup.is(":visible")){
                    reviewPopup.css('display','block');
                    charactersPopup.css('display','none');
                    gameplayPopup.css('display','none');
                    showPopup();
                    reviewPopup.append('<div class="img"><img src="http://www.lojueguito.com/wp-content/uploads/2018/05/'+reviewImg+'"/></div>');
                    reviewPopup.append('<div class="text">'+reviewText+'</div>');
                }
                break
            case 'inf-characters':
                if(!boxPopup.is(":visible")){
                    reviewPopup.css('display','none');
                    charactersPopup.css('display','flex');
                    gameplayPopup.css('display','none');
                    showPopup();
                    for (i = 0; i < character.length; i++){
                        if(character[i].img!=null && character[i].name!=null && character.length<7 )
                        charactersPopup.append('<div class="character"><div class="img"><img src="http://www.lojueguito.com/wp-content/uploads/2018/05/'+character[i].img+'" alt="'+character[i].name+'" title="'+character[i].name+'"/></div><div class="text"><h3>'+character[i].name+'</h3>'+character[i].description+'</div></div>');
                    }
                }
                break
            case 'inf-gameplay':
                  if(!boxPopup.is(":visible")){
                    reviewPopup.css('display','none');
                    charactersPopup.css('display','none');
                    gameplayPopup.css('display','block');
                    showPopup();
                    gameplayPopup.append('<iframe src="https://www.youtube.com/embed/'+gameplayUrl+'?autoplay=1" allow="autoplay; encrypted-media" allowfullscreen></iframe>')
                  }
                break
            case 'inf-images':
                if(!boxPopup.is(":visible")){
                  reviewPopup.css('display','none');
                  charactersPopup.css('display','none');
                  gameplayPopup.css('display','none');
                  imagesPopup.css('display','grid');
                  showPopup();
                  switch (true) {
                    case imageUrl.length < 2:
                      imagesPopup.css('grid-template-columns','1fr');
                      imagesPopup.append('<div class="img"><img src="http://www.lojueguito.com/wp-content/uploads/2018/05/'+imageUrl[0]+'"/></div>');
                      break
                    default:
                      createGallery();
                      break 
                  }
                }
                break
            default:
                console.log('no es review');
                break
        }   
    })

    //Mostrar grid ocultar popup
    jQuery('.inf-content .inf-popup').click(function(e){
        if(e.target === this && boxPopup.is(":visible")){
            boxPopup.fadeToggle('display');
            boxGrid.fadeToggle('fast');
            jQuery('.inf-popup .content div').empty();
        }            
    }) 
    
})