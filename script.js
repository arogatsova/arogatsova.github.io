(function() {
    "use strict";
    
    //clock

    document.addEventListener("DOMContentLoaded", function() {
        
        var c = document.getElementById("clock");
       
        //setTimeout(updateClock, 2000);
        setInterval(updateClock, 1000);
        
        function updateClock() {
            
            var date = new Date();
            var h = date.getHours();
            var m = date.getMinutes();
            var s = date.getSeconds();

            var ampm = h >= 12 ? 'pm' : 'am';
            h = h % 12;
            h = h ? h : 12; // the hour '0' should be '12'

            if (m < 10) {
                m = "0" + m;
            }

            if (s < 10) {
                s = "0" + s;
            }
           
            c.innerHTML = h + ":" + m + ":" + s + ' ' + ampm;;
            
        };
        
    });
    
    // forms
    
    document.getElementById("form").addEventListener("submit", estimateDelivery);
    
    var e = document.getElementById("delivery");
    e.innerHTML = "0,00 &euro;";

    function num_check(val){ 
            if (val.includes("0123456789")){
                alert("Name hfhff!!!")
                return false;
            }
            else return true;
        }


        
    function estimateDelivery(event) {
        event.preventDefault();
        
        var linn = document.getElementById("linn");
        var fname = document.getElementById("fname");
        var lname = document.getElementById("lname");

        
       
        if ( fname.value === "" || lname.value === "" || linn.value === ""){
            
            alert("Kontrollige kas kõik väljad on täidetud!");
            
            
            return;
        }
            
        
        else if (linn.value == "tln"){e.innerHTML = "0,00 &euro;";}
        else if (linn.value == "trt"){e.innerHTML = "2,50 &euro;";}
        else if (linn.value == "nrv"){e.innerHTML = "2,50 &euro;";}
        else if (linn.value == "prn"){e.innerHTML = "3,00 &euro;";}
        else {
            
            e.innerHTML = "x,xx &euro;";
            
        }        
        
        console.log("Tarne hind on arvutatud");
    }
  
})();

// map

var mapAPIKey = "AqLLRE37SJGqIxXEYxezPUa6fF2oCzl3cvG4n05FtFIVBrotBYxchpMYYpwuxBak";

var map;

function GetMap() {
    
    "use strict";

    var centerPoint = new Microsoft.Maps.Location(
            59.37770, 
            28.19611
        );

    map = new Microsoft.Maps.Map("#map", {
        credentials: mapAPIKey,
        center: centerPoint,
        zoom: 14,
        mapTypeId: Microsoft.Maps.MapTypeId.road,
        disablePanning: true
    });
    
    var pushpin = new Microsoft.Maps.Pushpin(centerPoint, {
            title: 'Tartu Ülikool Narva Kolledz',
            //subTitle: 'Hea koht',
            //text: 'UT'
        });

    map.entities.push(pushpin);

}

// https://dev.virtualearth.net/REST/v1/Locations?q=1000 Vin Scully Ave, Los Angeles,CA&key=YOUR_KEY_HERE

