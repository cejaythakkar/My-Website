(function(){
    var $ = window.document.querySelectorAll.bind(document),
        scrollSpy = function(event){
            var currentTop = window.scrollY + 1;
            var elems = $('.section');
            var navLinks = $('.navigation-link');
            navLinks.forEach(function(element,index){
                element.classList.remove('active');
            });
            elems.forEach(function(element,index){
                var elemTop 	= element.offsetTop
                var elemBottom 	= elemTop + element.clientHeight;
                if(currentTop >= elemTop && currentTop <= elemBottom){
                    var id 		= element.getAttribute('id');
                    var navElems = $('a[href="#' + id+ '"]');
                    navElems.forEach(function(elem){
                        if(id==="home"){
                            elem.classList.add('active');
                            elem.parentElement.classList.add('active')
                        }
                        else{
                            elem.parentElement.classList.add('active')
                        }
                    })
                }
        })
    }
    $('.navbar-toggler')[0].addEventListener('click',function(){
        event.stopPropagation();
        var $drawer = $('#drawer')[0];
        if($drawer.classList.contains('opened')){
            $drawer.classList.remove('opened');
            $drawer.classList.add('closed');
            this.classList.remove('fa-times')
            this.classList.add('fa-bars')
        }else{
            $drawer.classList.remove('closed');
            $drawer.classList.add('opened');
            this.classList.remove('fa-bars')
            this.classList.add('fa-times')
        }
    });
    document.addEventListener('click',function(event){
        $toggle = $('.navbar-toggler')[0];
        if($toggle.classList.contains('closed'))
            return
        $toggle.dispatchEvent(new Event('click'));
    });
    $('#drawer')[0].addEventListener('click',function(event){
        event.stopPropagation();
        if(event.target.classList.contains('nav-link'))
            $('.navbar-toggler')[0].dispatchEvent(new Event('click'));
    });
    window.addEventListener('scroll',function(event){
        var $staticHeader = document.querySelectorAll('header.static-header')[0],
            $introSlideHeader = document.querySelectorAll('.introduction-slide header')[0];
        if(this.window.scrollY === 0){
            $staticHeader.classList.add('opacity-0');
            $staticHeader.classList.remove('opacity-1');
            $introSlideHeader.classList.add('opacity-1');
            $introSlideHeader.classList.remove('opacity-0');
        }else{
            $staticHeader.classList.add('opacity-1');
            $staticHeader.classList.remove('opacity-0');
            $introSlideHeader.classList.add('opacity-0');
            $introSlideHeader.classList.remove('opacity-1');
        }
        scrollSpy(event);
    }); 
    window.scrollTo(0,1);
    (function slider(){
        setInterval(function(){
            var sliderWrapper = $('#passion-wrapper .passion-slider-wrapper ');
            sliderWrapper.forEach(function(element){
                var $sliderElem = element.children[0],
                    $slides = $sliderElem.children,
                    sliderWidth = $sliderElem.clientWidth,
                    sliderWrapperWidth = element.clientWidth;
                    if($sliderElem.imageIndex === undefined){
                        $sliderElem.imageIndex = 0;
                    }
                    $sliderElem.imageIndex += 1;
                    if($sliderElem.imageIndex >= $slides.length){
                        $sliderElem.imageIndex = 0;
                    }
                    $sliderElem.style.transform = 'translateX(-' + $sliderElem.imageIndex * sliderWrapperWidth + 'px)';
            });
        },5000);
       
    })()

})();