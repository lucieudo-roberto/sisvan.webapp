
var W1_FORM_GLOBAL_ROW_ID = "inserting"

function clea_form() {
    page_fc.clea_form();
    W1_FORM_GLOBAL_ROW_ID = "inserting";
}

function save_data() {
    let form_data = page_fc.get_data_form();
    data_fc.open();

    if ( W1_FORM_GLOBAL_ROW_ID == "inserting" ) {    
        data_fc.insert(form_data)
        alert("salvo")
        clea_form()
    }else {
        let data_to_cmp_1 = form_data.split('|');
        let data_to_cmp_2 = data_fc.select(W1_FORM_GLOBAL_ROW_ID).split('|');
        
        data_to_cmp_1[0]= 1 // romove register data
        data_to_cmp_2[0]= 1
        if (data_to_cmp_2.join() == data_to_cmp_1.join()) {
            alert("nada alterado")
            return;
        }else{
           data_fc.update(form_data,W1_FORM_GLOBAL_ROW_ID);
           clea_form()
           alert("modificado")
           W1_FORM_GLOBAL_ROW_ID = "inserting"
           return;
        }
    }
}

function modify_w1(id) {
    W1_FORM_GLOBAL_ROW_ID = id;
    page_fc.set_data_form(id);
    page_fc.tab_change(0);
}

function delete_w1(id) {
    data_fc.remove(id);
    page_fc.list_form1();
}

function ls_f1() { page_fc.list_form1() }
