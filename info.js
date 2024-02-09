//Dataset Borough Code:
//Q Queens
//B Brooklyn
//M Manhattan
//X Bronx
//S Staten Island

function cardfront(data0){
  let build = '';

  build += `<h3 class='cardWord' style='font-size:18px;'>On: ${data0.onstreetname}</h3>`;
  build += `<h4 class='cardWord' style='font-size:16.5px;'>From: ${data0.fromstreetname}</h4>`;
  if(data0.borough_code == 'Q'){
    build += "<h5 class='cardWord'>Queens</h5>";
  } else if(data0.borough_code == 'B'){
    build += "<h5 class='cardWord'>Brooklyn</h5>";
  } else if(data0.borough_code == 'M'){
    build += "<h5 class='cardWord'>Manhattan</h5>";
  } else if(data0.borough_code == 'X'){
    build += "<h5 class='cardWord'>Bronx</h5>";
  } else if(data0.borough_code == 'S'){
    build += "<h5 class='cardWord'>Staten Island</h5>";
  } else{
    build += "<h5 class='cardWord'>N/A</h5>";
  }
  build += `<h5 class='cardWord'>Reason: ${data0.purpose}</h5>`;
  
  return build;
}

function cardback(data1){
  let build = '';

  build += `<h4 class='cardWord'>Start: ${data1.work_start_date}</h4>`;
  build += `<h4 class='cardWord'>End: ${data1.work_end_date}</h4>`;
  build += `<br>`;
  build += `<p class='cardWord'>id: ${data1.nodeid}</p>`;
  
  return build;
}

function cards(data2){
  document.getElementById('output').innerHTML = '';
  for(let i = 0; i < data2.length; i++){
    let d = data2[i];
    let flippy = new FlipCard(cardfront(d), cardback(d));
    flippy.render('output');
  }
}