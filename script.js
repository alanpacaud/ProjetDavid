var $;
$(function () {

    var init = function () {

        //Baisse l'opacité rapidement puis la remet
        $('header truc li a').hover(function () {
            $(this).fadeTo(200, 0.5)
        }, function () {
            $(this).fadeTo(500, 1)
        });


        

                var changeColorTo = function (rx, gx, bx, ax, r, g, b, a) {
                    let rx //couleur r actuel de la classe
                    let gx //couleur g actuel de la classe
                    let bx //couleur b actuel de la classe
                    let ax //couleur a actuel de la classe
                    
                    let r //couleur r actuel de la classe
                    let g //couleur g actuel de la classe
                    let b //couleur b actuel de la classe
                    let a //couleur a actuel de la classe
                    $("changeColor").css('color', `rgba(${r}, ${g}, ${b}, ${a}`);
        
        
                    let r, g, b, a = 0;
                    r++;
                    g++;
                    b++;
                    a++;
                    setInterval(changeColorTo(r++, g++, b++, a++), 500);
                };
        
    };
    init();
})
