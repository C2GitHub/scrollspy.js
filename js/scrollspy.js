function scrollspy() {
    var bodyArr = document.getElementsByClassName('scrollspy');
    var ol = document.getElementById('scrollspy');
    var indexArr = ol.children;
    var scrTop = 0;

    indexArr[0].className='current';
    window.onscroll = function () {
        scrTop = window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop;
        for (var  i = bodyArr.length-1; i >=0; i--) {
            if(scrTop <= bodyArr[i].offsetTop){
                for (let j = 0; j < bodyArr.length; j++) {
                    indexArr[j].className='';
                }
                indexArr[i].className = "current";
            }
        }
    };
    for (var i = 0; i < indexArr.length; i++) {
        indexArr[i].index = i;
        indexArr[i].onclick = function () {
            // window.scrollTo(0,bodyArr[this.index].offsetTop );
            for (var j = 0; j < indexArr.length; j++) {
                indexArr[j].className='';
            }
            this.className = "current";
            scrollAnimate(bodyArr[this.index].offsetTop);
        }
    }
    var timer = null;
    function scrollAnimate(target) {
        clearInterval(timer);
        timer = setInterval(function () {
            var step = (target-scrTop)/10;
            window.scrollTo(0,scrTop+step);
            if(Math.abs(target-scrTop)<=1){
                window.scrollTo(0,target);
                clearInterval(timer);
            }
        },18)
    }
}
scrollspy();

