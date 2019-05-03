let UsersModule =(() => {
    let $ = document.querySelectorAll.bind(document);
    let _private = {
        domCache:{

        },
        eventHandlers:{
            registerclickHandler:function ( event ){
                let $registerButton = event.target,
                    $registerForm = $registerButton.closest('#register_form'),
                    formData = new FormData($registerForm),
                    headers = {
                        method : 'POST',
                        body:formData
                    },
                    callback = (result) => {
                        console.log(result)
                    };

                this.makeAjaxCall('/user/register',headers,callback);
            }
        },
        attachEvent: function(type,$element,handler){
            $element.addEventListener(type,handler);
        },
        cacheTheDom: function() {
            this.domCache.registerButton = $('.register-button')[0];
        },
        bindEvents: function (){
           this.domCache.registerButton && this.attachEvent('click',this.domCache.registerButton,this.eventHandlers.registerclickHandler.bind(this));
        },
        makeAjaxCall: function(path,headers,callback) {
            fetch(path,headers).then(callback).catch(err => console.log(err));
        }
    }
    return {
        init : () => {
            _private.cacheTheDom();
            _private.bindEvents();
        }
    }
})()

UsersModule.init();