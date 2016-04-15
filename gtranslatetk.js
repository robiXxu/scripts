
// Functions used in order to calculate the TK for google translate
function RL(a, b) {
  for (var c = 0; c < b.length - 2; c += 3) {
    var d = b.charAt(c + 2);
    d = d >= "a" ? d.charCodeAt(0) - 87 : Number(d);
    d = b.charAt(c + 1) == "+" ? a >>> d : a << d;
    a = b.charAt(c) == "+" ? a + d & 4294967295 : a ^ d;
  }
  return a;
}

function TL(a) {
  const b = 402890;
  let d = [];
  for (let e = 0, f = 0; f < a.length; f++) {
    let g = a.charCodeAt(f);

    if (128 > g) {
      d[e++] = g
    } else {
      if (2048 > g) {
        d[e++] = g >> 6 | 192;
      } else {
        if ( 55296 == (g & 64512) && f + 1 < a.length && 56320 == (a.charCodeAt(f + 1) & 64512) ) {
          g = 65536 + ((g & 1023) << 10) + (a.charCodeAt(++f) & 1023);
          d[e++] = g >> 18 | 240;
          d[e++] = g >> 12 & 63 | 128;
        } else {
          d[e++] = g >> 12 | 224;
          d[e++] = g >> 6 & 63 | 128;
        }
      }
      d[e++] = g & 63 | 128;
    }
  }

  a = b;
  for (let e = 0; e < d.length; e++) {
    a += d[e];
    a = RL(a, '+-a^+6');
  }
  a = RL(a, "+-3^+b+-f");
  if (0 > a) a = (a & 2147483647) + 2147483648;
  a %= Math.pow(10, 6);
  return a + "." + (a ^ b);
}