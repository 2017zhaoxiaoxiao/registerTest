$(function(){
    var name=$('#name'),
        phone=$('#phone'),
        pwd=$('#pwd'),
        code=$('#code'),
        btn=$('#btn'),
        register=$('register');
    register.click(function(){
        if(!dataTest('#phone')||!dataTest('#name')||!dataTest('#pwd')||!dataTest('#code'))return ;
    })
    btn.click(function(){
        if(phone.val()===''){
            $('#phone-valid').html("请您输入手机号");
        }
        else if(dataTest('#phone')){
            $('#code-valid').html("请求超时，请稍后再试")
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
    $(p+'-valid').html("");
    return true;
    
}
})