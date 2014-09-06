(function () {
  var firstScriptTag = document.getElementsByTagName('script')[0];
  var BV = window.BV = {};

  BV.doSomething = function () {
    console.log(firstScriptTag.parentNode);
  };

  console.log('scout file calling BV.doSomething')
  BV.doSomething();
}());