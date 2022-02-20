/**
 * Mobile panel
 */
const mp = new MobilePanel({
    'navbar': '.nav-main'
});

mp.button({
    'text': '<a href="/"><img src="/template/svg/logo-trustnavigator.svg" width="100" height="25" alt="Trust Navigator" class="logo-mobile__img"></a>',
});

/**
 * Main: slider category
 */
//FIXME:
if (document.querySelector('.slider-category')) {
    const categorySlider = new Splide('.slider-category', {
    perPage: 1,
    //rewind: true,
    pagination: false,
    grid: {
        rows: 3,
        cols: 4,
        gap: {
            row: '1rem',
            col: '20px',
        },
        
    },
    breakpoints: {
        1100: {
            grid: {
                rows: 4,
                cols: 2,
            },
        },
        600: {
            grid: {
                rows: 4,
                cols: 2,
            },
        },
    },
});
categorySlider.mount(window.splide.Extensions);
}

if (document.querySelector('.your-stories__slide')) {
    var yourStoriesSlide = new Splide('.your-stories__slide', {
        perPage: 1,
        rewind: true,
        pagination: false,
        type: 'loop'
    });
    
    yourStoriesSlide.on('mounted moved', function (newIndex, prevIndex, destIndex) { 
        
            const prev = document.querySelector('.your-stories__slide .is-prev img').getAttribute('src');
            const next = document.querySelector('.your-stories__slide .is-next img').getAttribute('src');

            document.querySelector('.your-stories__slide .splide__arrow--prev').style.backgroundImage = `url(${prev})`
            document.querySelector('.your-stories__slide .splide__arrow--next').style.backgroundImage = `url(${next})`
        
    
        // console.log(yourStoriesSlide.Components.Slides.getAt(yourStoriesSlide.index).slide.querySelector('img').getAttribute('src'))
        // document.querySelector('.your-stories__slide .splide__arrow--prev').style.backgroundImage = `url(${yourStoriesSlide.Components.Slides.getAt(prevIndex).slide.querySelector('img').getAttribute('src')})`
        // document.querySelector('.your-stories__slide .splide__arrow--next').style.backgroundImage = `url(${yourStoriesSlide.Components.Slides.getAt(destIndex).slide.querySelector('img').getAttribute('src')})`
    });
    yourStoriesSlide.mount();
}


/**
 * Category aside filter
 */
document.querySelectorAll('.js-category-filter input[type="radio"]').forEach(element => {
    element.addEventListener('change', function(){
        document.querySelector('.js-category-filter').submit()
    })
})

if (document.querySelector('.js-categories-toggle-filter-panel')) {
    document.querySelector('.js-categories-toggle-filter-panel').addEventListener('click', function(){
        document.querySelector('.mp__overlay').classList.toggle('mp--on');
        document.querySelector('.js-category-filter').classList.toggle('opened');
    })

    document.querySelector('.mp__overlay').addEventListener('click', function () {
        document.querySelector('.js-category-filter').classList.remove('opened');
    })
}

/**
 * Star secelcor
 */
// [...document.querySelectorAll('.star-selector input')].forEach(_ => {
//     _.addEventListener('mouseover', function(e) {
//         console.log(e.target.value);
//         console.log(e.target.parentElement.parentElement)
//         e.target.parentElement.parentElement.classList.remove('rating_10', 'rating_20', 'rating_30', 'rating_40', 'rating_50');
//         e.target.parentElement.parentElement.classList.add(`rating_${e.target.value * 10}`)
        
//     })
// })

class StarSelector {
    constructor(selector) {
        if (!selector) {
            return
        }
        const root = document.querySelector(selector);
        if (!root) {
            return
        }
        this.root = root;
        this.oldValue = 0;
        this.hoverListener();
        this.clickListener();
        this.blurListener();
    }
    hoverListener() {
        [...this.root.querySelectorAll('input')].forEach(_ => {
            _.addEventListener('mouseover', e => {
                this.setRating(e.target.value * 10)
            })
        })
    }
    clickListener() {
        [...this.root.querySelectorAll('input')].forEach(_ => {
            _.addEventListener('click', e => {
                const rating = e.target.value * 10;
                this.setRating(rating);
                this.oldValue = rating;
            })
        })
    }
    blurListener() {
        this.root.addEventListener('mouseleave', e => {
            this.setRating(this.oldValue);
        })
    }
    setRating(value) {
        const stars5 = this.root.querySelector('.stars5');
        stars5.classList.remove('rating_10', 'rating_20', 'rating_30', 'rating_40', 'rating_50');
        stars5.classList.add(`rating_${value}`);
    }
}

const starSelector = new StarSelector('.star-selector')