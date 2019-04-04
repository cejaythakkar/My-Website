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
                        }
                        else{
                            elem.parentElement.classList.add('active')
                        }
                    })
                }
        })
    }
    window.addEventListener('scroll',function(event){
        var $staticHeader = document.querySelectorAll('header.static-header')[0],
            $introSlideHeader = document.querySelectorAll('.introduction-slide header')[0];
        if(this.window.scrollY === 0){
            $staticHeader.classList.add('d-none');
            $staticHeader.classList.remove('d-block');
            $introSlideHeader.classList.add('d-block');
            $introSlideHeader.classList.remove('d-none');
        }else{
            $staticHeader.classList.add('d-block');
            $staticHeader.classList.remove('d-none');
            $introSlideHeader.classList.add('d-none');
            $introSlideHeader.classList.remove('d-block');
        }
        scrollSpy(event);
    });
    window.scrollTo(0,1);
})();