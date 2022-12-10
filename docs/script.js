function documentReady() {
  console.log('----------------------')
  console.log('--- Hanne was here ---')
  console.log('----------------------')

  var colors = ["#f4b400", "#01ddf2", "#f40064", "#f40064", "#29f4b2", "#29f4b2", "#29f4b2", "#29f4b2", "#29f4b2"]
  var randomColor = colors[Math.floor(Math.random()*colors.length)]
  document.body.style.background = randomColor
}