var list = {};
var idx= window.location.search.substr(4);

/*get info from json database */
async function getList(){
    var response = await fetch("https://smartestate-62afe.firebaseio.com/.json");
    window.list = await response.json();
    drawAdmin();
    }

/* how and what to display for each property*/
function drawAdmin(){
    var str = "";
    for(var i in list){
        if(list[i]===null){
            continue;
        }					
        str+= `
            <tr class="displayTr">              
                <td><img class="im" src="${list[i].image}"> </td>
                <td><input id="displayBtn" type="button" value="Edit ${list[i].type}" onclick="location.href= 'AdminEditProperty.html?id=${i}' "> </td>               
                <td>${list[i].surface} m2</td>
                <td>${list[i].rooms}</td>
                <td>${list[i].price} EUR </td> 
                <td>${list[i].similarProperties}</td> 
                <td>${list[i].propertyLocation}</td>  

                <th><input id="displayButton" type="button" value="Remove" onclick="del(${i}); showToast(); "> </th> 
            </tr>
        `
         }
    document.querySelector("table tbody").innerHTML = str;
}

/*delete property from database*/
async function del(idx) {					
        var response = await fetch(`https://smartestate-62afe.firebaseio.com/${idx}.json`,{
            method:"DELETE",
        });                
        await getList(); 
    }

/*display the message The property is removed from the database!, twice after a few seconds applying wait function below  */
async function showToast(){
    let toast = document.querySelector(".toast");    
    toast.classList.remove("hidden");         
    await wait(5000);
    toast.classList.add("hidden");            
    }

async function wait(ms){
    return new Promise((resolve, reject) => {
        setTimeout(()=>{
            resolve()
        },ms)
    });
    }

