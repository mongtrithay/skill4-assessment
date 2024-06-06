const article = {
  title: "How to code",
  description: "You can learn to code. Error is nothing to be afraid of.",
};
let toolTip = document.createElement('div');
    toolTip.innerHTML = article.description;
function display(){
  document.getElementById('article').innerHTML= article.title;
  document.body.append(toolTip);
}


