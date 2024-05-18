const showCounter = () => {
    document.querySelector('.counter').style.display = 'flex'
}

const cancelCounter = () => {
    document.querySelector('.counter').style.display = 'none'
}

const countDown = () => {
    let countDownDate = new Date('2024-05-24')
    let now = new Date()
    let difference = countDownDate - now
    let date = new Date(difference)
    let day = date.getDate();
    let hours = date.getHours();
    let minutes = date.getMinutes();
    let seconds = date.getSeconds();

    document.getElementById('day').innerHTML = day
    document.getElementById('hour').innerHTML = hours
    document.getElementById('minute').innerHTML = minutes
    document.getElementById('second').innerHTML = seconds
    if (difference == 0) {
        document.getElementById('theDay').style.display = "block"
        document.getElementById('theDay').innerHTML = "It's your day, HBD dear!!!"
    }
}

setInterval(() => {
    countDown()
}, 1000);



document.getElementById('whatsappButton').addEventListener('click', function() {
    const phoneNumber = '+2347044959836'; 
    const message = encodeURIComponent("Hello, Can you design a birthday count down website for me?");

    const whatsappURL = `https://wa.me/${phoneNumber}?text=${message}`;
    window.open(whatsappURL, '_blank');
});