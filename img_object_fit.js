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
            display = option.display || 'inline-block',
            width = option.width,
            height = option.height,
            type = option.type || 'contain';
        if (!dom) {
            console.error('not set dom');
            return;
        }
        dom.style.display = display;
        if (width && height) {
            dom.style.width = width;
            dom.style.height = height;
        }
        if (type === 'fill') {
            type = '100% 100%';
        }
        if (color) {
            dom.style.backgroundColor = color;
        }
        dom.style.backgroundSize = type;
        if (imgUrl) {
            dom.style.backgroundImage = 'url("' + imgUrl + '")';
        }
        dom.style.backgroundRepeat = 'no-repeat';
        dom.style.backgroundPosition = 'center';
    }
    window.imgObjectFit = imgObjectFit;
})();