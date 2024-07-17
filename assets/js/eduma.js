var body = document.querySelector('body');

var banner_discount = document.querySelector('.wrap-discount-banner')

const btnMenuTable = document.querySelectorAll('.menu-table .item');
const menuTable = document.querySelector('.menu-table');
const popular = document.querySelector('.popular');
const bestseller = document.querySelector('.best-seller');
const topRate = document.querySelector('.top-rate');
const btnMore = document.querySelector('.btn-more');

if (menuTable) {
    menuTable.querySelector('.item-popular').classList.add('active');
}

if (popular) {
    popular.classList.add('active');
}
btnMenuTable.forEach(item => {
    item.addEventListener('click', () => {
        const value = item.dataset.valueTable;
        [popular, bestseller, topRate].forEach(section => section.classList.remove('active'));
        if (value === 'popular') {

            popular.classList.add('active');
            btnMore.style.display = 'block';

        } else if (value === 'toprate') {
            topRate.classList.add('active'); btnMore.style.display = 'none'
            console.log(topRate)
        } else {
            bestseller.classList.add('active'); btnMore.style.display = 'none'
        }
        btnMenuTable.forEach(btn => btn.classList.remove('active'));
        item.classList.add('active');

    });
});
const countDown = document.querySelector('.count-down-card')

function getFutureDateInSeconds(secondsToAdd) {
    var currentDate = new Date();
    return new Date(currentDate.getTime() + secondsToAdd * 1000);
}
if (countDown) {

    var secondsInTwoDays = parseInt(countDown.dataset.valueSecs)
}
var countDownDate = getFutureDateInSeconds(secondsInTwoDays).getTime();
var countdownfunction = setInterval(function () {
    var now = new Date().getTime();
    var distance = countDownDate - now;
    var days = Math.floor(distance / (1000 * 60 * 60 * 24));
    var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    var seconds = Math.floor((distance % (1000 * 60)) / 1000);
    if (countDown) {

        countDown.querySelector('.hours').textContent = hours
        countDown.querySelector('.days').textContent = days
        countDown.querySelector('.mins').textContent = minutes
        countDown.querySelector('.secs').textContent = seconds
    }
    if (distance < 0) {
        clearInterval(countdownfunction);
    }
}, 1000);



const menuHide = document.querySelector('.menu-hide');
const menuIconCtrl = document.querySelector('.menu-icon-ctrl');
const overlay = document.querySelector('.overlay-menu');
const btnCart = document.querySelector('.btn-cart');
const cart = document.querySelector('.cart');
const btnCloseCart = document.querySelector('.btn-close-cart');

const toggleActive = (...elements) => {
    elements.forEach(element => element.classList.toggle('active'));
};

menuIconCtrl.addEventListener('click', () => {
    toggleActive(menuHide, overlay);
});

menuHide.querySelector('.close-menu-icon').addEventListener('click', () => {
    toggleActive(menuHide, overlay);
});

overlay.addEventListener('click', () => {
    menuHide.classList.remove('active');
    cart.classList.remove('active');
    overlay.classList.remove('active');
});

btnCart.addEventListener('click', () => {
    toggleActive(cart, overlay);
});

btnCloseCart.addEventListener('click', () => {
    toggleActive(cart, overlay);
});

// remove item in cart

const itemsCart = document.querySelectorAll('.cart-items .item');
const itemCart = document.querySelector('.cart-items');
const footerCart = document.querySelector('.footer-cart');

itemsCart.forEach(item => {
    item.addEventListener('click', () => {
        item.classList.add('remove');

        setTimeout(() => {
            item.remove();

            if (itemCart.children.length === 0) {
                itemCart.innerHTML = '<p>No products in the cart.</p>';
                footerCart.style.display = 'none';
            }
        }, 1000);
    });
});


const btnSearch = document.querySelector('.btn-search i')

const formSearch = btnSearch.parentElement.querySelector('form')



btnSearch.addEventListener('click', () => {

    if (formSearch.classList.contains('hide-search')) {
        formSearch.classList.remove('hide-search')
        formSearch.classList.add('show-search')
    } else {
        formSearch.classList.add('hide-search')
        formSearch.classList.remove('show-search')
    }
});

// cursor

const cursor = document.querySelector('.cursor-login')
const loginOverlay = document.querySelector('.login-overlay')
const loginForm = document.querySelector('.login-form')
const form = loginForm.querySelector('.form-account')
loginOverlay.addEventListener('mousemove', (e) => {
    cursor.style.display = 'block'
    let x = e.clientX;
    let y = e.clientY;
    cursor.style.left = x + `px`
    cursor.style.top = y + `px`

})
loginOverlay.addEventListener('mouseout', (e) => {
    cursor.style.display = 'none'
})

loginOverlay.addEventListener('click', (e) => {
    form.classList.remove('animation-login')
    loginOverlay.classList.remove('animation-login')
    loginOverlay.classList.add('animation-login-hide')
    form.classList.add('animation-login-hide')
    cursor.style.display = 'none'

    setTimeout(() => {
        loginForm.classList.remove('active')
    }, 1000)
})

const btnLogin = document.querySelector('.login')

btnLogin.addEventListener('click', () => {
    form.classList.remove('animation-login-hide')
    loginOverlay.classList.remove('animation-login-hide')
    loginForm.classList.toggle('active')
    loginOverlay.classList.add('animation-login')
    form.classList.add('animation-login')
})



const btnResNow = document.querySelector('.register-now')
const btnLogNow = document.querySelector('.login-now')
const form1 = document.querySelector('.form-1')
const form2 = document.querySelector('.form-2')


btnLogNow.addEventListener('click', (e) => {
    e.preventDefault();
    form2.style.transform = 'translateX(0px)'
    form1.style.transform = 'translateX(0px)'
})

btnResNow.addEventListener('click', (e) => {
    e.preventDefault();
    form2.style.transform = 'translateX(-500px)'
    form1.style.transform = 'translateX(-500px)'
})


// shortcut
const shortCut = document.querySelectorAll('.short-cut')
shortCut.forEach(e => {
    e.querySelectorAll('button').forEach(btn => {
        btn.addEventListener('click', () => {
            if (btn.classList.contains('active')) {
                btn.classList.remove('active')
            } else {
                btn.classList.add('active')
            }
        })
    })
})
