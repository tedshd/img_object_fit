<?php
/**
 *
 * @authors Ted Shiu (tedshd@gmail.com)
 * @date    2016-06-23 10:57:05
 */

function imgObjectFit($url, $class='', $alt='')
{
    $img = '<span class="image_object ' . $class . '" style="background-image:url('. $url .');">' .
    '<img itemprop="image" class="hide" src="' . $url . '" alt="' . $alt . '">' .
    '</span>';
    return $img;
}

?>
<!DOCTYPE html>
<html>
<head>
<meta charset="utf-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0, minimum-scale=1.0, maximum-scale=1.0, user-scalable=no">
<title>img blank</title>
<link href="" rel="stylesheet">
<style>
.image_object {
    display: inline-block;
    width: 300px;
    height: 300px;
    background-color: #000;
    background-repeat: no-repeat;
    background-position: center;
    background-size: contain;
}
.hide {
    display: none;
}
.custom {
    width: 100px;
    height: 100px;
    background-color: transparent;
}
</style>
</head>
<body>
<?php echo imgObjectFit('https://www.google.com.tw/images/branding/googlelogo/1x/googlelogo_color_272x92dp.png', '', 'Google'); ?>
</body>
</html>

