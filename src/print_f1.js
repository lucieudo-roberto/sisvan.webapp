

let header = '<br><h1>Planilha do SISVAN vitamina A,Sulfato e AIDPI comunitário</h1><h2>Agente:______________________________________________&nbsp;&nbsp;&nbsp;&nbsp; Pólo Base: __________________________________</h2><h3>Data ___/___/____</h3><div class="t-head"><div class="t-box t-box0"></div><div class="t-box t-box1">dados da criança</div><div class="t-box t-box2">benefícios</div><div class="t-box t-box3"></div><div class="t-box t-box4">aleitamento materno</div><div class="t-box t-box5">vitaminas</div></div><header><div class="h-box"><i class="h-txt-n">data</i></div><div class="h-box"><i class="h-txt-n">aldeia</i></div><div class="h-box"><i class="h-txt-n">nome</i></div><div class="h-box"><i class="h-txt-r">sexo m/f</i></div><div class="h-box"><i class="h-txt-r">data de nascimento</i></div><div class="h-box"><i class="h-txt-r h-txt-age">idade</i><div id="age-box"><div class="age-txt">A</div><div class="age-txt">M</div></div></div><div class="h-box"><i class="h-txt-r">peso</i></div><div class="h-box"><i class="h-txt-r">altura</i></div><div class="h-box"><i class="h-txt-r">bolsa família</i></div><div class="h-box"><i class="h-txt-r">cestas de alimentos</i></div><div class="h-box"><i class="h-txt-r">leite não humano</i></div><div class="h-box"><i class="h-txt-r">outros benefícios</i></div><div class="h-box"><i class="h-txt-r">não recebe benefícios sociais</i></div><div class="h-box"><i class="h-txt-r">sem informações</i></div><div class="h-box"><i class="h-txt-r">estado nutricional</i></div><div class="h-box"><i class="h-txt-r">exclusivo</i></div><div class="h-box"><i class="h-txt-r">predominante</i></div><div class="h-box"><i class="h-txt-r">alimentação complementar</i></div><div class="h-box"><i class="h-txt-r">não recebe leite materno</i></div><div class="h-box"><i class="h-txt-r">sem informação</i></div><div class="h-box"><i class="h-txt-r">vitamina A (data)</i></div><div class="h-box"><i class="h-txt-r">sulfato ferroso (doses)</i></div><div class="h-box"><i class="h-txt-r">AIDPI comunitário</i></div></header><main class="t-body"></main>';


window.onload = function(){

	let page = document.getElementById("t-page") // whole page to set data to print
    data_fc.open()  // open data base ( copy from localStorage to array in data_fc)
    let rows_len = data_fc._data.length; // calculate max rows 
    
    let pages = 0;           // pages number
    let page_limit = 38      // rows per page
    let page_limit_count = 0 // rows counts,;; dont change this value

    page.innerHTML += header;
    
    let body = document.querySelectorAll(".t-body");
    
 
    for (let x=0; x<rows_len; x++) {
          let t = data_fc._data[x].split("|");
          body[pages].innerHTML += `
                    <i class='row'>
                    	  <i class='txt'>${t[0]}</i>
                        <i class='txt'>${t[1]}</i><i class='txt'>${t[2]}</i>
                        <i class='txt'>${(t[10] == "X") ? "M" : "F"}</i>
                        <i class='txt'>${page_fc.dateConvert(t[3])}</i>
                        <i class='txt'>${page_fc.dateCalc(t[0],t[3])}</i>
                        <i class='txt'>${t[4]}</i><i class='txt'>${t[5]}</i>
                            
                        <i class='txt'>${t[11]}</i><i class='txt'>${t[12]}</i>
                        <i class='txt'>${t[13]}</i><i class='txt'>${t[14]}</i>
                        <i class='txt'>${t[15]}</i><i class='txt'>${t[16]}</i>
                            
                        <i class='txt'>${t[6]}</i>
                        <i class='txt'>${t[17]}</i><i class='txt'>${t[18]}</i>
                        <i class='txt'>${t[19]}</i><i class='txt'>${t[20]}</i>
                        <i class='txt'>${t[21]}</i>
                        <i class='txt'>${page_fc.dateConvert(t[7])}</i>
                        <i class='txt'>${t[8]}</i><i class='txt'>${t[9]}</i>
                    </i>`
        page_limit_count +=1;
      
        if ( page_limit_count == page_limit ) {
          pages += 1;
          page.innerHTML += "<br>"
          page.innerHTML += header; page_limit_count = 0;
          body = document.querySelectorAll(".t-body"); 
        }
    }

    window.print();

    window.onafterprint = ()=>{
      alert("ola")
    }
}