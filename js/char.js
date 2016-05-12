function C(selector){
  if(!(this instanceof C)){
    return new C(selector);
  }
  this.element = document.querySelector(selector);
  this.click = document.querySelectorAll(selector);
};

C.prototype.makeIcons = function(arr){
  var el = this.element;
  var doc = document;

  for(var i = 0; i < arr.length; i++){
    var projectBox = doc.createElement('div');
    projectBox.className = 'project-box';
    projectBox.id = 'project-box' + i;

    var projectImgBox = doc.createElement('div');
    projectImgBox.className = 'project-img-box';
    projectImgBox.id = 'project-img-box' + i;

    var projectImg = doc.createElement('img');
    projectImg.className = 'project-img';
    projectImg.id = 'project-img' + i;

    var projectTitle = doc.createElement('span');
    projectTitle.className = 'project-title';
    projectTitle.id = 'project-title' + i;

    el.appendChild(projectBox);
    doc.getElementById('project-box'+i).appendChild(projectImgBox);
    doc.getElementById('project-img-box'+i).appendChild(projectImg);
    doc.getElementById('project-img'+i).src = arr[i].img;
    doc.getElementById('project-box'+i).appendChild(projectTitle);
    doc.getElementById('project-title'+i).innerHTML = arr[i].title;
  }
  return this;
}

C.prototype.hide = function(){
  var el = this.click;
  for(var i = 0; i < el.length; i++){
    el[i].style.display = 'none';
  }
  return this;
}

C.prototype.show = function(type){
  var el = this.element;
  if(type === undefined){
    el.style.display = 'block';
  }else{
    el.style.display = type;
  }
  return this;
}

C.prototype.scrollTop = function(x, y){
  var el = this.element;
  var left = el.offsetLeft;
  var top = el.offsetTop;

  if(x || y === undefined){
    window.scrollTo(left, top);
  }else{
    window.scrollTo(x, y);
  }
  return this;
}

C.prototype.clickListen = function(func){
  var btn = this.click;
  for(var i = 0; i < btn.length; i++){
    btn[i].addEventListener('click', func, false);
  }
}

C.prototype.empty = function(){
  var el = this.element;
  el.innerHTML = '';
}

function copyToClipboard(text) {
  if(navigator.platform.indexOf('Mac') > -1){
    window.prompt('Copy to clipboard: Cmd+C, Enter', text);
  }else{
    window.prompt('Copy to clipboard: Ctrl+C, Enter', text);
  }
}
