/**
 *
 * @authors Ted Shiu (ted@gmail.com)
 * @date    2016-05-24 10:27:17
 */

(function () {
    function imgObjectFit(option) {
        var color= option.color,
            dom = option.dom,
            d4img = option.d4img,
            imgUrl = option.img || d4img,
            type = option.type || 'contain';
        if (!dom) {
            console.error('not set dom');
            return;
        }
        if (type === 'fill') {
            type = '100% 100%';
        }
        dom.style.backgroundColor = color;
        dom.style.backgroundSize = type;
        if (imgUrl) {
            dom.style.backgroundImage = 'url("' + imgUrl + '")';
        }
        dom.style.backgroundRepeat = 'no-repeat';
        dom.style.backgroundPosition = 'center';
    }
    window.imgObjectFit = imgObjectFit;
})();