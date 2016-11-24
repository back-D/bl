;$(document).ready(function() {

    $('input[name], input[phone], input[email]').unbind().blur( function(){

        var name = $("input[name]").val();
        var phone = $("input[phone]").val();
        var email = $("input[email]").val();
        if (name.length < 2 && name != /^[a-zA-Zа-яА-Я]+$/) {
            $('#name').tooltip('show');
        } 
        if (email != /^([a-zA-Z0-9_.-])+@([a-zA-Z0-9_.-])+\.([a-zA-Z])+([a-zA-Z])+/) {
            $('#email').tooltip('show');
        }
        if (phone != /^[0-9_.-]+/) {
            $('#phone').tooltip('show');
        }
    });

    $('form#contact-form').submit(function(e){

        e.preventDefault();

            $.ajax({
                url: '',
                type: 'POST',
                data: $(this).serialize(),
            });

        var btn = document.getElementById('submit-btn');
        var background = document.getElementsByClassName('success')[0];
        var button = document.getElementsByClassName('success-form')[0];
        btn.addEventListener("click", function() {
            background.style.display = 'block';
            button.style.display = 'block';
        }, false);
        var close = document.getElementById('close');
        close.addEventListener("click", function(){
            background.style.display = 'none';
            button.style.display = 'none';
            $('form#contact-form')[0].reset();
        }, false);
    });


});