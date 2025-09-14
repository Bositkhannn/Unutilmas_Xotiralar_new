// Конфигурация частиц
particlesJS('particles-js', {
    particles: {
        number: { value: 80, density: { enable: true, value_area: 800 } },
        color: { 
            value: ["#4a6fa5", "#ff6b6b", "#43a047", "#ffa726", "#ab47bc"]
        },
        shape: { 
            type: ["circle", "triangle", "polygon"],
            polygon: { nb_sides: 6 }
        },
        opacity: { value: 0.7, random: true },
        size: { value: 4, random: true },
        line_linked: {
            enable: true,
            distance: 150,
            color: "#ffffff",
            opacity: 0.2,
            width: 1
        },
        move: {
            enable: true,
            speed: 2,
            direction: "none",
            random: true,
            straight: false,
            out_mode: "out",
            bounce: false
        }
    },
    interactivity: {
        detect_on: "canvas",
        events: {
            onhover: { enable: true, mode: "bubble" },
            onclick: { enable: true, mode: "repulse" },
            resize: true
        },
        modes: {
            bubble: { distance: 250, size: 6, duration: 2, opacity: 0.8 },
            repulse: { distance: 200, duration: 0.4 }
        }
    },
    retina_detect: true
});

// Данные об одноклассниках
const classmates = [
    {
        name: "Iroda Shavkatovna",
        photo: "images/teachers/iroda.jpg",
        hobby: "Kitob o'qish, yangi bilimlar",
        favorite_subject: "Tarix, Tarbiya",
        quote: "1986 yildan beri o'qituvchi. Minglab o'quvchilarga dars bergan. 1-toifa o'qituvchisi va Yil o'qituvchisi sovrindori.",
        description: "Tarix, Tarbiya fani o'qituvchisi va 9F sinf rahbari.",
        isFavorite: false,
        additionalPhotos: ["images/teachers/iroda2.jpg", "images/teachers/iroda3.jpg"],
        socialLinks: [],
        type: "teacher"
    },
    {
        name: "Xalilova Zamira",
        photo: "images/teachers/zamira.jpg",
        hobby: "Matematik misollar, shirinlik tayyorlash",
        favorite_subject: "Algebra, Geometriya",
        quote: "Xalqaro Matematika GRE sertifikati egasi. 2011 yildan beri o'qituvchi.",
        description: "Algebra va Geometriya fani o'qituvchisi.",
        isFavorite: false,
        additionalPhotos: ["images/teachers/zamira2.jpg"],
        socialLinks: [],
        type: "teacher"
    },
    {
        name: "Sharipova Dilrabo",
        photo: "images/teachers/dilrabo.jpg",
        hobby: "Detektivlar, kitoblar, filmlar",
        favorite_subject: "Informatika, Matematika, Nemis tili",
        quote: "18 yildan beri ta'lim sohasida. Google va Scratch sertifikatlari egasi.",
        description: "Informatika fani o'qituvchisi.",
        isFavorite: false,
        additionalPhotos: ["images/teachers/dilrabo2.jpg"],
        socialLinks: [],
        type: "teacher"
    },
    {
        name: "Iskandarova Marjona",
        photo: "images/teachers/marjona.jpg",
        hobby: "Ingliz tilida kinolar ko'rish",
        favorite_subject: "Ingliz tili",
        quote: "TOEFL ITP 560 va C1 sertifikatlari egasi. 5000 ga yaqin o'quvchisi bo'lgan.",
        description: "Ingliz tili o'qituvchisi.",
        isFavorite: false,
        additionalPhotos: ["images/teachers/marjona2.jpg"],
        socialLinks: [],
        type: "teacher"
    },
    {
        name: "Davronova Ma'rifat",
        photo: "images/teachers/marifat.jpg",
        hobby: "Yangi bilimlar o'rganish",
        favorite_subject: "Ingliz tili",
        quote: "Ingliz tili C1 sertifikati egasi. 2018 yildan beri o'qituvchi.",
        description: "Ingliz tili o'qituvchisi.",
        isFavorite: false,
        additionalPhotos: ["images/teachers/marifat2.jpg"],
        socialLinks: [],
        type: "teacher"
    },
    {
        name: "Oygul Solijonovna",
        photo: "images/teachers/oygul.jpg",
        hobby: "Kitoblar o'qish",
        favorite_subject: "Biologiya",
        quote: "2013 yildan beri o'qituvchi. Yil o'qituvchisi unvoni sovrindori.",
        description: "Biologiya fani o'qituvchisi.",
        isFavorite: false,
        additionalPhotos: ["images/teachers/oygul2.jpg"],
        socialLinks: [],
        type: "teacher"
    },
    {
        name: "Exsonov Qo'ldoshali",
        photo: "images/teachers/exsonov2.jpg",
        hobby: "Yangi bilimlar o'rganish",
        favorite_subject: "Tarix",
        quote: "41 yillik o'qituvchilik tajribasi. 4500 dan ortiq o'quvchiga dars bergan.",
        description: "Tarix fani o'qituvchisi.",
        isFavorite: false,
        additionalPhotos: ["images/teachers/exsonov.jpg"],
        socialLinks: [],
        type: "teacher"
    },
    {
        name: "Shaxnoza Mannonova",
        photo: "images/teachers/chizmachilik.jpg",
        hobby: "O'z ustida ishlash",
        favorite_subject: "Chizmachilik, Tasviriy san'at",
        quote: "8 yillik faoliyat. 4000 dan ortiq o'quvchiga dars bergan.",
        description: "Chizmachilik fani o'qituvchisi.",
        isFavorite: false,
        additionalPhotos: ["images/teachers/chizmachilik2.jpg"],
        socialLinks: [],
        type: "teacher"
    },
    {
        name: "Abduraxmonova Parizoda",
        photo: "images/girls/parizoda.jpg",
        hobby: "Yangi narsalarni o'rganish",
        favorite_subject: "Matematika, Chizmachilik",
        quote: "Intiluvchan va mehnatsevar qiz. Matematikadan milliy sertifikat sohibi bo'lishni xohlaydi.",
        description: "Matematik, Diplomat, Arxitektor",
        isFavorite: false,
        additionalPhotos: ["images/girls/parizoda3.jpg", "images/girls/parizoda4.jpg"],
        socialLinks: [],
        type: "student",
        gender: "female"
    },
    {
        name: "Abdurahmonova Dilnura",
        photo: "images/girls/dilnura.jpg",
        hobby: "Kitob o'qish, Shaxmat",
        favorite_subject: "Tarix, Huquq",
        quote: "Qiziqishlari ko'p va aqlli fikrlash qobiliyatiga ega.",
        description: "Diplomat, Yurist",
        isFavorite: false,
        additionalPhotos: ["images/girls/dilnura.jpg"],
        socialLinks: [],
        type: "student",
        gender: "female"
    },
    {
        name: "Abduvaliyev Shohjaxon",
        photo: "images/boys/shox.jpg",
        hobby: "Futbol, Kickboxing",
        favorite_subject: "Jismoniy tarbiya",
        quote: "Sportsmen. Bir necha karra jahon va O'zbekiston chempioni.",
        description: "Sportsmen, Chempion",
        isFavorite: false,
        additionalPhotos: ["images/boys/shox2.jpg", "images/boys/shox3.jpg"],
        socialLinks: [],
        type: "student",
        gender: "male"
    },
    {
        name: "Akmalov Bositxon",
        photo: "images/boys/bosit.jpg",
        hobby: "Dasturlash, Robototexnika, Shaxmat",
        favorite_subject: "Informatika, Texnologiya, Matematika, Ingliz tili",
        quote: "DOT CLUB asoschisi. Dasturlash va kiberxavfsizlik bo'yicha tajribaga ega.",
        description: "Injener, Dasturchi, Shaxmatchi",
        isFavorite: false,
        additionalPhotos: ["images/boys/bosit2.jpg", "images/boys/bosit3.jpg"],
        socialLinks: [],
        type: "student",
        gender: "male"
    },
    {
        name: "Aliboyeva Nozima",
        photo: "images/girls/nozima.jpg",
        hobby: "Kitob o'qish, Tabiatda dam olish",
        favorite_subject: "Biologiya",
        quote: "Bilimga chanqoq va o'z ustida tinimsiz ishlaydi.",
        description: "Doktor",
        isFavorite: false,
        additionalPhotos: ["images/girls/nozima3.jpg", "images/girls/nozima4.jpg"],
        socialLinks: [],
        type: "student",
        gender: "female"
    },
    {
        name: "Ashurova Jasmina",
        photo: "images/girls/jessi.jpg",
        hobby: "Do'stlari bilan vaqt o'tkazish",
        favorite_subject: "Jismoniy tarbiya",
        quote: "Meditsina va stomatologiyaga qiziqadi. Yaxshi do'st.",
        description: "Shifokor, Stomatolog",
        isFavorite: false,
        additionalPhotos: ["images/girls/jessi2.jpg"],
        socialLinks: [],
        type: "student",
        gender: "female"
    },
    {
        name: "Berdiyeva Musaffo",
        photo: "images/girls/musaffo.jpg",
        hobby: "Drama filmlar ko'rish",
        favorite_subject: "Yo'q",
        quote: "Koreyada o'qishni va yashashni xohlaydi.",
        description: "Oddiy odam",
        isFavorite: false,
        additionalPhotos: ["images/girls/musaffo2.jpg", "images/girls/musaffo3.jpg"],
        socialLinks: [],
        type: "student",
        gender: "female"
    },
    {
        name: "Bo'riboyeva Davlatbibi",
        photo: "images/girls/davlatbibi.jpg",
        hobby: "Kitob o'qish, O'zini rivojlantirish",
        favorite_subject: "Ingliz tili, Jismoniy tarbiya",
        quote: "Psixologiya va biznesga qiziqadi. Koreyada biznes ochishni xohlaydi.",
        description: "BiznesLedі",
        isFavorite: false,
        additionalPhotos: ["images/girls/davlatbibi2.jpg", "images/girls/davlatbibi3.jpg"],
        socialLinks: [],
        type: "student",
        gender: "female"
    },
    {
        name: "Eshmurodov Shaxboz",
        photo: "images/boys/shaxboz.jpg",
        hobby: "Sport",
        favorite_subject: "Matematika, Jismoniy tarbiya",
        quote: "Yoshligidan sportga qiziqib ko'plab yutuqlarga erishgan.",
        description: "Sportsmen",
        isFavorite: false,
        additionalPhotos: ["images/boys/shaxboz2.jpg", "images/boys/shaxboz3.jpg"],
        socialLinks: [],
        type: "student",
        gender: "male"
    },
    {
        name: "G'ayratov Quvonchbek",
        photo: "images/boys/quvonch.jpg",
        hobby: "Video o'yinlar",
        favorite_subject: "Jismoniy tarbiya",
        quote: "Meditsinaga qiziqadi. Chet elda o'qishni xohlaydi.",
        description: "Doktor",
        isFavorite: false,
        additionalPhotos: ["images/boys/quvonch2.jpg", "images/boys/quvonch3.jpg"],
        socialLinks: [],
        type: "student",
        gender: "male"
    },
    {
        name: "Jumanov Nazarbek",
        photo: "images/boys/nazar.jpg",
        hobby: "Futbol",
        favorite_subject: "Jismoniy tarbiya",
        quote: "Iqtisodiyot, siyosat va huquqqa qiziqadi. Yuridik institutga kirishni xohlaydi.",
        description: "Advokat/Prokuror",
        isFavorite: false,
        additionalPhotos: ["images/boys/nazar1.jpg", "images/boys/nazar2.jpg"],
        socialLinks: [],
        type: "student",
        gender: "male"
    },
    {
        name: "Keldiyarova Charos",
        photo: "images/girls/charos.jpg",
        hobby: "Dam olish",
        favorite_subject: "Ona tili, Adabiyot",
        quote: "Jurnalistika yoki SMM sohasida ishlashni xohlaydi.",
        description: "Jurnalist, SMMchi",
        isFavorite: false,
        additionalPhotos: ["images/girls/charos2.jpg", "images/girls/charos3.jpg"],
        socialLinks: [],
        type: "student",
        gender: "female"
    },
    {
        name: "Mahmaraimova Gulrangbegim",
        photo: "images/girls/guli.jpg",
        hobby: "Til o'rganish, Kitob o'qish, Serial ko'rish, Shaxmat",
        favorite_subject: "Ingliz tili",
        quote: "Bilim olishga qiziqadi va doim yangi narsalarni o'rganishga intiladi.",
        description: "O'ta sirli odam",
        isFavorite: false,
        additionalPhotos: ["images/girls/guli2.jpg", "images/girls/guli3.jpg"],
        socialLinks: [],
        type: "student",
        gender: "female"
    },
    {
        name: "Matrizayeva Shahlo",
        photo: "images/girls/shahlo.jpg",
        hobby: "Musiqa, Kitob o'qish, Sport, Taomlar tayyorlash",
        favorite_subject: "Matematika, Ingliz tili",
        quote: "Aqlli va talantli qiz. Sportga ham qiziqadi.",
        description: "Aqlli va talantli qiz",
        isFavorite: false,
        additionalPhotos: ["images/girls/shahlo2.jpg", "images/girls/shahlo3.jpg"],
        socialLinks: [],
        type: "student",
        gender: "female"
    },
    {
        name: "Mahmudov Muhammadsolih",
        photo: "images/boys/solih.jpg",
        hobby: "KiberSport",
        favorite_subject: "Informatika, Jismoniy tarbiya",
        quote: "KiberSportda katta natijalarga erishishni xohlaydi.",
        description: "Pubger",
        isFavorite: false,
        additionalPhotos: ["images/boys/solih2.jpg", "images/boys/solih3.jpg"],
        socialLinks: [],
        type: "student",
        gender: "male"
    },
    {
        name: "Murodullayeva Sevinch",
        photo: "images/girls/sevinch.jpg",
        hobby: "Logo branding, Poster, Banner",
        favorite_subject: "Huquq, Tarix, Rus tili",
        quote: "Ajoyib dizayner va talantli rassom. SMM marketingga qiziqadi.",
        description: "Grafik Dizayner, Blogger va Rassom",
        isFavorite: false,
        additionalPhotos: ["images/girls/sevinch3.jpg", "images/girls/sevinch4.jpg"],
        socialLinks: [],
        type: "student",
        gender: "female"
    },
    {
        name: "Fayzullayeva Navbahor",
        photo: "images/girls/navbahor.jpg",
        hobby: "Shaxmat, Tarix",
        favorite_subject: "Ingliz tili, Tarix, Adabiyot, Algebra",
        quote: "Iqtidorli shaxmatchi. O'z sohasida ishlab pul topishni xohlaydi.",
        description: "O'qituvchi va Doktor",
        isFavorite: false,
        additionalPhotos: ["images/girls/navbahor2.jpg", "images/girls/navbahor3.jpg"],
        socialLinks: [],
        type: "student",
        gender: "female"
    },
    {
        name: "Mutalipova Ra'no",
        photo: "images/girls/rano4.jpg",
        hobby: "Kitob o'qish, Taomlar tayyorlash",
        favorite_subject: "Ingliz tili",
        quote: "Tillarni o'rganishga qiziqadi. Dunyo bo'ylab sayohat qilishni xohlaydi.",
        description: "Tarjimon, Gid",
        isFavorite: false,
        additionalPhotos: ["images/girls/rano3.jpg", "images/girls/rano2.jpg"],
        socialLinks: [],
        type: "student",
        gender: "female"
    },
    {
        name: "Nabiyev Farzulloh",
        photo: "images/boys/farz.jpg",
        hobby: "Dam olish",
        favorite_subject: "Matematika, Ingliz tili",
        quote: "Matematikaga qiziqishi va sportga ishtiyoqi tufayli organ sohasini egallashni xohlaydi.",
        description: "Organ ishchisi",
        isFavorite: false,
        additionalPhotos: ["images/boys/farz3.jpg", "images/boys/farz4.jpg"],
        socialLinks: [],
        type: "student",
        gender: "male"
    },
    {
        name: "Nosirov Abdurahmon",
        photo: "images/boys/abdurahmon.jpg",
        hobby: "Chizmachilik",
        favorite_subject: "Matematika, Iqtisod, Ingliz tili",
        quote: "Yaxshi va ishonchli do'st. Angliya yoki Amerikada ishlashni xohlaydi.",
        description: "Ekonomist, Matematik",
        isFavorite: false,
        additionalPhotos: ["images/boys/abdurahmon2.jpg", "images/boys/abdurahmon3.jpg"],
        socialLinks: [],
        type: "student",
        gender: "male"
    },
    {
        name: "Odilov Saidamirxon",
        photo: "images/boys/saidamir.jpg",
        hobby: "Kitob o'qish",
        favorite_subject: "Kimyo",
        quote: "O'z kasbi yo'nalishi bo'yicha grant asosida o'qishga kirishni xohlaydi.",
        description: "Doktor",
        isFavorite: false,
        additionalPhotos: ["images/boys/saidamir2.jpg", "images/boys/saidamir3.jpg"],
        socialLinks: [],
        type: "student",
        gender: "male"
    },
    {
        name: "Rashidov Amirbek",
        photo: "images/boys/amir.jpg",
        hobby: "Uxlash",
        favorite_subject: "Yo'q",
        quote: "Katta odam bo'lishni xohlaydi.",
        description: "Shifokor, Farmasevt",
        isFavorite: false,
        additionalPhotos: ["images/boys/amir2.jpg", "images/boys/amir3.jpg"],
        socialLinks: [],
        type: "student",
        gender: "male"
    },
    {
        name: "Ro'zimurodov Ulug'bek",
        photo: "images/boys/ulugbek.jpg",
        hobby: "Filmlar ko'rish",
        favorite_subject: "Informatika, Jismoniy tarbiya",
        quote: "Oshpazlik va IT sohalariga qiziqadi. Zamonaviy restoran ochishni xohlaydi.",
        description: "SpiderMan",
        isFavorite: false,
        additionalPhotos: ["images/boys/ulugbek2.jpg", "images/boys/ulugbek3.jpg"],
        socialLinks: [],
        type: "student",
        gender: "male"
    },
    {
        name: "Sohibov Samandar",
        photo: "images/boys/saman.jpg",
        hobby: "Sport, Futbol",
        favorite_subject: "Ingliz tili, Jismoniy tarbiya",
        quote: "2 karra jahon va 2 karra O'zbekiston chempioni. Sport ustasi.",
        description: "Professional Sportsmen",
        isFavorite: false,
        additionalPhotos: ["images/boys/saman2.jpg", "images/boys/saman3.jpg"],
        socialLinks: [],
        type: "student",
        gender: "male"
    },
    {
        name: "Tolliboyeva Muslima",
        photo: "images/girls/tmuslima.jpg",
        hobby: "Kitob o'qish",
        favorite_subject: "Tarix, Ingliz tili, Tarbiya",
        quote: "Koreys tilini mukammal biladi. Koreyada o'qishni xohlaydi.",
        description: "Koreys tili mutaxassisi",
        isFavorite: false,
        additionalPhotos: ["images/girls/tmuslima2.jpg", "images/girls/tmuslima3.jpg"],
        socialLinks: [],
        type: "student",
        gender: "female"
    },
    {
        name: "Xasanova Aziza",
        photo: "images/girls/aziza.jpg",
        hobby: "Raqsga tushish",
        favorite_subject: "Biologiya",
        quote: "Shaxsiy samolyot sotib olishni va ota-onasini haj safariga yuborishni xohlaydi.",
        description: "Doktor, Kardiolog",
        isFavorite: false,
        additionalPhotos: ["images/girls/aziza2.jpg"],
        socialLinks: [],
        type: "student",
        gender: "female"
    },
    {
        name: "Xushboqova Muslima",
        photo: "images/girls/xmuslima.jpg",
        hobby: "Tillar o'rganish",
        favorite_subject: "Ingliz tili, Algebra, Geometriya",
        quote: "Ingliz tilini chuqur o'rganish va o'rgatish bo'yicha mutaxassis bo'lishni xohlaydi.",
        description: "Ingliz tili mutaxassisi",
        isFavorite: false,
        additionalPhotos: ["images/girls/xmuslima2.jpg", "images/girls/xmuslima3.jpg"],
        socialLinks: [],
        type: "student",
        gender: "female"
    },
    {
        name: "Shodiqulov Azamat",
        photo: "images/boys/azamat.jpg",
        hobby: "Sport",
        favorite_subject: "Yo'q",
        quote: "Yetarlicha pul to'plab o'z orzularini ro'yobga chiqarishni xohlaydi.",
        description: "BodyBuilder",
        isFavorite: false,
        additionalPhotos: ["images/boys/azamat.jpg"],
        socialLinks: [],
        type: "student",
        gender: "male"
    },
    {
        name: "Shomurodova Mohinur",
        photo: "images/girls/mohinur.jpg",
        hobby: "Rassomlik",
        favorite_subject: "Ingliz tili",
        quote: "Ingliz tilida ravon so'zlashadi. Neyroxirurg bo'lishni xohlaydi.",
        description: "Doktor, Neyroxirurg",
        isFavorite: false,
        additionalPhotos: ["images/girls/mohinur2.jpg", "images/girls/mohinur3.jpg"],
        socialLinks: [],
        type: "student",
        gender: "female"
    }
];

