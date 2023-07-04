window.addEventListener('DOMContentLoaded', function() {

    'use strict';
    let tab = document.querySelectorAll('.info-header-tab'),
        info = document.querySelector('.info-header'),
        tabContent = document.querySelectorAll('.info-tabcontent');
    
    function hideTabContent(a) {
        for (let i = a; i < tabContent.length; i++) {
            tabContent[i].classList.remove('show');
            tabContent[i].classList.add('hide');
        }
    }

    hideTabContent(1);

    function showTabContent(b) {
        if (tabContent[b].classList.contains('hide')) {
            tabContent[b].classList.remove('hide');
            tabContent[b].classList.add('show');
        }
    }

    info.addEventListener('click', function(event) {
        let target = event.target;
        if (target && target.classList.contains('info-header-tab')) {
            for (let  i = 0; i < tab.length; i++) {
                if(target == tab[i]) {
                    hideTabContent(0);
                    showTabContent(i);
                    break;
                }
            }
        }

    });

    // timer

    let deadLine = '2021-04-15';

    function getTimeRemaining(endtime) {
        let t = Date.parse(endtime) - Date.parse(new Date()),
            seconds = Math.floor((t/1000) % 60),
            minutes = Math.floor((t/1000/60) % 60),
            hours = Math.floor(t/1000/60/60);
            // hours = Math.floor((t/1000/60/60) % 24),
            // days = Math.floor(t/1000/60/60/24);
        
        return {
            'total' : t,
            // 'days' : days,
            'hours' : hours,
            'minutes' : minutes,
            'seconds' : seconds
        };
    }

    function setClock(id, endtime) {
        let timer = document.getElementById(id),
            // days = timer.querySelector('.days'),
            hours = timer.querySelector('.hours'),
            minutes = timer.querySelector('.minutes'),
            seconds = timer.querySelector('.seconds'),
            timeInterval = setInterval(updateClock, 1000);
        
        function updateClock() {
            let t = getTimeRemaining(endtime);
            // days.textContent = t.days;
            hours.textContent = t.hours;
            minutes.textContent = t.minutes;
            seconds.textContent = t.seconds;

            if (t.total <= 0) {
                clearInterval(timeInterval);
                // days.textContent = '00';
                hours.textContent = '00';
                minutes.textContent = '00';
                seconds.textContent = '00';
            }
        }

    }

    setClock('timer', deadLine);

    // popup

    let more = document.querySelector('.more'),
        descr = document.querySelector('.description-btn'),
        overlay = document.querySelector('.overlay'),
        close = document.querySelector('.popup-close');

    more.addEventListener('click', function() {
        overlay.style.display = 'block';
        this.classList.add('more-splash');
        document.body.style.overflow = 'hidden';
    });

    descr.addEventListener('click', function() {
        overlay.style.display = 'block';
        this.classList.add('more-splash');
        document.body.style.overflow = 'hidden';
    });

    close.addEventListener('click', function() {
        overlay.style.display = 'none';
        more.classList.remove('more-splash');
        document.body.style.overflow = '';
    });

    // Form

    let message = {
        loading: 'Загрузка...',
        success: 'Спасибо! Скоро мы с вами свяжемся!',
        failure: 'Что-то пошло не так...'
    };

    let form = document.querySelector('.main-form'),
        contact = document.getElementById('form'),
        input = form.getElementsByTagName('input'),
        statusMesage = document.createElement('div');

    statusMesage.classList.add('status');

    function sendData(a) {
        a.addEventListener('submit', function(event) {
            event.preventDefault();
            a.appendChild(statusMesage);
            
            function postData() {
                return new Promise(function(resolve, reject) {
                    let request = new XMLHttpRequest();
                    request.open('POST', 'server.php');
                    request.setRequestHeader ('Content-Type', 'application/json', 'charset=utf-8');

                    request.onreadystatechange = function(){
                        if (request.readyState < 4) {
                            resolve();
                        } else if(request.readyState === 4 && request.status == 200) {
                            resolve();
                        } else {
                            reject();
                        } 
                    };

                    request.send(json);
                });
            }

            let formData = new FormData(a);

            let obj = {};
            formData.forEach(function(value, key) {
                obj[key] = value;
            });
            let json = JSON.stringify(obj);
    
            function clearInput() {
                for (let i = 0; i < input.length; i++) {
                    input[i].value = '';
                }
            }

            postData()
                .then(()=> statusMessage.innerHTML = message.loading)
                .then(()=> statusMessage.innerHTML = message.success)
                .catch(()=> statusMessage.innerHTML = message.failure)
                .then(clearInput)
        });
    }

    sendData(form);
    sendData(contact);


    // slider
 
    let slideIndex = 1,
        slides = document.querySelectorAll('.slider-item'),
        prev = document.querySelector('.prev'),
        next = document.querySelector('.next'),
        dotsWrap = document.querySelector('.slider-dots'),
        dots = document.querySelectorAll('.dot');

    showSlides(slideIndex);
    
    function showSlides(a) {
        if(a > slides.length) {
            slideIndex = 1;
        }
        if(a < 1) {
            slideIndex = slides.length;
        }

        slides.forEach((item) => item.style.display = 'none');  // все равно что перебор циклом
        dots.forEach((item) => item.classList.remove('dot-active'));

        slides[slideIndex - 1].style.display = 'block';
        dots[slideIndex - 1].classList.add('dot-active');
    }

    function plusSlides(a) {
        showSlides(slideIndex += a);
    }
    function currentSlide(a) {
        showSlides(slideIndex = a); 
    }

    prev.addEventListener('click', function() {
        plusSlides(-1);
    });

    next.addEventListener('click', function() {
        plusSlides(+1);
    });

    dotsWrap.addEventListener('click', function(event) {
       for (let i = 0; i < dots.length; i++) {
           if (event.target.classList.contains('dot') && event.target == dots[i]) {
               currentSlide(i+1);
           }
       } 
    });

    //calc

    let persons = document.querySelectorAll('.counter-block-input')[0],
        restDays = document.querySelectorAll('.counter-block-input')[1],
        place = document.getElementById('select'),
        totalValue = document.getElementById('total'),
        personsSum = 0,
        daysSum = 0,
        total = 0;

    totalValue.textContent = 0;

    persons.addEventListener('change', function() {
        personsSum = +this.value;
        total = (daysSum + personsSum)*4000;

        if (persons.value == '' || restDays.value == '') {
            totalValue.textContent = 0;
        } else {
            totalValue.textContent = total;
        }
    });

    restDays.addEventListener('change', function() {
        daysSum = +this.value;
        total = (daysSum + personsSum)*4000;

        if (persons.value == '' || restDays.value == '') {
            totalValue.textContent = 0;
        } else {
            totalValue.textContent = total;
        }
    });

    place.addEventListener('change', function() {
        if (persons.value == '' || restDays.value == '') {
            totalValue.textContent = 0;
        } else {
            let a =total;
            totalValue.textContent = a * this.options[this.selectedIndex].value;
        }
        console.log(this.options);
    });
});
