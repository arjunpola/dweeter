$(document).ready(function() {
  

/* ======= ======== ======= ======= ======== ======== ============ ======== Validation for username*/

$('#name').keyup(function() {

    $len = $(this).val().length;

    if($len < 3)
        $('#name ~ .help-block').html("Greater than 3");
    else if ($len > 10)
        $('#name ~ .help-block').html("Less than 10");
    else{
    	$('#name ~ .help-block').html("Perfect");
    	
    }
});



/* ======= ======== ======= ======= ======== ======== ============ ======== Validation for email address*/

$('#email').keyup(function(){

	$email = new RegExp(/^([A-Za-z0-9_\-\.])+\@([A-Za-z0-9_\-\.])+\.([A-Za-z]{2,4})$/);

	if(!$('#email').val().match($email))
		$('#email ~ .help-block').html("Invalid email");
	else {
		$('#email ~ .help-block').html("Perfect");
		$.data('final').push(1);	
	}
});


/* ======= ======== ======= ======= ======== ======== ============ ======== Validation for password length*/

$('#password').keyup(function(){

	$passlen = $(this).val().length;

	$passval = $(this).val()

	$('#password').data('pass',$passval);

	if($passlen < 6)
		$('#password ~ .help-block').html("Password must be 6 character long");
	else {
		$('#password ~ .help-block').html("Perfect");
		$.data('final').push(1);
	}
});


/* ======= ======== ======= ======= ======== ======== ============ ======== Validation for password matching*/

$('#conf-password').keyup(function(){

	$cpass = $('#conf-password').val();

	if($('#password').data('pass') == $cpass){
		$('#conf-password ~ .help-block').html("Matched!");
		$.data('final').push(1);
	}
	else
		$('#conf-password ~ .help-block').html("Password doesn't match");

});


/* ======= ======== ======= ======= ======== ======== ============ ======== Disabling Submit Button till every text fields are non-empty*/

var $input = $('input'),
    $button = $('#signup-btn');

$button.attr('disabled', true);
$input.keyup(function() {
    var trigger = false;
    $input.each(function() {
        if (!$(this).val()) {
            trigger = true;
        }
    });
    trigger ? $button.attr('disabled', true) : $button.removeAttr('disabled');
});




});