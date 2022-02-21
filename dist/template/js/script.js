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
if (document.querySelector('.slider-category')) {
    const categorySlider = new Splide('.slider-category', {
    perPage: 1,
    //rewind: true,
    pagination: false,
    arrows: true,
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
            pagination: false,
            arrows: true
        },
        600: {
            grid: {
                rows: 4,
                cols: 2,
                
            },
            pagination: true,
            arrows: false
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



const starSelector = new StarSelector('.star-selector');


/**
 * Company: reviews sliders
 */

if (document.querySelector('.js-company-review-slider')) {

    [...document.querySelectorAll('.js-company-review-slider')].forEach(_ => {
        const companySlider = new Splide(_, {
            perPage: 1,
            rewind: true,
            pagination: false,
    
        });
        companySlider.mount()
    })
}

[...document.querySelectorAll('.js-company-review__more')].forEach(_ => {
    _.addEventListener('click', () => {
        const textBlock = _.parentElement.parentElement.querySelector('.company-review__text_overflow');
        textBlock.classList.remove('company-review__text_overflow');
        //_.parentElement.parentElement.querySelector('.company-review__text_overflow').style.setProperty('--lines', 'auto');
        _.remove();
    })
});

/**
 * Tooltips
 */
[...document.querySelectorAll('.tippy')].forEach(_ => {
    // tippy(_, {
    //     content: _.getAttribute('data-tippy-content'),
    // });
    tippy('[data-tippy-content]', {
        allowHTML: true,
        interactive: true,
        placement: 'top',
    });
})