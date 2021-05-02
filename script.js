const container = document.querySelector(".container");
const input = document.getElementById("input");
let array=[];
let card;

window.onload = function(){
    alert("Stay Safe, Stay at Home.");}

input.addEventListener("keyup", (e) => {
    const ftar = e.target.value.toLowerCase();
   const filtered = array.filter(
        (value) => {
           
            return (
                value.Province.toLowerCase().includes(ftar)
            );            
        }
        );

        
        const str = filtered.map ((filtered) => {
            
                return `<div class="card"><div class="state">State</div><div class="state-name">${filtered.Province}</div><div class="confirmed">Confirmed</div><div class="confirmed-cases">${filtered.Confirmed}</div><div class="active">Active</div><div class="active-cases">${filtered.Active}</div><div class="death">Deaths</div><div class="death-count">${filtered.Deaths}</div></div>`;
        })
        .join('');
        container.innerHTML=str;
        
        
});


fetch("https://api.covid19api.com/live/country/india/status/confirmed/date/2021-05-01")
  .then((data) => {
    return data.text();
  })
  .then((result) => {
     array = JSON.parse(result);
    array.forEach(ele => { 
        card = document.createElement("div");
        card.classList.add("card");
        card.innerHTML = `<div class="state">State</div><div class="state-name">${ele.Province}</div><div class="confirmed">Confirmed</div><div class="confirmed-cases">${ele.Confirmed}</div><div class="active">Active</div><div class="active-cases">${ele.Active}</div><div class="death">Deaths</div><div class="death-count">${ele.Deaths}</div>`;
    
       container.appendChild(card);
      
    });
    });

