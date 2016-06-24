# img_object_fit
Use background size handle img object-fit to support IE9+

## Usage

### js ver

```javascript
imgObjectFit({
    dom: document.querySelector('img'),
    color: '#f8f8f8',
    img: '/img/example.png'
});
```

### php ver

```php
<?php echo imgObjectFit('/img/example.png', 'Google', 'small_thumbnail'); ?>
```

Need add style

```css
.image_object {
    display: inline-block;
    width: 300px;
    height: 300px;
    background-color: #000;
    background-repeat: no-repeat;
    background-position: center;
    background-size: contain;
}
.small_thumbnail {
    width: 150px;
    height: 150px;
}
```

`.image_object` is image default style must set


## Arguments

### js ver

It is json type object

|key|type|required|value|description|example|
|---|---|---|---|---|---|
|color|string|no|'hex color'| background color|'#f8f8f8'|
|dom|object|required|'dom selector'|dom selector need put image|document.querySelector('img')|
|d4img|string|no|'image url'|if no image this is default image|'/img/example.png'|
|img|string|no|'image url'|image url|'/img/example.png'|
|type|string|no|'cover', 'contain', 'fill'|object-ft type default is contain|'cover'|
|display|string|no|'inline', 'block', 'flex', 'inline-block', ...etc|set display|'inline-block'|
|width|string|no|'px', 'em', '%', 'rem', ...etc|set width, notice if set width must also set height|'300px'|
|height|string|no|'px', 'em', '%', 'rem', ...etc|set height, notice if set height must also set width|'200px'|


### php ver


|argument|type|required|value|description|example|
|---|---|---|---|---|---|
|url|string|required|'url'|image url|'/img/example.png'|
|alt|string|no|'image alt'|image alt|'This is a image'|
|class|string|no|'class name'|class name control custom style|'custom_style'|
