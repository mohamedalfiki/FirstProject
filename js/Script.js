 (function () {
    // 'use strict';    

    // nice scroll
    $('html').niceScroll({
            
            cursorcolor:'#7cb62f',
            
    });

    // Side bar
    $('header .bars').click(function(){
        $('header .nav-list .list').slideToggle()
    });

    //  height of header & overlay = window
    $('.section-header').height($(window).height());
    $('.overlay').height($(window).height());
    


    // nav sticky
   
    $(window).scroll(function(){

        var top = $(this).scrollTop();

        if( top > 100)
        {
            $('links').addClass('sticky');
        }else{
            $('links').removeClass('sticky');
        }
        // count to
       if (top > 1630)
        {
            $('.time').countTo();
            $(window).off('scroll');
            
        }
    });

	// popup login
	$('#Login').click(function(){
		$('.popup').fadeIn();
		});
	

	$('.popup').click(function(){
		$(this).fadeOut();
	});

	$('.popup .inner').click(function(e){
		e.stopPropagation();
	});

	// popup register
	$('#register').click(function(){
		$('.popup-register').fadeIn();
	});
	

	$('.popup-register').click(function(){
		$(this).fadeOut();
		$('.popup').fadeOut();
	});

	$('.popup-register .inner-register').click(function(e){
		e.stopPropagation();
	});

	// check username & password

	    
		var username = $('.name-login');
		var password = $('.pass-login');
		

		
		
		// redirect to welcome page 
		$('#Welcome').click(function(){
			 if (username.val() == "admin" && password.val() == "123")
			 	{
					$(location).attr('href','http://127.0.0.1:5500/Dashboard.html')
				}
		})
		
		
           

        /*start our team */            
               
	    let i=2;
		var radius = 200;
		var fields = $('.itemDot');
		var container = $('.dotCircle');
		var width = container.width();
        radius = width/2.5;
 
		 var height = container.height();
		var angle = 0, step = (2*Math.PI) / fields.length;
		fields.each(function() {
			var x = Math.round(width/2 + radius * Math.cos(angle) - $(this).width()/2);
			var y = Math.round(height/2 + radius * Math.sin(angle) - $(this).height()/2);
			if(window.console) {
				console.log($(this).text(), x, y);
			}
			
			$(this).css({
				left: x + 'px',
				top: y + 'px'
			});
			angle += step;
		});
		
		
		$('.itemDot').click(function(){
			
			var dataTab= $(this).data("tab");
			$('.itemDot').removeClass('active');
			$(this).addClass('active');
			$('.CirItem').removeClass('active');
			$( '.CirItem'+ dataTab).addClass('active');
			i=dataTab;
			
			$('.dotCircle').css({
				"transform":"rotate("+(360-(i-1)*36)+"deg)",
				"transition":"2s"
			});
			$('.itemDot').css({
				"transform":"rotate("+((i-1)*36)+"deg)",
				"transition":"1s"
			});
			
			
		});
		
		setInterval(function(){
			var dataTab= $('.itemDot.active').data("tab");
			if(dataTab>6||i>6){
			dataTab=1;
			i=1;
			}
			$('.itemDot').removeClass('active');
			$('[data-tab="'+i+'"]').addClass('active');
			$('.CirItem').removeClass('active');
			$( '.CirItem'+i).addClass('active');
			i++;
			
			
			$('.dotCircle').css({
				"transform":"rotate("+(360-(i-2)*36)+"deg)",
				"transition":"2s"
			});
			$('.itemDot').css({
				"transform":"rotate("+((i-2)*36)+"deg)",
				"transition":"1s"
			});
			
			}, 5000);
		


                    /*finish our team */
           
                    /* portfolio */

                const tabs = document.querySelectorAll('[data-tab-target]')
                const tabContents = document.querySelectorAll('[data-tab-content]')

                tabs.forEach(tab => {
                tab.addEventListener('click', () => {
                const target = document.querySelector(tab.dataset.tabTarget)
                tabContents.forEach(tabContent => {
                tabContent.classList.remove('active')
                })
                tabs.forEach(tab => {
                tab.classList.remove('active')
                })
                tab.classList.add('active')
                target.classList.add('active')
                })
                })
                  
                // slick
                $('.slick').slick({
                    nextArrow : false,
                    prevArrow : false,
                });

  }());