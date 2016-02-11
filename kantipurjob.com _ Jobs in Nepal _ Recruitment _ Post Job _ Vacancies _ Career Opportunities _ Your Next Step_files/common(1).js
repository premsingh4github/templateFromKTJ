$(function(){
    new WOW().init();  
	var owl = $('#owl_carousel_home');
	if(owl.length>0){
      owl.owlCarousel({
        items: 10,
        loop: false,
        margin: 0,
        autoplay: false,
        autoplayTimeout: 1000,
        autoplayHoverPause: true
        
      });
	}

    
    if($('#subscriber_form').length>0){
    	$('#subscriber_form').validate({
    		// Ajax form submition                  
	            submitHandler: function(form)
	            {   $(form).ajaxSubmit(
						{     
							beforeSend: function()
							{
							   $('#subscriber_form button[type="submit"]').attr('disabled', true);
							},
							dataType:  'json',
							success: function(returnData)
							{    if(returnData.result=='true'){
								  $("#subscriber_form").addClass('submited');
								  $("#success").text(returnData.message);
								  $("#subscriber_form").resetForm();
								}else{
									alert(returnData.message);
								}	
													  
							}
						});
				},
	            
	            // Do not change code below
	            errorPlacement: function(error, element)
	            {
	                error.insertAfter(element.parent());
	            }
    	});
    }

	$( "#uipopupbox" ).dialog({
		autoOpen: false,
		width: 400,
		height:400,
		show: 'puff',
		modal: true,
			
		close: function( event, ui ){$("body").css("overflow", "auto");}, 
		open: function(event, ui)
			{    $("body").css("overflow", "hidden"); $(".ui-dialog-titlebar").hide();

				var _url = $('#uipopupboxlink').text()+'?ajax';
				$('#uipopupbox').load(_url,function(data)
					{
						data = (typeof data !== 'undefined') ? data : '';
						$('#uipopupbox').html(data+'<button class="ui_button_close close" id="ui_button_close" onclick="$('+"'#uipopupbox'"+').dialog('+"'close'"+');"><i class="fa fa-times"></i></button>');						
					}
				);
				jQuery('.ui-widget-overlay,button#ui_button_close').bind('click',function(){
                   jQuery('#uipopupbox').dialog('close');
                 })
			}
	});

	if($('#subscriber_form').length>0){$('#subscriber_form').validate();}
    
    // if($('#advance_search_popup').length>0){
    //    $('#advance_search_popup').hide();
    // }

    // $('a.advance_search').on('click',function(){
    // 	 $('#advance_search_popup').removeClass('hide').slideDown('slow'); 
    // })

    // $('#advance_search_popup').find('a.close').on('click',function(){
    // 	 $('#advance_search_popup').slideUp('slow').addClass('hide').hide('slow'); 
    // })

    

});

function checkLoginJsFormSubmit(_this,_href)
{  
	target = typeof target !== 'undefined' ? target : "";  
	if($('#loginstatus').val() !='1')
	{   $('#uipopupboxlink').text(_href);
		if (_href && _href!='#' && _href.substr(0, 1) != '#' && _href.length > 1)
			$( "#uipopupbox" ).dialog( "open" );
		else
			$( "#uipopupbox" ).dialog( "open" );
	}
	else
	{  var id =  _this.getAttribute("data-cat_id");
		$("#hidden_job_category_id").val(id);
		$("#searchMyForm").submit();
	}
}

function newCheckLoginJsFormSubmit(_this,_href)
{  
	// target = typeof target !== 'undefined' ? target : "";  
	// if($('#loginstatus').val() !='1')
	// {   Overlay.show("login_hidden_block", {
	// 		containerClass:"slide-down"
	// 		});
 //             return false;
	// }
	// else
	// {  var id =  _this.getAttribute("data-cat_id");
	// 	$("#hidden_job_category_id").val(id);
	// 	$("#searchMyForm").submit();
	// }
	var id =  _this.getAttribute("data-cat_id");
		$("#hidden_job_category_id").val(id);
		$("#searchMyForm").submit();
}

function show_login_popup()
{
	jQuery.fancybox({
		hideOnOverlayClick:false,
		hideOnContentClick:false,
		titleShow : false,
		autoDimensions: false,
		overlayOpacity: 0.6,
		'type': 'iframe',
		'href': $('#uipopupboxlink').text()+'?ajax'
     });
}

function checkLoginJs(_this,_href,target)
{  
	target = typeof target !== 'undefined' ? target : "";  
	if($('#loginstatus').val() !='1')
	{
		$('#uipopupboxlink').text(_href);
		if (_href && _href!='#' && _href.substr(0, 1) != '#' && _href.length > 1) 
			$( "#uipopupbox" ).dialog( "open" );//show_login_popup();
		else $( "#uipopupbox" ).dialog( "open" );//show_login_popup();
	}
	else
	{
		if(target!="")
			jQuery.anchorClickTarget(_href);
		else
			window.location.href=_href;
	}
}

function showInPopupJs(_this,_href,target)
{  
	target = typeof target !== 'undefined' ? target : "";  
		$('#uipopupboxlink').text(_href);
		if (_href && _href!='#' && _href.substr(0, 1) != '#' && _href.length > 1)
			$( "#uipopupbox" ).dialog( "open" );
		else
			$( "#uipopupbox" ).dialog( "open" );	
}

jQuery.anchorClick = function(url){	
	//url and data options required
	if( url ){ 
		//send request
		jQuery('<a href="'+ url +'">Click It</a>')
		.appendTo('body').click().remove();
	};
};

jQuery.anchorClickTarget = function(url){
	//url and data options required
	if( url ){ 
		//send request
		jQuery('<a target="_blank" href="'+ url +'">Click It</a>')
		.appendTo('body').click().remove();
	};
};

//'ajaxs/acc_con'


function setCookie(c_name,value,exdays)
{
var exdate=new Date();
exdate.setDate(exdate.getDate() + exdays);
var c_value=escape(value) + ((exdays==null) ? "" : "; expires="+exdate.toUTCString());
document.cookie=c_name + "=" + c_value;
}

function getCookie(c_name)
{
var c_value = document.cookie;
var c_start = c_value.indexOf(" " + c_name + "=");
if (c_start == -1)
  {
  c_start = c_value.indexOf(c_name + "=");
  }
if (c_start == -1)
  {
  c_value = null;
  }
else
  {
  c_start = c_value.indexOf("=", c_start) + 1;
  var c_end = c_value.indexOf(";", c_start);
  if (c_end == -1)
  {
c_end = c_value.length;
}
c_value = unescape(c_value.substring(c_start,c_end));
}
return c_value;
}
function del_cookie(name) {
document.cookie = name +
'=; expires=Thu, 01-Jan-70 00:00:01 GMT;';
} 