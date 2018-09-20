$(function(){
        /*Map contol*/
        $("img[usemap]:first").mapify({
            hoverClass: "drop-hover"
        });

        $("img[usemap]:last").mapify({
            popOver: {
                content: function(zone){
                    $("."+zone.attr("data-title")+"").addClass("map-hover");
                    return "<strong>"+zone.attr("data-title")+"</strong>";
                },
                delay: 0.7,
                margin: "15px",
                height: "5vw",
                width: "10vw"
            },
            onAreaHighlight: function(){
            },
            onMapClear: function(){
                clear_map();
            }
        });

        /*Call map_action function*/
        map_action();
});

function clear_map() {
    $(".東京都").removeClass("map-hover");
    $(".神奈川県").removeClass("map-hover");
    $(".埼玉県").removeClass("map-hover");
    $(".茨城県").removeClass("map-hover");
    $(".千葉県").removeClass("map-hover");
    $(".栃木県").removeClass("map-hover");
    $(".群馬県").removeClass("map-hover");
}

function map_action(tokyo) {
    $('.東京都').on('mouseover', function() {
        $("#tokyo").mouseenter();
    })
        .on('mouseout', function() {
            $("#tokyo").mouseleave();
        })
    ;
    $('.神奈川県').on('mouseover', function() {
        $("#kanagawa").mouseenter();
    })
        .on('mouseout', function() {
            $("#kanagawa").mouseleave();
        })
    ;
    $('.埼玉県').on('mouseover', function() {
        $("#saitama").mouseenter();
    })
        .on('mouseout', function() {
            $("#saitama").mouseleave();
        })
    ;
    $('.千葉県').on('mouseover', function() {
        $("#chiba").mouseenter();
    })
        .on('mouseout', function() {
            $("#chiba").mouseleave();
        })
    ;
    $('.茨城県').on('mouseover', function() {
        $("#ibaraki").mouseenter();
    })
        .on('mouseout', function() {
            $("#ibaraki").mouseleave();
        })
    ;
    $('.栃木県').on('mouseover', function() {
        $("#tochigi").mouseenter();
    })
        .on('mouseout', function() {
            $("#tochigi").mouseleave();
        })
    ;
    $('.群馬県').on('mouseover', function() {
        $("#bgunma").mouseenter();
    })
        .on('mouseout', function() {
            $("#bgunma").mouseleave();
        })
    ;
}
