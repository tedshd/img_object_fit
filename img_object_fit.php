<?php
/**
 *
 * @authors Ted Shiu (tedshd@gmail.com)
 * @date    2016-06-23 10:57:05
 */

function imgObjectFit($url, $alt='', $class='')
{
    $img = '<span class="image_object ' . $class . '" style="background-image:url('. $url .');">' .
    '<img itemprop="image" style="display:none;" src="' . $url . '" alt="' . $alt . '">' .
    '</span>';
    return $img;
}