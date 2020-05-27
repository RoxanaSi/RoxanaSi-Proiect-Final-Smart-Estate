/*on submit all the fields to be completed are checked and appropiate messages are displayed: All the field should be filled in (if the length=0;) or
Thank you for contacting us (if all are filled in) */
function validare(event){     
    event.preventDefault();		
    var persoanaPrenume=document.querySelector("[name='FirstName']").value; 
    var persoanaNume=document.querySelector("[name='LastName']").value;
    var persoanaTelephone=document.querySelector("[name='Telephone']").value; 
    var persoanaEmail=document.querySelector("[name='Email']").value; 
    var persoanaMesaj=document.querySelector(".mesaj").value;
    document.querySelector(".firstHeader").classList.add("hidden");
    
    if (persoanaPrenume.length==0 || persoanaNume.length==0 ||persoanaTelephone.length==0 || persoanaEmail.length==0 || persoanaMesaj.length==0 ){
        document.querySelector(".completeInfo").classList.remove("cache");
        document.querySelector(".completeInfo").classList.add("active");
    } else {
        document.querySelector(".completeInfo").classList.add("cache"); 
        showToast();        
        document.querySelector("[name='FirstName']").value = "";
        document.querySelector("[name='LastName']").value= "";
        document.querySelector("[name='Telephone']").value= "";
        document.querySelector("[name='Email']").value= "";
        document.querySelector(".mesaj").value= "";
    }     
    }

/* appropiate messages All the field should be filled in (if the length=0;) or
Thank you for contacting us (if all are filled in) are displayed twice after a few seconds applying wait function below  */
async function showToast(){
    let class1 = document.querySelector(".class1");            
    class1.classList.remove("hidden");          
    await wait(5000);
    class1.classList.add("hidden");        
    goBack();   
    }

async function wait(ms){
    return new Promise((resolve, reject) => {
        setTimeout(()=>{
            resolve()
        },ms)
    });
    }

/* on click on Back to main page button the Home page is displayed */
function goBack() {
    window.history.go(-1);
    }


