bubbly({
  blur:15,
  colorStart: "#fff",
  colorStop: "#fff",
  // shadowColor: "#5DB09B",
  compose: "source-over",
  radiusFunc:() => 1 + Math.random() * 25,
  angleFunc:() => -Math.PI / 2,
  velocityFunc:() => Math.random() * 2,
  bubbleFunc: () => `hsla(160, 30%, 80%, ${Math.random() * .5})`,
  // shadowColor: "#5DB09B",
  bubbles:150
});

// $(function(){
//   $('.change').midnight();
// });

