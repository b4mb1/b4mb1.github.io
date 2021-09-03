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
          about: "O Serval",
          feature: "Aplikacja",
          lang: "PL",
          news: "Aktualności",
          faq: "FAQ",
          contact: "Kontakt",
          header: "Zostawiaj napiwki z Twojego telefonu. To prostsze niż myślisz!",
          under_header: "Nie masz gotówki i nie możesz zostawić napiwku? Z aplikacją Serval ten problem to przeszłość. Nagradzaj za wyśmienitą obsługę bez konieczności odwiedzenia bankomatu! Wkrótce dostępna na system iOS i Android!",
          about_page_title: "O Serval",
          about_page_subtitle: "Więcej niż tylko napiwki",
          about_page_description: "Nasza aplikacja wprowadza wiele ulepszeń do tego w jaki sposób są obecnie dawane napiwki. Sprawia, że dawanie napiwków jest niewiarygodnie łatwe, demokratyzuje dostęp do napiwków (każdy może dostać napiwek, także osoby, z którymi nie masz kontaktu np. kucharz), daje natychmiastowy dostęp do uzyskanych funduszy i pozwala pracownikom zarządzać ich dochodami. Wkrótce dostępna na system iOS i Android!",
          news_title: "Aktualności",
          news_subtitle: "Dofinansowanie z Funduszy Europejskich",
          news_description: "Firma TipMe jest beneficjentem programu Rozwój Startapów w Polsce Wschodniej. Nasze rozwiązanie informatyczne zostało wybrane przez Polską Agencję Rozwoju Przedsiębiorczości w ramach POPW 1.1.2 i otrzyma dofinansowania z Funduszy Europejskich.",
          learn_more: "Czytaj dalej",
          application_title: "Aplikacja",
          application_subtitle: "Dostępna na system iOS i Android!",
          feat1_subtitle: "Nasza aplikacja to nowe możliwości. Nie musisz posiadać gotówki ani czekać na kelnera, a takżę możesz zostawić napiwek po wyjściu z restauracji.",
          feat1_title: "Nowa kultura napiwków",
          feat4_title: "Bezpieczne płatności",
          feat4_subtitle: "Bezpieczeństwo jest fundamentem naszej aplikacji. Działamy zgodnie z najlepszymi praktykami i współpracujemy z liderami na rynku płatności, aby być pewnymi, że najlepiej chronimy naszy klientów przed oszustwami.",
          feat3_title: "Wiele opcji płatności",
          feat3_subtitle: "Współpracujemy z wieloma dostawcami usług płatności, aby nasz produkt był dostępny dla praktycznie każdego z rachunkiem bankowym lub kartą kredytową.",
          feat2_title: "Zostaw komentarz",
          feat2_subtitle: "Poza możliwością zostawienia napiwku możesz, także podziękować lub przesłać uwagi osobie, która Cię obsługiwała.",
          feat5_title: "Ochrona prywatności jest dla nas kluczowa",
          feat5_subtitle: "Nikomu nie udostępniamy Twoich danych. Pozostają one zawsze bezpieczne na Twoim urządzeniu.",
          feat6_title: "Dostępność",
          feat6_subtitle: "Dbamy o to, by dostarczać najlepsze usługi każdemu klientowi, także tym, którzy mają specjalne potrzeby.",
          promo_description: "Powstał nasz pierwszy film promocyjny. Zapraszamy do ogladania, polubienia i udostepniania!",
          promo_title: "PROMO",
          promo_subtitle: "Zobacz sam!",
          faq2: "Najczęściej zadawane pytania",
          how_work: "Jak to działa?",
          how_work_ans: "Po prostu skanujesz kod QR lub wyszukujesz punkt usługowy, potem wybierasz osobę, wpisujesz kwotę i klikasz “wyślij” - to takie proste.",
          how_pay: "Czy mogę zapłacić przez Apple Pay lub Google Pay?",
          how_pay_ans: "Tak, możesz. Obsługujemy wszystkie popularne metody płatności.",
          how_safe: "Jak bezpieczne jest dawanie napiwków tą aplikacją?",
          how_safe_ans: "Jest w 100% bezpieczne. Nasi partnerzy spełniają najwyższe międzynarodowe standardy.",
          find_waiter: "Jak mogę odnaleźć kelnera, któremu chcę dać napiwek?",
          find_waiter_ans: "Po wejścu na profil restauracji, przewiń listę pracowników i znajdź jego imię lub zdjęcie.",
          fees: "Czy są jakieś ukryte opłaty?",
          fees_ans: "Serval pobiera małą prowizję za obsługę płatności. Aktualne opłaty można znaleźć w zakładce “Tabela Opłat” w aplikacji.",
          if_anon: "Czy płatności są anonimowe?",
          if_anon_ans: "Decyzja należy do Ciebie. Domyślnie płatności są anonimowe. Możesz to zmienić w “Ustawieniach”.",
          pay_after: "Czy mogę zapłacić później?",
          pay_after_ans: "Tak, możesz zostawić napiwek już po opuszczeniu punktu usługowego. Możesz nawet to zrobić przed przybyciem do niego. Zawsze masz możliwość wyszukania danego lokalu po jego nazwie lub lokalizacji. Nie potrzebujesz kodu QR.",
          can_split: "Czy mogę dać napiwek razem z kimś innym?",
          can_split_ans: "Nie mamy jeszcze takiej funkcjonalności. Jednakże, każda z osób może zostawić osobny napiwek.",
          contact_us_title: "Kontakt",
          contact_us_subtitle: "Napisz do nas!"
        }
      };
          home.textContent = language.pl.home;
          about.textContent = language.pl.about;
          feature.textContent = language.pl.feature;
          faq.textContent = language.pl.faq;
          lang.textContent = language.pl.lang;
          contact.textContent = language.pl.contact;
          about_page_title.textContent = language.pl.about_page_title;
          about_page_subtitle.textContent = language.pl.about_page_subtitle;
          about_page_description.textContent = language.pl.about_page_description;
          news_title.textContent = language.pl.news_title;
          news_subtitle.textContent = language.pl.news_subtitle;
          news_description.textContent = language.pl.news_description;
          header.textContent = language.pl.header;
          application_title.textContent = language.pl.application_title;
          application_subtitle.textContent = language.pl.application_subtitle;
          under_header.textContent = language.pl.under_header;
          feat1_title.textContent = language.pl.feat1_title;
          feat1_subtitle.textContent = language.pl.feat1_subtitle;
          feat2_title.textContent = language.pl.feat2_title;
          feat2_subtitle.textContent = language.pl.feat2_subtitle;
          feat3_title.textContent = language.pl.feat3_title;
          feat3_subtitle.textContent = language.pl.feat3_subtitle;
          feat4_title.textContent = language.pl.feat4_title;
          feat4_subtitle.textContent = language.pl.feat4_subtitle;
          feat5_title.textContent = language.pl.feat5_title;
          feat5_subtitle.textContent = language.pl.feat5_subtitle;
          feat6_title.textContent = language.pl.feat6_title;
          feat6_subtitle.textContent = language.pl.feat6_subtitle;
          promo_title.textContent = language.pl.promo_title;
          promo_subtitle.textContent = language.pl.promo_subtitle;
          promo_description.textContent = language.pl.promo_description;
          faq2.textContent = language.pl.faq2;
          how_work.textContent = language.pl.how_work;
          how_work_ans.textContent = language.pl.how_work_ans;
          how_pay.textContent = language.pl.how_pay;
          how_pay_ans.textContent = language.pl.how_pay_ans;
          how_safe.textContent = language.pl.how_safe;
          how_safe_ans.textContent = language.pl.how_safe_ans;
          find_waiter.textContent = language.pl.find_waiter;
          find_waiter_ans.textContent = language.pl.find_waiter_ans;
          fees.textContent = language.pl.fees;
          fees_ans.textContent = language.pl.fees_ans;
          if_anon.textContent = language.pl.if_anon;
          if_anon_ans.textContent = language.pl.if_anon_ans;
          pay_after.textContent = language.pl.pay_after;
          pay_after_ans.textContent = language.pl.pay_after_ans;
          can_split.textContent = language.pl.can_split;
          can_split_ans.textContent = language.pl.can_split_ans;
          contact_us_title.textContent = language.pl.contact_us_title;
          contact_us_subtitle.textContent = language.pl.contact_us_subtitle;
          learn_more.textContent = language.pl.learn_more;
     }).css('cursor', 'pointer');

    $("#enpick").click(function(e) {
          var language = {
        en: {
          home: "Home",
          about: "About Serval",
          feature: "Application", 
          news: "What's new", 
          faq: "FAQ",
          lang: "EN",
          contact: "Contact",
          about_page_title: "About Serval",
          about_page_subtitle: "It is more than just tips",
          about_page_description: "Our innovative app offers much more than you think for both customers and service professionals. Apart from making tipping experience incredibly easy, it also democratize access to tips for every employee, give instant access to deployed funds and help staff to manage their income. Available on both platforms.",
          news_title: "What's new",
          news_subtitle: "Serval (previously TipMe) has secured funding",
          news_description: "TipMe is a beneficiary of the Development of Start-ups in Eastern Poland program. Our IT solution has been selected by the Polish Agency for Enterprise Development under POPW 1.1.2 and will receive funding from European Union.",
          application_title: "Application",
          application_subtitle: "Fast and seamless experience! Always.",
          promo_title: "PROMO",
          promo_subtitle: "See for yourself!",
          promo_description: "Our first promotional video was made. We invite you to watch, like and share!",
          feat1_title: "New tipping experience",
          feat1_subtitle: "Our application brings new possibilities. You don't need to have cash on you, wait for a waiter, and you can always tip after leaving the restaurant.",
          feat4_title: "Secure payments",
          feat4_subtitle: "Security lies at the heart of our app. By adhering to security best practices and working only with payment industry leaders we make sure to protect our customers from malware and fraudsters.",
          feat3_title: "Multiple payment options",
          feat3_subtitle: "We work with many payment providers. Payment cards, BLIK, Google Pay. For your convenience.",
          feat2_title: "Option to leave a comment",
          feat2_subtitle: "In addition to leaving a tip, you can also thank or send comments to the person who served you.",
          feat5_title: "Privacy is at our heart",
          feat5_subtitle: "We share your data withn no one. It always stays locked on your phone.",
          feat6_title: "Accessability",
          feat6_subtitle: "We care to deliver a superior mobile experience to every customer, including those with special need.",
          header: "Cashless tipping at your fingertips.",
          under_header: "So you want to leave a tip but you have no cash in the wallet? We solved this problem for you! Our mobile application is dead simple and allows to tip in the blink of an eye. This time you can skip the ATM!",
          faq2: "Frequently Asked Questions",
          how_work: "How does it work?",
          how_work_ans: "You simply scan the QR code or search for the service point, then choose the person, type the amount and press “send” - it is that simple.",
          how_pay: "Can I pay with Apply Pay or Google Pay?",
          how_pay_ans: "Yes, you can. We support all major payment methods.",
          how_safe: "How secure is tipping with this application?",
          how_safe_ans: "Your payments are 100% secure. Our partners meet the highest international standards.",
          find_waiter: "How can I find a waiter that I want to tip?",
          find_waiter_ans: "After entering the restaurant’s profile, just scroll down until you see their face or name.",
          fees: "Are there any hidden fees?",
          fees_ans: "Serval charges a small fee for the payment processing. The current fees can be found in the “Terms & Conditions” section of the app.",
          if_anon: "Are the payments anonymous?",
          if_anon_ans: "It is up to you. The default option is that all tips are anonymous. However, you can change that in “Settings”.",
          pay_after: "Can I pay afterwards?",
          pay_after_ans: "Yes, you can leave the tip anytime after leaving the service point. You can even do that before coming to the service point. You can always search for the service point by its name or location. You don’t need the QR code.",
          can_split: "Can I split a tip with someone else?",
          can_split_ans: "That option is not supported yet. However, all your companions can leave their own tips.",
          contact_us_title: "contact",
          contact_us_subtitle: "Write to us!",
          learn_more: "Learn more"
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
          header.textContent = language.en.header;
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
          promo_title.textContent = language.en.promo_title;
          promo_subtitle.textContent = language.en.promo_subtitle;
          promo_description.textContent = language.en.promo_description;
          faq2.textContent = language.en.faq2;
          how_work.textContent = language.en.how_work;
          how_work_ans.textContent = language.en.how_work_ans;
          how_pay.textContent = language.en.how_pay;
          how_pay_ans.textContent = language.en.how_pay_ans;
          how_safe.textContent = language.en.how_safe;
          how_safe_ans.textContent = language.en.how_safe_ans;
          find_waiter.textContent = language.en.find_waiter;
          find_waiter_ans.textContent = language.en.find_waiter_ans;
          fees.textContent = language.en.fees;
          fees_ans.textContent = language.en.fees_ans;
          if_anon.textContent = language.en.if_anon;
          if_anon_ans.textContent = language.en.if_anon_ans;
          pay_after.textContent = language.en.pay_after;
          pay_after_ans.textContent = language.en.pay_after_ans;
          can_split.textContent = language.en.can_split;
          can_split_ans.textContent = language.en.can_split_ans;
          contact_us_title.textContent = language.en.contact_us_title;
          contact_us_subtitle.textContent = language.en.contact_us_subtitle;
          learn_more.textContent = language.en.learn_more;
          
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
