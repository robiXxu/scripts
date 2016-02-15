
<?php
error_reporting(E_ALL);


function shr32($x, $bits)
{
    if($bits <= 0){
        return $x;
    }
    if($bits >= 32){
        return 0;
    }
    $bin = decbin($x);
    $l = strlen($bin);

    if($l > 32){
        $bin = substr($bin, $l - 32, 32);
    }elseif($l < 32){
        $bin = str_pad($bin, 32, '0', STR_PAD_LEFT);
    }
    return bindec(str_pad(substr($bin, 0, 32 - $bits), 32, '0', STR_PAD_LEFT));
}

function charCodeAt($str, $index)
{
    $char = mb_substr($str, $index, 1, 'UTF-8');
    if (mb_check_encoding($char, 'UTF-8'))
    {
        $ret = mb_convert_encoding($char, 'UTF-32BE', 'UTF-8');
        return hexdec(bin2hex($ret));
    }else{
        return null;
    }
}


function RL($a, $b)
{
    for($c = 0; $c < strlen($b) - 2; $c +=3) {
        $d = $b{$c+2};
        $d = $d >= 'a' ? charCodeAt($d,0) - 87 : intval($d);
        $d = $b{$c+1} == '+' ? shr32($a, $d) : $a << $d;
        $a = $b{$c} == '+' ? ($a + $d & 4294967295) : $a ^ $d;
    }
    return $a;
}
function TL( $a )
{   
    mb_internal_encoding("UTF-8");
    $b = 402890;
    for ($d = array(), $e = 0, $f = 0; $f < mb_strlen($a); $f++) {
        $g = charCodeAt($a, $f);

        if ( 128 > $g ) {
            $d[$e++] = $g; 
        } else {
            if ( 2048 > $g ) { 
                $d[$e++] = $g >> 6 | 192;
            } else { 
                if ( 55296 == ($g & 64512) && $f + 1 < mb_strlen($a) && 56320 == (charCodeAt($a, $f + 1) & 64512) ) { 

                    $g = 65536 + (($g & 1023) << 10) + (charCodeAt($a, ++$f) & 1023);
                    $d[$e++] = $g >> 18 | 240; 
                    $d[$e++] = $g >> 12 & 63 | 128;
                } else {
                    $d[$e++] = $g >> 12 | 224;
                    $d[$e++] = $g >> 6 & 63 | 128;
                }
            }
            $d[$e++] = $g & 63 | 128;
        }
    }
    
    $a = $b;
    for ($e = 0; $e < count($d); $e++) {
        $a += $d[$e];
        $a = RL($a, '+-a^+6');
    }
    $a = RL($a, "+-3^+b+-f");
    if (0 > $a) $a = ($a & 2147483647) + 2147483648;
    $a %= pow(10, 6);
    return sprintf('%d.%d', $a, $a ^ $b);
}


$tk = (isset($_GET['tk']) && !empty($_GET['tk'])) ? $_GET['tk'] : 'love';
echo $tk . "=". TL($tk);

?>