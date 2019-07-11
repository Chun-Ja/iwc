
  $(function(){
    $("#sub_menu").hide();
    $("#sub_watches").hide();
    $("#login_form").hide();
    $("#msg_box").hide();
    // 햄버거메뉴 호출
    $("#ham_menu").on("click",function(){
      $("#sub_watches").hide(50);
      $("#sub_menu").stop().fadeToggle(50);
    });
    // 서브메뉴 호출
    $("#nav>a:first-child").on("click",function(){
      $("#sub_watches").hide();
      $("#sub_menu").stop().fadeToggle(50);
    });
    // 서브와치 호출
    $("#nav>a:last-child").on("click",function(){
      $("#sub_menu").hide();
      $("#sub_watches").stop().fadeToggle(50);
    });
    // 로그인 호출
    $("#login img").on("click",function(){
      $("#msg_box").hide();
      $("#login_form").toggle();
    });
    // 메세지상자
    $("#msg_box_call").on("click",function(){
      $("#login_form").hide();
      $("#msg_box").toggle();
    });
    // 메세지상자 닫기
    $("#mb_close").on("click",function(){
      $("#msg_box").hide();
    });
    // bx슬라이더
    $('.bxslider').bxSlider({
      auto: true,
      pager: true,
    });
  });

