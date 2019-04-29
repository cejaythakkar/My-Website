let UsersModule =(() => {
    let $ = document.querySelectorAll.bind(document);
    let _private = {
        bindEvents: () => {
            let $register_button = $('.register-button')[0];
            $register_button.addEventListener('click',( event ) => {
                let formData = new FormData($('#register_form')[0]);
                fetch('/user/register',{
                    method:"POST",
                    body:formData
                }).then(( result ) => {
                    console.log( result );
                });
            })

        }
    }
    return {
        init : () => {
            _private.bindEvents();
        }
    }
})()

UsersModule.init();