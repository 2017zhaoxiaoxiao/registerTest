$(function(){
    var name=$('#name'),
        phone=$('#phone'),
        pwd=$('#pwd'),
        code=$('#code'),
        btn=$('#btn'),
        register=$('#register');
    register.click(function(){

        if(!dataTest('#name')||!dataTest('#pwd')||!dataTest('#phone')||!dataTest('#code'))
        return ;
    })
   function countdown(obj) {
        if(countdownNum == 0) {
            obj.attr('disabled', false); 
            obj.html('获取验证码');
            countdownNum = 10;
            $('#code-valid').html("验证超时请稍后重试");
            
            return;
        } else {
            obj.attr('disabled', true);
            obj.html(countdownNum + '秒');
            countdownNum--;
        }

        setTimeout(function () {
            countdown(obj);
        }, 1000);  
    }
    btn.click(function(){
        if(phone.val()===''){
            $('#phone-valid').html("请您输入手机号");
        }
       
        else if(dataTest('#phone')){
         
            countdownNum=10;
            countdown(btn)
           
        }
       
        
    })
    name.focusout(function(){
        if(!dataTest('#name')){
       
        }
      })
    phone.focusout(function(){
        if(!dataTest('#phone')){
            
        }
      })
    pwd.focusout(function(){
        if(!dataTest('#pwd')){
            
        }
      })
     

   
function dataTest(p){
    var data=$(p);
    if(p==='#name'){
      
        if(!(/^[a-zA-Z0-9_\u4e00-\u9fa5]+$/.test(data.val()))){
            $(p+'-valid').html("用户名仅支持中英文、数字、下划线")
           
            return false;
        }
    }
    if(p==='#phone'){
        
        if(!(/^1[3456789]\d{9}$/.test(data.val()))){
            $(p+'-valid').html('手机号码格式不对');
           
            return false;
        }
    }
    if(p==='#pwd'){
       
        if(!(/(?!^[0-9]+$)(?!^[A-z]+$)(?!^[^A-z0-9]+$)^.{8,14}$/.test(data.val()))){
            $(p+'-valid').html("密码设置不符合要求")
            return false;
        }
    }
    if(p==='#code'){
        if(data.val()===''){
            console.log('1');
            $(p+'-valid').html("验证码为空");
            return false;
        }
    }
    $(p+'-valid').html("");
    return true;
    
}
})