let btnStart = document.getElementById('btn-start')
btnStart.onclick = function() {
    // console.log('click')
    let orderSection = document.querySelector('.order-section')
    orderSection.scrollIntoView({
        behavior: 'smooth'
    })
}