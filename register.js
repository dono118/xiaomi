define(["jquery"], function($){
    function registerSend(){
       
        //通过post提交数据到对应的php页面，谨记前后端交互看控制台网络
        //点击注册按钮进行注册，有兴趣的同学可以在这个部分加表单验证
        $("#register-button").click(function(){
            
            $.ajax({
                type: "post",
                url: "./php/register.php",
                data: {
                    username: $(".item_account").eq(0).val(),
                    password: $(".item_account").eq(1).val(),
                    repassword: $(".item_account").eq(2).val(),
                    createTime: (new Date()).getTime()
                },
                success: function(result){
                    // alert(result);
                    //解析拿到的数据
                    var obj = JSON.parse(result);
                    if(obj.code){
                        $(".err_tip").find("em").attr("class", "icon_error")
                    }else{
                        $(".err_tip").find("em").attr("class", "icon_select icon_true");
                        setTimeout(function(){
                            location.assign("login.html");
                        }, 1000);
                    }
                    $(".err_tip").show().find("span").html(obj.message);
                    
                },
                error: function(msg){
                    console.log(msg);
                }
    
            })
        })
        
    }
    return {
        registerSend: registerSend
    }
})