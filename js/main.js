var buttons = document.querySelectorAll("main span");

var contents = [
        '<figure class="clearfix">' +
            '<img src="./img/solar-power.jpg" alt="solar">' +
            '<figcaption>Solar energy is radiant light and heat from the Sun that is harnessed using a range of ever-evolving technologies such as solar heating, photovoltaics, solar thermal energy, solar architecture, molten salt power plants and artificial photosynthesis.It is an important source of renewable energy and its technologies are broadly characterized as either passive solar or active solar depending on how they capture and distribute solar energy or convert it into solar power.</figcaption>' +
        '</figure>',

         '<figure class="clearfix">' +
            '<img src="./img/hydro-power.jpg" alt="hydro-plant">' +
            '<figcaption>Hydropower or water power is power derived from the energy of falling water or fast running water, which may be harnessed for useful purposes. Since ancient times, hydropower from many kinds of watermills has been used as a renewable energy source for irrigation and the operation of various mechanical devices, such as gristmills, sawmills, textile mills, trip hammers, dock cranes, domestic lifts, and ore mills. A trompe, which produces compressed air from falling water, is sometimes used to power other machinery at a distance.</figcaption>' +
        '</figure>',

        '<figure class="clearfix">' +
            '<img src="./img/wind-power.jpg" alt="wind">' +
            '<figcaption>Wind power is the use of air flow through wind turbines to provide the mechanical power to turn electric generators. Wind power, as an alternative to burning fossil fuels, is plentiful, renewable, widely distributed, clean, produces no greenhouse gas emissions during operation, consumes no water, and uses little land.The net effects on the environment are far less problematic than those of nonrenewable power sources</figcaption>' +
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

    if (ev.target.innerHTML === "Solar") {
        container.innerHTML = contents[0];
    } else if (ev.target.innerHTML === "Hydro") {
        container.innerHTML = contents[1];
    } else {
        container.innerHTML = contents[2];
    }

    ev.target.setAttribute("id", "active");
}

for (k = 0; k < buttons.length; k++) {
    buttons[k].addEventListener("click", handleClick);
}
