const endDate="13 Jan 2025 10:25 PM"

document.getElementById("end-date").innerText=endDate
const input=document.querySelectorAll("input")

function clock(){
    const end= new Date(endDate)
    const now=new Date()
    const diff=(end-now)/1000
    console.log(diff);
    if(diff<0) return;
    //convert into days
    input[0].value=Math.floor(diff/3600/24)
    //convert into hours
    input[1].value=Math.floor(diff/3600)%24;
    //convert into minuters
    input[2].value=Math.floor(diff/60)%60
    //convert into seconds
    input[3].value=Math.floor(diff)%60
}
clock()
setInterval(
    ()=>{
        clock()
    },
    1000
)
