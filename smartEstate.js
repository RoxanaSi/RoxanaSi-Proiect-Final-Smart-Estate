var list = {};
var indexEdit;

/* get info from json database */
async function getList(){
    var response = await fetch("https://smartestate-62afe.firebaseio.com/.json");
    window.list = await response.json();
    draw();
}

/*how and where to display the required info from database */
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
    document.querySelector(".one").innerHTML = str;
}

/*on click display only the selected option */ 
function showOptions(option,min, max){
    let str="";
    let displayOption ="";
    for(var i in list){
        displayOption=list[i][option];
        if(list[i]===null){
            continue;
        }else if((displayOption>=min) && (displayOption<=max)){            
            str+=`
                <div>              
                    <img class="im" src="${list[i].image}"> 
                    <br>
                    Property type: ${list[i].type}
                    <br>                   
                    Surface area: ${list[i].surface}
                    <br>
                    Rooms: ${list[i].rooms}
                    <br>						
                    <button type="button" onclick=" location.href= 'DetailsSmartEstate.html?id=${i}' ">Details</button>            
                </div>
                 `
            document.querySelector(".one").innerHTML = str;       
            }
    }

}

/* loader display while the information is loaded and displayed*/ 
function showMain(){
    setTimeout(function(){
    
        var main = document.querySelector(".one");
        main.classList.remove("hidden");
        
        var main = document.querySelector(".loader");
        main.classList.add("hidden");
    
    },2000);
}

/*hamburger bar action on click */ 
function myFunction() {
    var x = document.querySelector(".myLinks");
    if (x.style.display === "block") {
      x.style.display = "none";
    } else {
      x.style.display = "block";
    }
  }

  /* go to top after scrolling down */
  function topFunction() {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
  }
    
