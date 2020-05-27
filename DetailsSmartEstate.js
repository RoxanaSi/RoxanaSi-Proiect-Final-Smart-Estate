
var list = {};
var indexEdit;			
async function getList(){
    var x=window.location.search.substr(4);
    var response = await fetch(`https://smartestate-62afe.firebaseio.com/${x}.json`);
    window.property = await response.json();
    draw();
    }

function draw(){
    document.querySelector("#surface").innerText = property.surface ;
    document.querySelector("#rooms").innerText = property.rooms;
    document.querySelector("#price").innerText = property.price;
    }   

/*on click on Add to Preferences the selected property is saved in local storage for future usage as shown on MyList page */
function addInMyList(){
    let myListStr = localStorage.getItem("myList");
    let myList;
    if(myListStr===null){
        myList = [];
    }else{
        myList = JSON.parse(myListStr);
    }
    var x=window.location.search.substr(4);          		
    let found = false;
    for(let i =0;i<myList.length;i++){
        if(myList[i].id === x){		
        found=true;
        showToast();
        }
    }
    
    if(!found){
        document.querySelector(".mosaic").classList.remove("hidden");
        
        var propertyToBeAddedToPreferences = window.property;
        propertyToBeAddedToPreferences.id=x;
        myList.push(propertyToBeAddedToPreferences);          
        localStorage.setItem("myList", JSON.stringify(myList));
        showMosaic();
    }   
    }  

/*display message Property already exists, twice after a few seconds applying wait function below  */
async function showToast(){
    let toast = document.querySelector(".toast");            
    toast.classList.remove("hidden");      
    await wait(5000);
    toast.classList.add("hidden");                        
    }

/*display messaje New property added..., twice after a few seconds applying wait function below  */
async function showMosaic(){
    let mosaic = document.querySelector(".mosaic");            
    mosaic.classList.remove("hidden");      
    await wait(5000);
    mosaic.classList.add("hidden");                        
    }

async function wait(ms){
    return new Promise((resolve, reject) => {
        setTimeout(()=>{
            resolve()
        },ms)
    });
    }
