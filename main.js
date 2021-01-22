for (var i = 1; i < 21; i++) {
    el = document.createElement('li');
        el.innerHTML = i;
        document.getElementById('MyUl').appendChild(el);
    }
    var poz = document.getElementById('space');
    tab = document.createElement('table');
    poz.appendChild(tab);
    
    tab.border = '5';
    
    for (var i = 0; i < 8; i++){
        var row = tab.insertRow(i);
    
        for(var j = 0; j < 8; j++){
            var cell = row.insertCell(j);
    
            if((i+j)%2){cell.style.backgroundColor = 'silver';}
            else{cell.style.backgroundColor = 'black';}
            cell.style.height = '50px';
            cell.style.width = '50px';
            cell.style.color = 'white';
            cell.style.textAlign = 'center';
            
        };
    }