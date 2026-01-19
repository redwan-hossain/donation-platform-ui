const loadDonatePlanData = () => {
    fetch("donate.json")
        .then(res => res.json())
        .then(data => {
            showDonateData(data);
        })
}


const showDonateData = (data) => {
    let donateContainer = document.querySelector(".donate-container");

    data.forEach(element => {

        donateContainer.innerHTML += `
       
         <div class="donate-card bg-[rgba(79,157,166,0.1)] max-w-[360px] min-h-[352] rounded-md p-5  space-y-5">
                    <h1 class="text-5xl">${element.icon}</h1>
                    <h1 class="font-semibold text-3xl">${element.title}</h1>
                    <p>Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat
                        duis enim velit mollit.</p>
                </div>
                
                `
    });
}


loadDonatePlanData();