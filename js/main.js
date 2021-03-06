/*  TODO:
 *	highlight date range (look for other datepickers)
 *  checkin + checkout input boxes populated
 *  columns for inputs + datepickers
 *	how will greyed out dates be delivered from php?
 *	min/max date probably won't meet their needs; need individual dates greyed out
 */

$(function() {
	var selected  = null,
		startDate = null,
		endDate	  = null;

		$( "#datepicker" ).datepicker({ 
			minDate: -5, 
			maxDate: 15,
			numberOfMonths: 2,
			altFormat: "DD, d MM, yy",
			beforeShowDay: function(date) {
				if ( startDate <= date && endDate >= date ) {
              	return [true, 'highlighted ui-datepicker-current-day'];
              } else {
              	return [true, ''];
              }
            },
            onSelect: function (dateText, datepicker) {
            	if ( ! startDate && ! endDate ) {
            		startDate = new Date(dateText);
            		$('#checkin').val( $.datepicker.formatDate(datepicker.settings.altFormat, startDate) );
            	} else if ( startDate && ! endDate ) {
            		endDate = new Date(dateText);
            		$('#checkout').val( $.datepicker.formatDate(datepicker.settings.altFormat, endDate) );
            	} else if ( startDate && endDate ) {
            		endDate = null;
            		startDate = new Date(dateText);
            		$('#checkin').val( $.datepicker.formatDate(datepicker.settings.altFormat, startDate) );
            	}
            }
		});

	});