// Данные альбома
const albumData = [
    {
        date: "Abadiy",
        event: "Bizning Sinf",
        description: "Bizning Sinf 9-F",
        photos: ["images/album/sinfdoshlar.jpg"]
    },
    {
        date: "Abadiy",
        event: "Sinfdoshlar",
        description: "Sinfimiz Qizlari",
        photos: ["images/album/qizlar1.jpg", "images/album/qizlar2.jpg"]
    },
    {
        date: "Abadiy",
        event: "Sinfdoshlar",
        description: "Sinfimiz Bolalari",
        photos: ["images/album/bolalar1.jpg", "images/album/bolalar2.jpg", "images/album/bolalar3.jpg", "images/album/bolalar4.jpg"]
    },
    {
        date: "26.02.2025",
        event: "Vinetka Studiyasi",
        description: "Sinfimiz(hamma emas) Vinetka uchun rasmga tushish maqsadida Studiyaga borishganligidan lavhalar.",
        photos: ["images/album/vinetka.jpg", "images/album/vinetka2.jpg", "images/album/vinetka3.jpg", "images/album/vinetka4.jpg", "images/album/vinetka5.jpg"]
    },
    {
        date: "2024-12-20",
        event: "Yangi Yil Bayrami",
        description: "Yangi Yil Bayrami Munosabati bilan Bazm",
        photos: ["images/album/new_year1.jpg", "images/album/new_year2.jpg", "images/album/new_year3.jpg"]
    },
    {
        date: "2023-03-17",
        event: "Osh",
        description: "7 Sinf, Navro'z bayrami munosabati bilan Tayyorlangan OSH",
        photos: ["images/album/navroz1.jpg", "images/album/navroz2.jpg", "images/album/navroz3.jpg"]
    },
    {
        date: "07.04.2023",
        event: "Oq Tepa Lavash da o'tirish",
        description: "Sinf bilan yeg'ilib Oq tepa Lavashda o'tirgan kunimiz",
        photos: ["images/album/oq1.jpg"]
    },
    {
        date: "07.04.2023",
        event: "Sergeli Bog'i ga sayohat",
        description: "Oq tepa Lavash da o'tirishdan so'ng Sergeli bog'i ga aylanib kelganimiz",
        photos: ["images/album/sergeli1.jpg", "images/album/sergeli2.jpg", "images/album/sergeli3.jpg"]
    },
    {
        date: "29.10.2023",
        event: "Alisher Navoiy nomidagi Kutubxona",
        description: "Sinfimiz bilan Alisher Navoiy kutubxonasiga tashrif buyurganimiz",
        photos: ["images/album/kutubxona1.jpg"]
    },
    {
        date: "29.10.2023",
        event: "Botanika Bog'i",
        description: "Sinfimiz bilan Kutubxonadan chiqib Botanika bog'iga sayohatimiz",
        photos: ["images/album/botanika.jpg", "images/album/botanika1.jpg"]
    }
];

