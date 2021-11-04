$('.idLoad').click(function(){
    $('form').show()
    $('.code').hide()
})
$('.codeLoad').click(function(){
    $('form').hide()
    $('.code').show()
})

//注册
// $('.register-btn').click(function(){
//     $('.login').hide()
//     $('.register').show()
// })
// 
$('.login-btn').click(function(e){
    let data = {
            username:$('.username').val(),
            pwd:$('.pwd').val()
         }

    e.preventDefault() //阻止表单默认提交
//   发起ajax请求
// console.log(data);
         $.ajax({
             type: "post",
             url: "./php/login.php",
             data: data,
             dataType: "json",
             success: function (response) {
                 console.log(response.msg);
             }
         });
         $.ajax({
             type:'post',
             url:'./php/login'
         })
    
})