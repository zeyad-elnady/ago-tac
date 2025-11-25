// Language Switcher for AGO TAC Website
(function($) {
    "use strict";

    // Translation data
    const translations = {
        ar: {
            // Navigation
            "nav_home": "الرئيسية",
            "nav_about": "من نحن",
            "nav_products": "المنتجات",
            "nav_blogs": "المدونة",
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
            "breadcrumb_home": "الرئيسية",
            
            // Products
            "products_title": "المنتجات",
            "products_subtitle": "شفاطات بلاستيكية عالية الجودة",
            "product_1_name": "شفاطة U-Shape الكلاسيكية",
            "product_1_desc": "تصميم كلاسيكي على شكل حرف U يوفر تجربة شرب مريحة وفعالة. مثالية لجميع أنواع المشروبات.",
            "product_1_details": "شفاطة بلاستيكية عالية الجودة بتصميم U-Shape المبتكر. مصنوعة من بولي بروبيلين آمن للطعام ومتوافقة مع معايير ISO 22000:2018. متوفرة بأحجام مختلفة (15-25 سم) وألوان متنوعة.",
            "product_1_benefits": "• تصميم U-Shape يوفر سهولة في الاستخدام<br>• مقاومة للكسر والانحناء<br>• مناسبة للمشروبات الباردة والساخنة حتى 80°C<br>• سهلة التخزين والنقل<br>• قابلة لإعادة الاستخدام",
            "product_1_uses": "مثالية للمشروبات الغازية، العصائر، الشاي، القهوة، والمشروبات الساخنة والباردة.",
            
            "product_2_name": "شفاطة مستقيمة عريضة",
            "product_2_desc": "شفاطة مستقيمة بعرض أكبر، مثالية للمشروبات الكثيفة والعصائر السميكة والبودينج.",
            "product_2_details": "شفاطة مستقيمة بعرض 8-10 ملم مصممة خصيصاً للمشروبات الكثيفة. مصنوعة من مواد بلاستيكية عالية الجودة مقاومة للضغط. متوفرة بأطوال 20-30 سم.",
            "product_2_benefits": "• عرض أكبر يسهل شرب المشروبات الكثيفة<br>• قوة تحمل عالية للضغط<br>• مناسبة للعصائر السميكة والبودينج<br>• سهلة التنظيف<br>• متينة وطويلة الأمد",
            "product_2_uses": "مثالية للعصائر السميكة، الميلك شيك، البودينج، العصائر الطبيعية الكثيفة، والمشروبات التي تحتوي على قطع فواكه.",
            
            "product_3_name": "شفاطة قابلة للانحناء",
            "product_3_desc": "شفاطة مرنة قابلة للانحناء بزاوية 360 درجة، توفر راحة قصوى في الاستخدام.",
            "product_3_details": "شفاطة مبتكرة قابلة للانحناء والثني بسهولة. مصنوعة من بولي بروبيلين مرن يحافظ على شكله بعد الانحناء. متوفرة بألوان زاهية وأطوال 18-22 سم.",
            "product_3_benefits": "• قابلة للانحناء بزاوية 360 درجة<br>• تحافظ على الشكل بعد الانحناء<br>• مريحة للاستخدام من أي زاوية<br>• مناسبة للأطفال وكبار السن<br>• سهلة الاستخدام في السيارة أو أثناء الحركة",
            "product_3_uses": "مثالية للاستخدام أثناء القيادة، للأطفال، كبار السن، المشروبات في السيارة، والاستخدام في الأماكن المغلقة.",
            
            "product_4_name": "شفاطة رفيعة أنيقة",
            "product_4_desc": "شفاطة رفيعة وأنيقة بتصميم عصري، مثالية للمشروبات الخفيفة والمياه والمشروبات الفوارة.",
            "product_4_details": "شفاطة رفيعة بعرض 5-6 ملم بتصميم أنيق وعصري. مصنوعة من مواد شفافة عالية الجودة. متوفرة بأطوال 15-20 سم وألوان شفافة أو ملونة.",
            "product_4_benefits": "• تصميم أنيق وعصري<br>• رفيعة ومناسبة للمشروبات الخفيفة<br>• شفافة أو ملونة حسب الطلب<br>• سهلة الاستخدام والنقل<br>• مناسبة للاستخدام الفاخر",
            "product_4_uses": "مثالية للمياه المعدنية، المشروبات الغازية، العصائر الخفيفة، المشروبات الفوارة، والاستخدام في المطاعم الفاخرة.",
            
            "product_5_name": "شفاطة قصيرة مدمجة",
            "product_5_desc": "شفاطة قصيرة ومدمجة مصممة خصيصاً للعبوات الصغيرة والمشروبات الجاهزة للشرب.",
            "product_5_details": "شفاطة قصيرة بطول 10-12 سم مصممة للعبوات الصغيرة. مصنوعة من بولي بروبيلين عالي الجودة. متوفرة بألوان متنوعة وتصاميم مختلفة.",
            "product_5_benefits": "• حجم مدمج مناسب للعبوات الصغيرة<br>• اقتصادية في الاستخدام<br>• سهلة التخزين والنقل<br>• مناسبة للاستخدام الواحد<br>• متوفرة بكميات كبيرة",
            "product_5_uses": "مثالية للعبوات الصغيرة (200-250 مل)، علب العصير، عبوات الحليب الصغيرة، المشروبات الجاهزة للشرب، والاستخدام في المدارس والمستشفيات.",
            "product_iso": "معتمد ISO",
            "product_food_safe": "آمن للطعام",
            "product_contact": "اتصل بنا",
            "product_specs_label": "المواصفات:",
            "product_benefits_label": "المميزات:",
            "product_uses_label": "الاستخدامات:",
            "products_intro": "نقدم مجموعة متنوعة من الشفاطات البلاستيكية عالية الجودة المصممة خصيصاً لتلبية احتياجات عملائنا في صناعة المشروبات.",
            "products_features_title": "مميزات منتجاتنا",
            "products_features_subtitle": "لماذا تختار منتجاتنا",
            "products_quality_title": "الجودة والاعتمادات",
            "products_quality_subtitle": "معايير الجودة العالمية",
            "products_specs_title": "المواصفات التقنية",
            "product_feature_1": "تصميم U-Shape المبتكر",
            "product_feature_1_desc": "تصميم فريد يوفر تجربة شرب مريحة وفعالة",
            "product_feature_2": "مواد آمنة للطعام",
            "product_feature_2_desc": "جميع المنتجات مصنوعة من مواد بلاستيكية آمنة ومعتمدة",
            "product_feature_3": "متانة عالية",
            "product_feature_3_desc": "مقاومة للكسر والانحناء مع الحفاظ على المرونة",
            "product_feature_4": "ألوان متنوعة",
            "product_feature_4_desc": "متوفرة بألوان مختلفة لتتناسب مع هوية علامتك التجارية",
            "product_spec_1": "المواد: بولي بروبيلين عالي الجودة",
            "product_spec_2": "القياسات: متعددة الأحجام حسب الطلب",
            "product_spec_3": "التعبئة: عبوات معقمة وآمنة",
            "product_spec_4": "الاستخدام: مناسب لجميع أنواع المشروبات",
            "products_cta_title": "هل تحتاج إلى منتجات مخصصة؟",
            "products_cta_desc": "نحن نقدم حلول مخصصة لتلبية احتياجاتك الخاصة. اتصل بنا اليوم للحصول على عرض سعر.",
            "products_cta_button": "احصل على عرض سعر",
            
            // Blog/News
            "blog_news_title": "أحدث الأخبار والتحديثات",
            "blog_news_subtitle": "تابع آخر أخبار AGO TAC وإنجازاتنا",
            "news_article_1_title": "حصل AGO TAC على أربع شهادات ISO لعام 2025",
            "news_article_1_date": "16 ديسمبر 2024",
            "news_article_1_content": "نفخر بالإعلان عن حصول AGO TAC على أربع شهادات ISO معتمدة حتى ديسمبر 2025. تشمل هذه الشهادات معايير الجودة والبيئة والسلامة وسلامة الغذاء، مما يؤكد التزامنا بالتميز في جميع جوانب عملياتنا.",
            "news_article_1_quote": "هذا الإنجاز يعكس التزامنا المستمر بالجودة والابتكار في صناعة الشفاطات البلاستيكية.",
            "news_article_2_title": "القدرة الإنتاجية تصل إلى 780 مليون شفاطة سنوياً",
            "news_article_2_date": "10 يناير 2023",
            "news_article_2_content": "بفضل استثماراتنا المستمرة في التكنولوجيا والبنية التحتية، حققنا قدرة إنتاجية تصل إلى 780 مليون شفاطة سنوياً. نخطط للتوسع للوصول إلى 2.75 مليار شفاطة في السنوات القادمة.",
            "news_article_3_title": "شراكة AGO TAC مع العلامات التجارية الرائدة في منطقة الشرق الأوسط وشمال أفريقيا",
            "news_article_3_date": "15 مارس 2022",
            "news_article_3_content": "نفخر بشراكاتنا مع العلامات التجارية الرائدة مثل جهينة، دومتي، وأرض العبور. هذه الشراكات تعكس ثقة عملائنا في جودة منتجاتنا وخدماتنا المتميزة.",
            "news_tags": "العلامات ذات الصلة:",
            "news_share": "مشاركة:"
        },
        en: {
            // Navigation
            "nav_home": "Home",
            "nav_about": "About Us",
            "nav_products": "Products",
            "nav_blogs": "Blogs",
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
            "breadcrumb_home": "Home",
            
            // Products
            "products_title": "Products",
            "products_subtitle": "High-Quality Plastic Straws",
            "product_1_name": "Classic U-Shape Straw",
            "product_1_desc": "Classic U-shape design that provides comfortable and efficient drinking experience. Perfect for all beverage types.",
            "product_1_details": "High-quality plastic straw with innovative U-shape design. Made from food-safe polypropylene compliant with ISO 22000:2018 standards. Available in various sizes (15-25 cm) and multiple colors.",
            "product_1_benefits": "• U-Shape design provides ease of use<br>• Resistant to breakage and bending<br>• Suitable for both cold and hot beverages up to 80°C<br>• Easy to store and transport<br>• Reusable",
            "product_1_uses": "Ideal for carbonated drinks, juices, tea, coffee, and both hot and cold beverages.",
            
            "product_2_name": "Wide Straight Straw",
            "product_2_desc": "Straight straw with larger diameter, perfect for thick beverages, dense juices, and smoothies.",
            "product_2_details": "Straight straw with 8-10mm diameter specifically designed for thick beverages. Made from high-quality pressure-resistant plastic materials. Available in 20-30 cm lengths.",
            "product_2_benefits": "• Larger diameter makes drinking thick beverages easier<br>• High pressure resistance<br>• Suitable for thick juices and smoothies<br>• Easy to clean<br>• Durable and long-lasting",
            "product_2_uses": "Ideal for thick juices, milkshakes, smoothies, dense natural juices, and beverages with fruit pieces.",
            
            "product_3_name": "Flexible Bendable Straw",
            "product_3_desc": "Flexible straw that can bend at 360-degree angle, providing maximum comfort and convenience.",
            "product_3_details": "Innovative flexible straw that bends and twists easily. Made from flexible polypropylene that maintains its shape after bending. Available in bright colors and 18-22 cm lengths.",
            "product_3_benefits": "• Can bend at 360-degree angle<br>• Maintains shape after bending<br>• Comfortable to use from any angle<br>• Suitable for children and elderly<br>• Easy to use in car or while moving",
            "product_3_uses": "Ideal for use while driving, for children, elderly, car beverages, and use in confined spaces.",
            
            "product_4_name": "Slim Elegant Straw",
            "product_4_desc": "Slim and elegant straw with modern design, perfect for light beverages, water, and carbonated drinks.",
            "product_4_details": "Slim straw with 5-6mm diameter featuring elegant and modern design. Made from high-quality transparent materials. Available in 15-20 cm lengths in transparent or colored options.",
            "product_4_benefits": "• Elegant and modern design<br>• Slim and suitable for light beverages<br>• Transparent or colored upon request<br>• Easy to use and transport<br>• Suitable for premium use",
            "product_4_uses": "Ideal for mineral water, carbonated drinks, light juices, sparkling beverages, and use in premium restaurants.",
            
            "product_5_name": "Compact Short Straw",
            "product_5_desc": "Short and compact straw specifically designed for small containers and ready-to-drink beverages.",
            "product_5_details": "Short straw with 10-12 cm length designed for small containers. Made from high-quality polypropylene. Available in various colors and different designs.",
            "product_5_benefits": "• Compact size suitable for small containers<br>• Economical to use<br>• Easy to store and transport<br>• Suitable for single use<br>• Available in bulk quantities",
            "product_5_uses": "Ideal for small containers (200-250 ml), juice boxes, small milk cartons, ready-to-drink beverages, and use in schools and hospitals.",
            "product_iso": "ISO Certified",
            "product_food_safe": "Food Safe",
            "product_contact": "Contact Us",
            "product_specs_label": "Specifications:",
            "product_benefits_label": "Benefits:",
            "product_uses_label": "Uses:",
            "products_intro": "We offer a wide range of high-quality plastic straws specifically designed to meet the needs of our clients in the beverage industry.",
            "products_features_title": "Product Features",
            "products_features_subtitle": "Why Choose Our Products",
            "products_quality_title": "Quality & Certifications",
            "products_quality_subtitle": "International Quality Standards",
            "products_specs_title": "Technical Specifications",
            "product_feature_1": "Innovative U-Shape Design",
            "product_feature_1_desc": "Unique design that provides comfortable and efficient drinking experience",
            "product_feature_2": "Food-Safe Materials",
            "product_feature_2_desc": "All products made from safe and certified plastic materials",
            "product_feature_3": "High Durability",
            "product_feature_3_desc": "Resistant to breakage and bending while maintaining flexibility",
            "product_feature_4": "Various Colors",
            "product_feature_4_desc": "Available in different colors to match your brand identity",
            "product_spec_1": "Material: High-quality Polypropylene",
            "product_spec_2": "Sizes: Multiple sizes available on request",
            "product_spec_3": "Packaging: Sterile and safe packaging",
            "product_spec_4": "Usage: Suitable for all beverage types",
            "products_cta_title": "Need Custom Products?",
            "products_cta_desc": "We offer customized solutions to meet your specific needs. Contact us today for a quote.",
            "products_cta_button": "Get a Quote",
            
            // Blog/News
            "blog_news_title": "Latest News & Updates",
            "blog_news_subtitle": "Stay updated with AGO TAC's latest news and achievements",
            "news_article_1_title": "AgoTac Achieves Four ISO Certifications for 2025",
            "news_article_1_date": "December 16, 2024",
            "news_article_1_content": "We are proud to announce that AgoTac has achieved four ISO certifications valid through December 2025. These certifications cover quality, environmental, safety, and food safety standards, demonstrating our commitment to excellence in all aspects of our operations.",
            "news_article_1_quote": "This achievement reflects our ongoing commitment to quality and innovation in plastic straw manufacturing.",
            "news_article_2_title": "Production Capacity Reaches 780 Million Straws Annually",
            "news_article_2_date": "January 10, 2023",
            "news_article_2_content": "Thanks to our continuous investments in technology and infrastructure, we have achieved a production capacity of 780 million straws annually. We plan to expand to reach 2.75 billion straws in the coming years.",
            "news_article_3_title": "AgoTac Partners with Leading MENA Beverage Brands",
            "news_article_3_date": "March 15, 2022",
            "news_article_3_content": "We are proud of our partnerships with leading brands such as Juhayna, Domty, and Obour Land. These partnerships reflect our customers' trust in our product quality and exceptional services.",
            "news_tags": "Related Tags:",
            "news_share": "Share:"
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

