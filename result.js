//Note to self: Needs script.js to work

let selection = "<div id='changeType'>  <select id='type'>    <option value='pie'>Pie</option>    <option value='donut'>Donut</option>    <option value='gauge'>Gauge</option>    <option value='bar'>Bar</option>  </select>  <input type='button' id='searchbutton' class='press' value='Show Graphs'></div>"

function initv2(){
  let array = init(1);

  console.log(array);
  
  let build = '';
  let key = sessionStorage.getItem('key');
  let main = document.getElementsByTagName("main");

  if(key == 'purpose'){
    build += "<div id='top'><h2>Purpose</h2></div>";
    build += selection;
    build += "<div id='output'>";
    build += "  <h3 style='text-align:center;font-family:Arial;'>Click on &quot;Show Graphs&quot; to see Graphs</h3>";
    build += "</div>";
    build += "<div id='coll'>"
    build += "<div>"
    
    main[0].innerHTML = build;
    document.getElementById('searchbutton').onclick = function(){ purposeChart(array) };
  } else if(key == 'borough_code'){
    build += "<div id='top'><h2>Borough</h2></div>";
    build += selection;
    build += "<div id='output'>";
    build += "  <h3 style='text-align:center;font-family:Arial;'>Click on &quot;Show Graphs&quot; to see Graphs</h3>";
    build += "</div>";
    build += "<div id='coll'>"
    build += "<div>"
    
    main[0].innerHTML = build;
    document.getElementById('searchbutton').onclick = function(){ boroughChart(array) };
  } else{
    build += "<div id='top'><h2>Not Found</h2></div>";
    build += "<div style='text-align:center;'><h3>Please Click on &quot;Back&quot; and Try Again</h3></div>";
  }
}

// -------------------------- Processors -----------------------------

function boroughChart(data){
  let ar = [];
  let Qloc = '', Bloc = '', Mloc = '', Xloc = '', Sloc = '';
  let col;
  let Q = 0, B = 0, M = 0, X = 0, S = 0, U = 0;

  for( let i = 0; i < data.length; i++ ){
    if ( data[i].borough_code == "Q" ) {
      Q ++;
      Qloc += `<div class='collapsing'>  <h5>On: ${data[i].onstreetname}</h5>  <h5>From: ${data[i].fromstreetname}</h5>  <p>ID: ${data[i].nodeid}</p>  </div>`;
    } else if ( data[i].borough_code == "B" ) {
      B ++;
      Bloc += `<div class='collapsing'>  <h5>On: ${data[i].onstreetname}</h5>  <h5>From: ${data[i].fromstreetname}</h5>  <p>ID: ${data[i].nodeid}</p>  </div>`;
    } else if ( data[i].borough_code == "M" ) {
      M ++;
      Mloc += `<div class='collapsing'>  <h5>On: ${data[i].onstreetname}</h5>  <h5>From: ${data[i].fromstreetname}</h5>  <p>ID: ${data[i].nodeid}</p>  </div>`;
    } else if ( data[i].borough_code == "X" ) {
      X ++;
      Xloc += `<div class='collapsing'>  <h5>On: ${data[i].onstreetname}</h5>  <h5>From: ${data[i].fromstreetname}</h5>  <p>ID: ${data[i].nodeid}</p>  </div>`;
    } else if ( data[i].borough_code == "S" ) {
      S ++;
      Sloc += `<div class='collapsing'>  <h5>On: ${data[i].onstreetname}</h5>  <h5>From: ${data[i].fromstreetname}</h5>  <p>ID: ${data[i].nodeid}</p>  </div>`;
    } else {
      U ++;
    }
  }

  if(U == 0){
    ar = [
      ['Queens', Q],
      ['Brooklyn', B],
      ['Manhattan', M],
      ['Bronx', X],
      ['Staten Island', S]
    ];
  } else {
    ar = [
      ['Queens', Q],
      ['Brooklyn', B],
      ['Manhattan', M],
      ['Bronx', X],
      ['Staten Island', S],
      ['Unknown', U]
    ];
  }

  colAr = [
      ['Queens', Qloc],
      ['Brooklyn', Bloc],
      ['Manhattan', Mloc],
      ['Bronx', Xloc],
      ['Staten Island', Sloc]
    ];
  
  let type = document.getElementById("type").value;
  
  displayChart(ar, "output", type);
  
  document.getElementById('coll').innerHTML = "<h3 style='font-family:Arial; text-align:center; text-decoration:underline;'>More Information</h3>";
  for(let i = 0; i < colAr.length; i++){
    col = new Collapsible(colAr[i][0], colAr[i][1]);
    col.render('coll');
  }
}

