function checkForm()
{
    var Name=document.getElementById('fullName').value;
    var Mail=document.getElementById('email').value;
    var Body=document.getElementById('messageInput').value;
    if(Name==='')
    {
        $("#fullName").css("border-bottom", "2px solid red");
    }
    else if(Mail==='' ||!echeck(Mail))
    {
        $("#email").css("border-bottom", "2px solid red");
    }
    else if(Body==='')
    {
        $("#messageInput").css("border", "2px solid red");
    }else {
        return true;
    }
    return false;
}

function echeck(str) {

    var at="@";
    var dot=".";
    var lat=str.indexOf(at);
    var lstr=str.length;
    var ldot=str.indexOf(dot);
    if (str.indexOf(at)===-1){
        return false;
    }
    if (str.indexOf(at)===-1 || str.indexOf(at)===0 || str.indexOf(at)===lstr){
        return false;
    }

    if (str.indexOf(dot)===-1 || str.indexOf(dot)===0 || str.indexOf(dot)===lstr){
        return false;
    }

    if (str.indexOf(at,(lat+1))!==-1){
        return false;
    }

    if (str.substring(lat-1,lat)===dot || str.substring(lat+1,lat+2)===dot){
        return false;
    }

    if (str.indexOf(dot,(lat+2))===-1){
        return false;
    }

    if (str.indexOf(" ")!==-1){
        return false;
    }
    return true;
}

$(document).ready(function () {
    $("#contactUs").on('submit', function (e) {
        if (!e.isDefaultPrevented()) {
            var url = "contact.php";

            $.ajax({
                type: "POST",
                url: url,
                data: $(this).serialize(),
                success: function (data)
                {
                    var messageAlert = 'alert-' + data.type;
                    var messageText = data.message;

                    var alertBox = '<div class="alert">' + messageText + '<i class="fa fa-close fa-2x" id="formSuccessClose"></i></div>';
                    if (messageAlert && messageText) {
                        $("#contactFormHolder").find('#successMessage').html(alertBox).css("display", "block")
                            .find("#formSuccessClose").click(function(){
                            $("#successMessage").css("display", "none");
                        });
                        $("#contactUs")[0].reset();
                    }
                }
            });
            return false;
        }
    });

});