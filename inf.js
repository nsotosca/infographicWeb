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

    for (i = 0; i < characterImg.length; i++){
        if(characterImg[i]!=null && characterName[i]!=null && characterImg.length<7 )
        boxCharacters.append('<div><img src="http://www.lojueguito.com/wp-content/uploads/2018/05/'+characterImg[i]+'" alt="'+characterName[i]+'" title="'+characterName[i]+'"/></div>');
    }
    jQuery('.inf-circle .inf-text').append(reviewTextShort+'...<a>Leer más</a>');
       
    //POPUP
    //funcion mostrar popup "review" ocultar grid
    
    function showPopup(){
        boxContent.css('padding','0');
        boxPopup.css('padding','1rem');
        boxPopup.toggle('display');
        boxGrid.toggle('fast');
        return;
    }

    boxCircle.click(function(){
        var idBoxCircle = jQuery(this).attr('id');
        var reviewPopup = jQuery('.inf-popup .content #review');
        var charactersPopup = jQuery('.inf-popup .content #characters');
        var gameplayPopup = jQuery('.inf-popup .content #gameplay');
        var imagesPopup = jQuery('.inf-popup .content #images');
        switch (idBoxCircle) {
            case 'inf-review':
                if(!boxPopup.is(":visible")){
                    reviewPopup.css('display','block');
                    charactersPopup.css('display','none');
                    showPopup();
                    reviewPopup.append('<div class="img"><img src="http://www.lojueguito.com/wp-content/uploads/2018/05/'+reviewImg+'"/></div>');
                    reviewPopup.append('<div class="text">'+reviewText+'</div>');
                }
                break
            case 'inf-characters':
                if(!boxPopup.is(":visible")){
                    reviewPopup.css('display','none');
                    charactersPopup.css('display','flex');
                    showPopup();
                    for (i = 0; i < characterImg.length; i++){
                        if(characterImg[i]!=null && characterName[i]!=null && characterImg.length<7 )
                        charactersPopup.append('<div class="character"><div class="img"><img src="http://www.lojueguito.com/wp-content/uploads/2018/05/'+characterImg[i]+'" alt="'+characterName[i]+'" title="'+characterName[i]+'"/></div><div class="text"><h3>'+characterName[i]+'</h3>'+characterDescription[i]+'</div></div>');
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
            boxPopup.toggle('display');
            boxGrid.toggle('fast');
            jQuery('.inf-popup .content div').empty();
        }            
    }) 
})