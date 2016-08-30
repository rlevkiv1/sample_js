// var Hello = 'Hello World!';
// document.write(Hello);
// console.log(Hello);
// alert(Hello);

// var num =10;
// var bool = true;
// var sum = 10 + true;
// document.write(sum);

// var num = 10;
// var str = '10';
// var sum = num + Number(str);
// document.write(sum)


    // function sum(a, b){
    //     var result = a+b;
    //     return result;
    // }
    // document.write(sum(5, 2));
    
    function Calculate()
  {
    var a = eval( document.forms.equ.a.value);
    var b = eval( document.forms.equ.b.value);
    var c = eval( document.forms.equ.c.value);
    var d = b * b - 4 * a * c;
    document.forms.equ.dis.value = d;
    if( d < 0)
    {
      var str = "";
      str += ( - b ) / ( 2 * a);
      str += " + i * ";
      str += Math.sqrt( - d ) / ( 2 * a);
      document.forms.equ.x1.value = str;
       
      str = "";
      str += ( - b ) / ( 2 * a);
      str += " - i * ";
      str += Math.sqrt( - d ) / ( 2 * a);
      document.forms.equ.x2.value = str;
    }
    else
    {
      document.forms.equ.x1.value = ( - b + Math.sqrt( d ) ) / ( 2 * a);
      document.forms.equ.x2.value = ( - b - Math.sqrt( d ) ) / ( 2 * a);
    }
  }