function purposeChart(data){
  let ar = [];
  let CRMloc = "", CRMPloc = "", CRPloc = "", DDCCMRloc = "", DDCCMRPloc = "", DEPCMISloc = "", DEPCMIWloc = "", DOTIHMloc = "", DOTIHPloc = "", MIGloc = "", MIGPloc = "", MTloc = "", OORASloc = "", OOSASloc = "", PSWEIFPloc = "", PCOSOSloc = "", PEOTCOSloc = "", PMOSloc = "", RTCAloc = "", RTCAPloc = "", TPWloc = "";
  let col;
  let CRM = 0, CRMP = 0, CRP = 0, DDCCMR = 0, DDCCMRP = 0, DEPCMIS = 0, DEPCMIW = 0, DOTIHM = 0, DOTIHP = 0, MIG = 0, MIGP = 0, MT = 0, OORAS = 0, OOSAS = 0, PSWEIFP = 0, PCOSOS = 0, PEOTCOS = 0, PMOS = 0, RTCA = 0, RTCAP = 0, TPW = 0, U = 0;
  let list = sorting('purpose', 0);

  for( let i = 0; i < data.length; i++ ){
    if ( data[i].purpose == list[0] ) {
      CRM ++;
      CRMloc += `<div class='collapsing'>  <h5>On: ${data[i].onstreetname}</h5>  <h5>From: ${data[i].fromstreetname}</h5>  <p>ID: ${data[i].nodeid}</p>  </div>`;
    } else if ( data[i].purpose == list[1] ) {
      CRMP ++;
      CRMPloc += `<div class='collapsing'>  <h5>On: ${data[i].onstreetname}</h5>  <h5>From: ${data[i].fromstreetname}</h5>  <p>ID: ${data[i].nodeid}</p>  </div>`;
    } else if ( data[i].purpose == list[2] ) {
      CRP ++;
      CRPloc += `<div class='collapsing'>  <h5>On: ${data[i].onstreetname}</h5>  <h5>From: ${data[i].fromstreetname}</h5>  <p>ID: ${data[i].nodeid}</p>  </div>`;
    } else if ( data[i].purpose == list[3] ) {
      DDCCMR ++;
      DDCCMRloc += `<div class='collapsing'>  <h5>On: ${data[i].onstreetname}</h5>  <h5>From: ${data[i].fromstreetname}</h5>  <p>ID: ${data[i].nodeid}</p>  </div>`;
    } else if ( data[i].purpose == list[4] ) {
      DDCCMRP ++;
      DDCCMRPloc += `<div class='collapsing'>  <h5>On: ${data[i].onstreetname}</h5>  <h5>From: ${data[i].fromstreetname}</h5>  <p>ID: ${data[i].nodeid}</p>  </div>`;
    } else if ( data[i].purpose == list[5] ) {
      DEPCMIS ++;
      DEPCMISloc += `<div class='collapsing'>  <h5>On: ${data[i].onstreetname}</h5>  <h5>From: ${data[i].fromstreetname}</h5>  <p>ID: ${data[i].nodeid}</p>  </div>`;
    } else if ( data[i].purpose == list[6] ) {
      DEPCMIW ++;
      DEPCMIWloc += `<div class='collapsing'>  <h5>On: ${data[i].onstreetname}</h5>  <h5>From: ${data[i].fromstreetname}</h5>  <p>ID: ${data[i].nodeid}</p>  </div>`;
    } else if ( data[i].purpose == list[7] ) {
      DOTIHM ++;
      DOTIHMloc += `<div class='collapsing'>  <h5>On: ${data[i].onstreetname}</h5>  <h5>From: ${data[i].fromstreetname}</h5>  <p>ID: ${data[i].nodeid}</p>  </div>`;
    } else if ( data[i].purpose == list[8] ) {
      DOTIHP ++;
      DOTIHPloc += `<div class='collapsing'>  <h5>On: ${data[i].onstreetname}</h5>  <h5>From: ${data[i].fromstreetname}</h5>  <p>ID: ${data[i].nodeid}</p>  </div>`;
    } else if ( data[i].purpose == list[9] ) {
      MIG ++;
      MIGloc += `<div class='collapsing'>  <h5>On: ${data[i].onstreetname}</h5>  <h5>From: ${data[i].fromstreetname}</h5>  <p>ID: ${data[i].nodeid}</p>  </div>`;
    } else if ( data[i].purpose == list[10] ) {
      MIGP ++;
      MIGPloc += `<div class='collapsing'>  <h5>On: ${data[i].onstreetname}</h5>  <h5>From: ${data[i].fromstreetname}</h5>  <p>ID: ${data[i].nodeid}</p>  </div>`;
    } else if ( data[i].purpose == list[11] ) {
      MT ++;
      MTloc += `<div class='collapsing'>  <h5>On: ${data[i].onstreetname}</h5>  <h5>From: ${data[i].fromstreetname}</h5>  <p>ID: ${data[i].nodeid}</p>  </div>`;
    } else if ( data[i].purpose == list[12] ) {
      OORAS ++;
      OORASloc += `<div class='collapsing'>  <h5>On: ${data[i].onstreetname}</h5>  <h5>From: ${data[i].fromstreetname}</h5>  <p>ID: ${data[i].nodeid}</p>  </div>`;
    } else if ( data[i].purpose == list[13] ) {
      OOSAS ++;
      OOSASloc += `<div class='collapsing'>  <h5>On: ${data[i].onstreetname}</h5>  <h5>From: ${data[i].fromstreetname}</h5>  <p>ID: ${data[i].nodeid}</p>  </div>`;
    } else if ( data[i].purpose == list[14] ) {
      PSWEIFP ++;
      PSWEIFPloc += `<div class='collapsing'>  <h5>On: ${data[i].onstreetname}</h5>  <h5>From: ${data[i].fromstreetname}</h5>  <p>ID: ${data[i].nodeid}</p>  </div>`;
    } else if ( data[i].purpose == list[15] ) {
      PCOSOS ++;
      PCOSOSloc += `<div class='collapsing'>  <h5>On: ${data[i].onstreetname}</h5>  <h5>From: ${data[i].fromstreetname}</h5>  <p>ID: ${data[i].nodeid}</p>  </div>`;
    } else if ( data[i].purpose == list[16] ) {
      PEOTCOS ++;
      PEOTCOSloc += `<div class='collapsing'>  <h5>On: ${data[i].onstreetname}</h5>  <h5>From: ${data[i].fromstreetname}</h5>  <p>ID: ${data[i].nodeid}</p>  </div>`;
    } else if ( data[i].purpose == list[17] ) {
      PMOS ++;
      PMOSloc += `<div class='collapsing'>  <h5>On: ${data[i].onstreetname}</h5>  <h5>From: ${data[i].fromstreetname}</h5>  <p>ID: ${data[i].nodeid}</p>  </div>`;
    } else if ( data[i].purpose == list[18] ) {
      RTCA ++;
      RTCAloc += `<div class='collapsing'>  <h5>On: ${data[i].onstreetname}</h5>  <h5>From: ${data[i].fromstreetname}</h5>  <p>ID: ${data[i].nodeid}</p>  </div>`;
    } else if ( data[i].purpose == list[19] ) {
      RTCAP ++;
      RTCAPloc += `<div class='collapsing'>  <h5>On: ${data[i].onstreetname}</h5>  <h5>From: ${data[i].fromstreetname}</h5>  <p>ID: ${data[i].nodeid}</p>  </div>`;
    } else if ( data[i].purpose == list[20] ) {
      TPW ++;
      TPWloc += `<div class='collapsing'>  <h5>On: ${data[i].onstreetname}</h5>  <h5>From: ${data[i].fromstreetname}</h5>  <p>ID: ${data[i].nodeid}</p>  </div>`;
    } else {
      U ++;
    }
  }
  
  if(U == 0){
    ar = [
      [list[0], CRM],
      [list[1], CRMP],
      [list[2], CRP],
      [list[3], DDCCMR],
      [list[4], DDCCMRP],
      [list[5], DEPCMIS],
      [list[6], DEPCMIW],
      [list[7], DOTIHM],
      [list[8], DOTIHP],
      [list[9], MIG],
      [list[10], MIGP],
      [list[11], MT],
      [list[12], OORAS],
      [list[13], OOSAS],
      [list[14], PSWEIFP],
      [list[15], PCOSOS],
      [list[16], PEOTCOS],
      [list[17], PMOS],
      [list[18], RTCA],
      [list[19], RTCAP],
      [list[20], TPW],
    ];
  } else {
    ar = [
      [list[0], CRM],
      [list[1], CRMP],
      [list[2], CRP],
      [list[3], DDCCMR],
      [list[4], DDCCMRP],
      [list[5], DEPCMIS],
      [list[6], DEPCMIW],
      [list[7], DOTIHM],
      [list[8], DOTIHP],
      [list[9], MIG],
      [list[10], MIGP],
      [list[11], MT],
      [list[12], OORAS],
      [list[13], OOSAS],
      [list[14], PSWEIFP],
      [list[15], PCOSOS],
      [list[16], PEOTCOS],
      [list[17], PMOS],
      [list[18], RTCA],
      [list[19], RTCAP],
      [list[20], TPW],
      ['Unknown', U]
    ];
  }

  colAr = [
      [list[0], CRMloc],
      [list[1], CRMPloc],
      [list[2], CRPloc],
      [list[3], DDCCMRloc],
      [list[4], DDCCMRPloc],
      [list[5], DEPCMISloc],
      [list[6], DEPCMIWloc],
      [list[7], DOTIHMloc],
      [list[8], DOTIHPloc],
      [list[9], MIGloc],
      [list[10], MIGPloc],
      [list[11], MTloc],
      [list[12], OORASloc],
      [list[13], OOSASloc],
      [list[14], PSWEIFPloc],
      [list[15], PCOSOSloc],
      [list[16], PEOTCOSloc],
      [list[17], PMOSloc],
      [list[18], RTCAloc],
      [list[19], RTCAPloc],
      [list[20], TPWloc]
    ];
  
  let type = document.getElementById("type").value;
  
  displayChart(ar, "output", type);

  document.getElementById('coll').innerHTML = "<h3 style='font-family:Arial; text-align:center; text-decoration:underline;'>More Information</h3>";
  for(let i = 0; i < colAr.length; i++){
    col = new Collapsible(colAr[i][0], colAr[i][1]);
    col.render('coll');
  }
}