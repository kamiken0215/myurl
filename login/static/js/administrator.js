(function($){
    $('input[id="tab1"]').get(0).prop('checked',true);
    $("#tab1:checked ~ #tab1_content").css({"display":"block" ,"background-color":"aliceblue"});
}(jQuery));

function change_tab(tab_id, tab_dict){
    $(function(){
        var tab_value = document.getElementById(tab_id).value;
        removing_part_tab = tab_value;
        for_change_tab_id = removing_part_tab.replace(/tab/g,'');
        //クリックしたタブを表示
        $(`#${tab_value}:checked ~ #${tab_value}_content`).css(
            {"display":"block" ,"background-color":"aliceblue"});
        //クリックされなかったタブを全て非表示
        delete tab_dict[for_change_tab_id];
        for(key in tab_dict){
            $(`#tab${key}_content`).css
            ("display", "none");
        }
    });
}

function change_status_editable(p_note_editable,p_url_editable,ischecked){
    var note_editable = document.getElementById(p_note_editable);
    var url_editable = document.getElementById(p_url_editable);
    if(ischecked){
        note_editable.setAttribute('contenteditable', true);
        url_editable.setAttribute('contenteditable', true);

    }else{
        note_editable.setAttribute('contenteditable', false);
        url_editable.setAttribute('contenteditable', false);
    }
}