
window.onload = function () {
    document.body.style.cursor = 'none';

    setTimeout(function () {
        $('.loading').fadeOut()
    }, 1000)

    let mouse = document.querySelector('.cursor')
    document.onmousemove = function (e) {
        let mouseX = e.pageX
        let mouseY = e.pageY

        mouse.style.left = mouseX + 'px'
        mouse.style.top = mouseY + 'px'
    }
    var myFullpage = new fullpage('#fullpage', {

        anchors: ['firstPage', 'secondPage', '3rdPage', '4rdPage', '5rdPage'],
        /* navigationPosition: 'left',
        navigationTooltips: ['Page 1', 'Page 2', 'Page 3', 'Page 4', 'Any text!'], */
        /* showActiveTooltip: true, */
        menu: '#menu',
        afterLoad: function (origin, destination, direction) {
            if (destination.index == 1) {
                document.querySelector('#section1').querySelector('.left').style.right = 0 + 'px';
                document.querySelector('#section1').querySelector('.left').style.opacity = 1;

                document.querySelector('#section1').querySelector('.right').style.left = 0 + 'px';
                document.querySelector('#section1').querySelector('.right').style.opacity = 1;

            }
            else if (origin && origin.index == 1) {
                document.querySelector('#section1').querySelector('.left').style.right = 130 + '%';
                document.querySelector('#section1').querySelector('.left').style.opacity = 0;

                document.querySelector('#section1').querySelector('.right').style.left = 130 + '%';
                document.querySelector('#section1').querySelector('.right').style.opacity = 0;
            }
        }
    });

    const toggle = document.getElementById('toggleDark');
    const body = document.querySelector('body');


    toggle.addEventListener('click', function () {
        this.classList.toggle('bi-moon');
        if (this.classList.toggle('bi-brightness-low-fill')) {
            body.style.background = '#E9D9CA';
            body.style.color = '#121212';
            body.style.transition = '2s';
            document.documentElement.style.setProperty('--background', '#EBE1DB')
            document.getElementById('btn_box').style.border = '1px solid #333'
            document.querySelector('i').style.color = '#d3a293'
        } else {
            body.style.background = '#121212';
            body.style.color = 'white';
            body.style.transition = '2s';
            document.documentElement.style.setProperty('--background', '#4B5A57')
            document.getElementById('btn_box').style.border = '1px solid #D3A293'
            document.querySelector('i').style.color = '#fff'
        }
    })

    $('.menu_open').click(function () {
        $('.menu_1').animate({
            'right': '0'
        })
        $('body').addClass('on')

    })

    $('.menu_close').click(function () {
        $('.menu_1').animate({
            'right': '-100%'
        }, 700)

        $('body').removeClass('on')
    })


    let menuWidth = $(".menu ul li").outerWidth();
    $(".bar").css({
        width: menuWidth,
        height: "3px",
    });

    $(".menu ul li").click(function () {
        let move = $(this).position().left;

        let thisWidth = $(this).outerWidth();

        console.log(move);
        console.log(thisWidth);
        $(".bar").animate({
            left: move,
            width: thisWidth,
        });
    });
    var swiper = new Swiper("#section4 .mySwiper", {
        slidesPerView: 4,
        spaceBetween: 30,
        centeredSlides: true,
        autoplay: {
            delay: 2500,
            disableOnInteraction: false,
        },
        pagination: {
            el: ".swiper-pagination",
            clickable: true,
        },
        observer: true,
        observeParents: true,
    });
    
    $(".web_menu li").click(function () {
        $(".web_menu li").removeClass("on");
        $(this).addClass("on");
        
        $(".right .list").removeClass("on");
        $(".right .list").eq($(this).index()).addClass("on");
    });
    
    $(".design_menu li").click(function () {
        $(".design_menu li").removeClass("on");
        $(this).addClass("on");
        
        $("#section4 .mySwiper").removeClass("on");
        $("#section4 .mySwiper").eq($(this).index()).addClass("on");
    });
}