var list = {};
var indexEdit;	
/* get info from json database */		
async function getList(){
      window.indexEdit=window.location.search.substr(4);
    var response = await fetch(`https://smartestate-62afe.firebaseio.com/${indexEdit}.json`);
    window.property = await response.json();
    draw();
    }

/*what info from Json database to display*/
function draw(){
    document.querySelector("[name='image']").value = property.image;
    document.querySelector("[name='type']").value = property.type ;
    document.querySelector("[name='rooms']").value = property.rooms;
    document.querySelector("[name='surface']").value = property.surface ;
    document.querySelector("[name='price']").value = property.price;
    document.querySelector("[name='similarProperties']").value = property.similarProperties;
    document.querySelector("[name='propertyLocation']").value = property.propertyLocation;
    }

/* save the property's details taht have been amended */
async function updateDatabase(){         
    var newLink = {
        image:document.querySelector("[name='image']").value,
        type:document.querySelector("[name='type']").value,
        rooms: document.querySelector("[name='rooms']").value,
        surface: document.querySelector("[name='surface']").value,                
        price: document.querySelector("[name='price']").value,
        similarProperties: document.querySelector("[name='similarProperties']").value,
        propertyLocation: document.querySelector("[name='propertyLocation']").value.split("\n")
    };           
    
    if(indexEdit===undefined){
        var response = await fetch(`https://smartestate-62afe.firebaseio.com/.json`,{
        method:"POST",
        body:JSON.stringify(newLink)
        });
    }else{
        var response = await fetch(`https://smartestate-62afe.firebaseio.com/${indexEdit}.json`,{
            method:"PUT",
            body:JSON.stringify(newLink)
        });
    }
    showToast();  			
    }    

/*display messaje This property's details will be updated in the database!, twice after a few seconds applying wait function below  */
async function showToast(){
    let toast = document.querySelector(".toast");            
    toast.classList.remove("hidden");           
    await wait(5000);
    toast.classList.add("hidden"); 
    window.location="Admin.html";     
    }

async function wait(ms){
    return new Promise((resolve, reject) => {
        setTimeout(()=>{
            resolve()
        },ms)
    });
    }     

