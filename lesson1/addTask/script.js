let images = [`img/img-1.jpeg`, `img/img-2.jpeg`, `img/img-3.jpeg`],
    img = [],
    log = 0;

function postData() {
    return new Promise(function (resolve, reject) {
        for (let i = 0; i < images.length; i++) {
            let request = new XMLHttpRequest(); // создаем запрос к серверу
            request.open('GET', images[i], false); // выставляем настройки запроса
            request.send();
            if (request.readyState == 4) {
                console.log(request.responseURL);
                img[i] = document.createElement('img');
                img[i].setAttribute('src', '' + request.responseURL);
                log+=1;
                
            }
            if (log == 3) {
                resolve();
            }
        
        }
        
    });
}

postData()
    .then(() => {
        for (let i = 0; i < images.length; i++) {
            document.body.appendChild(img[i]);
        }
    })