jQuery(document).ready(function($) {
    // only show individual input fields, if needed (selected by id)
    $('select[name=eventtype]').change(function () {
        if ($(this).val() == '14') {
            $('#otherType').show();
            $('#otherType').addClass( "open" );
        } else {
            $('#otherType').hide();
            $('#otherType').removeClass( "open" );
        }
        console.log("done");
    });
    $('select[name=eventtarget]').change(function () {
        if ($(this).val() == '1') {
            $('#otherTypeTG').show();
            $('#otherTypeTG').addClass( "open" );
        } else {
            $('#otherTypeTG').hide();
            $('#otherTypeTG').removeClass( "open" );
        }
        console.log("done");
    });
    $('select[name=event_faculty]').change(function () {
        if ($(this).val() == '13') {
            $('#otherTypeFaculty').show();
            $('#otherTypeFaculty').addClass( "open" );
        } else {
            $('#otherTypeFaculty').hide();
            $('#otherTypeFaculty').removeClass( "open" );
        }
        console.log("done");
    });
    $('select[name=eventtime]').change(function () {
        if ($(this).val() == '3') {
            $('#otherEventTime').show();
            $('#otherEventTime').addClass( "open" );
        } else {
            $('#otherEventTime').hide();
            $('#otherEventTime').removeClass( "open" );
        }
        console.log("done");
    });
    $('select[name=event_institution]').change(function () {
        if ($(this).val() == '6') {
            $('#otherEventInstitution').show();
            $('#otherEventInstitution').addClass( "open" );
        } else {
            $('#otherEventInstitution').hide();
            $('#otherEventInstitution').removeClass( "open" );
        }
        console.log("done");
    });
});