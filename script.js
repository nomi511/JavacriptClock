setInterval(setClock, 1000)



const white = 'rgb(255, 255, 255)'
const black = "rgb(30, 30, 30)"

const hrstick = document.querySelector(".hour")
const minstick = document.querySelector(".minutes")
const secstick = document.querySelector(".seconds")
const togbtn = document.getElementById("tg")

const bod = document.querySelector('body')
const clock = document.querySelector(".clock")
const nums = document.querySelectorAll(".clnums")


// for date according to timzones

const country = document.getElementById("countries")





// for changing bakcground color

togbtn.addEventListener('change', function(){

    if(this.checked)
    {
        

        bod.style.backgroundColor = black
        clock.style.border = black
        hrstick.style.backgroundColor = white
        minstick.style.backgroundColor = white
        

        
        document.querySelectorAll(".clnum").forEach(function(data){

           
            data.style.color = white;


        })
        
        
    }
    
    else 
    {
        



        bod.style.backgroundColor = "white"
        clock.style.border = 'white'
        hrstick.style.backgroundColor = "black"
        minstick.style.backgroundColor = "black"
        
        

        document.querySelectorAll(".clnum").forEach(function(data)
        {
            data.style.color = black
        })






    }

})


let value = 0

// checking the value of selected country for the time

function clock_change(){
    value = country.options[country.selectedIndex].getAttribute('value')
    if (value === "1" )
    {
        return "Europe/London"
    }
    else if(value === "2")
    {
        return "America/New_York"
    }
    else if ( value === "3")
    {
        return "Australia/Sydney"
    }
    else if (value ==="4")
    {
        return "America/Toronto"
    }
    else if (value === "5")
    {
        return "Etc/GMT-4"
    }
    else if(value === "0")
    {
        return "Etc/GMT-5"
    }
    
}


// returnig date & timezone in form of date instead of string

function world (date, zone)
{
    return new Date((typeof date === "string" ? new Date(): date).toLocaleString("en-US", {timeZone: zone}))
}



// date setting


function setClock()
{

    let zone = clock_change()

    let date = new Date();
    
    let ndate = world(date , zone)

    
    let curdate = ndate
    

    const sec = curdate.getSeconds() / 60
    const min = (sec + curdate.getMinutes()) / 60
    const hr = (min + curdate.getHours() )/ 12

    setrotat(hrstick, hr)
    
    setrotat(minstick, min)
    setrotat(secstick, sec)


}


// for the positio of sticks on the clock

function setrotat(element, rotat)
{
    element.style.setProperty('--stickrotate', rotat * 360)
}



setClock()