var projectIcons = [
  {
    title: 'ChangeDJ',
    img: './img/changedj.png'
  },
  {
    title: 'ReactJS Chat',
    img: './img/reactjs.png'
  },
  {
    title: 'CreateSkeleton',
    img: './img/skelwhite.png'
  },
  {
    title: 'YT Sync',
    img: './img/yt.png'
  },
  {
    title: 'BookCrypt',
    img: './img/key.png'
  }
];


window.onload = function(){
  var url = window.location.href;
  var winId = url.substr(url.length - 1);
  if(winId != '/'){
    C('#slide'+winId).show().scrollTop(0,0);
    C('.content').hide();
  }

  //hide spinner once page is loaded
  C('#spinner').hide();

  //create project icons
  C('.box-holder').makeIcons(projectIcons);

  //let user copy email
  C('.nav-email').clickListen(function(){
    copyToClipboard('charlie@charlies.io');
  });

  //when github button is clicked, open my github
  C('.nav-github').clickListen(function(){
    window.open('https://github.com/CharlieGitDB', '_blank');
  });

  //when a slide's exit button is clicked hide the current slide
  C('.exit-btn').clickListen(function(){
    C('.slide').hide();
    C('.content').show();
    window.history.pushState('', '', '/');
  });

  //when project icon is clicked
  C('.project-box').clickListen(function(){
    var id = this.getAttribute('id').slice(-1);
    C('#slide'+id).show().scrollTop(0,0);
    C('.content').hide();
    window.history.pushState('', '', '#'+id);
  });

  //when up arrow button is clicked
  C('.jump-to-top').clickListen(function(){
    C('.jump-to-top').scrollTop(0,0);
  });

  window.onpopstate = function(){
    var winUrl = window.location.href;
    var windowId = winUrl.substr(winUrl.length - 1);
    if(windowId != '/'){
      C('#slide'+windowId).show().scrollTop(0,0);
      C('.content').hide();
    }else{
      C('.slide').hide();
      C('.content').show();
    }
  }
};
