$('.navbar-brand,#main-menu a[href^="#"],#go_top_page a').on('click', function (e) {
    let $target = $($(this).attr('href'))
    if ($target.length) {
        e.preventDefault();
        $('html,body').stop().animate({
            scrollTop: $target.offset().top
        }, {
            duration: 2000,
            easing: 'easeInOutBack'
        })
    }
})