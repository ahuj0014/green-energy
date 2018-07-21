var buttons = document.querySelectorAll("main span");

var contents = [
        '<figure class="clearfix">' +
            '<img src="./img/slide-1.jpg" alt="hydro-plant">' +
            '<figcaption>Renewable energy resources exist over wide geographical areas, in contrast to other energy sources, which are concentrated in a limited number of countries. Rapid deployment of renewable energy and energy efficiency is resulting in significant energy security, climate change mitigation, and economic benefits</figcaption>' +
        '</figure>',

         '<figure class="clearfix">' +
            '<img src="./img/slide-3.jpg" alt="hydro-plant">' +
            '<figcaption>While many renewable energy projects are large-scale, renewable technologies are also suited to rural and remote areas and developing countries, where energy is often crucial in human development.</figcaption>' +
        '</figure>',

        '<figure class="clearfix">' +
            '<img src="./img/wind-power.jpg" alt="hydro-plant">' +
            '<figcaption>Renewable energy systems are rapidly becoming more efficient and cheaper. Their share of total energy consumption is increasing. Growth in consumption of coal and oil could end by 2020 due to increased uptake of renewables and natural gas.</figcaption>' +
        '</figure>'
    ];

var container = document.querySelector(".container");
container.innerHTML = contents[0];

function handleClick(ev) {
    ev.preventDefault();
    var target = ev.target;

    for (k = 0; k < buttons.length; k++) {
        if (buttons[k].hasAttribute("id")) {
            buttons[k].removeAttribute("id");
        }
    }

    if (ev.target.innerHTML === "Solution1") {
        container.innerHTML = contents[0];
    } else if (ev.target.innerHTML === "Solution2") {
        container.innerHTML = contents[1];
    } else {
        container.innerHTML = contents[2];
    }

    ev.target.setAttribute("id", "active");
}

for (k = 0; k < buttons.length; k++) {
    buttons[k].addEventListener("click", handleClick);
}
