
const page_fc = {
    $q : (nm) =>{ return document.querySelectorAll(nm)},
    
    tab_change : function(tabID,callback) {
        let tabs = this.$q(".tab-bnt");
        let scrs = this.$q(".windows");
        
        tabs.forEach((tab)=>{
            tab.style.backgroundColor="#147ca0"
            tab.style.color="#fff"
        })
        
        scrs.forEach((wind)=>{wind.style.display="none"})
        scrs[tabID].style.display = "block";
        tabs[tabID].style.backgroundColor = "#f4f4f4";
        tabs[tabID].style.color= "#708090";
        
        try {callback()} catch{return;}
    },
    
    get_data_form : function() {
        let in_txt = this.$q(".inp-txt");
        let in_chk = this.$q(".inp-chk");
        let output = []
        let acdate = new Date().toLocaleDateString();
        output.push(acdate)
        
        in_txt.forEach((x)=> { output.push(x.value) });
        in_chk.forEach((x)=> {
            let aux = (x.checked == true ) ? "X" : " ";
            output.push(aux);
        });
        return output.join('|');
    },
    
    set_data_form : function(row_id) {
        let in_txt = this.$q(".inp-txt");
        let in_chk = this.$q(".inp-chk");
        let data = data_fc.select(row_id).split('|');

        for (let a=0,x=1; x<10; a++,x++){in_txt[a].value = data[x]};
        
        for (let a=0,x=10; x<22; a++,x++) {
            in_chk[a].checked = (data[x] == "X" ) ? true : false;
        }
    },

    clea_form : function() {
        let in_txt = this.$q(".inp-txt");
        let in_chk = this.$q(".inp-chk");
        
        in_txt.forEach((d)=> d.value = "");
        in_chk.forEach((d)=> d.checked = false);
        in_chk[0].checked = true;
    },

    list_form1 : function (){
        let out_window = this.$q(".w2-box1")[0];
        data_fc.open();
        let data = data_fc._data;
        let outstr = "";
        
        for ( let x = data.length; x > 0; x-- ) {
            let tmp = data[x-1].split("|");
            outstr += `
            <div class="w2-box1-card">
                <div class="w2-box1-card-grid2"><i>cadastrado: ${tmp[0]}</i><i> índice: #${x}</i></div>
                <div class="w2-box1-card-grid"><i>vila: ${tmp[1]}</i><br><i>nome: ${tmp[2]}</i></div>
                <div class="w2-box1-card-grid2"><i>peso: ${tmp[4]} </i><i>altura: ${tmp[5]}</i></div>
                <div class"w2-box1-card-bnt-box">
                    <button onclick="modify_w1(${x-1})"class="w2-box1-card-bnt">editar</button>
                    <button onclick="delete_w1(${x-1})"class="w2-box1-card-bnt">apagar</button>
                </div>
            </div>`;
        }
        out_window.innerHTML = outstr;
    },

    dateCalc : function(dateA,dateB) {
        if (dateA.length > 3 && dateB.length > 3 ) {
            let actual_date = dateA.split('/');
            let birthd_date = this.dateConvert(dateB).split('/');    
            let year = (parseInt(actual_date[2]) - parseInt(birthd_date[2]));
            let mont = (parseInt(actual_date[1]) - parseInt(birthd_date[1]));
            return `${year}A, ${mont}M`;
        }
        return '';
    },

    dateConvert : function(date) {          
        if (date.length > 4 ) {
            let date_ = date.split('-');
            return `${date_[2]}/${date_[1]}/${date_[0]}`;
        }

        return '';
    }
}
