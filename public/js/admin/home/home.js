let HomeModule = (function() {
    let $ = document.querySelectorAll.bind(document),
    formData = new FormData();
    let _private = {
        domCache:{},

        cacheTheDom : function() {
            this.domCache.imageUploadForm = $('form.img-uploader-form')[0]
        },

        eventHandlers : {

        },

        bindEvents : function() {
            this.domCache.imageUploadForm.addEventListener('submit',(e)=>{
                e.preventDefault();
                
                const config = {
                    headers: {
                        'content-type': 'multipart/form-data'
                    }
                };
                fetch("/admin/home/img",{
                    method:'POST',
                    body:formData
                }).then((response) => {
                        response.json().then(result => {
                            $('.image-slider-container')[0].innerHTML = imagelistingTemplate(result)
                        });
                    }).catch((error) => {
                });
            });
            $('[name="img-uploader"]')[0].addEventListener('change',( event )=>{
                let frag = document.createDocumentFragment();
                let $imgUploadControl = event.target;
                let files = Array.from($imgUploadControl.files);
                if($imgUploadControl.files.length){
                    for(let counter = 0;counter < $imgUploadControl.files.length;counter++){
                        let file = $imgUploadControl.files[counter],
                            $div = document.createElement('div'),
                            $img = document.createElement('img'),
                            $input = document.createElement('input'),
                            $button = document.createElement('button');
                            $div.classList.add('list-item')
                            $input.setAttribute('type','text');
                            $input.setAttribute('data-filename',file.name)
                            $button.setAttribute('type','button');
                            $button.setAttribute('data-filename',file.name)
                            $button.innerHTML  = "Delete";
                            formData.append(file.name,file);
                            
                            $input.addEventListener('change',( event ) => {
                                formData.append(event.target.getAttribute('data-filename'),event.target.value)
                            });
                            $button.addEventListener('click',( event ) => {
                                let $this = event.target;
                                $this.closest('.list-item').remove();
                                let fileIndex = files.findIndex(file => file.name === $this.getAttribute('data-filename')),
                                    file = files[fileIndex];
                                formData.delete(file.name);
                                for (var key of formData.keys()) {
                                    console.log(key); 
                                }
                                // (fileIndex !== -1) && files.splice(fileIndex,1)
                            });
                            
                            ((file,$img)=>{
                                let reader = new FileReader();
                                reader.onload = ( event ) => {
                                    $img.setAttribute('src',event.target.result);
                                }
                                reader.readAsDataURL(file)
                            })($imgUploadControl.files[counter],$img)
                            // $div.appendChild($img),$div.appendChild($input),$div.appendChild($button);
                            // frag.appendChild($div);
                            // console.log(filestouploadlistTemplate({images:$imgUploadControl.files}));
                    }
                    $('#file-list-to-upload')[0].innerHTML = filestouploadlistTemplate({images:$imgUploadControl.files});
                }else{

                }
            });
        }
    };
    return {
        init : function() {
            _private.cacheTheDom.call(_private);
            _private.bindEvents();
        },
        renderImage : function($element,file){
            let reader = new FileReader();
            reader.onload = ( event ) => {
                $img.setAttribute('src',event.target.result);
            }
            reader.readAsDataURL(file)
        }
    }
})()

HomeModule.init();