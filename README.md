# img_object_fit
Use background size handle img object-fit to support IE9+

## Usage

```javascript
imgObjectFit({
    dom: document.querySelector('img'),
    color: '#f8f8f8',
    img: '/img/example.png'
});
```

## Arguments

It is json type object

|key|type|required|value|description|example|
|---|---|---|---|---|---|
|color|string|no|'hex color'| background color|'#f8f8f8'|
|dom|object|required|'dom selector'|dom selector need put image|document.querySelector('img')|
|d4img|string|no|'image url'|if no image this is default image|'/img/example.png'|
|img|string|no|'image url'|image url|'/img/example.png'|
|type|string|no|'cover', 'contain'|object-ft type|'cover'|