// Глобальные переменные
let currentFilter = 'all';
let currentTheme = 'light';
let currentLightboxPhotos = [];
let currentLightboxIndex = 0;

// DOM элементы
const container = document.querySelector(".classmates");
const searchInput = document.getElementById('search-input');
const modal = document.getElementById('modal');
const modalContent = document.getElementById('modal-content-inner');
const modalCloseBtn = document.querySelector(".close");
const lightbox = document.getElementById('lightbox');
const lightboxImage = document.querySelector('.lightbox-img');
const lightboxCloseBtn = document.querySelector('.lightbox-close');
const lightboxPrevBtn = document.querySelector('.lightbox-prev');
const lightboxNextBtn = document.querySelector('.lightbox-next');
const passwordLock = document.getElementById('password-lock');
const passwordInput = document.getElementById('password-input');
const passwordSubmit = document.getElementById('password-submit');
const passwordError = document.getElementById('password-error');
const appContent = document.querySelector('.app-content');
const timelineModal = document.getElementById('timeline-modal');
const timelineContainer = document.getElementById('timeline-container');

// Статистика
const totalCount = document.getElementById('total-count');
const teachersCount = document.getElementById('teachers-count');
const studentsCount = document.getElementById('students-count');
const photosCount = document.getElementById('photos-count');

