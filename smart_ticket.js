// scroll section 
function scrollSection(sectiionId) {
    const section = document.getElementById(sectiionId);
    section.scrollIntoView({ behavior: 'smooth' })
}

const AllBtn = document.getElementsByClassName('add-btn');
// console.log(AllBtn)
let count = 0;
for (const btn of AllBtn) {
    btn.addEventListener('click', function (event) {
       

        // 1.chack that the gray color present or not 
        // 2.if present then count +1;
        // 3.if count <5 then the color change and decrease the total seats count and incrase seats number .
        
        // 4.appand the seat deatles
        // 5.sum the total price 
        // 6.If have copon then discount 
        // 7.click next button to opent andother successs section 

        const nextButton= document.getElementById('next-btn')
        nextButton.removeAttribute('disabled');

        if (btn.classList.contains("bg-[#F7F8F8]")) {
            count = count + 1;
           
            if (count < 5) {
                setBackgruondColor(btn)
                console.log(count)

                let totalSeat = getTextElemetnValueById('total-seat')

                currentTotalSeat = totalSeat - 1;
                setTextElementValueById('total-seat', currentTotalSeat)

                let seatCount=getTextElemetnValueById('seat-number')
                setTextElementValueById('seat-number',count)

            }

            else {
                alert('You have select your 4 ticket please try letter')
            }
        }
else{
    alert('This seats already selected')
}


    })
}

// utility function 

function setBackgruondColor(elementClass) {

    elementClass.classList.remove('bg-[#F7F8F8]')
    elementClass.classList.add('bg-[#1DD100]')
}

function getTextElemetnValueById(elementId) {
    const element = document.getElementById(elementId);
    const elementValueText = element.innerText;
    const value = parseInt(elementValueText);
    return value;
}

function setTextElementValueById(elementId, value) {
    const element = document.getElementById(elementId);
    element.innerText = value;
}



