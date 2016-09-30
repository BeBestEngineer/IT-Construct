$(document).ready(function () {

            function show_mobile_menu () {
                if ( $('#main-menu-list > li:nth-child(2) a').html() == 'Каталог' ) {
                    $('#catalog-touch').append( $('#sidebar-catalog-list') );
                    $('.data-field-items').after( $('.sidebar-news') );
                    replace_li_main_menu_mobile ();
                    replace_li_sidebar_catalog_mobile ();
                    //Переносим часть строки в параграфы
                    $("#data-field-items-p-1").html( $('#data-field-items-span-1').html()+'<br>' );
                    $('#data-field-items-span-1').empty();
                    $("#data-field-items-p-2").html( $('#data-field-items-span-2').html() );
                    $('#data-field-items-span-2').empty();
                }
            };

            function show_desktop_menu () {
                if ( $('#main-menu-list > li:nth-child(2) a').html() == 'О компании' ) {
                    $("#main-menu-list").show();
                    $("#sidebar-catalog-list").show();
                    $('nav.sidebar-catalog').append( $('#sidebar-catalog-list') );
                    $('.sidebar-catalog').after( $('.sidebar-news') );
                    replace_li_main_menu_desktop ();
                    replace_li_sidebar_catalog_desktop ();
                    //Убираем параграфы
                    $('#data-field-items-span-1').html( $("#data-field-items-p-1").html()+'<br>' );
                    $("#data-field-items-p-1").empty();
                    $('#data-field-items-span-2').html( $("#data-field-items-p-2").html() );
                    $("#data-field-items-p-2").empty();
                    $("#data-field-items-span-1 br").remove();
                }
            };

            function replace_li_main_menu_mobile () {
                $('#main').after( $('#about-company') );
                $('#delivery').after( $('#news') );
            };

            function replace_li_main_menu_desktop () {
                $('#main').after( $('#catalog-desktop') );
                $('#news').after( $('#delivery') );
            }

            function replace_li_sidebar_catalog_mobile () {
                if ( $("#pos-3 a").html() !== 'Картриджи'  ) {
                    $('#sidebar-catalog-temp').append( $("#pos-3 a") );
                    $("#pos-3").html( $("#pos-5").html() );
                    $("#pos-5").html( $("#pos-7").html() );
                    $("#pos-7").html( $("#sidebar-catalog-temp").html() );
                    $('#sidebar-catalog-temp').html('');
                }
            }

            function replace_li_sidebar_catalog_desktop () {
                if ( $("#pos-3 a").html() == 'Картриджи'  ) {
                    $('#sidebar-catalog-temp').append( $("#pos-3 a") );
                    $("#pos-3").html( $("#pos-7").html() );
                    $("#pos-7").html( $("#pos-5").html() );
                    $("#pos-5").html( $("#sidebar-catalog-temp").html() );
                    $('#sidebar-catalog-temp').html('');
                }
            }

            //Ставим событие клика на ссылку Меню
            $('#main-menu-touch').on('click',function(){
                $('#main-menu-list').toggle('slow');
            });

            // Ставим событие клика на ссылку Каталога
            $('#catalog-touch').on('click',function(){
                $("#sidebar-catalog-list").toggle('slow');
            });




            //При загрузке с устройства с шириной экрана меньше 480 пискселей
            var win_w = $(window).width();
            if ( win_w <= 480 ) {
                show_mobile_menu ();
            }

            //При изменении ширины экрана
            $(window).resize(function(){
                var w = $(window).width();
                var mb = $("#main-menu-touch");
                // if ( w > 320 $$ mb.is(':hidden') ) {
                if ( w <= 480 && mb.is(':visible')  ) {
                    show_mobile_menu ();
                } else {
                    show_desktop_menu ();
                }
            });

});