// Инициализация при загрузке
document.addEventListener('DOMContentLoaded', function() {
    checkPassword();
    initEventListeners();
    updateStats();
    
    // Загрузка сохраненных данных
    loadFavorites();
    loadTheme();
});

// Инициализация обработчиков событий
function initEventListeners() {
    // Пароль
    passwordSubmit.addEventListener('click', handlePasswordSubmit);
    passwordInput.addEventListener('keypress', function(e) {
        if (e.key === 'Enter') handlePasswordSubmit();
    });

    // Поиск и фильтры
    searchInput.addEventListener('input', handleSearch);
    document.getElementById('filter-all').addEventListener('click', () => setFilter('all'));
    document.getElementById('filter-teachers').addEventListener('click', () => setFilter('teachers'));
    document.getElementById('filter-students').addEventListener('click', () => setFilter('students'));
    document.getElementById('filter-boys').addEventListener('click', () => setFilter('boys'));
    document.getElementById('filter-girls').addEventListener('click', () => setFilter('girls'));
    document.getElementById('filter-favorites').addEventListener('click', () => setFilter('favorites'));

    // Кнопки
    document.getElementById('album-button').addEventListener('click', openAlbumModal);
    document.getElementById('timeline-button').addEventListener('click', openTimelineModal);
    document.getElementById('theme-button').addEventListener('click', toggleTheme);

    // Модальные окна
    modalCloseBtn.addEventListener('click', closeModal);
    window.addEventListener('click', function(event) {
        if (event.target === modal) closeModal();
        if (event.target === lightbox) closeLightbox();
        if (event.target === timelineModal) closeTimelineModal();
    });

    // Лайтбокс
    lightboxCloseBtn.addEventListener('click', closeLightbox);
    lightboxPrevBtn.addEventListener('click', showPrevLightboxImage);
    lightboxNextBtn.addEventListener('click', showNextLightboxImage);
}

