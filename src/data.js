

const data_fc = {
    _name : "db_nm",
    _data : "void",
    isOpen: false,

    open : function(){
        let aux = localStorage.getItem(this._name);
        this._data = ( aux != null ) ? aux.split('$').filter(Boolean) : []; 
        this.isOpen = true;
    },

    _save : function() {
        localStorage.setItem(this._name,this._data.join("$"));
    },

    _remove : function(){
        localStorage.removeItem(this._name); 
    },

    insert : function(stringData) {
        this._data.push(stringData);
        this._save();
        return true;
    },

    update : function(dataArray,row_id) {
        if ( this._data[row_id].length != 0 ) {
             this._data[row_id] = dataArray;
             this._save()
             return true;
        }
        return false;
    },

    select : function(row_id){
        return this._data[row_id];
    },

    remove : function(table_id) {
        if (this._data.length > 1 ) {
            this._data[table_id] = "";
            this._data = this._data.filter(Boolean);
            this._save()
            return true;
        }else {
            this._data = []
            this._remove();
            return true;
        }
    }
}
