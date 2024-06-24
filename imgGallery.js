//---------- get elements ---------------
const getElements = [document.querySelector('#current-selected'), document.querySelectorAll('.sub-imgs img'), '/img/contemplation.jpg']
const [current, imgSelection, currentSrc] = getElements;


//---------- default current ------------
const defaultTranslate = 'translateY(-7px)';
imgSelection[0].style.transform = defaultTranslate;

//----------- be used later in forEach -------------
const imgZeroTranslate = (img) => {
    img.style.transform = 'translateY(0px)';
}

//-------------- return img src -----------------------
let getIndicator = document.querySelector('.img-indicate')


//---------- Global Event Function/ Event Delegation ------------------
function addGlobalEventListener(type, selector, callback) {
    document.addEventListener(type, e => {
        if (e.target.matches(selector)) callback(e)
    })
}

//----------- Click event --------------
addGlobalEventListener('click', '.sub-imgs img', e => {
    // get active-img
    const getActive = document.querySelector('.active-img')

    getActive.classList.remove('active-img')

    current.src = e.target.src;
    e.target.classList.add('active-img')

    // =======================
    // reverting translate to 0, except the selected
    imgSelection.forEach(imgZeroTranslate)
    e.target.style.transform = defaultTranslate;

    //current img name
    getIndicator.innerText = current.src.slice(26, 27).toUpperCase() + current.src.slice(27)
})

//------------- Double click event -----------
addGlobalEventListener('dblclick', '.sub-imgs img', e => {
    // get active-img
    const getActive = document.querySelector('.active-img')

    getActive.classList.remove('.active-img')

    current.src = currentSrc;
    imgSelection[0].classList.add('active-img')

    // =======================
    // reverting translate to 0, except the selected
    imgSelection.forEach(imgZeroTranslate)
    imgSelection[0].style.transform = defaultTranslate;

    //current img name
    getIndicator.innerText = current.src.slice(26, 27).toUpperCase() + current.src.slice(27)
})

/* ================ Carousel ===============
============================================== */

//--------- buttons ----------------
const prevBtn = document.querySelector('#prev')
const nextBtn = document.querySelector('#next')

//func for nextBtn
const next = () => {
    // get active-img, and next sibling
    const getActive = document.querySelector('.active-img')
    const activeNext = getActive.nextElementSibling

    getActive.classList.remove('active-img')

    // =======================
    // reverting translate to 0, except the selected
    imgSelection.forEach(imgZeroTranslate)

    // =======================
    // check if next sibling exist, else back to first child img element
    if (activeNext) {
        activeNext.classList.add('active-img')
        activeNext.style.transform = defaultTranslate;
        current.src = activeNext.src;
    } else {
        imgSelection[0].classList.add('active-img')
        imgSelection[0].style.transform = defaultTranslate;
        current.src = imgSelection[0].src;
    }
    //current img name
    getIndicator.innerText = current.src.slice(26, 27).toUpperCase() + current.src.slice(27)
}

// func for prevBtn
const prev = () => {
    // get active-img, and prev sibling
    const getActive = document.querySelector('.active-img')
    const activePrev = getActive.previousElementSibling

    getActive.classList.remove('active-img')

    // =======================
    // reverting translate to 0, except the selected
    imgSelection.forEach(imgZeroTranslate)

    // =======================
    // check if prev sibling exist and name of the first class is not circle, else back to first child img element
    if (activePrev && activePrev.classList[0] !== 'circle') {
        activePrev.classList.add('active-img')
        activePrev.style.transform = defaultTranslate;
        current.src = activePrev.src;
    } else {
        imgSelection[imgSelection.length - 1].classList.add('active-img')
        imgSelection[imgSelection.length - 1].style.transform = defaultTranslate;
        current.src = imgSelection[imgSelection.length - 1].src;
    }
    //current img name
    getIndicator.innerText = current.src.slice(26, 27).toUpperCase() + current.src.slice(27)
}

// executing events for those designated function for the buttons
nextBtn.addEventListener('click', next, { capture: true })
prevBtn.addEventListener('click', prev, { capture: true })