// Функции пароля
function handlePasswordSubmit() {
    const password = passwordInput.value;

    if (password === 'Hayot') {
        localStorage.setItem('authenticated', 'true');
        unlockApp();
    } else {
        passwordError.textContent = 'Noto\'g\'ri parol!';
        passwordInput.value = '';
    }
}

function checkPassword() {
    const isAuthenticated = localStorage.getItem('authenticated');
    if (isAuthenticated === 'true') {
        unlockApp();
    } else {
        passwordLock.style.display = "flex\\";
        appContent.style.display = "none";
    }
}

function unlockApp() {
    passwordLock.style.display = "none";
    appContent.style.display = "block";
    setTimeout(() => {
        appContent.classList.add('visible');
        displayClassmates();
        unlockAchievement('firstView');
        addLogoutButton();
    }, 100);
}

function addLogoutButton() {
    const logoutBtn = document.createElement('button');
    logoutBtn.className = 'logout-btn';
    logoutBtn.innerHTML = '<i class="fas fa-sign-out-alt"></i> Chiqish';
    logoutBtn.addEventListener('click', () => {
        localStorage.removeItem('authenticated');
        location.reload();
    });
    document.body.appendChild(logoutBtn);
}

// Функции отображения
function displayClassmates(classmatesToDisplay = classmates) {
    container.innerHTML = '';
    
    const filteredClassmates = filterClassmates(classmatesToDisplay);
    
    if (filteredClassmates.length === 0) {
        container.innerHTML = '<div class="no-results"><i class="fas fa-search"></i><p>Hech narsa topilmadi</p></div>';
        return;
    }

    filteredClassmates.forEach((classmate, index) => {
        const card = createClassmateCard(classmate, index);
        container.appendChild(card);
    });
}

