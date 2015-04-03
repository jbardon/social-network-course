function displayTrue(target) {
	target.parent().parent().addClass('has-success');
	target.parent().parent().parent().children('.res').css('display','');
}

function displayFalse(target) {
	target.parent().parent().addClass('has-error');
	target.parent().parent().parent().children('.res').last().css('display','');
}
