//Sidernav
const sideNav = document.querySelector('.sidenav');
M.Sidenav.init(sideNav, {});

// Slider
const slider = document.querySelector('.slider');
M.Slider.init(slider, {
    interval: 6000,
    height: 800,
    indicators: false,
    transition: 500
});

//Autocomplete
const auto = document.querySelector('#autoclomplete-input');
M.Autocomplete.init(auto, {
    data: {
        "Aruba": null,
        "Cancun": null
    }
});

//Material Boxed
const mb = document.querySelectorAll('.materialboxed');
M.Materialbox.init(mb, {});

//Scrollspy
const ss = document.querySelectorAll('.scrollspy');
M.ScrollSpy.init(ss, {});