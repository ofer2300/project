type TranslationKey = 
  | 'welcome' 
  | 'login' 
  | 'signup' 
  | 'profile' 
  | 'logout' 
  | 'services' 
  | 'projects' 
  | 'messages'
  | 'contact'
  | 'areas'
  | 'sanitary'
  | 'precise'
  | 'water'
  | 'code'
  | 'sprinkler'
  | 'nfpa'
  | 'hydraulic'
  | 'technical'
  | 'consultation'
  | 'regulatory'
  | 'engineering'
  | 'advantages'
  | 'revit'
  | 'metropolitan'
  | 'healthcare'
  | 'metropolitanDescription'
  | 'skyline'
  | 'commercial'
  | 'skylineDescription'
  | 'international'
  | 'aviation'
  | 'internationalDescription'
  | 'educational'
  | 'education'
  | 'educationalDescription'
  | 'cta'
  | 'ctaDescription'
  | 'viewServices'
  | 'getInTouch'
  | 'contactDescription'
  | 'mainDescription'
  | 'whyChooseUs'
  | 'expertiseDescription'
  | 'sanitaryDescription'
  | 'sprinklerDescription'
  | 'consultationDescription'
  | 'engineeringExcellence'
  | 'engineeringExcellenceDescription'
  | 'revitDescription'
  | 'experienceDescription'
  | 'technicalDescription'
  | 'portfolio'
  | 'portfolioDescription'
  | 'sqft'
  | 'floors'
  | 'buildings'

type Translations = {
  [key in TranslationKey]: string
}

type LanguageTranslations = {
  [lang: string]: Translations
}

