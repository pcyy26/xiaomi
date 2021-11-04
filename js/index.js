//头部列表显示
$('.nav-list>li').first().siblings().mouseenter(function(){
    $(this).children('a').css({
        color:'#ff6700'
    })
    $('.header-list').stop().slideDown(200) //显示
})
$('.nav-list>li').first().siblings().mouseleave(function(){
    $(this).children('a').css({
        color:'#333'
    })
})
    $('.header ul>li').mouseleave(function(){          
        $('.header-list').stop().slideUp()
    })
//菜单栏
$('.nav-list .nav-side>li').mouseenter(function(){
    $('.side-child').show()
})
$('.nav-list .nav-side').mouseleave(function(){
    $('.side-child').hide()
})

//秒杀倒计时
setInterval(function(){
    function date(num){
    var NowTime =  +new Date()
    var Time = +new Date(num)
    var times =( (Time - NowTime) /1000)
       h = parseInt(times /60/60%24)
    h < 10 ? h = '0' + h : h    
       m = parseInt(times /60 % 60)
    m < 10 ? m = '0' + m : m    
       s = parseInt(times%60)
    s < 10 ? s = '0' + s : s  
        $('.time-box>div').eq(0).text(h)
        $('.time-box>div').eq(1).text(m)
        $('.time-box>div').eq(2).text(s) 
  }
  date('2024-10-30 18:00')
  },1000)

  //返回顶部
  $(window).scroll(function(){
      if($(document).scrollTop()>=800){
          $('.goBack').show().click(function(){
              $('html').stop().animate({
                  scrollTop:0
              },800)
          })
      }else{
          $('.goBack').hide()
      }
  })

  //搜索框
  $('.header-search>.text').on('focus',function(){
      $('.search-list').show()
    //   console.log($(this));
      $(this).css({
          borderColor:'#ff6700'
      }).next().css({
        borderColor:'#ff6700'
       })
  })
  $('.header-search .text').on('blur',function(){
      $('.search-list').hide()
      $(this).css({
        borderColor:'#ccc'
    }).next().css({
      borderColor:'#ccc'
     })
  })
