var photoListElement = document.querySelector("#photos");

var photoList = [
    {src: "img/sb1.png", title: "7月"},
    {src: "img/sb2.png", title: "8月"},
	  {src: "img/sb.png", title: "9月"},
	  {src: "img/sb3.png", title: "もう1回8月"},
    {src: "img/kuma.png", title: "前"},
    {src:	"img/sb5.png", title: "横"}
    //画像が表示される
    
];

var isReady = function(){
    return photoListElement != null &&
        photoList != null &&
        photoList.length > 0;
};

var renderPhoto = function(index){
    var photo = photoList[index];
    var elm = document.createElement("img");
    elm.setAttribute("src", photo.src);
    elm.setAttribute("title", photo.title);
    return elm;
};

var showPhotos = function(){
    if(isReady()){
        var index = 0;
        while(index < photoList.length){
            var elm = renderPhoto(index);
            photoListElement.appendChild(elm);
            index = index + 1;
        }
    }
};

var initApp = function(){
    var btn = document.querySelector("#startButton");
    btn.addEventListener("click", showPhotos);
};

initApp();
