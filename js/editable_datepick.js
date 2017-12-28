$(document).ready( function (){
    costumize_datepick();
})

function build_pickadate(id){
    $('#' + id).pickadate({
        selectMonths: true, // Creates a dropdown to control month
        selectYears: 15, // Creates a dropdown of 15 years to control year,
        today: 'Today',
        clear: 'Clear',
        close: 'Ok',
        closeOnSelect: false, // Close upon selecting a date,
        onSet: function(){
            $('#'+id+'_output').val(document.getElementById(id).value);
        }
    });
}

function costumize_datepick(){
    var datepicks = $('.editable_datepicker');

    for (let index = 0; index < datepicks.length; index++) {
        const datepick = datepicks[index];

        $(datepick).attr('class','datepicker display_none');
        
        var html_inject = "";

        html_inject += '<div class="row">';
        html_inject +=      datepick.outerHTML;
        html_inject +=      '<div class="col s10">';
        html_inject +=          '<input id="'+datepick.id+'_output" type="text">';
        html_inject +=      '</div>';
        html_inject +=      '<div class="col s2">';
        html_inject +=          '<a class="btn" href="javascript:document.getElementById(' + "'" + datepick.id + "'" + ').click()"><i class="material-icons">date_range</i></a>'
        html_inject +=      '</div>';
        html_inject += '</div>';

        datepick.outerHTML = html_inject;

        build_pickadate(datepick.id);
    }
    
}