var islemSec = document.querySelectorAll('#islem>button');
islemSec.forEach(element=>{
    element.addEventListener('click' , function(){
        let pictureCount = element.innerHTML;
        fetch('https://picsum.photos/list')
        .then(function(response){
            return response.json();
        })
        .then(function(images){
            let html = "";
            images.forEach(function(image, index){
                if(pictureCount>index) {
                    html +=`
                    <div class="container mt-3">
                        <bold>${index+=1}) ${image.author}</bold>
                        <a target="_blank" href="${image.post_url}"><img src="${image.post_url}" style="max-width: 50rem; height: auto" class="rounded float-left" alt="İmageLink"></a>
                    </div>
                    `;
                }
            });
            document.querySelector('#liste').innerHTML = html;
        })
        .catch(function(error){
            console.log(error);
        })
    })
})