function filterClassmates(classmatesList) {
    switch (currentFilter) {
        case 'teachers':
            return classmatesList.filter(c => c.type === 'teacher');
        case 'students':
            return classmatesList.filter(c => c.type === 'student');
        case 'boys':
            return classmatesList.filter(c => c.type === 'student' && c.gender === 'male');
        case 'girls':
            return classmatesList.filter(c => c.type === 'student' && c.gender === 'female');
        case 'favorites':
            return classmatesList.filter(c => c.isFavorite);
        default:
            return classmatesList;
    }
}

function createClassmateCard(classmate, index) {
    const card = document.createElement('div');
    card.className = 'card';
    card.style.animationDelay = `${index * 0.1}s`;
    
    card.innerHTML = `
        <img src="${classmate.photo}" alt="${classmate.name}" class="card-img" loading="lazy">
        <div class="card-content">
            <h3>${classmate.name}</h3>
            <p>${classmate.description}</p>
            <div class="card-tags">
                <span class="card-tag">${classmate.type === 'teacher' ? 'O\'qituvchi' : 'O\'quvchi'}</span>
                <span class="card-tag">${classmate.favorite_subject.split(',')[0]}</span>
            </div>
            <div class="card-actions">
                <button class="favorite-button ${classmate.isFavorite ? 'active' : ''}">
                    <i class="fas fa-star"></i>
                </button>
                <span class="card-date">${classmate.type === 'teacher' ? 'Ustoz' : classmate.gender === 'male' ? 'Yigit' : 'Qiz'}</span>
            </div>
        </div>
    `;

    // Обработчики событий
    card.querySelector('.favorite-button').addEventListener('click', (e) => {
        e.stopPropagation();
        toggleFavorite(classmate);
    });

    card.addEventListener('click', () => {
        openModal(classmate);
    });

    return card;
}

