var list = {};
var idx;	

/*get info from json database */
async function getList(){
    var x=window.location.search.substr(4);
    var response = await fetch(`https://smartestate-62afe.firebaseio.com/${x}.json`);
    window.property = await response.json();    
    }

/* add new property in the database and generate messages: Property added to database!(all the fields are filled in) or Fill in all fields!(if length=0) */
async function add(event){         
    event.preventDefault();
    var newProperty = {
        image:document.querySelector("[name='image']").value,
        type:document.querySelector("[name='type']").value,
        rooms: document.querySelector("[name='rooms']").value,
        surface: document.querySelector("[name='surface']").value,                
        price: document.querySelector("[name='price']").value,
        similarProperties: document.querySelector("[name='similarProperties']").value,
        propertyLocation: document.querySelector("[name='propertyLocation']").value.split("\n")
    };

    var propertyImage=document.querySelector("[name='image']").value; 
    var propertyType=document.querySelector("[name='type']").value;
    var propertySurface=document.querySelector("[name='surface']").value;
    var propertyRooms=document.querySelector("[name='rooms']").value;
    var propertyPrice=document.querySelector("[name='price']").value;
    var propertySimilar=document.querySelector("[name='similarProperties']").value;
    var propertyLocation=document.querySelector("[name='propertyLocation']").value; 

    if (propertyImage.length==0 || propertyType.length==0 || propertySurface==0 || propertyRooms==0 || propertyPrice==0 
            || propertySimilar==0 || propertyLocation==0 ){
        document.querySelector(".completeInfo").classList.remove("cache");
        document.querySelector(".completeInfo").classList.add("active");
    } else {          
        if(idx===undefined){
            var response = await fetch(`https://smartestate-62afe.firebaseio.com/.json`,{
            method:"POST",
            body:JSON.stringify(newProperty)
            });
        }else{
            var response = await fetch(`https://smartestate-62afe.firebaseio.com/${idx}.json`,{
                method:"PUT",
                body:JSON.stringify(newProperty)
            });
        }	

    document.querySelector(".completeInfo").classList.add("cache");          
    showToast();
    document.querySelector("[name='image']").value = "";
    document.querySelector("[name='type']").value = "";
    document.querySelector("[name='surface']").value = "";
    document.querySelector("[name='rooms']").value = "";
    document.querySelector("[name='price']").value = "";
    document.querySelector("[name='similarProperties']").value = "";
    document.querySelector("[name='propertyLocation']").value = "";            
    }       

    await getList();		
    }

/*display the messages Property added to database! or Fill in all fields!, twice after a few seconds applying wait function below  */
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
   