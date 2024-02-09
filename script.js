//For Future Reference
//
//sessionStorage.setItem('label', 'value');  Sets a Variable
//sessionStorage.getItem('label');           Gets the Value of the Variable
//sessionStorage.removeItem('label');        Removes the Variable
//sessionStorage.clear('label');             Removes all Variables

//Dataset Borough Code:
//Q Queens
//B Brooklyn
//M Manhattan
//X Bronx
//S Staten Island
//
//https://data.cityofnewyork.us/Transportation/Street-Closures-due-to-construction-activities-by-/478a-yykk

let link, data;

function init(option){
  $.ajaxSetup({async: false});
  let link = "https://data.cityofnewyork.us/resource/478a-yykk.json";
  data = $.getJSON(link).responseJSON;

  if(option == 1){
    return data;
  } else{
    console.log(data);
    cards(data);
  }
}

function search(){
  let query = document.getElementById('searchbar').value;
  let selection = document.getElementById('selection').value;
  let coun = document.getElementById('count');
  let subdata=[];

  coun.innerHTML = '';
  

  if(query == '' || query == ' ' || query == '  ' || query == '   ' || query == '    '){
    document.getElementById('count').innerHTML = '';
    cards(data);
  } else if(selection == 'disabled'){
    alert('Please Select A Type');
  } else if(selection == 'street_name'){
    subdata = filter(data, 'onstreetname', query.toUpperCase().replace(/\s/g, ''));
    if(subdata.length != 0){
      document.getElementById('count').innerHTML = '';
      coun.innerHTML = `<p style='color:green;text-align:center;'>${subdata.length} Results</p>`;
      cards(subdata);
    } else{
      document.getElementById('count').innerHTML = `<p style='color:red;text-align:center;'>Nothing found. Check for Typos</p>`;
    }
  } else if(selection == 'borough_code'){
    let q = query.toLowerCase();
    if(q == 'queens'){
      subdata = filter(data, 'borough_code', 'Q');
      coun.innerHTML = `<p style='color:green;text-align:center;'>${subdata.length} Results</p>`;
    } else if(q == 'brooklyn'){
      subdata = filter(data, 'borough_code', 'B');
      coun.innerHTML = `<p style='color:green;text-align:center;'>${subdata.length} Results</p>`;
    } else if(q == 'manhattan'){
      subdata = filter(data, 'borough_code', 'M');
      coun.innerHTML = `<p style='color:green;text-align:center;'>${subdata.length} Results</p>`;
    } else if(q == 'bronx'){
      subdata = filter(data, 'borough_code', 'X');
      coun.innerHTML = `<p style='color:green;text-align:center;'>${subdata.length} Results</p>`;
    } else if(q == 'staten island'){
      subdata = filter(data, 'borough_code', 'S');
      coun.innerHTML = `<p style='color:green;text-align:center;'>${subdata.length} Results</p>`;
    } else{
      subdata = [];
      coun.innerHTML = `<p style='color:red;text-align:center;'>Nothing found. Check for Typos</p>`;
    }
    if(subdata.length != 0){
      cards(subdata);
    } else{
      document.getElementById('count').innerHTML = `<p style='color:red;text-align:center;'>Nothing found. Check for Typos</p>`;
    }
  }
}

// ---------------------- EXTRA QUALITY OF LIFE FUNCTIONS ------------------------

function filter(information, key, v){
  let list = [];
  for( let i = 0; i < information.length; i++ ){
    let js = information[i];
    if(js[key].replace(/\s/g, '').includes(v)){
      list.push(js);
    }
  }
  return list;
}

function displayChart( data, id, type ){
  let chart = c3.generate({
    bindto: '#' + id,
    data: {
      columns: data,
      type:type
    }
  });
}

function sorting(key, o){
  let list = [];
  let build = ""
  for(let i = 0; i < data.length; i++){
    let data_field = data[i];
    if(!list.includes(data_field[key])){
      list.push(data_field[key]);
    }
  }
  list.sort();
  if( o == 1 ){
    list.pop();
  }
  
  return list;
}