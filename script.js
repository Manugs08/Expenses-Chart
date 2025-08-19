
const leer = async()=>{
    try{
        const datos= await axios("data.json");
        const dayGraph= document.querySelectorAll(".day");
        const graph= document.querySelector(".graph-container");
        const week = new Date();
        const today= week.getDay();
        dayGraph.forEach((g,i)=>{
            g.style.height=`${datos.data[i].amount*2.7}px`;
            if(i===today) g.style.backgroundColor="var(--Blue300)"
            const day= document.createElement("span")
            day.textContent=datos.data[i].day;
            g.appendChild(day)
            day.classList.add("dayOfWeek");
            const amount= document.createElement("span")
            amount.textContent=`$${datos.data[i].amount}`;
            amount.classList.add("amount");
            let click=false;
            g.addEventListener("click",()=>{
                if(!click){
                    g.appendChild(amount);
                    click=true;
                } else {
                    g.removeChild(amount);
                    click=false;
                }
            })
        })
    } catch(e){
        console.log(e);
    }
}
leer()