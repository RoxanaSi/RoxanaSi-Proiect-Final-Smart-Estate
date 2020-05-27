function initMap() {
	var mapOptions = {
			zoom: 12,
			center: new google.maps.LatLng(43.694447, 7.259735)
        };
    var map = new google.maps.Map(document.querySelector('#map'), mapOptions);
    
    var property1=new google.maps.LatLng(43.704176, 7.312004);
    var markerproperty1 = new google.maps.Marker({
        position: property1,
        map: map,
        title: 'Property1',
        url: "https://roxanasi.github.io/RoxanaSi-Proiect-Final-Smart-Estate/DetailsSmartEstate.html?id=0"
        });
        google.maps.event.addListener(markerproperty1, 'click', function () {
        window.location = markerproperty1.url;	
        }); 

    var property2=new google.maps.LatLng(43.695799, 7.332333);
    var markerproperty2 = new google.maps.Marker({
        position: property2,
        map: map,
        title: 'Property2',
        url: "https://roxanasi.github.io/RoxanaSi-Proiect-Final-Smart-Estate/DetailsSmartEstate.html?id=1"
        });
        google.maps.event.addListener(markerproperty2, 'click', function () {
        window.location = markerproperty2.url;	
        });

    var property3=new google.maps.LatLng(43.703153, 7.333921);
    var markerproperty3 = new google.maps.Marker({
        position: property3,
        map: map,
        title: 'Property3',
        url: "https://roxanasi.github.io/RoxanaSi-Proiect-Final-Smart-Estate/DetailsSmartEstate.html?id=2"
        });
        google.maps.event.addListener(markerproperty3, 'click', function () {
        window.location = markerproperty3.url;	
        });

    var property4=new google.maps.LatLng(43.705418, 7.335541);
    var markerproperty4 = new google.maps.Marker({
        position: property4,
        map: map,
        title: 'Property4',
        url: "https://roxanasi.github.io/RoxanaSi-Proiect-Final-Smart-Estate/DetailsSmartEstate.html?id=3"
        });
        google.maps.event.addListener(markerproperty4, 'click', function () {
        window.location = markerproperty4.url;	
        }); 

    var property5=new google.maps.LatLng(43.701579, 7.329715);
    var markerproperty5 = new google.maps.Marker({
        position: property5,
        map: map,
        title: 'Property5',
        url: "https://roxanasi.github.io/RoxanaSi-Proiect-Final-Smart-Estate/DetailsSmartEstate.html?id=4"
        });
        google.maps.event.addListener(markerproperty5, 'click', function () {
        window.location = markerproperty5.url;	
        }); 

    var property6=new google.maps.LatLng(43.703847, 7.312201);
    var markerproperty6 = new google.maps.Marker({
        position: property6,
        map: map,
        title: 'Property6',
        url: "https://roxanasi.github.io/RoxanaSi-Proiect-Final-Smart-Estate/DetailsSmartEstate.html?id=5"
        });
        google.maps.event.addListener(markerproperty6, 'click', function () {
        window.location = markerproperty6.url;	
        }); 

    var property7=new google.maps.LatLng(43.694214, 7.257038);
    var markerproperty7 = new google.maps.Marker({
        position: property7,
        map: map,
        title: 'Property7',
        url: "https://roxanasi.github.io/RoxanaSi-Proiect-Final-Smart-Estate/DetailsSmartEstate.html?id=6"
        });
        google.maps.event.addListener(markerproperty7, 'click', function () {
        window.location = markerproperty7.url;	
        });
    
    var property8=new google.maps.LatLng(43.694423, 7.258207);
    var markerproperty8 = new google.maps.Marker({
        position: property8,
        map: map,
        title: 'Property8',
        url: "https://roxanasi.github.io/RoxanaSi-Proiect-Final-Smart-Estate/DetailsSmartEstate.html?id=7"
        });
        google.maps.event.addListener(markerproperty8, 'click', function () {
        window.location = markerproperty8.url;			
        }); 
		
    var property9=new google.maps.LatLng(43.673064, 7.194452);
    var markerproperty9 = new google.maps.Marker({
        position: property9,
        map: map,
        title: 'Property9',
        url: "https://roxanasi.github.io/RoxanaSi-Proiect-Final-Smart-Estate/DetailsSmartEstate.html?id=9"
        });
        google.maps.event.addListener(markerproperty9, 'click', function () {
        window.location = markerproperty9.url;	}); 
        google.maps.event.addListener(markerproperty9, 'touchstart', function () {
        window.location = markerproperty9.url;
        })
    }

/*on click on pin get the information about a specific property from Json database
and show it directly on the details smart page */
async function getList(){
    var response = await fetch("https://smartestate-62afe.firebaseio.com/.json");
    window.list = await response.json();
    draw();
    }

function draw(){
    var str = "";
    for(var i in list){
        if(list[i]===null){
            continue;
        }					
        str+= `
            <div class="arrangeItems">              
                <img class="im" src="${list[i].image}"> 
                <br>
                Property type: ${list[i].type}
                <br>                   
                Surface area: ${list[i].surface} m2
                <br>
                Rooms: ${list[i].rooms}
                <br>
                Price: ${list[i].price} EUR 
                <br>						
                <button type="button" onclick=" location.href= 'DetailsSmartEstate.html?id=${i}' ">Details</button>            
            </div>
        `
        }  
    }




