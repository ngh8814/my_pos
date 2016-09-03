//페이지 이동
function goPage(url, form, method){
	method = method || 'GET';
	
	var frm = $('#'+form);
	$(frm).attr({
		method: method,
		action: url
	});
	$(frm).submit();
}
