// Language Switcher for AGO TAC Website
(function($) {
    "use strict";

    // Translation data
    const translations = {
        ar: {
            // Navigation
            "nav_home": "الرئيسية",
            "nav_about": "من نحن",
            "nav_products": "المنتجات والجودة",
            "nav_customers": "عملاؤنا",
            "nav_contact": "اتصل بنا",
            
            // Header
            "header_tagline": "AGO TAC...استمتع بكل رشفة!",
            "header_title": "رواد الجودة في تصنيع الشفاطات البلاستيكية",
            "header_subtitle": "في مصر والشرق الأوسط منذ 2009",
            "btn_get_quote": "احصل على عرض سعر",
            "btn_read_more": "اقرأ المزيد",
            
            // Stats
            "stats_straws": "شفاطات سنوياً",
            "stats_egypt": "حصة السوق المصرية",
            "stats_export": "حصة السوق التصديرية",
            "stats_certificates": "شهادات ISO",
            
            // About Section
            "about_title": "حول AGO TAC",
            "about_heading": "رواد الجودة في تصنيع الشفاطات البلاستيكية",
            "about_premium": "الجودة الممتازة",
            "about_premium_desc": "أفضل شفاطات على شكل حرف U في مصر والشرق الأوسط. منتجات معتمدة بموجب ISO.",
            "about_leader": "رائد السوق",
            "about_leader_desc": "40% حصة السوق المصرية و 60% تصدير إلى الأسواق الدولية منذ 2009.",
            "about_capacity": "القدرة العالية",
            "about_capacity_desc": "780 مليون شفاطة سنوياً مع خطط التوسع للوصول إلى 2.75 مليار شفاطة.",
            "about_trusted": "شريك موثوق",
            "about_trusted_desc": "نخدم علامات تجارية رائدة مثل جهينة، دومتي، أرض العبور والعديد من العلامات الأخرى في منطقة الشرق الأوسط وشمال أفريقيا.",
            
            // Features
            "features_established": "تأسست عام 2009",
            "features_heading": "شركة رائدة في التوريد الصناعي",
            "features_desc": "يوفر AGO TAC منتجات وخدمات استثنائية في مصر والشرق الأوسط، ملتزمين بممارسات تجارية سليمة وأخلاقية ورضا العملاء.",
            "features_iso1": "معتمد ISO 9001:2015",
            "features_iso2": "ISO 14001:2015 البيئية",
            "features_iso3": "ISO 45001:2018 السلامة",
            "features_iso4": "ISO 22000:2018 سلامة الغذاء",
            
            // Facility
            "facility_title": "منشأتنا",
            "facility_heading": "التميز في التصنيع",
            "facility_factory": "مصنع العاشر من رمضان",
            "facility_factory_desc": "منشأة بمساحة 1,500 متر مربع في المنطقة الصناعية C6 مع إمكانية التوسع",
            "facility_lines": "خطوط الإنتاج المتقدمة",
            "facility_lines_desc": "آلات حديثة تنتج 780 مليون شفاطة سنوياً",
            "facility_lab": "مختبر مراقبة الجودة",
            "facility_lab_desc": "مرافق اختبار معتمدة بموجب ISO تضمن معايير الجودة الممتازة",
            
            // Products
            "products_food_safe": "مواد آمنة للطعام",
            "products_food_safe_desc": "مواد بلاستيكية عالية الجودة للطعام تلبي معايير ISO 22000:2018 للاتصال الآمن بالمشروبات",
            "products_u_shape": "التميز في الشكل U",
            "products_u_shape_desc": "أفضل شفاطات على شكل حرف U مصممة للاستمتاع المثالي بالمشروبات ورضا العملاء",
            
            // Testimonials
            "testimonials_title": "شهادات العملاء",
            "testimonials_heading": "ماذا يقول عملاؤنا",
            "testimonial_1": "كان AGO TAC شريكنا الموثوق لسنوات. جودتهم الثابتة وموثوقيتهم في تقديم الشفاطات الممتازة يجعلهم خيارنا الأول.",
            "testimonial_1_name": "أحمد حسن",
            "testimonial_1_role": "جهينة - مدير المشتريات",
            "testimonial_2": "أفضل شفاطات على شكل حرف U في مصر. يفهم AGO TAC احتياجاتنا ويقدم التميز في كل مرة بأسعار تنافسية.",
            "testimonial_2_name": "منى إبراهيم",
            "testimonial_2_role": "دومتي - مدير سلسلة التوريد",
            
            // News
            "news_title": "الأخبار والتحديثات",
            "news_heading": "آخر الأخبار من AGO TAC",
            "news_1_title": "حصل AGO TAC على أربع شهادات ISO لعام 2025",
            "news_1_desc": "الجودة والبيئة والسلامة وأنظمة إدارة سلامة الغذاء معتمدة جميعها حتى ديسمبر 2025",
            "news_2_title": "القدرة الإنتاجية تصل إلى 780 مليون شفاطة سنوياً",
            "news_2_desc": "يوسع AGO TAC القدرة الإنتاجية مع خطط للوصول إلى 2.75 مليار شفاطة سنوياً",
            "news_3_title": "شراكة AGO TAC مع العلامات التجارية الرائدة في منطقة الشرق الأوسط وشمال أفريقيا",
            "news_3_desc": "علامات تجارية رئيسية بما في ذلك جهينة، دومتي، وأرض العبور تثق في AGO TAC للحصول على شفاطات عالية الجودة",
            
            // Footer
            "footer_about": "حول AGO TAC",
            "footer_about_desc": "تأسست في عام 2009، AGO TAC هي رائدة الجودة في تصنيع الشفاطات البلاستيكية في مصر والشرق الأوسط.",
            "footer_contact": "اتصل بنا",
            "footer_quick_links": "روابط سريعة",
            "footer_certifications": "شهاداتنا",
            "footer_subscribe": "اشترك",
            "footer_email_placeholder": "أدخل عنوان بريدك الإلكتروني...",
            "footer_copyright": "© AGO TAC 2025 | جميع الحقوق محفوظة | رواد الجودة في تصنيع الشفاطات البلاستيكية",
            
            // Contact
            "contact_title": "اتصل بنا",
            "contact_request": "طلب عرض سعر",
            "contact_request_desc": "سنكون سعداء للإجابة على أسئلتك.",
            "contact_name": "اسمك",
            "contact_email": "بريدك الإلكتروني",
            "contact_phone": "الهاتف",
            "contact_subject": "الموضوع",
            "contact_message": "الرسالة",
            "contact_send": "إرسال الرسالة",
            "contact_address": "عنوان الشركة",
            "contact_phone_label": "هاتفنا",
            "contact_email_label": "بريدنا الإلكتروني",
            "contact_office": "المكتب",
            "contact_mobile": "الجوال",
            "contact_president": "الرئيس",
            "contact_vp": "نائب الرئيس",
            
            // About Page
            "about_page_title": "من نحن",
            "about_history": "تاريخنا وقيمنا",
            "about_history_desc": "تأسست AGO TAC في عام 2009، وانضمت إلى قيادة شركات التوريد الصناعي في مصر والشرق الأوسط من خلال تقديم منتجات وخدمات مميزة، وكسب احترام العملاء وإرضاء احتياجاتهم. نحن نضمن ربحاً عادلاً لموظفينا المالكين وأصحاب المصلحة من خلال تبني ممارسات تجارية سليمة وأخلاقية.",
            "about_quote": "في غضون عامين فقط، أصبح AGO TAC معروفاً كصانع شفاطات عالي الجودة بأفضل الأسعار.",
            "about_market": "حصة السوق 2022: 40% مصر، 60% تصدير",
            "about_production": "القدرة الإنتاجية: 780 مليون شفاطة سنوياً",
            "about_target": "الهدف 2023: زيادة القدرة بنسبة 10%",
            "about_vision": "رؤيتنا ورسالتنا",
            "about_vision_title": "الرؤية:",
            "about_vision_desc": "أن نكون الشريك المفضل للحلول الشاملة للتعبئة والتغليف في منطقة الشرق الأوسط وشمال أفريقيا، ملتزمين بالجودة والابتكار.",
            "about_mission_title": "الرسالة:",
            "about_mission_desc": "تسويق وتقديم خدمة تضمن رضا العملاء، وسهولة التواصل، وتحسين عمليات العمل، وتوفير التكاليف، مع الحفاظ على بيئة الجودة الشاملة.",
            "about_satisfaction": "رضا العملاء",
            "about_quality": "بيئة الجودة",
            "about_economic": "الدعم الاقتصادي",
            "about_innovation": "الابتكار المستمر",
            
            // Search
            "search_placeholder": "ابحث هنا",
            "search_button": "ابحث الآن!",
            
            // Breadcrumb
            "breadcrumb_home": "الرئيسية"
        },
        en: {
            // Navigation
            "nav_home": "Home",
            "nav_about": "About Us",
            "nav_products": "Products & Quality",
            "nav_customers": "Our Customers",
            "nav_contact": "Contact",
            
            // Header
            "header_tagline": "AGO TAC...Enjoy every Sip!",
            "header_title": "Quality Leader in Plastic Straw Manufacturing",
            "header_subtitle": "In Egypt and the Middle East since 2009",
            "btn_get_quote": "Get a Quote",
            "btn_read_more": "Read More",
            
            // Stats
            "stats_straws": "Straws Yearly",
            "stats_egypt": "Egypt Market",
            "stats_export": "Export Market",
            "stats_certificates": "ISO Certificates",
            
            // About Section
            "about_title": "About AgoTac",
            "about_heading": "Quality Leader in Plastic Straw Manufacturing",
            "about_premium": "Premium Quality",
            "about_premium_desc": "Best quality U-shape straws in Egypt and the Middle East. ISO certified products.",
            "about_leader": "Market Leader",
            "about_leader_desc": "40% Egypt market share and 60% export to international markets since 2009.",
            "about_capacity": "High Capacity",
            "about_capacity_desc": "780 million straws yearly with expansion plans to reach 2.75 billion straws capacity.",
            "about_trusted": "Trusted Partner",
            "about_trusted_desc": "Serving leading brands like Juhayna, Domty, Obour Land and many more across MENA.",
            
            // Features
            "features_established": "Established 2009",
            "features_heading": "Leading Industrial Supply Company",
            "features_desc": "AgoTac provides exceptional products and services in Egypt and the Middle East, committed to sound, ethical business practices and customer satisfaction.",
            "features_iso1": "ISO 9001:2015 Certified",
            "features_iso2": "ISO 14001:2015 Environmental",
            "features_iso3": "ISO 45001:2018 Safety",
            "features_iso4": "ISO 22000:2018 Food Safety",
            
            // Facility
            "facility_title": "our facility",
            "facility_heading": "Manufacturing Excellence",
            "facility_factory": "10th of Ramadan Factory",
            "facility_factory_desc": "1,500 sqm facility in C6 industrial zone with expansion capability",
            "facility_lines": "Advanced Production Lines",
            "facility_lines_desc": "State-of-the-art machinery producing 780M straws annually",
            "facility_lab": "Quality Control Lab",
            "facility_lab_desc": "ISO-certified testing facilities ensuring premium quality standards",
            
            // Products
            "products_food_safe": "Food-Safe Materials",
            "products_food_safe_desc": "Premium food-grade plastic materials meeting ISO 22000:2018 standards for safe beverage contact",
            "products_u_shape": "U-Shape Excellence",
            "products_u_shape_desc": "Best quality U-shape straws designed for perfect beverage enjoyment and customer satisfaction",
            
            // Testimonials
            "testimonials_title": "Client Testimonials",
            "testimonials_heading": "What our clients say",
            "testimonial_1": "AgoTac has been our trusted partner for years. Their consistent quality and reliability in delivering premium straws makes them our first choice.",
            "testimonial_1_name": "Ahmed Hassan",
            "testimonial_1_role": "Juhayna - Procurement Manager",
            "testimonial_2": "The best quality U-shape straws in Egypt. AgoTac understands our needs and delivers excellence every time with competitive pricing.",
            "testimonial_2_name": "Mona Ibrahim",
            "testimonial_2_role": "Domty - Supply Chain Director",
            
            // News
            "news_title": "News & Updates",
            "news_heading": "Latest from AgoTac",
            "news_1_title": "AgoTac Achieves Four ISO Certifications for 2025",
            "news_1_desc": "Quality, Environmental, Safety, and Food Safety Management Systems all certified through December 2025",
            "news_2_title": "Production Capacity Reaches 780 Million Straws Annually",
            "news_2_desc": "AgoTac expands production capacity with plans to reach 2.75 billion straws yearly",
            "news_3_title": "AgoTac Partners with Leading MENA Beverage Brands",
            "news_3_desc": "Major brands including Juhayna, Domty, and Obour Land trust AgoTac for premium quality straws",
            
            // Footer
            "footer_about": "About AgoTac",
            "footer_about_desc": "Established in 2009, AgoTac is the quality leader in plastic straw manufacturing in Egypt and the Middle East.",
            "footer_contact": "Contact Us",
            "footer_quick_links": "Quick Links",
            "footer_certifications": "Our Certifications",
            "footer_subscribe": "Subscribe",
            "footer_email_placeholder": "Enter Your Email Address...",
            "footer_copyright": "© AgoTac 2025 | All Rights Reserved | Quality Leader in Plastic Straw Manufacturing",
            
            // Contact
            "contact_title": "Contact",
            "contact_request": "Request A Quote",
            "contact_request_desc": "We will be happy to answer your questions.",
            "contact_name": "Your Name",
            "contact_email": "Your Email",
            "contact_phone": "Phone",
            "contact_subject": "Subject",
            "contact_message": "Massage",
            "contact_send": "Send Message",
            "contact_address": "Company Address",
            "contact_phone_label": "Our Phone",
            "contact_email_label": "Our Email",
            "contact_office": "Office",
            "contact_mobile": "Mobile",
            "contact_president": "President",
            "contact_vp": "VP",
            
            // About Page
            "about_page_title": "About Us",
            "about_history": "Our History and Values",
            "about_history_desc": "AgoTac was established in 2009, joining the lead of industrial supply companies in Egypt and the Middle East by providing differential products and services, gaining customers' respect and satisfying their needs. We ensure a fair profit for our employee-owners and stakeholders by embracing sound, ethical business practices.",
            "about_quote": "Within just two years, AgoTac became known as the premium straw quality manufacturer with the best prices.",
            "about_market": "Market Share 2022: 40% Egypt, 60% Export",
            "about_production": "Production Capacity: 780M straws yearly",
            "about_target": "2023 Target: 10% capacity increase",
            "about_vision": "Our Vision & Mission",
            "about_vision_title": "Vision:",
            "about_vision_desc": "To be the preferred partner for comprehensive packaging solutions in the MENA region, committed to quality and innovation.",
            "about_mission_title": "Mission:",
            "about_mission_desc": "To market and provide a service that ensures customer satisfaction, ease of communication, improved working processes, and cost savings, all while maintaining a total-quality environment.",
            "about_satisfaction": "Customer Satisfaction",
            "about_quality": "Quality Environment",
            "about_economic": "Economic Support",
            "about_innovation": "Continuous Innovation",
            
            // Search
            "search_placeholder": "Search Here",
            "search_button": "Search Now!",
            
            // Breadcrumb
            "breadcrumb_home": "Home"
        }
    };

    // Get current language from localStorage or default to Arabic
    function getCurrentLanguage() {
        return localStorage.getItem('siteLanguage') || 'ar';
    }

    // Set language
    function setLanguage(lang) {
        localStorage.setItem('siteLanguage', lang);
        applyLanguage(lang);
    }

    // Apply language to page
    function applyLanguage(lang) {
        const t = translations[lang];
        if (!t) return;

        // Update HTML lang attribute and direction
        $('html').attr('lang', lang);
        if (lang === 'ar') {
            $('body').addClass('rtl');
            $('html').attr('dir', 'rtl');
        } else {
            $('body').removeClass('rtl');
            $('html').attr('dir', 'ltr');
        }

        // Update all elements with data-i18n attribute
        $('[data-i18n]').each(function() {
            const key = $(this).attr('data-i18n');
            if (t[key]) {
                if ($(this).is('input[type="text"], input[type="email"], input[type="search"], textarea')) {
                    $(this).attr('placeholder', t[key]);
                } else {
                    $(this).text(t[key]);
                }
            }
        });

        // Update language button text (show opposite language to switch to)
        $('.lang-switcher').each(function() {
            $(this).text(lang === 'ar' ? 'EN' : 'AR');
        });
    }

    // Initialize language on page load
    $(document).ready(function() {
        const currentLang = getCurrentLanguage();
        applyLanguage(currentLang);

        // Language switcher click handler
        $(document).on('click', '.lang-switcher', function(e) {
            e.preventDefault();
            const currentLang = getCurrentLanguage();
            const newLang = currentLang === 'ar' ? 'en' : 'ar';
            setLanguage(newLang);
        });
    });

    // Make functions available globally
    window.setLanguage = setLanguage;
    window.getCurrentLanguage = getCurrentLanguage;

})(jQuery);