// Функции поиска и фильтрации
function handleSearch() {
    const searchTerm = searchInput.value.toLowerCase();
    const filtered = classmates.filter(classmate => 
        classmate.name.toLowerCase().includes(searchTerm) ||
        classmate.description.toLowerCase().includes(searchTerm) ||
        classmate.favorite_subject.toLowerCase().includes(searchTerm) ||
        classmate.hobby.toLowerCase().includes(searchTerm)
    );
    displayClassmates(filtered);
}

function setFilter(filter) {
    currentFilter = filter;
    
    // Обновление активной кнопки
    document.querySelectorAll('.filter-buttons button').forEach(btn => {
        btn.classList.remove('active');
    });
    document.getElementById(`filter-${filter}`).classList.add('active');
    
    displayClassmates();
}

// Функции избранного
function toggleFavorite(classmate) {
    classmate.isFavorite = !classmate.isFavorite;
    saveFavorites();
    displayClassmates();
    
    if (classmate.isFavorite) {
        unlockAchievement('favorites');
    }
}

function saveFavorites() {
    const favorites = classmates.map(c => ({ 
        name: c.name, 
        isFavorite: c.isFavorite 
    }));
    localStorage.setItem('classmatesFavorites', JSON.stringify(favorites));
}

function loadFavorites() {
    const savedFavorites = JSON.parse(localStorage.getItem('classmatesFavorites'));
    if (savedFavorites) {
        savedFavorites.forEach(saved => {
            const classmate = classmates.find(c => c.name === saved.name);
            if (classmate) {
                classmate.isFavorite = saved.isFavorite;
            }
        });
    }
}

// Модальные окна
function openModal(classmate) {
    modalContent.innerHTML = `
        <div class="profile-modal">
            <img src="${classmate.photo}" alt="${classmate.name}" class="profile-modal-img">
            <h3>${classmate.name}</h3>
            <div class="profile-info">
                <p><strong>Qiziqishlari:</strong> ${classmate.hobby}</p>
                <p><strong>Sevimli fanlari:</strong> ${classmate.favorite_subject}</p>
                <p><strong>Maqsadi:</strong> ${classmate.quote}</p>
                <p><strong>Tavsif:</strong> ${classmate.description}</p>
            </div>
            
            ${classmate.additionalPhotos.length > 0 ? `
                <button class="download-all-btn" onclick="downloadAllPhotos('${classmate.name}', ${JSON.stringify([classmate.photo, ...classmate.additionalPhotos]).replace(/"/g, '&quot;')})">
                    <i class="fas fa-download"></i> Barcha rasmlarni yuklab olish
                </button>
                
                <h4>Qo'shimcha rasmlar</h4>
                <div class="profile-modal-additional-photos">
                    ${classmate.additionalPhotos.map(photo => 
                        `<img src="${photo}" alt="${classmate.name}" class="profile-modal-additional-photo" loading="lazy">`
                    ).join('')}
                </div>
            ` : ''}
        </div>
    `;

    // Добавляем обработчики для дополнительных фото
    const additionalPhotos = modalContent.querySelectorAll('.profile-modal-additional-photo');
    additionalPhotos.forEach((photo, index) => {
        photo.addEventListener('click', () => {
            openLightbox(classmate.additionalPhotos, index);
        });
    });

    modal.style.display = "block";
}

function openAlbumModal() {
    modalContent.innerHTML = `
        <h2>Fotoalbom</h2>
        <div class="album-grid">
            ${albumData.map(event => `
                <div class="album-event">
                    <h3>${event.event}</h3>
                    <p class="album-date">${event.date}</p>
                    <p>${event.description}</p>
                    <div class="album-photos">
                        ${event.photos.slice(0, 3).map(photo => 
                            `<img src="${photo}" alt="${event.event}" class="album-photo" loading="lazy">`
                        ).join('')}
                        ${event.photos.length > 3 ? `<div class="album-more">+${event.photos.length - 3}</div>` : ''}
                    </div>
                </div>
            `).join('')}
        </div>
    `;

    // Добавляем обработчики для фото в альбоме
    const albumPhotos = modalContent.querySelectorAll('.album-photo');
    albumPhotos.forEach((photo, index) => {
        const eventIndex = Math.floor(index / 3);
        const photoIndex = index % 3;
        photo.addEventListener('click', () => {
            openLightbox(albumData[eventIndex].photos, photoIndex);
        });
    });

    modal.style.display = "block";
}

function openTimelineModal() {
    timelineContainer.innerHTML = `
        ${albumData.map((event, index) => `
            <div class="timeline-event ${index % 2 === 0 ? 'left' : 'right'}">
                <div class="timeline-content">
                    <h3>${event.event}</h3>
                    <p class="timeline-date">${event.date}</p>
                    <p>${event.description}</p>
                    <div class="timeline-photos">
                        ${event.photos.slice(0, 2).map(photo => 
                            `<img src="${photo}" alt="${event.event}" class="timeline-photo" loading="lazy">`
                        ).join('')}
                    </div>
                </div>
            </div>
        `).join('')}
    `;

    // Добавляем обработчики для фото в таймлайне
    const timelinePhotos = timelineContainer.querySelectorAll('.timeline-photo');
    timelinePhotos.forEach((photo, index) => {
        const eventIndex = Math.floor(index / 2);
        const photoIndex = index % 2;
        photo.addEventListener('click', () => {
            openLightbox(albumData[eventIndex].photos, photoIndex);
        });
    });

    timelineModal.style.display = "block";
}

