$(document).ready(function(){
    
    var navTop = $('#nav').offset().top;
    var navHeight = $('#nav').height();
    var windowH = $(window).height();
    
    // $('.section').height(windowH);
    
    $(document).scroll(function(){
        var st = $(this).scrollTop();
        
        //for the nav bar:
        /* if(st > navTop ){
            $('#nav').addClass('fix');
            $('.section:eq(0)').css({'margin-top':navHeight});//fix  scrolling issue due to the fix nav bar
        }else{
            $('#nav').removeClass('fix');
            $('.section:eq(0)').css({'margin-top':'0'});
        } */
        
        $('.section').each(function(index, element) {
            if(st + navHeight > $(this).offset().top && st + navHeight  <= $(this).offset().top + $(this).height()  ){
                $(this).addClass('active-invis');	
                
                var id = $(this).attr('id');
                $('a[href="#'+id+'"]').parent('div').addClass('active');
                // or $('#nav li:eq('+index+')').addClass('active');
            }else{
                console.log("else");
                $(this).removeClass('active-invis');
                
                var id = $(this).attr('id');
                $('a[href="#'+id+'"]').parent('div').removeClass('active');
                //or $('#nav li:eq('+index+')').removeClass('active');
            }
            
        });
        
    });
        
});