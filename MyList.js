let myList = [];
var indexEdit;			

async function getList(){
    var x=window.location.search.substr(4);
    var response = await fetch(`https://smartestate-62afe.firebaseio.com/${x}.json`);
    window.property = await response.json();
    draw();
    drawChoices();
    }

/*display the properties saved on the local storage after selecting Add to your Preferences option on Details smart estate page;
and calculate the remaining similar available properties  */
function draw(){
    let myListStr = localStorage.getItem("myList");								
    if(myListStr===null){
        myList = [];
    }else{
        myList = JSON.parse(myListStr);
    }
    var str = "";
    for(var i in myList){
        str+=`<tr>           
                <td > ${myList[i].type} <br>  
                <img class="im" src="${myList[i].image}" onclick=" location.href= 'DetailsSmartEstate.html?id=${myList[i].id}' "> </td>						
                <td>${myList[i].price} EUR </td> 
                <td>${myList[i].similarProperties-1}</td>						
                <td><input id="displayButton" type="button" value="Remove" onclick="del(${i})"> 
                    <br>
                    <br>
                    <a href="ContactForm.html"><button id="displayContactButton" type="button">Contact us</button></a></td>						
                </tr>
            `
    }
    document.querySelector("table tbody").innerHTML = str; 
    }

/* display a summary of selection taking into consideration the number of houses, number of apartments, total costs */
function drawChoices() {
    var totalNoHouses=0;
    var totalNoApartments=0;
    var totalEur=0;
    var str = "";
    for (var i in myList) {
        var sub=parseInt(myList[i].price);
        totalEur+=sub;	
        if (myList[i].type=="Apartment"){
            totalNoApartments++
        }else {
            if (myList[i].type=="House"){
            totalNoHouses++
            }
        }
    }
    str += `
        <tr class="row">
            <th> Total number of selected houses: ${totalNoHouses} </th>
        </tr>
        <tr class="row">
            <td> Total number of selected apartments: ${totalNoApartments} </td>
        </tr>
        <tr class="row">
            <td> Total (EUR):${totalEur} </td>
        </tr>			
            </tr>
    `;
    document.querySelector(".choices").innerHTML = str;
}

/*remove selected property from local storage */
function del(i) {
    myList.splice(i,1);
      localStorage.setItem("myList", JSON.stringify(myList));
        draw(myList);
        drawChoices(myList);
    }
