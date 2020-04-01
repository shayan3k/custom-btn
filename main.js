let btn = document.querySelector(".btn-custom");
let layer1 = document.querySelector(".item1");
let layer2 = document.querySelector(".item2");

btn.addEventListener("mousemove", e => {
  let theValue = (e.offsetX * 100) / e.target.offsetWidth;
  layer2.style.cssText = `clip-path : polygon(0 0%, ${theValue}% 0, ${theValue}% 100%, 0% 100%);`;
});
btn.addEventListener("mouseleave", e => {
  let theValue = (e.offsetX * 100) / e.target.offsetWidth;
  theValue = theValue > 85 ? 100 : theValue;
  layer2.style.cssText = `clip-path : polygon(0 0%, ${theValue}% 0, ${theValue}% 100%, 0% 100%);`;
});
btn.addEventListener("onclick", e => {
  const theValue = (e.offsetX * 100) / e.target.offsetWidth;
  layer2.style.cssText = `clip-path : polygon(0 0%, ${theValue}% 0, ${theValue}% 100%, 0% 100%);`;
});