function closeModal() {
    modal.style.display = "none";
}

function closeTimelineModal() {
    timelineModal.style.display = "none";
}

// Лайтбокс
function openLightbox(photos, startIndex = 0) {
    currentLightboxPhotos = photos;
    currentLightboxIndex = startIndex;
    lightboxImage.src = photos[startIndex];
    lightbox.style.display = "flex";
}

function closeLightbox() {
    lightbox.style.display = "none";
    currentLightboxPhotos = [];
    currentLightboxIndex = 0;
}

function showPrevLightboxImage() {
    currentLightboxIndex = (currentLightboxIndex - 1 + currentLightboxPhotos.length) % currentLightboxPhotos.length;
    lightboxImage.src = currentLightboxPhotos[currentLightboxIndex];
}

function showNextLightboxImage() {
    currentLightboxIndex = (currentLightboxIndex + 1) % currentLightboxPhotos.length;
    lightboxImage.src = currentLightboxPhotos[currentLightboxIndex];
}

// Скачивание фото
function downloadAllPhotos(name, photos) {
    photos.forEach((photo, index) => {
        const link = document.createElement('a');
        link.href = photo;
        link.download = `${name}_${index + 1}.jpg`;
        link.style.display = 'none';
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
    });
    
    showNotification(`Barcha rasmlar yuklab olindi!`);
}

// Тема
function toggleTheme() {
    const themes = ['light', 'dark', 'school'];
    const currentIndex = themes.indexOf(currentTheme);
    const nextIndex = (currentIndex + 1) % themes.length;
    currentTheme = themes[nextIndex];

    // Обновляем класс body
    document.body.className = `${currentTheme}-theme`;

    // Обновляем иконку
    const themeIcon = document.querySelector('#theme-button i');
    themeIcon.className = currentTheme === 'light' ? 'fas fa-moon' : 
                         currentTheme === 'dark' ? 'fas fa-sun' : 'fas fa-school';

    // Сохраняем тему
    localStorage.setItem('theme', currentTheme);
}

function loadTheme() {
    const savedTheme = localStorage.getItem('theme');
    if (savedTheme) {
        currentTheme = savedTheme;
        document.body.className = `${currentTheme}-theme`;
        
        const themeIcon = document.querySelector('#theme-button i');
        themeIcon.className = currentTheme === 'light' ? 'fas fa-moon' : 
                             currentTheme === 'dark' ? 'fas fa-sun' : 'fas fa-school';
    }
}

// Статистика
function updateStats() {
    const teachers = classmates.filter(c => c.type === 'teacher').length;
    const students = classmates.filter(c => c.type === 'student').length;
    const totalPhotos = classmates.reduce((acc, c) => acc + c.additionalPhotos.length + 1, 0) + 
                       albumData.reduce((acc, a) => acc + a.photos.length, 0);

    totalCount.textContent = classmates.length;
    teachersCount.textContent = teachers;
    studentsCount.textContent = students;
    photosCount.textContent = totalPhotos;
}

// Достижения
function unlockAchievement(achievementName) {
    const achievement = document.querySelector(`.achievement.${achievementName}`);
    if (achievement && achievement.classList.contains('locked')) {
        achievement.classList.remove('locked');
        achievement.classList.add('unlocked');
        
        // Показываем уведомление
        showNotification(`Yutuq ochildi: ${achievement.querySelector('span').textContent}`);
    }
}

function showNotification(message) {
    const notification = document.createElement('div');
    notification.className = 'notification';
    notification.innerHTML = `
        <i class="fas fa-trophy"></i>
        <span>${message}</span>
    `;
    
    document.body.appendChild(notification);
    
    // Анимация появления
    setTimeout(() => {
        notification.classList.add('show');
    }, 100);
    
    // Автоматическое скрытие
    setTimeout(() => {
        notification.classList.remove('show');
        setTimeout(() => {
            notification.remove();
        }, 300);
    }, 3000);
}

// Обработка ошибок изображений
document.addEventListener('DOMContentLoaded', function() {
    document.addEventListener('error', function(e) {
        if (e.target.tagName === 'IMG') {
            e.target.src = 'data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" width="100" height="100" viewBox="0 0 100 100"><rect width="100" height="100" fill="%234a6fa5"/><text x="50" y="50" font-size="12" text-anchor="middle" dominant-baseline="middle" fill="white">Rasm</text></svg>';
            e.target.alt = 'Rasm yuklanmadi';
        }
    }, true);
});

// Анимации при скролле
let hasAnimated = false;

function checkScroll() {
    if (!hasAnimated) {
        const elements = document.querySelectorAll('.card, .stat-item, .achievement');
        elements.forEach(el => {
            const position = el.getBoundingClientRect();
            if (position.top < window.innerHeight - 100) {
                el.style.animationPlayState = 'running';
            }
        });
        
        if (elements.length > 0) {
            hasAnimated = true;
        }
    }
}

window.addEventListener('scroll', checkScroll);
window.addEventListener('resize', checkScroll);

// Инициализация анимаций
setTimeout(checkScroll, 100);