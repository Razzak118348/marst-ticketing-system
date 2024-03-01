// scroll section 
function scrollSection(sectiionId) {
    const section = document.getElementById(sectiionId);
    section.scrollIntoView({ behavior: 'smooth' })
}

const AllBtn = document.getElementsByClassName('add-btn');
// console.log(AllBtn)
let btnIndex = [];
// btnIndex.push('a')
// btnIndex.push('b')
// console.log(btnIndex);
let count = 0;
let sum = 0;
for (const btn of AllBtn) {
    btn.addEventListener('click', function (event) {

       

        // 1.chack that the gray color present or not 
        // 2.if present then count +1;
        // 3.if count <5 then the color change and decrease the total seats count and incrase seats number .

        // 4.appand the seat deatles
        // 5.sum the total price 
        // 6.If have copon then discount 
        // 7.click next button to opent andother successs section 

        const nextButton = document.getElementById('next-btn')
        nextButton.removeAttribute('disabled');

        if (btn.classList.contains("bg-[#F7F8F8]")) {
            count = count + 1;

            if (count < 5) {
                setBackgruondColor(btn)
                console.log(count)

                let totalSeat = getTextElemetnValueById('total-seat')

                currentTotalSeat = totalSeat - 1;
                setTextElementValueById('total-seat', currentTotalSeat)

                let seatCount = getTextElemetnValueById('seat-number')
                setTextElementValueById('seat-number', count)
                const price = getTextElemetnValueById('per-price')
                let totalMoney = getTextElemetnValueById('total-price');
                sum = totalMoney + price;

// creat li and append in ul with the id is "append"
const seatTitle = event.target.innerText
btnIndex.push(seatTitle);
console.log('this is index array', btnIndex)

const li =document.createElement('li')
const p1= document.createElement('p')
p1.innerText=seatTitle;
const p2 =document.createElement('p')
p2.innerText='Economoy';
const p3=document.createElement('p')
p3.innerText=price;
li.appendChild(p1)
li.appendChild(p2)
li.appendChild(p3)

const appendContainer=document.getElementById('append-ul')
appendContainer.appendChild(li)

                setTextElementValueById('total-price', sum)
                //    console.log(document.getElementById('total-price').innerText)

                setTextElementValueById('grand-total', sum)

                document.getElementById('input').addEventListener('keyup', function (event) {
                    const text = event.target.value;//type kore j value ta paisi oita text e rakhlam
                    const ApplyBtn = document.getElementById('apply')

                    if (text === 'NEW15' || text === 'Couple 20') {
                        ApplyBtn.removeAttribute('disabled');

                    }
                    else {
                        ApplyBtn.setAttribute('disabled', true);
                    }
                })

            }

            else {
                alert('You have select your 4 ticket please try letter')
            }
        }
        else {
            alert('This seats already selected')
        }


    })
}

// utility function 

function setBackgruondColor(elementClass) {

    elementClass.classList.remove('bg-[#F7F8F8]')
    elementClass.classList.add('bg-[#1DD100]')
}

function removeBackgroundColor(elementId) {
    elementId.classList.remove('bg-[#1DD100]')
    elementId.classList.add('bg-[#F7F8F8]')

}

function getTextElemetnValueById(elementId) {
    const element = document.getElementById(elementId);
    const elementValueText = element.innerText;
    const value = parseFloat(elementValueText);
    return value;
}

function setTextElementValueById(elementId, value) {
    const element = document.getElementById(elementId);
    element.innerText = value;
}



function grandTotal() {
    const inputElement = document.getElementById('input')
    const text = inputElement.value;

    let grandTotalMoney = getTextElemetnValueById('grand-total');

    if (text === 'NEW15') {
        grandTotalMoney = grandTotalMoney - ((grandTotalMoney * 15) / 100);
        setTextElementValueById('grand-total', grandTotalMoney)
        const Inputhide = document.getElementById('inputdiv')
        Inputhide.classList.add('hidden');
    }
    else if (text === 'Couple 20') {
        grandTotalMoney = grandTotalMoney - ((grandTotalMoney * 20) / 100);
        setTextElementValueById('grand-total', grandTotalMoney)
        const Inputhide = document.getElementById('inputdiv')
        Inputhide.classList.add('hidden');
    }
}

function NextButton() {
    const SameClass = document.getElementsByClassName('same');

    for (const item of SameClass) {
        item.classList.add('hidden');
        const Success = document.getElementById('success');
        Success.classList.remove('hidden')
    }

}

//if you click the continue button then the all body show the same result as it open like web page

function ShowBody() {
    const SameClass = document.getElementsByClassName('same');
    const Success = document.getElementById('success')
    Success.classList.add('hidden')

    SameClass[0].classList.remove('hidden')
    SameClass[1].classList.remove('hidden')
    SameClass[2].classList.remove('hidden')

    setTextElementValueById('total-seat', 12)
    setTextElementValueById('seat-number', 0)
    setTextElementValueById('total-price', 0)
    setTextElementValueById('grand-total', 0)

    //count er man 0 kore dilam
    count = 0;
    console.log('this is count', count)
    const btn = document.getElementsByClassName('add-btn')

    console.log('this is length of btnIndex', btnIndex.length)
    // btnIndex.pop()
    // console.log(btnIndex)
    for (let i = 0; i < btnIndex.length; i++) {
        //  console.log('this is i index',btnIndex[i])
        console.log(btnIndex[i])
        let btnElement = document.getElementById(btnIndex[i])
        console.log(btnElement)
        removeBackgroundColor(btnElement)

    }
    btnIndex = [];//free the btnIndex
    //now i need to free the ul or remove the child node of ul
    const appendContainer=document.getElementById('append-ul')
    console.log(appendContainer)
    while(appendContainer.firstChild){
        appendContainer.removeChild(appendContainer.firstChild)
    }
    console.log('now append container',appendContainer)
    console.log('now btn index ', btnIndex)

    //COPUN section anable 
    const Inputhide = document.getElementById('inputdiv')
        Inputhide.classList.remove('hidden');
        //input value free up
        const inputElement = document.getElementById('input')
  inputElement.value='';
  //apply button ke disable kore dilam
  const ApplyBtn = document.getElementById('apply')
  ApplyBtn.setAttribute('disabled', true);

}

function setTextElementValueById(elementId, value) {
    const element = document.getElementById(elementId);
    element.innerText = value;
}
