(function ($) {

    "use strict";
    $(".carousel-inner .item:first-child").addClass("active");
    /* Mobile menu click then remove
    ==========================*/
    $(".mainmenu-area #primary_menu li a").on("click", function () {
        $(".navbar-collapse").removeClass("in");
    });
    /* Scroll to top
    ===================*/
    $.scrollUp({
        scrollText: '<i class="lnr lnr-arrow-up"></i>',
        easingType: 'linear',
        scrollSpeed: 900,
        animation: 'fade'
    });
    /* testimonials Slider Active
    =============================*/
    $('.gallery-slide').owlCarousel({
        loop: true,
        margin: 0,
        responsiveClass: true,
        nav: false,
        autoplay: true,
        autoplayTimeout: 4000,
        smartSpeed: 1000,
        navText: ['<i class="lnr lnr-chevron-left"></i>', '<i class="lnr lnr-chevron-right"></i>'],
        responsive: {
            0: {
                items: 1,
            },
            600: {
                items: 2
            },
            1280: {
                items: 3
            },
            1500: {
                items: 4
            }
        }
    });
    /* testimonials Slider Active
    =============================*/
    $('.team-slide').owlCarousel({
        loop: true,
        margin: 0,
        responsiveClass: true,
        nav: true,
        autoplay: true,
        autoplayTimeout: 4000,
        smartSpeed: 1000,
        navText: ['<i class="lnr lnr-chevron-left"></i>', '<i class="lnr lnr-chevron-right"></i>'],
        responsive: {
            0: {
                items: 1,
            },
            600: {
                items: 2
            },
            1000: {
                items: 3
            }
        }
    });
    $(".toggole-boxs").accordion();
    /*---------------------------
    MICHIMP INTEGRATION
    -----------------------------*/
    $('#mc-form').ajaxChimp({
        url: 'https://quomodosoft.us14.list-manage.com/subscribe/post?u=b2a3f199e321346f8785d48fb&amp;id=d0323b0697', //Set Your Mailchamp url
        callback: function (resp) {
            if (resp.result === 'success') {
                $('.subscrie-form, .join-button').fadeOut();
                $('body').css('overflow-y', 'scroll');
            }
        }
    });

    /*-- Lang switcher --*/
     $("#plpick").click(function(e) {
          var language = {
        pl: {
          home: "Strona główna",
          about: "O TipMe",
          feature: "Funkcje Aplikacji",
          lang: "PL",
          faq: "FAQ",
          contact: "Kontakt",
          header: "Zostawiaj napiwki z Twojego telefonu. To prostsze niz myślisz!",
          news_subtitle: "Firma TipMe jest beneficjentem programu Rozwój Startupów w Polsce Wschodniej. Nasze rozwiązanie informatyczne zostało wybrane do dofinansowania i otrzyma wsparcie z Funduszy Unijnych.",
          under_header: "Czy zdarzyło Ci się nie zostawić napiwku, bo nie miałeś przy sobie gotówki? Z aplikacją TipMe ten problem to przeszłość. Nagradzaj za wyśmienitą obsługę bez konieczności odwiedzenia bankomatu!</br>Wkrótce na obu systemach!"
          about_page_description: "Nasza innowacyjna aplikacja oferuje zarówno klientom jak i pracownikom usługowym znacznie więcej niż myślisz. Oprócz sprawienia, że dawanie napiwków jest niewiarygodnie łatwe, pozwala także na dostęp do napiwków dla każdego pracownika, daje natychmiastowy dostęp do uzyskanych funduszy i pozwala pracownikom zarządzać ich dochodami.</br></br>Wkrótce na obu systemach!"
          news_subtitle: "Finansowanie z Funduszy Unijnych"
          news_description: "Firma TipMe jest beneficjentem programu Rozwój Startapow w Polsce Wschodniej. Nasz rozwiazanie informatyczne zostalo wybrane do dofinansowania i otrzyma wsparcie z Funduszy Unijnych."
          application_subtitle: "Szybkie i pezproblemowe doświadczenie! Zawsze."
          feat1_subtitle: "Staramy się, by nasza aplikacja była prosta w obsłudze, a jednoczesnie szybka i dająca dużo możliwości. Z TipMe masz to wszystko pod ręką.
          feat2_title: "Bezpieczne płatności"
          feat2_subtitle: "Bezpieczeństwo jest fundamentem naszej splikacji. Działamy zgodnie z najlepszymi praktykami i współpracujemy z liderami na rycku płatności, aby być pewnymi, że najlepiej chronimy naszy klientów przed oszustwami."
          feat3_title: "Wiele opcji płatności"
          feat3_subtitle: "Współpracujemy z wieloma dostawcami usług płatności, aby nasz produkt był dostępny dla praktycznie każdego z rachunkiem bankowym lub kartą kredytową. Dla Twojej wygody."
          feat4_title: "Piękny design"
          feat4_subtitle: "Kochamy estetykę. Piękny i intuicyjny design naszej aplikacji zapewnia bezproblemową i przyjemną obsługę."
          feat5_title: "Ochrona prywatności jest dla nas kluczowa"
          feat5_subtitle: "Nikomu nie udostępniamy Twoich danych. Pozostają one zawsze bezpieczne na Twoim urządzeniu."
          feat6_title: "Dostępność"
          feat6_subtitle: "Dbamy o to, by dostarczać najlepsze usługi każdemu klientowi, także tym, którzy mają specjalne potrzeby"
          faq2: "Najczęściej zadawane pytania"
          how_work: "Jak to działa?"
          how_work_ans: "Po prostu skanujesz kod QR lub wyszukujesz punkt usługowy, potem wybierasz osobę, wpisujesz kwotę i klikasz “wyślij” - to takie proste."
          how_pay: "Czy mogę zapłacić przez Apple Pay lub Google Pay?"
          how_pay_ans: "Tak, możesz. Obsługujemy wszystkie popularne metody płatności."
          how_safe: "Jak bezpieczne jest dawanie napiwków tą aplikacją?"
          how_safe_ans: "Jest w 100% bezpieczne. Nasi partnerzy spełniają najwyższe międzynarodowe standardy."
          find_waiter: "Jak mogę odnaleźć kelnera, któremu chcę dać napiwek?"
          find_waiter_ans: "Po wejścu na profil restauracji, przewiń listę pracowników i znajdź jego imię lub zdjęcie."
          fees: "Czy są jakieś ukryte opłaty?"
          fees_ans: "TipMe pobiera małą prowizję za obsługę płatności. Aktualne opłaty można znaleźć w zakładce “Tabela Opłat” w aplikacji."
          if_anon: "Czy płatności są anonimowe?"
          if_anon_ans: "Decyzja należy do Ciebie. Domyślnie płatności są anonimowe. Możesz to zmienić w “Ustawieniach”."
          pay_after: "Czy mogę zapłacić później?"
          pay_after_ans: "Tak, możesz zostawić napiwek już po opuszczeniu punktu usługowego. Możesz nawet to zrobić przed przybyciem do niego. Zawsze masz możliwość wyszukania danego lokalu po jego nazwie lub lokalizacji. Nie potrzebujesz kodu QR."
          can_split: "Czy mogę dać napiwek razem z kimś innym?"
          can_split_ans: "Nie mamy jeszcze takiej funkcjonalności. Jednakże, każda z osób może zostawić osobny napiwek."
          contact_us_title: "Skontaktuj się z  NAMI"
          contact_us_subtitle: "Możesz zawsze do nas napisać!"
          
        }
      };
          home.textContent = language.pl.home;
          about.textContent = language.pl.about;
          feature.textContent = language.pl.feature;
          faq.textContent = language.pl.faq;
          lang.textContent = language.pl.lang;
          contact.textContent = language.pl.contact;
          header.textContent = language.pl.header;
          under_header.textContent = language.pl.under_header;
     }).css('cursor', 'pointer');

    $("#enpick").click(function(e) {
          var language = {
        en: {
          home: "Home",
          about: "About TipMe",
          feature: "Features",  
          faq: "FAQ",
          lang: "EN",
          contact: "Contact",
          about_page_title: "About TipMe",
          about_page_subtitle: "It is more than just tips",
          about_page_description: "Our innovative app offers much more than you think for both customers and service professionals. Apart from making tipping experience incredibly easy, it also democratize access to tips for every employee, give instant access to deployed funds and help staff to manage their income. Soon on both platforms!",
          news_title: "What's new",
          news_subtitle: "TipMe has secured funding",
          news_description: "TipMe is a beneficiary of the Startup Development in Eastern Poland program. Our company has been selected for financing from EU funds.",
          application_title: "Application",
          application_subtitle: "Fast and seamless experience! Always.",
          feat1_title: "Fast and secure tipping",
          feat1_subtitle: "MM",
          feat2_title: "Menu on your phone",
          feat2_subtitle: "",
          feat3_title: "Recommendations",
          feat3_subtitle: "",
          feat4_title: "Pay for a receipt",
          feat4_subtitle: "",
          feat5_title: "Helps to calculate a tip",
          feat5_subtitle: "",
          feat6_title: "Option to leave a comment",
          feat6_subtitle: "",
          header: "Cashless tipping at your fingertips.",
          under_header: "So you want to leave a tip but you have no cash in the wallet? We solved this problem for you! Our mobile application is dead simple and allows to tip in the blink of an eye. This time you can skip the ATM!"
        }
      };
          home.textContent = language.en.home;
          about.textContent = language.en.about;
          feature.textContent = language.en.feature;
          faq.textContent = language.en.faq;
          lang.textContent = language.en.lang;
          contact.textContent = language.en.contact;
          about_page_title.textContent = language.en.about_page_title;
          about_page_subtitle.textContent = language.en.about_page_subtitle;
          about_page_description.textContent = language.en.about_page_description;
          news_title.textContent = language.en.news_title;
          news_subtitle.textContent = language.en.news_subtitle;
          news_description.textContent = language.en.news_description;
          header.textContent.textContent = language.en.header;
          application_title.textContent = language.en.application_title;
          application_subtitle.textContent = language.en.application_subtitle;
          under_header.textContent = language.en.under_header;
          feat1_title.textContent = language.en.feat1_title;
          feat1_subtitle.textContent = language.en.feat1_subtitle;
          feat2_title.textContent = language.en.feat2_title;
          feat2_subtitle.textContent = language.en.feat2_subtitle;
          feat3_title.textContent = language.en.feat3_title;
          feat3_subtitle.textContent = language.en.feat3_subtitle;
          feat4_title.textContent = language.en.feat4_title;
          feat4_subtitle.textContent = language.en.feat4_subtitle;
          feat5_title.textContent = language.en.feat5_title;
          feat5_subtitle.textContent = language.en.feat5_subtitle;
          feat6_title.textContent = language.en.feat6_title;
          feat6_subtitle.textContent = language.en.feat6_subtitle;
          
     }).css('cursor', 'pointer');







    /*-- Smoth-Scroll --*/
    $('.mainmenu-area a[href*="#"]')
        // Remove links that don't actually link to anything
        .not('[href="#"]')
        .not('[href="#0"]')
        .click(function (event) {
            // On-page links
            if (
                location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') &&
                location.hostname == this.hostname
            ) {
                // Figure out element to scroll to
                var target = $(this.hash);
                target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
                // Does a scroll target exist?
                if (target.length) {
                    // Only prevent default if animation is actually gonna happen
                    event.preventDefault();
                    $('html, body').animate({
                        scrollTop: target.offset().top
                    }, 1000, function () {
                        // Callback after animation
                        // Must change focus!
                        var $target = $(target);
                        $target.focus();
                        if ($target.is(":focus")) { // Checking if the target was focused
                            return false;
                        } else {
                            $target.attr('tabindex', '-1'); // Adding tabindex for elements not focusable
                            $target.focus(); // Set focus again
                        };
                    });
                }
            }
        });


        // /**
        // * Dropdown
        // */
        $('[data-init="dropdown"]').each(function(index, el) {

        $(el).find('a.dropdown__toggle').on('click', function(event) {
        		event.preventDefault();
        		$(el).find('.dropdown__content').toggleClass('open');
        		$(el).toggleClass('open');
        	});

        $(document).on('click', function(event) {
        		var $content = $(el).find('.dropdown__content');
        		if ($.contains(el, event.target)) {
        			return;
        		}

        if ($(el).hasClass('open')) {
        			$(el).removeClass('open');
        		}

        if ($content.hasClass('open')) {
        			$content.removeClass('open');
        		}
        	});
        });


    /*--------------------
       MAGNIFIC POPUP JS
       ----------------------*/
    var magnifPopup = function () {
        $('.popup').magnificPopup({
            type: 'iframe',
            removalDelay: 300,
            mainClass: 'mfp-with-zoom',
            gallery: {
                enabled: true
            },
            zoom: {
                enabled: true, // By default it's false, so don't forget to enable it

                duration: 300, // duration of the effect, in milliseconds
                easing: 'ease-in-out', // CSS transition easing function

                // The "opener" function should return the element from which popup will be zoomed in
                // and to which popup will be scaled down
                // By defailt it looks for an image tag:
                opener: function (openerElement) {
                    // openerElement is the element on which popup was initialized, in this case its <a> tag
                    // you don't need to add "opener" option if this code matches your needs, it's defailt one.
                    return openerElement.is('img') ? openerElement : openerElement.find('img');
                }
            }
        });
    };
    // Call the functions
    magnifPopup();
    /* Preloader Js
    ===================*/
    $(window).on("load", function () {
        $('.preloader').fadeOut(500);
        /*WoW js Active
        =================*/
        new WOW().init({
            mobile: false,
        });
    });
})(jQuery);
