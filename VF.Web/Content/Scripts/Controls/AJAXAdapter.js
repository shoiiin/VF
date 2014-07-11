/*
 * Constants: OVERWRITE_PARAM, APPEND_PARAM
 *  The new parameters will overwrite or will be appended to the existing values 
*/
var OVERWRITE_PARAM = 0;
var APPEND_PARAM = 1;

/*
 * Class: AJAXAdapter
 * Wraps the AJAX functionality of jQuery framework.
*/
function AJAXAdapter() {
    //set up the jQuery AJAX options
    $(document).ajaxError(ajaxErrorHandler);

	var ajaxCallType = "POST";
	var ajaxReturnFormat = "json";
	var requestData = {};
	var errorHandlerFunction = null;
	var cache = false;
	
	this.setAJAXReturnFormat = setAJAXReturnFormat;
	this.setAJAXCallType = setAJAXCallType;
	this.setAJAXCache = setAJAXCache;
	this.setDataFromContainer = setDataFromContainer;
	this.setData = setData;
	this.call = call;

	/*
	 * Property: async
	 * 	Specifies the AJAX call type.
	 *  - true - asynchronuous
	 *  - false - synchronuous
	*/
	this.async = true;

	function ajaxErrorHandler(event, jqXHR, ajaxSettings, thrownError) {
	    var modalWindow = VF.Environment.GetModalWindow();
	    modalWindow.OpenModal(jqXHR.responseText);
//	    alert(jqxhr.responseText);
	}

	/*
	 * Function: setAJAXReturnFormat
	 * 	sets the expected AJAX return format
	 * 
	 * Parameters:
	 * 	ajaxFormat - can be one of the following values: html(default),xml,json
	*/
	function setAJAXReturnFormat(ajaxFormat){
		ajaxReturnFormat = ajaxFormat;
	}
	
	/*
	 * Function: setAJAXCallType
	 * 	sets the expected AJAX call type POST/GET
	 * 
	 * Parameters:
	 * 	ajaxType - can be one of the following values: POST,GET
	*/
	function setAJAXCallType(ajaxType){
		ajaxCallType = ajaxType;
	}
	
	/*
	 * Function: setAJAXCache
	 * 	sets the expected AJAX cache type
	 * 
	 * Parameters:
	 * 	ajaxCache - boolean
	*/
	function setAJAXCache(ajaxCache) {
		cache = ajaxCache;
	}
	
	/*
	 * Function: setErrorHandler
	 * Sets the external error handler function.	
	 * 
	 * Parameters:
	 * 	handler - the error handler function with the following signature
	 * 			  function errorHandler(exception)
	*/
	function setErrorHandler(handler)
	{
		errorHandlerFunction = handler;
	}
	
	
	
	/*
	 * Function: setDataFromContainer
	 * Sets the AJAX call parameters from form fields.	
	 * 
	 * Parameters:
	 * 	container - the container form
	 *  paramOption - can be one of OVERWRITE_PARAM or APPEND_PARAM
	*/
	function setDataFromContainer(container, paramOption)
	{
		try
		{
		    var selector = "#" + containerId + " input:checkbox, #" + containerId + " input:radio, #" + containerId + " input:text, #" + containerId + " input:password, #" + containerId + " input:hidden, #" + containerId + " select, #" + containerId + " textarea";
		    $(selector).each(
			function (i, el) {
			    if (el.id != "") {
			        if ($(el).attr('type') == 'radio') {
			            var checked = $(el).is(':checked');
			            if (checked == true) {
			                requestData[el.id] = $(el).val();
			            }
			        }
			        else {
			            requestData[el.id] = $(el).val();
			        }
			    }
			});
		}
		catch(exception) {
			(errorHandlerFunction)(exception);
		}
	}

	/*
	* Function: setData
	* Sets the AJAX call data.	
	* 
	* Parameters:
	* 	dataObj - data object
	*/
	function setData(dataObj) {
        requestData = dataObj;
	}

	/*
	 * Function: call
	 * Performs the AJAX call.	
	 * 
	 * Parameters:
	 * 	location - AJAX resource location
	 *  callback - callback function when the AJAX operation completes.
	*/
	function call(location, callback, errorCallback)
	{
		try{
			if (errorCallback == null)
				errorCallback = internalErrorCallback;
			// add also the application page GUID
			retVal = $.ajax({
				type: ajaxCallType,
				dataType: ajaxReturnFormat,
				data: requestData,
				url:location,
				cache: cache,
				async: this.async,
				success: callback,
				error: errorCallback
			});
			
		}catch(exception){
			if(!errorHandlerFunction)
				(errorHandlerFunction)(exception);
		}
	}
	
	function internalErrorCallback(jqXHR, textStatus, errorThrown)
	{
		if (jqXHR.status == 402)
		{	
			return false;
		}
	}
	
}