export const translations: LanguageTranslations = {
  en: {
    welcome: 'Welcome',
    login: 'Login',
    signup: 'Sign Up',
    profile: 'Profile',
    logout: 'Logout',
    services: 'Our Services',
    projects: 'Projects',
    messages: 'Messages',
    contact: 'Contact Us',
    areas: 'Areas of Activity',
    sanitary: 'Sanitary Plumbing Systems',
    precise: 'Precise hydraulic calculations',
    water: 'Water supply system planning',
    code: 'Code-compliant documentation',
    sprinkler: 'Sprinkler Systems',
    nfpa: 'NFPA-compliant engineering',
    hydraulic: 'Hydraulic calculations',
    technical: 'Technical Documentation',
    consultation: 'Engineering Consultation',
    regulatory: 'Regulatory compliance',
    engineering: 'Engineering Solutions',
    advantages: 'Competitive Advantages',
    revit: 'REVIT & BIM360 Expertise',
    metropolitan: 'Metropolitan Hospital Complex',
    healthcare: 'Healthcare',
    metropolitanDescription: 'Engineered comprehensive plumbing and sprinkler systems for a state-of-the-art medical facility.',
    skyline: 'Skyline Tower Development',
    commercial: 'Commercial',
    skylineDescription: 'Developed detailed engineering plans for high-rise water distribution and sprinkler systems.',
    international: 'International Airport Terminal',
    aviation: 'Aviation',
    internationalDescription: 'Created comprehensive sprinkler system engineering plans for a major international terminal.',
    educational: 'Educational Campus Development',
    education: 'Education',
    educationalDescription: 'Engineered integrated plumbing and sprinkler systems for a university campus.',
    cta: 'Ready to elevate your next engineering project?',
    ctaDescription: 'Partner with us to bring technical precision and engineering excellence to your systems.',
    viewServices: 'View Services',
    getInTouch: 'Get in Touch',
    contactDescription: 'Have a project in mind? Let\'s discuss how we can help.',
    mainDescription: 'Specialized engineering solutions for water, sanitary plumbing, and sprinkler systems using advanced REVIT and BIM360 platforms.',
    whyChooseUs: 'Why Choose Us',
    expertiseDescription: 'Our expertise focuses on precise engineering planning for critical building systems.',
    sanitaryDescription: 'Comprehensive engineering of water distribution and sanitary plumbing systems that meet strict regulatory standards.',
    sprinklerDescription: 'Detailed engineering plans for sprinkler systems designed for optimal safety and performance.',
    consultationDescription: 'Expert technical guidance throughout the planning phase of your project.',
    engineeringExcellence: 'Engineering Excellence',
    engineeringExcellenceDescription: 'Our commitment to engineering excellence sets us apart in the industry.',
    revitDescription: 'Utilizing advanced REVIT and BIM360 platforms for precise engineering documentation and coordination.',
    experienceDescription: 'Over two decades of successful engineering planning across diverse sectors and scales.',
    technicalDescription: 'Detailed engineering solutions that address your specific project requirements and technical challenges.',
    portfolio: 'Our Portfolio',
    portfolioDescription: 'Explore our landmark projects that showcase our engineering expertise.',
    sqft: 'sq ft',
    floors: 'Floors',
    buildings: 'Buildings'
  },
  he: {
    welcome: 'ברוכים הבאים',
    login: 'התחברות',
    signup: 'הרשמה',
    profile: 'פרופיל',
    logout: 'התנתקות',
    services: 'השירותים שלנו',
    projects: 'פרויקטים',
    messages: 'הודעות',
    contact: 'צור קשר',
    areas: 'תחומי פעילות',
    sanitary: 'מערכות אינסטלציה סניטרית',
    precise: 'חישובים הידראוליים מדויקים',
    water: 'תכנון מערכת אספקת מים',
    code: 'תיעוד תואם תקן',
    sprinkler: 'מערכות ספרינקלרים',
    nfpa: 'הנדסה תואמת NFPA',
    hydraulic: 'חישובים הידראוליים',
    technical: 'תיעוד טכני',
    consultation: 'ייעוץ הנדסי',
    regulatory: 'עמידה בתקנות',
    engineering: 'פתרונות הנדסיים',
    advantages: 'יתרונות תחרותיים',
    revit: 'מומחיות ב-REVIT ו-BIM360',
    metropolitan: 'מתחם בית חולים מטרופוליטני',
    healthcare: 'בריאות',
    metropolitanDescription: 'תכנון מערכות אינסטלציה וספרינקלרים למתקן רפואי מתקדם.',
    skyline: 'מגדל סקייליין',
    commercial: 'מסחרי',
    skylineDescription: 'פיתוח תכניות הנדסיות מפורטות למערכות מים וספרינקלרים בבניין רב-קומות.',
    international: 'טרמינל בנמל תעופה בינלאומי',
    aviation: 'תעופה',
    internationalDescription: 'יצירת תכניות הנדסיות למערכת ספרינקלרים בטרמינל בינלאומי.',
    educational: 'פיתוח קמפוס חינוכי',
    education: 'חינוך',
    educationalDescription: 'תכנון מערכות אינסטלציה וספרינקלרים משולבות לקמפוס אוניברסיטאי.',
    cta: 'מוכנים לקדם את הפרויקט ההנדסי הבא שלכם?',
    ctaDescription: 'שתפו איתנו פעולה כדי להביא דיוק טכני ומצוינות הנדסית למערכות שלכם.',
    viewServices: 'צפה בשירותים',
    getInTouch: 'צור קשר',
    contactDescription: 'יש לכם פרויקט במחשבה? בואו נדבר על איך אנחנו יכולים לעזור.',
    mainDescription: 'פתרונות הנדסיים מתמחים למערכות מים, אינסטלציה סניטרית וספרינקלרים באמצעות פלטפורמות REVIT ו-BIM360 מתקדמות.',
    whyChooseUs: 'למה לבחור בנו',
    expertiseDescription: 'המומחיות שלנו מתמקדת בתכנון הנדסי מדויק למערכות בניין קריטיות.',
    sanitaryDescription: 'הנדסה מקיפה של מערכות חלוקת מים ואינסטלציה סניטרית העומדות בתקנים מחמירים.',
    sprinklerDescription: 'תכניות הנדסיות מפורטות למערכות ספרינקלרים המתוכננות לבטיחות וביצועים מיטביים.',
    consultationDescription: 'הדרכה טכנית מקצועית לאורך שלב התכנון של הפרויקט שלך.',
    engineeringExcellence: 'מצוינות הנדסית',
    engineeringExcellenceDescription: 'המחויבות שלנו למצוינות הנדסית מבדילה אותנו בתעשייה.',
    revitDescription: 'שימוש בפלטפורמות REVIT ו-BIM360 מתקדמות לתיעוד ותיאום הנדסי מדויק.',
    experienceDescription: 'מעל שני עשורים של תכנון הנדסי מוצלח במגזרים ובהיקפים מגוונים.',
    technicalDescription: 'פתרונות הנדסיים מפורטים העונים על דרישות הפרויקט הספציפיות והאתגרים הטכניים שלך.',
    portfolio: 'הפורטפוליו שלנו',
    portfolioDescription: 'גלה את הפרויקטים המובילים שלנו המדגימים את המומחיות ההנדסית שלנו.',
    sqft: 'מ"ר',
    floors: 'קומות',
    buildings: 'בניינים'
  },
  ru: {
    welcome: 'Добро пожаловать',
    login: 'Вход',
    signup: 'Регистрация',
    profile: 'Профиль',
    logout: 'Выход',
    services: 'Наши услуги',
    projects: 'Проекты',
    messages: 'Сообщения',
    contact: 'Связаться с нами',
    areas: 'Области деятельности',
    sanitary: 'Санитарно-технические системы',
    precise: 'Точные гидравлические расчеты',
    water: 'Проектирование систем водоснабжения',
    code: 'Документация по стандартам',
    sprinkler: 'Спринклерные системы',
    nfpa: 'Проектирование по NFPA',
    hydraulic: 'Гидравлические расчеты',
    technical: 'Техническая документация',
    consultation: 'Инженерные консультации',
    regulatory: 'Соответствие нормам',
    engineering: 'Инженерные решения',
    advantages: 'Конкурентные преимущества',
    revit: 'Экспертиза в REVIT и BIM360',
    metropolitan: 'Комплекс городской больницы',
    healthcare: 'Здравоохранение',
    metropolitanDescription: 'Проектирование комплексных систем водоснабжения и спринклеров для современного медицинского учреждения.',
    skyline: 'Небоскреб Скайлайн',
    commercial: 'Коммерческий',
    skylineDescription: 'Разработка детальных инженерных планов систем водоснабжения и спринклеров для высотного здания.',
    international: 'Терминал международного аэропорта',
    aviation: 'Авиация',
    internationalDescription: 'Создание комплексных планов спринклерных систем для крупного международного терминала.',
    educational: 'Развитие образовательного кампуса',
    education: 'Образование',
    educationalDescription: 'Проектирование интегрированных систем водоснабжения и спринклеров для университетского городка.',
    cta: 'Готовы поднять ваш следующий инженерный проект на новый уровень?',
    ctaDescription: 'Сотрудничайте с нами, чтобы обеспечить техническую точность и инженерное совершенство ваших систем.',
    viewServices: 'Посмотреть услуги',
    getInTouch: 'Связаться',
    contactDescription: 'Есть проект на примете? Давайте обсудим, как мы можем помочь.',
    mainDescription: 'Специализированные инженерные решения для систем водоснабжения, санитарно-технических и спринклерных систем с использованием передовых платформ REVIT и BIM360.',
    whyChooseUs: 'Почему выбирают нас',
    expertiseDescription: 'Наша экспертиза сосредоточена на точном инженерном планировании критически важных систем зданий.',
    sanitaryDescription: 'Комплексное проектирование систем водоснабжения и санитарно-технических систем, соответствующих строгим нормативным стандартам.',
    sprinklerDescription: 'Детальные инженерные планы спринклерных систем, разработанные для оптимальной безопасности и производительности.',
    consultationDescription: 'Экспертное техническое руководство на протяжении всей фазы планирования вашего проекта.',
    engineeringExcellence: 'Инженерное совершенство',
    engineeringExcellenceDescription: 'Наша приверженность инженерному совершенству выделяет нас в отрасли.',
    revitDescription: 'Использование передовых платформ REVIT и BIM360 для точной инженерной документации и координации.',
    experienceDescription: 'Более двух десятилетий успешного инженерного планирования в различных секторах и масштабах.',
    technicalDescription: 'Детальные инженерные решения, отвечающие конкретным требованиям и техническим задачам вашего проекта.',
    portfolio: 'Наше портфолио',
    portfolioDescription: 'Ознакомьтесь с нашими знаковыми проектами, демонстрирующими наш инженерный опыт.',
    sqft: 'кв.м',
    floors: 'Этажей',
    buildings: 'Зданий'
  }
}

export type { TranslationKey, Translations } 