import { useState, useRef, useEffect } from 'react'
import './App.css'
import $ from 'jquery';


import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination } from 'swiper/modules';

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';


import Projects_item from './components/Projects_item/Projects_item'

function App() {
  const [text1, SetText1] = useState("Stress-Free Renovations")
  const [text11, SetText11] = useState("Stress-Free Renovations is a one-stop shop offering a full range of home improvement and remodeling services. From complete home, kitchen, bathroom and garden renovations to specialist services such as smart home installations, roof repairs, landscaping and yard improvements, we take care of everything. We guarantee high-quality, efficient and aesthetically pleasing solutions to make your home perfect, stress-free.")
  const [text2, SetText2] = useState("KAZBEK")
  const [text22, SetText22] = useState("KAZBEK is a restaurant that offers authentic Georgian dishes prepared according to traditional recipes using fresh and quality ingredients. Our website is a one-page resource where you can learn about the history of the restaurant, its philosophy, and view examples from our menu, including dishes such as eggplant pkhali, shkmeruli, and honey-nut cake. Welcome to the world of authentic Georgian flavors that await you at KAZBEK.")
  const [text3, SetText3] = useState("Snow Monkey Hot Spring Club")
  const [text33, SetText33] = useState('"Snow Monkey Hot Spring Club" is a digital collection of 8,888 unique "Snow Monkey" NFTs. Each NFT is generated from over 100 possible characteristics, making each monkey unique and some rarer. The site provides information about the project, including the size of the collection and the mint price, as well as a gallery of NFT samples from the collection.')
  const [text4, SetText4] = useState("CAR MUSC")
  const [text44, SetText44] = useState("CAR MUSC is a website dedicated to automobiles, probably related to motorsports, tuning or car enthusiasts. The website features information about achievements (possibly in motorsports or car customization) from the Russian Cup to World Championships. The website also has contact information and presumably opening hours. The design is done in dark colors with an emphasis on cars, which emphasizes the seriousness and passion for cars.")
  const [text5, SetText5] = useState("Fritsweet")
  const [text55, SetText55] = useState("Fritsweet is a digital studio or agency that specializes in creating high-quality websites for startups. We offer a full service cycle, including strategy, wireframing, design, and development, to ensure a successful online presence for our clients. Our goal is to help young companies build stellar websites that will fuel their growth and success.")
  const [text6, SetText6] = useState("Night Trips")
  const [text66, SetText66] = useState("Night Trips is a travel portal that offers unique adventures and trips focused on night time. The site features various travel options, such as the &quot; Chill Adventure &quot;, and offers the ability to choose a tour. With an emphasis on spectacular nightscapes, the site invites explorers to discover the world in the dark.")
  const [text7, SetText7] = useState("PORTEN")
  const [text77, SetText77] = useState('PORTEN is the official website of the watch brand based in St. Petersburg. The site features watch collections, including the Season 2020/21" and "Collection 2018", as well as announcements of new arrivals. The site displays stylish images of watches and people in elegant looks, which emphasizes the brand ̀ s image as a manufacturer of fashionable and, perhaps, luxury accessories.')
  
  const [text8, SetText8] = useState("Screenshoter")
  const [text88, SetText88] = useState('Screenshoter: Your Instant Screen Capture and Recorder. Capture everything that happens on your screen with one click. Screenshoter lets you effortlessly capture screenshots and record PC activity, perfect for sharing highlights, tutorials or gameplay. Free and easy to use for Windows.')

  const [skills_start, setSkills_start] = useState(false)
  useEffect(() => {
    let user
    if (navigator.userAgent.match(/Android/i) ||
      navigator.userAgent.match(/webOS/i) ||
      navigator.userAgent.match(/iPhone/i) ||
      navigator.userAgent.match(/iPad/i) ||
      navigator.userAgent.match(/iPod/i) ||
      navigator.userAgent.match(/BlackBerry/i) ||
      navigator.userAgent.match(/Windows Phone/i)) {
      mobile()
      console.log("Mobile");
      $(".random_block , .footer_part").hide()
      $(".footer").css({
        "clip-path": "none"
      })
      user = "mobile"
    } else {
      desktop()
      console.log("PC or else");
      user = "desktop"
    }
    function mobile() {
      function randomPos() {
        let randomX = Math.floor(Math.random() * 101);
        let randomY = Math.floor(Math.random() * 101);
        let randDuration =
          $(".folow_block").animate({
            "left": randomX + "%",
            "top": randomY + "%"
          },)
      }

      randomPos()

      let randomPosInterval = setInterval(() => {
        randomPos()
      }, 5000)
      clearInterval(randomPosInterval)
    }

    function cursoreMove() {
      let scrolltop = $(document).scrollTop()
      const x = event.clientX;
      const y = event.clientY;
      if ((y + scrolltop) > 3600) {
        $(".folow_block").css({
          "top": 3599
        })
      } else {
        $(".folow_block").css({
          "left": x - 15
        })
        $(".folow_block").css({
          "top": y - 15 + scrolltop
        })
        $(".pos").text(scrolltop)
        $(".pos2").text("y:" + y)
        $(".pos3").text("x:" + x)
      }

    }
    if (document.readyState) {
      //jquery code


      $   ("#element45, #element46").click(() => {
        setTimeout(() => {
          showFooterPart()
        }, 300)
      })

      let skills_btn = false
      $(".skills_btn2").click(() => {
        if (skills_btn) {
          $(".soft_skills").hide()
          $(".skills").animate({
            "height": "700px"
          }, 1000)
          $(".skills").css({
            "display": "flex"
          })
          setTimeout(() => {
            skillsAnimation();
          }, 1600)
          skills_btn = false
        }
      })

      $("#skills").on( "mouseover", function() {
        if(skills_start==false){
          setSkills_start(true)
          console.log(skills_start)
          skillsAnimation()
        }
      })

      $(".skills_btn1").click(() => {
        if (!skills_btn) {
          $(".skills").animate({
            "height": "0px"
          }, 1000).hide()
          $(".soft_skills").animate({
            "height": "450px"
          }, 1000)
          $(".soft_skills").css({
            "display": "flex"
          })
          skills_btn = true
        }
      })

      let bmenu = false
      if (user == "mobile") {
        $(".nav_block1").click(() => {
          if (!bmenu) {
            $(".nav_item").css({ "display": "flex" })
            $(".")
          }
        })
        $(".nav_block1").css({
          "width": "50px",
          "height": "50px",
          "background": "url('../src/assets/Hamburger_icon.svg.png')",
          "background-size": "100% 100%",
          "margin-right": "10px"
        })
        $(".nav").css({
          "align-items": "center"
        })
        $(".lang_menu").css({
          "margin": "0px"
        })
        $(".box").css({
          "padding-right": "10px"
        })
        $(".about_text2").css({
          "width": "85vw"
        })
        $(".skills_btns").css({
          "width": "100%",
        })
        $(".slider_text1").css({
          "font-size": "20px",
          "width": "170%"
        })
        $(".slider_text2").css({
          "font-size": "13px",
          "width": "170%"
        })
        $(".slider_text3").css({
          "font-size": "18px",
          "width": "170%"
        })
        $(".swiper-slide-next").css({
          "margin-left": "30px"
        })
        $(".slider_img1, .slider_img2, .slider_img3, .slider_img4, .slider_img5").css({
          "width": "200%",
          "height": "40%"
        })
        $(".project").css({
          "width": "90%"
        })
        $(".header").css({
          "height": "570px"
        })
        $(".contact").css({
          "flex-direction": "column",
          "margin-left": "-130px"
        })
        $(".contact_block1, .contact_block2").css({
          "width": "200%"
        })
        $(".contact_cont1").css({
          "width": "90vw",
          "justify-content": "space-between",
          "align-self": "start",
          "margin-top": "10px"
        })
        $(".contact_inp3").css({
          "width": "90vw",
          "align-self": "start",
          "margin-top": "10px",
          "margin-bottom": "10px"
        })
        $("#element33").css({
          "width": "90vw",
          "align-self": "start"
        })
        $(".contact_block2").css({
        })

        $(".contact_cont1").css({
          "flex-direction":"column",
          "height":"70px",
          "justify-content": "space-around"
        })

        $(".nav_item").hide()
        skillsAnimation()
      }
    }
    function desktop() {
      document.addEventListener('mousemove', function (event) {
        cursoreMove()
      });

    }

    function skillsAnimation() {
      if(skills_start){
      $(".skills_block1").animate({ "width": "70%" }, 1000)
      $(".skills_block2").animate({ "width": "64%" }, 1000)
      $(".skills_block3").animate({ "width": "41%" }, 1000)
      $(".skills_block4").animate({ "width": "73%" }, 1000)
      $(".skills_block5").animate({ "width": "23%" }, 1000)
      $(".skills_block6").animate({ "width": "47%" }, 1000)
      $(".skills_block7").animate({ "width": "40%" }, 1000)
      $(".skills_block8").animate({ "width": "28%" }, 1000)
      $(".skills_block9").animate({ "width": "23%" }, 1000)
      $(".skills_block10").animate({ "width": "25%" }, 1000)
      }
    }
    function skillsAnimation_off() {
      for (let i = 0; i <= 9; i++) {
        $(".skills_block" + i).animate({ "width": "86%" }, 1000)
      }
    }



    $(".projects").mousedown(() => {
      $(".projects").css({
        "cursor": "grabbing"
      })
    })

    const rand = [
      'a', 'B', '7', '$', 'x', 'Y', '0', '!', 'q', 'W', '3', '#',
      'z', 'A', '9', '%', 'l', 'K', '2', '^', 's', 'D', '5', '&',
      'm', 'N', '1', '*', 'j', 'U', '8', '(', 'p', 'R', '4', ')',
      'f', 'G', '6', '-', 'c', 'V', '+', '=', 'b', 'H', '[', ']',
      'i', 'O', '{', '}', ';', ':', ',', '.', '<', '>', '/', '?',
      '~', '`', '|', '\\', '"', '\'', 'ᚠ', 'ᚢ', 'ᚦ', 'ᚨ', 'ᚱ', 'ᚲ',
      'ᚷ', 'ᚹ', 'ᚺ', 'ᚾ', 'ᛁ', 'ᛃ', 'ᛇ', 'ᛈ', 'ᛉ', 'ᛊ', 'ᛏ', 'ᛒ', 'ᛖ',
      'ᛗ', 'ᛚ', 'ᛜ', 'ᛞ', 'ᛟ', '•', ':', 'ᔑ', 'ʖ', 'ᓵ', '↸', 'ᒷ',
      '⎓', '⊣', '⍑', '╎', '⋮', 'ꖌ', 'ꖎ', 'ᒲ', 'リ', '𝙹', '!', '¡',
      'ᑑ', '∷', 'ᓭ', 'ℸ', '̣', '⚍', '⍊', '∴', '̇/', '||', '⨅', "Hello world!",
      "<div>", "<p>", "<header>", "<nav>", "<footer>"
    ]

    const min = 600;
    const max = 1000;
    let randomTime = 0
    setInterval(() => {
      $(".random_text1 ").text(rand[Math.floor(Math.random() * rand.length)])
      $(".random_text2 ").text(rand[Math.floor(Math.random() * rand.length)])
      $(".random_text3 ").text(rand[Math.floor(Math.random() * rand.length)])
      $(".random_text4 ").text(rand[Math.floor(Math.random() * rand.length)])
      $(".random_text5 ").text(rand[Math.floor(Math.random() * rand.length)])
      $(".random_text6 ").text(rand[Math.floor(Math.random() * rand.length)])
      $(".random_text7 ").text(rand[Math.floor(Math.random() * rand.length)])
      $(".random_text8 ").text(rand[Math.floor(Math.random() * rand.length)])
      $(".random_text9 ").text(rand[Math.floor(Math.random() * rand.length)])
      $(".random_text10").text(rand[Math.floor(Math.random() * rand.length)])
      $(".random_text11").text(rand[Math.floor(Math.random() * rand.length)])
      $(".random_text12").text(rand[Math.floor(Math.random() * rand.length)])
      $(".random_text13").text(rand[Math.floor(Math.random() * rand.length)])
      $(".random_text14").text(rand[Math.floor(Math.random() * rand.length)])
      $(".random_text15").text(rand[Math.floor(Math.random() * rand.length)])
      $(".random_text16").text(rand[Math.floor(Math.random() * rand.length)])
      $(".random_text17").text(rand[Math.floor(Math.random() * rand.length)])
      $(".random_text18").text(rand[Math.floor(Math.random() * rand.length)])
      $(".random_text19").text(rand[Math.floor(Math.random() * rand.length)])
      $(".random_text20").text(rand[Math.floor(Math.random() * rand.length)])

      $(".random_text21").text(rand[Math.floor(Math.random() * rand.length)])
      $(".random_text22").text(rand[Math.floor(Math.random() * rand.length)])
      $(".random_text23").text(rand[Math.floor(Math.random() * rand.length)])
      $(".random_text24").text(rand[Math.floor(Math.random() * rand.length)])
      $(".random_text25").text(rand[Math.floor(Math.random() * rand.length)])
      $(".random_text26").text(rand[Math.floor(Math.random() * rand.length)])
      $(".random_text27").text(rand[Math.floor(Math.random() * rand.length)])
      $(".random_text28").text(rand[Math.floor(Math.random() * rand.length)])
      $(".random_text29").text(rand[Math.floor(Math.random() * rand.length)])
      $(".random_text30").text(rand[Math.floor(Math.random() * rand.length)])
      $(".random_text31").text(rand[Math.floor(Math.random() * rand.length)])
      $(".random_text32").text(rand[Math.floor(Math.random() * rand.length)])
      $(".random_text33").text(rand[Math.floor(Math.random() * rand.length)])
      $(".random_text34").text(rand[Math.floor(Math.random() * rand.length)])
      $(".random_text35").text(rand[Math.floor(Math.random() * rand.length)])
      $(".random_text36").text(rand[Math.floor(Math.random() * rand.length)])
      $(".random_text37").text(rand[Math.floor(Math.random() * rand.length)])
      $(".random_text38").text(rand[Math.floor(Math.random() * rand.length)])
      $(".random_text39").text(rand[Math.floor(Math.random() * rand.length)])
      $(".random_text40").text(rand[Math.floor(Math.random() * rand.length)])
    }, Math.floor(Math.random() * (max - min + 1)) + min)



    function startFalling($el) {
      $el.css({
        "left": Math.floor(Math.random() * 100) + "%",
        "top": "-20%",
        "opacity": "0%",
        "display": "block"
      }).animate({ "opacity": "100%" }, 200, function () {
        const randomTime = Math.floor(Math.random() * 8001) + 5000;

        $el.animate({ "top": "130%" }, randomTime, "linear", function () {
          $el.css("display", "none");
          setTimeout(function () {
            startFalling($el);
          }, 10);
        });
      });
    }


    $(".random_text").each(function () {
      startFalling($(this));
    });

    let footer_part_show = false
    function showFooterPart() {
      if (user == "desktop") {
        if (!footer_part_show) {
          footer_part_show = true
          $(".random_block").show().animate({
            "opacity": "100%",
            "height": "450px"
          }, 1000)
        } else {
          footer_part_show = false
          $(".random_block").animate({
            "height": "0px"
          }, 1000)
        }
      }
    }
    $(".clickable").click(() => {
      showFooterPart()
    })

    $(".header_block2").click(() => {
      $(".img1").css({
        "display": "flex"
      })
    })
    $(".img1").click(() => {
      $(".img1").hide()
    })
    $(".about_block2").click(() => {
      $(".img2").css({
        "display": "flex"
      })
    })
    $(".img2").click(() => {
      $(".img2").hide()
    })

    $(".slider_img1").click(() => {
      $(".img3_1").css({
        "display": "flex"
      })
    })
    $(".img3_1").click(() => {
      $(".img3_1").hide()
    })
    $(".slider_img2").click(() => {
      $(".img3_2").css({
        "display": "flex"
      })
    })
    $(".img3_2").click(() => {
      $(".img3_2").hide()
    })
    $(".slider_img3").click(() => {
      $(".img3_3").css({
        "display": "flex"
      })
    })
    $(".img3_3").click(() => {
      $(".img3_3").hide()
    })
    $(".slider_img4").click(() => {
      $(".img3_4").css({
        "display": "flex"
      })
    })
    $(".img3_4").click(() => {
      $(".img3_4").hide()
    })
    //
    $(".slider_img5").click(() => {
      $(".img3_5").css({
        "display": "flex"
      })
    })
    $(".img3_5").click(() => {
      $(".img3_5").hide()
    })
    $(".slider_img6").click(() => {
      $(".img3_6").css({
        "display": "flex"
      })
    })
    $(".img3_6").click(() => {
      $(".img3_6").hide()
    })
    $(".slider_img7").click(() => {
      $(".img3_7").css({
        "display": "flex"
      })
    })
    $(".img3_7").click(() => {
      $(".img3_7").hide()
    })
    $(".slider_img8").click(() => {
      $(".img3_8").css({
        "display": "flex"
      })
    })
    $(".img3_8").click(() => {
      $(".img3_8").hide()
    })

    $(document).keydown(function(e) {
      if (e.keyCode === 27) { // 27 - это код клавиши Escape
          $(".img1, .img2, .img3_1, .img3_2, .img3_3, .img3_4, .img3_5, .img3_6, .img3_7").hide();
      }
    });




    $(".contact_inp1 , .contact_inp2 , .contact_inp3, #element32").addClass("color_white")
    $(".nav_them_light").click(() => {
      $(".back").css({
        "background": "#fff"
      })
      $("*").css({
        "color": "#000"
      })
      $(".contact_inp1 , .contact_inp2 , .contact_inp3, #element32").removeClass("color_white")
      $(".folow_block").css({
        "background": "rgba(43, 12, 255, 0.19)"
      })
      $(".about_text1, .header_text1").css({
        "color": "#000"
      })
    })
    $(".nav_them_dark").click(() => {
      $(".back").css({
        "background": "#0f172a"
      })
      $("*").css({
        "color": ""
      })
      $(".contact_inp1 , .contact_inp2 , .contact_inp3, #element32").addClass("color_white")
      $(".folow_block").css({
        "background": "rgba(7, 7, 219, 0.2)"
      })
      $(".about_text1 , .header_text1").css({
        "color": ""
      })
    })



    window.addEventListener('DOMContentLoaded', function () {
      document.getElementById('contact-form').addEventListener('submit', function (event) {
        event.preventDefault();
        // generate a five digit number for the contact_number variable
        this.contact_number.value = Math.random() * 100000 | 0;
        // these IDs from the previous steps
        emailjs.sendForm('service_n3uejth', 'template_aqz6rip', this)
          .then(function () {
            console.log('SUCCESS!');
          }, function (error) {
            console.log('FAILED...', error);
          });
      });

    });




    // https://dunks1980.com/
    // https://ejosue.com/#sidewidgetarea
    // https://brittanychiang.com/#about
    $('.tg_text').click(() => {
      navigator.clipboard.writeText('@Egorek_231')

    });



    let langMenuOpen = false
    $(".lang_menu").click(() => {
      if (!langMenuOpen) {
        $(".lang_cont").css({
          "display": "flex"
        })
        langMenuOpen = true
      } else {
        $(".lang_cont").hide()
        langMenuOpen = false
      }
    })
  })



  //html 90%
  //css 90%
  //js 90%
  //jquery 95%


  const ru = [
    "Главная", // element0
    "Обо мне", // element1
    "Мои навыки", // element2
    "Проекты", // element3
    "Контакты", // element4
    "Привет, меня зовут Егор Степанский!", // element5
    "Я веб-разработчик, который стремится создавать эффективные и высококачественные решения. Моя цель — создавать чистый и аккуратный код, который не только быстро работает, но и легко поддерживается. Я постоянно расширяю свои горизонты в области веб-разработки, осваивая новые технологии и подходы, чтобы предлагать оптимальные решения для каждого проекта.", // element6
    "Обо мне.", // element7
    "Привет! Я Егор Степанский, веб-разработчик из Кривого Рога. Я активно работаю с front-end технологиями уже 3-4 года, специализируясь на HTML, CSS и JavaScript, что позволяет мне создавать современные и адаптивные интерфейсы. Последние 2 года я также использую jQuery для повышения интерактивности, а за последние 6-12 месяцев освоил React для разработки более сложных и масштабируемых приложений. Мой подход к разработке — это постоянное обучение и адаптация. Я не привязан к одному фреймворку или библиотеке; вместо этого я постоянно расширяю свой технологический стек, чтобы оставаться в курсе последних тенденций. В настоящее время я активно изучаю PHP и Python для back-end разработки и углубляюсь в работу с базами данных (MySQL и другими) для создания полноценных веб-решений. Недавно я также начал осваивать Lua. Я горжусь высоким качеством и относительной скоростью своих проектов. Особое внимание я уделяю чистоте и аккуратности кода, что обеспечивает его легкую поддержку и масштабируемость. Моя цель — не просто выполнить работу, а превзойти ожидания, создавая функциональные и интуитивно понятные веб-приложения.", // element8
    "Все мои проекты на", // element9
    "Навигация", // element10 (h3)
    "Главная", // element11 (li a)
    "Обо мне", // element12 (li a)
    "Мои навыки", // element13 (li a)
    "Проекты", // element14 (li a)
    "Контакты", // element15 (li a - в футере)
    "Свяжитесь со мной", // element16 (h3 - в футере)
    "stepanskiyegor142@gmail.com", // element17 (li a - в футере)
    "+380 96 297 67 91", // element18 (li a - в футере)
    "Имя пользователя:", // element19 (li - в футере)
    "Ссылки на портфолио моих друзей", // element20 (h3 - в футере) - этот элемент был пропущен в вашем RU массиве
    "Lorem lorem lorem", // element21 (li a)
    "Lorem lorem lorem", // element22 (li a)
    "Lorem lorem lorem", // element23 (li a)
    "Lorem lorem lorem", // element24 (li a)
    "Другое", // element25 (h3 - в футере)
    "Посещения сайта:", // element26 (p - в футере)
    "Технологии, использованные при разработке этого сайта:", // element27 (p - в футере)
    "", // element28 - пропущен в HTML, оставляем пустым или удаляем, если не используется
    "Футер", // element29 (nav_item) - не используется в HTML с этим ID
    "Название веб-сайта", // element30 (slider_text1) - не используется в HTML с этим ID
    "описание Lorem, ipsum dolor sit amet consectetur adipisicing elit. Autem sed praesentium sapiente voluptatum corrupti. Dolorem, nihil.", // element31 (slider_text2) - не используется в HTML с этим ID
    "Ссылка на этот проект ", // element32 (slider_text3) - используется для кнопки "Отправить сообщение"
    "Отправить сообщение", // element33 (button) - не используется в HTML с этим ID
    "Свяжитесь со мной", // element34 (contact_text1)
    "Заполните форму ниже. Пожалуйста, убедитесь, что вы указали свое имя, правильный адрес электронной почты и четко изложили свое сообщение. Я свяжусь с вами в ближайшее время!", // element35 (contact_text2)
    "stepanskiyegor142@gmail.com", // element36 (contact_text3 a)
    "+380 96 297 67 91", // element37 (contact_text4 a)
    "Имя пользователя Telegram:", // element38 (contact_text4 tg_text)
    "Другое: " // element39 - не используется в HTML с этим ID
  ];

  const en = [
    "Home", // element0
    "About me", // element1
    "My skills", // element2
    "Projects", // element3
    "Contact", // element4
    "Hello, my name is Egor Stepansky!", // element5
    "I am a web developer who strives to create efficient and high-quality solutions. My goal is to create clean and neat code that not only works fast but is also easy to maintain. I am constantly expanding my horizons in the field of web development, mastering new technologies and approaches to offer optimal solutions for each project.", // element6
    "About me.", // element7
    "Hi! I'm Yegor Stepanskiy, a web developer from Krivoy Rog. I've been actively working with front-end technologies for 3-4 years now, specializing in HTML, CSS, and JavaScript, which allows me to create modern and responsive interfaces. For the last 2 years, I've also been jQuery to enhance interactivity, and over the last 6 months to a year, I've mastered React to develop more complex and scalable applications. My approach to development is one of constant learning and adaptation. I'm not tied to a single framework or library; instead, I'm constantly expanding my tech stack to stay on top of the latest trends. I'm currently actively learning PHP and Python for back-end development, and diving into working with databases (MySQL and others) to create full-fledged web solutions. I've also recently started mastering Lua. I pride myself on the high quality and relative speed of my projects. I pay special attention to the cleanliness and neatness of the code, which ensures its easy support and scalability. My goal is not just to get the job done, but to exceed expectations by creating functional and intuitive web applications.", // element8
    "All my projects on ", // element9
    "Navigation", // element10 (h3)
    "Home", // element11 (li a)
    "About me", // element12 (li a)
    "My skills", // element13 (li a)
    "Projects", // element14 (li a)
    "Contacts", // element15 (li a - в футере)
    "Contact me", // element16 (h3 - в футере)
    "stepanskiyegor142@gmail.com", // element17 (li a - в футере)
    "+380 96 297 67 91", // element18 (li a - в футере)
    "Telegram username:", // element19 (li - в футере)
    "Links to portfolios of my friends", // element20 (h3 - в футере)
    "Lorem lorem lorem", // element21 (li a)
    "Lorem lorem lorem", // element22 (li a)
    "Lorem lorem lorem", // element23 (li a)
    "Lorem lorem lorem", // element24 (li a)
    "Other", // element25 (h3 - в футере)
    "Site visits:", // element26 (p - в футере)
    "Technologies that were used in the development of this site:", // element27 (p - в футере)
    "", // element28 - пропущен в HTML
    "Footer", // element29 (nav_item) - не используется в HTML с этим ID
    "Web site name", // element30 (slider_text1) - не используется в HTML с этим ID
    "description Lorem, ipsum dolor sit amet consectetur adipisicing elit. Autem sed praesentium sapiente voluptatum corrupti. Dolorem, nihil.", // element31 (slider_text2) - не используется в HTML с этим ID
    "Send message", // element32 (slider_text3) - используется для кнопки "Отправить сообщение"
    "Send message", // element33 (button) - не используется в HTML с этим ID
    "Contact me", // element34 (contact_text1)
    "Fill out the form below. Please make sure you include your name, correct email, and clearly state your message. I will contact you shortly!", // element35 (contact_text2)
    "stepanskiyegor142@gmail.com", // element36 (contact_text3 a)
    "+380 96 297 67 91", // element37 (contact_text4 a) - пропущен в вашем EN массиве
    "Telegram username:", // element38 (contact_text4 tg_text)
    "Other: " // element39 - не используется в HTML с этим ID
  ];

  const uk = [
    "Головна", // element0
    "Про мене", // element1
    "Мої навички", // element2
    "Проекти", // element3
    "Контакти", // element4
    "Привіт, мене звуть Єгор Степанський!", // element5
    "Я веб-розробник, який прагне створювати ефективні та високоякісні рішення. Моя мета — створювати чистий та акуратний код, який не тільки швидко працює, але й легко підтримується. Я постійно розширюю свої горизонти в галузі веб-розробки, освоюючи нові технології та підходи, щоб пропонувати оптимальні рішення для кожного проекту.", // element6
    "Про мене.", // element7
    "Привіт! Я Єгор Степанський, веб-розробник з Кривого Рогу. Я активно працюю з front-end технологіями вже 3-4 роки, спеціалізуючись на HTML, CSS та JavaScript, що дозволяє мені створювати сучасні та адаптивні інтерфейси. Останні 2 роки я також використовую jQuery для підвищення інтерактивності, а за останні 6-12 місяців освоїв React для розробки більш складних та масштабованих додатків. Мій підхід до розробки — це постійне навчання та адаптація. Я не прив'язаний до одного фреймворка чи бібліотеки; натомість я постійно розширюю свій технологічний стек, щоб залишатися в курсі останніх тенденцій. Зараз я активно вивчаю PHP та Python для back-end розробки та занурююся в роботу з базами даних (MySQL та іншими) для створення повноцінних веб-рішень. Нещодавно я також почав освоювати Lua. Я пишаюся високою якістю та відносною швидкістю своїх проектів. Особливу увагу я приділяю чистоті та акуратності коду, що забезпечує його легку підтримку та масштабованість. Моя мета — не просто виконати роботу, а перевершити очікування, створюючи функціональні та інтуїтивно зрозумілі веб-додатки.", // element8
    "Всі мої проекти на ", // element9
    "Навігація", // element10 (h3)
    "Головна", // element11 (li a)
    "Про мене", // element12 (li a)
    "Мої навички", // element13 (li a)
    "Проекти", // element14 (li a)
    "Контакти", // element15 (li a - в футере)
    "Зв'язатися зі мною", // element16 (h3 - в футере)
    "stepanskiyegor142@gmail.com", // element17 (li a - в футере)
    "+380 96 297 67 91", // element18 (li a - в футере)
    "Ім'я користувача Telegram:", // element19 (li - в футере)
    "Посилання на портфоліо моїх друзів", // element20 (h3 - в футере)
    "Lorem lorem lorem", // element21 (li a)
    "Lorem lorem lorem", // element22 (li a)
    "Lorem lorem lorem", // element23 (li a)
    "Lorem lorem lorem", // element24 (li a)
    "Інше", // element25 (h3 - в футере)
    "Відвідування сайту:", // element26 (p - в футере)
    "Технології, які були використані при розробці цього сайту:", // element27 (p - в футере)
    "", // element28 - пропущен в HTML
    "Футер", // element29 (nav_item) - не используется в HTML с этим ID
    "Назва веб-сайту", // element30 (slider_text1) - не используется в HTML с этим ID
    "опис Lorem, ipsum dolor sit amet consectetur adipisicing elit. Autem sed praesentium sapiente voluptatum corrupti. Dolorem, nihil.", // element31 (slider_text2) - не используется в HTML с этим ID
    "Надіслати повідомлення", // element32 (slider_text3) - используется для кнопки "Надіслати повідомлення"
    "Надіслати повідомлення", // element33 (button) - не используется в HTML с этим ID
    "Зв'яжіться зі мною", // element34 (contact_text1)
    "Заповніть форму нижче. Будь ласка, переконайтеся, що ви вказали своє ім'я, правильну електронну адресу та чітко виклали своє повідомлення. Я зв'яжуся з вами незабаром!", // element35 (contact_text2)
    "stepanskiyegor142@gmail.com", // element36 (contact_text3 a)
    "+380 96 297 67 91", // element37 (contact_text4 a) - пропущен в вашем UK массиве
    "Ім'я користувача Telegram:", // element38 (contact_text4 tg_text)
    "Інше: " // element39 - не используется в HTML с этим ID
  ];
  function lang_ru() {
    for (let i = 0; i <= ru.length; i++) {
      let elem = "#element" + i;
      $(elem).text(ru[i]);
    }

    $(".contact_inp1").attr("placeholder", "Ваше имя");
    $(".contact_inp3").attr("placeholder", "Сообщение");
    $("#element39").text("Контактная информация");
    $("#element40").text("Ссылки на портфолио моих знакомых");
    $("#element45, #element46").text("Мои игры");
    
    $("#element50").text("Четкое и открытое общение – ключ к успешному проекту. Я умею слушать, давать конструктивную обратную связь и находить общий язык, чтобы вместе достигать поставленных целей.")
    $("#element51").text("Не просто нахожу, а решаю проблемы. Мой подход основан на глубоком анализе, критическом осмыслении и поиске креативных, но практичных решений для любых вызовов.")
    $("#element52").text("Мир технологий постоянно меняется, и я всегда готов к новым вызовам. Быстро осваиваю новое, адаптируюсь к меняющимся условиям и стремлюсь к непрерывному профессиональному росту.")
    $("#element53").text("Эффективное планирование и приоритизация задач позволяют мне работать продуктивно и соблюдать сроки. Я ценю порядок и стремлюсь к максимальной результативности в каждом проекте.")

    SetText1("Ремонт без стресса");
    SetText11("«Ремонт без стресса» — это универсальный магазин, предлагающий полный спектр услуг по благоустройству и ремонту дома. От полного ремонта дома, кухни, ванной комнаты и сада до специализированных услуг, таких как установка «умного дома», ремонт крыш, ландшафтный дизайн и благоустройство двора, мы обо всем позаботимся. Мы гарантируем качественные, эффективные и эстетичные решения, чтобы сделать ваш дом идеальным, без стресса.");
    SetText2("КАЗБЕК");
    SetText22("«КАЗБЕК» — ресторан, который предлагает аутентичные грузинские блюда, приготовленные по традиционным рецептам с использованием свежих и качественных ингредиентов. Наш сайт — это одностраничный ресурс, где вы можете узнать об истории ресторана, его философии и просмотреть примеры из нашего меню, включая такие блюда, как пхали из баклажанов, шкмерули и медово-ореховый торт. Добро пожаловать в мир подлинных грузинских вкусов, которые ждут вас в «КАЗБЕКЕ».");
    SetText3("Клуб горячих источников «Снежная обезьяна»");
    SetText33("«Клуб горячих источников «Снежная обезьяна»» — это цифровая коллекция из 8 888 уникальных NFT «Снежная обезьяна». Каждый NFT генерируется из более чем 100 возможных характеристик, что делает каждую обезьяну уникальной, а некоторые — более редкими. Сайт предоставляет информацию о проекте, включая размер коллекции и цену минта, а также галерею образцов NFT из коллекции.");
    SetText4("CAR MUSC");
    SetText44("CAR MUSC — это веб-сайт, посвященный автомобилям, вероятно, связанный с автоспортом, тюнингом или автолюбителями. На сайте представлена информация о достижениях (возможно, в автоспорте или кастомизации автомобилей) от Кубка России до чемпионатов мира. На сайте также есть контактная информация и, предположительно, часы работы. Дизайн выполнен в темных тонах с акцентом на автомобили, что подчеркивает серьезность и страсть к машинам.");
    SetText5("Fritsweet");
    SetText55("Fritsweet — это цифровая студия или агентство, специализирующееся на создании высококачественных веб-сайтов для стартапов. Мы предлагаем полный цикл услуг, включая стратегию, создание каркасов, дизайн и разработку, чтобы обеспечить успешное онлайн-присутствие наших клиентов. Наша цель — помочь молодым компаниям создавать звездные веб-сайты, которые будут способствовать их росту и успеху.");
    SetText6("Ночные путешествия");
    SetText66("«Ночные путешествия» — это туристический портал, предлагающий уникальные приключения и поездки, ориентированные на ночное время. На сайте представлены различные варианты путешествий, такие как «Chill Adventure», и предлагается возможность выбора тура. С акцентом на захватывающие ночные пейзажи, сайт приглашает исследователей открыть для себя мир в темноте.");
    SetText7("PORTEN");
    SetText77("PORTEN — это официальный сайт часового бренда из Санкт-Петербурга. На сайте представлены коллекции часов, включая «Сезон 2020/21» и «Коллекция 2018», а также анонсы новых поступлений. На сайте представлены стильные изображения часов и людей в элегантных образах, что подчеркивает имидж бренда как производителя модных и, возможно, роскошных аксессуаров.");
  
    SetText8("Screenshoter");
    SetText88("Screenshoter: ваш инструмент для мгновенного захвата и записи экрана. Захватите все, что происходит на экране, одним щелчком мыши. Screenshoter позволяет без усилий делать снимки экрана и записывать действия на ПК, идеально подходит для обмена яркими моментами, руководствами или игровым процессом. Бесплатно и просто в использовании для Windows. ");

  }
  function lang_en() {
    for (let i = 0; i <= en.length; i++) {
      let elem = "#element" + i;
      $(elem).text(en[i]);
    }

    $(".contact_inp1").attr("placeholder", "Your name");
    $(".contact_inp3").attr("placeholder", "Message");
    $("#element39").text("Contact information");
    $("#element40").text("Link to my friends' portfolios.");
    $("#element45, #element46").text("My games");

    $("#element50").text("Clear and open communication is the key to a successful project. I am a good listener, give constructive feedback, and find common ground to achieve goals together.")
    $("#element51").text("I don't just find problems, I solve them. My approach is based on deep analysis, critical thinking, and finding creative yet practical solutions to any challenge.")
    $("#element52").text("The world of technology is constantly changing, and I am always ready for new challenges. I am a quick learner, adapt to changing conditions, and strive for continuous professional growth.")
    $("#element53").text("Efficient planning and task prioritization allow me to work productively and meet deadlines. I value order and strive for maximum efficiency in every project.")

    SetText1("Repair without stress");
    SetText11("\"Stress-Free Renovation\" is a one-stop shop offering a full range of home improvement and renovation services. From complete home, kitchen, bathroom and garden renovations to specialized services such as smart home installation, roof repairs, landscaping and yard improvements, we have it all. We guarantee quality, efficient and aesthetic solutions to make your home perfect, stress-free.");
    SetText2("KAZBEK");
    SetText22("\"KAZBEK\" is a restaurant offering authentic Georgian dishes prepared according to traditional recipes using fresh and high-quality ingredients. Our website is a one-page resource where you can learn about the restaurant's history, its philosophy and view examples from our menu, including dishes such as eggplant phali, shkmeruli and walnut-honey cake. Welcome to the world of authentic Georgian flavors that await you at \"KAZBEK\".");
    SetText3("Snow Monkey Hot Spring Club");
    SetText33("\"Snow Monkey Hot Spring Club\"\" is a digital collection of 8,888 unique Snow Monkey NFTs. Each NFT is generated from over 100 possible characteristics, making each monkey unique and some rare. The site provides information about the project, including the size of the collection and mint price, as well as a gallery of NFT samples from the collection.");
    SetText4("CAR MUSC");
    SetText44("CAR MUSC is a website dedicated to cars, probably related to motorsport, tuning or car enthusiasts. The site presents information about achievements (possibly in motorsport or car customization) from the Russian Cup to the World Championships. The site also has contact information and probably opening hours. The design is made in dark colors with an emphasis on cars, which emphasizes seriousness and passion for cars.");
    SetText5("Fritsweet");
    SetText55("Fritsweet is a digital studio or agency specializing in creating high-quality websites for startups. We offer a full range of services, including strategy, wireframe creation, design and development, to ensure a successful online presence for our clients. Our goal is to help young companies create stellar websites that will contribute to their growth and success.");
    SetText6("Night trips");
    SetText66("\"Night Travel\" is a travel portal offering unique adventures and trips focused on the night. The site presents various travel options, such as \"Chill Adventure\", and offers the opportunity to choose a tour. With an emphasis on breathtaking night landscapes, the site invites explorers to discover the world in the dark.");
    SetText7("PORTEN");
    SetText77("PORTEN is the official website of a watch brand from St. Petersburg. The site presents watch collections, including the \"Season 2020/21\" and \"Collection 2018\", as well as announcements of new products. The site displays stylish images of watches and people in elegant images, which emphasizes the brand's image as a manufacturer of fashionable and, perhaps, luxurious accessories.");
    SetText8("Screenshoter");
    SetText88("Screenshoter: Your instant screen capture and recording tool. Capture everything that happens on your screen with one click. Screenshoter allows you to effortlessly take screenshots and record activities on your PC, perfect for sharing highlights, tutorials or gameplay. Free and easy to use for Windows.");
  }

  function lang_uk() {
    for (let i = 0; i <= uk.length; i++) {
      let elem = "#element" + i;
      $(elem).text(uk[i]);
    }

    $(".contact_inp1").attr("placeholder", "Ваше ім'я");
    $(".contact_inp3").attr("placeholder", "Повідомлення");
    $("#element39").text("Контактна інформація");
    $("#element40").text("Посилання на портфоліо моїх знайомих.");
    $("#element45, #element46").text("Мої ігри");

    $("#element50").text("Чітке та відкрите спілкування – ключ до успішного проекту. Я вмію слухати, давати конструктивний зворотний зв'язок і знаходити спільну мову, щоб разом досягати поставленої мети.") 
    $("#element51").text("Не просто знаходжу, а вирішую проблеми. Мій підхід заснований на глибокому аналізі, критичному осмисленні та пошуку креативних, але практичних рішень для будь-яких викликів.") 
    $("#element52").text("Світ технологій постійно змінюється, і я завжди готовий до нових викликів. Швидко освоюю нове, адаптуюся до мінливих умов і прагну до безперервного професійного зростання.") 
    $("#element53").text("Ефективне планування та приоритизація завдань дозволяють мені працювати продуктивно і дотримуватися термінів. Я ціную порядок і прагну максимальної результативності в кожному проекті.")

    

    SetText1("Ремонт без стресу");
    SetText11("\"Ремонт без стресу\" — це універсальний магазин, що пропонує повний спектр послуг з благоустрою та ремонту будинку. Від повного ремонту будинку, кухні, ванної кімнати та саду до спеціалізованих послуг, таких як установка «розумного будинку», ремонт дахів, ландшафтний дизайн і благоустрій двору, ми про все подбаємо. Ми гарантуємо якісні, ефективні та естетичні рішення, щоб зробити ваш будинок ідеальним, без стресу.");
    SetText2("КАЗБЕК");
    SetText22("\"КАЗБЕК\" — ресторан, який пропонує автентичні грузинські страви, приготовані за традиційними рецептами з використанням свіжих і якісних інгредієнтів. Наш сайт — це односторінковий ресурс, де ви можете дізнатися про історію ресторану, його філософію та переглянути приклади з нашого меню, включаючи страви, такі як пхалі з баклажанів, шкмерулі та горіхово-медовий торт. Ласкаво просимо у світ справжніх грузинських смаків, які чекають на вас у \"КАЗБЕКУ\".");
    SetText3("Клуб гарячих джерел \"Снігова мавпа\"");
    SetText33("\"Клуб гарячих джерел \"Снігова мавпа\"\" — це цифрова колекція з 8 888 унікальних NFT \"Снігова мавпа\". Кожен NFT генерується з більш ніж 100 можливих характеристик, що робить кожну мавпу унікальною, а деякі — рідкісними. Сайт надає інформацію про проєкт, включаючи розмір колекції та ціну мінта, а також галерею зразків NFT з колекції.");
    SetText4("CAR MUSC");
    SetText44("CAR MUSC — це вебсайт, присвячений автомобілям, ймовірно, пов'язаний з автоспортом, тюнінгом або автолюбителями. На сайті представлена інформація про досягнення (можливо, в автоспорті або кастомізації автомобілів) від Кубка Росії до чемпіонатів світу. На сайті також є контактна інформація і, ймовірно, години роботи. Дизайн виконаний у темних тонах з акцентом на автомобілі, що підкреслює серйозність і пристрасть до машин.");
    SetText5("Fritsweet");
    SetText55("Fritsweet — це цифрова студія або агентство, що спеціалізується на створенні високоякісних вебсайтів для стартапів. Ми пропонуємо повний цикл послуг, включаючи стратегію, створення каркасів, дизайн та розробку, щоб забезпечити успішну онлайн-присутність наших клієнтів. Наша мета — допомогти молодим компаніям створювати зіркові вебсайти, які сприятимуть їхньому зростанню та успіху.");
    SetText6("Нічні подорожі");
    SetText66("\"Нічні подорожі\" — це туристичний портал, що пропонує унікальні пригоди та поїздки, орієнтовані на нічний час. На сайті представлено різноманітні варіанти подорожей, такі як \"Chill Adventure\", і пропонується можливість обрати тур. Із акцентом на захопливі нічні пейзажі, сайт запрошує дослідників відкрити світ у темряві.");
    SetText7("PORTEN");
    SetText77("PORTEN — це офіційний сайт годинникового бренду з Санкт-Петербурга. На сайті представлено колекції годинників, зокрема «Сезон 2020/21» і «Колекція 2018», а також анонси новинок. На сайті демонструються стильні зображення годинників і людей в елегантних образах, що підкреслює імідж бренду як виробника модних і, можливо, розкішних аксесуарів.");
    SetText8("Screenshoter"); 
    SetText88('Screenshoter: ваш інструмент для миттєвого захоплення і запису екрана. Захопіть все, що відбувається на екрані, одним клацанням миші. Screenshoter дозволяє без зусиль робити знімки екрану і записувати дії на ПК, ідеально підходить для обміну яскравими моментами, посібниками або ігровим процесом.')
  }


  const [globalVisitCount, setGlobalVisitCount] = useState(0);

  useEffect(() => {
    // Функция для увеличения счетчика на бэкенде
    const incrementVisit = async () => {
      try {
        await fetch('/api/visits/increment', { method: 'POST' });
      } catch (error) {
        console.error('Ошибка при увеличении счетчика:', error);
      }
    };

    // Функция для получения текущего значения счетчика с бэкенда
    const getVisitCount = async () => {
      try {
        const response = await fetch('/api/visits');
        const data = await response.json();
        setGlobalVisitCount(data.count); // Предполагаем, что бэкенд возвращает { count: число }
      } catch (error) {
        console.error('Ошибка при получении счетчика:', error);
      }
    };

    // Вызываем функции при монтировании компонента
    incrementVisit(); // Увеличиваем счетчик при загрузке страницы
    getVisitCount();  // Получаем и отображаем текущее значение
  }, []);


  return (
    <>
      <div className="languageSet">
        <div className="languageSet_block"></div>
      </div>

      <a href="#top"><div className="top">↑</div></a>

      <div className="nav">
        <div className="nav_block1">
          <div className="nav_item"><a href="#top" id="element0">Home</a></div>
          <div className="nav_item"><a href="#about_pos" id="element1">About Me</a></div>
          <div className="nav_item"><a href="#skills_pos" id="element2">My Skills</a></div>
          <div className="nav_item"><a href="#projects_pos" id="element3">Projects</a></div>
          <div className="nav_item"><a href="#contact_pos" id="element4">Contact</a></div>
          <div className="nav_item"><a href="#footer" id="element45">My games</a></div>
        </div>
        <div className="nav_cont1">
          <div className="nav_them_block">
            <div className="nav_them_light"></div>
            <div className="nav_them_dark"></div>
          </div>
          <div className="nav_lang_block">
            <div className="lang_menu"></div>
            <div className="lang_cont">
              <div className="nav_lang nav_lang_ru" onClick={lang_ru}>Russian</div>
              <div className="nav_lang nav_lang_en" onClick={lang_en}>English</div>
              <div className="nav_lang nav_lang_uk" onClick={lang_uk}>Ukrainian</div>
            </div>
          </div>
        </div>

      </div>
      <div className="img1">
        <div className="img1_item"><div className="img1_item_item"></div></div>
      </div>
      <div className="img2">
        <div className="img2_item"></div>
      </div>
      <div className="img3_1">
        <div className="img3_item img3_item1">
          <div className="slider_html"></div>
          <div className="slider_css"></div>
          <div className="slider_js"></div>
          <div className="slider_jquery"></div>
          <div className="slider_react"></div>
          <div className="slider_figma"></div>
        </div>
      </div>
      <div className="img3_2">
        <div className="img3_item img3_item2">
          <div className="slider_html"></div>
          <div className="slider_css"></div>
          <div className="slider_js"></div>
          <div className="slider_jquery"></div>
          <div className="slider_react"></div>
          <div className="slider_figma"></div>
        </div>
      </div>
      <div className="img3_3">
        <div className="img3_item img3_item3">
          <div className="slider_html"></div>
          <div className="slider_css"></div>
          <div className="slider_js"></div>
          <div className="slider_jquery"></div>
          <div className="slider_react"></div>
          <div className="slider_figma"></div>
        </div>
      </div>
      <div className="img3_4">
        <div className="img3_item img3_item4">
          <div className="slider_html"></div>
          <div className="slider_css"></div>
          <div className="slider_js"></div>
          <div className="slider_jquery"></div>
          <div className="slider_react"></div>
          <div className="slider_figma"></div>
        </div>
      </div>
      <div className="img3_5">
        <div className="img3_item img3_item5">
          <div className="slider_html"></div>
          <div className="slider_css"></div>
          <div className="slider_js"></div>
          <div className="slider_jquery"></div>
          <div className="slider_react"></div>
          <div className="slider_figma"></div>
        </div>
      </div>
      <div className="img3_6">
        <div className="img3_item img3_item6">
          <div className="slider_html"></div>
          <div className="slider_css"></div>
          <div className="slider_js"></div>
          <div className="slider_jquery"></div>
          <div className="slider_react"></div>
          <div className="slider_figma"></div>
        </div>
      </div>
      <div className="img3_7">
        <div className="img3_item img3_item7">
          <div className="slider_html"></div>
          <div className="slider_css"></div>
          <div className="slider_js"></div>
          <div className="slider_jquery"></div>
          <div className="slider_react"></div>
          <div className="slider_figma"></div>
        </div>
      </div>
      <div className="img3_8">
        <div className="img3_item img3_item8">
          <div className="slider_html"></div>
          <div className="slider_css"></div>
          <div className="slider_js"></div>
          <div className="slider_jquery"></div>
          <div className="slider_react"></div>
          <div className="slider_figma"></div>
        </div>
      </div>
      <p className="pos"></p>
      <p className="pos2"></p>
      <p className="pos3"></p>
      <div className="back">
        <div id="top"></div>
        <div className="folow_block"></div>
        <div className="box">
          <div className="header wow animate__animated animate__slideInRight animate__slow" id="header">
            <div className="header_block1">
              <p className="header_text1" id="element5">Hello, my name is Egor Stepansky!</p>
              <p className="header_text2" id="element6">I am a web developer who strives to create efficient and high-quality solutions. My goal is to create clean and neat code that not only works fast but is also easy to maintain. I am constantly expanding my horizons in the field of web development, mastering new technologies and approaches to offer optimal solutions for each project.</p>
            </div>
            <div className="header_block2">
              <div className="header_block2_user"></div>
            </div>
          </div>
          <div className="about wow animate__animated animate__slideInLeft animate__slow" id="about">
            <div id="about_pos"></div>
            <div className="about_block1">
              <p className="about_text1" id="element7">About me.</p>
              <p className="about_text2" id="element8">Hi! I'm Yegor Stepanskiy, a web developer from Krivoy Rog. I've been  actively working with front-end technologies for 3-4 years now, specializing  in HTML, CSS, and JavaScript, which allows me to create modern and responsive interfaces. For the last 2 years, I've also been jQuery to enhance interactivity, and over the last 6 months to a year, I've mastered React to develop more complex and scalable applications.

                My approach to development is one of constant learning and adaptation. I'm not tied to a single framework or library; instead, I'm constantly expanding my tech stack to stay on top of the latest trends. I'm currently actively learning PHP and Python for back-end development, and diving into working with databases (MySQL and others) to create full-fledged web solutions. I've also recently started mastering Lua.

                I pride myself on the high quality and relative speed of my projects. I pay special attention to the cleanliness and neatness of the code, which ensures its easy support and scalability. My goal is not just to get the job done, but to exceed expectations by creating functional and intuitive web applications.</p>
              <p className="about_git"><span id="element9">All my projects on </span><a className="url" href="https://github.com/gorg231"> GitHub</a></p>
            </div>
            <div className="about_block2"></div>
          </div>


          <div className="skills_btns wow animate__animated animate__slideInRight animate__slow" id='skills_pos'>
            <div className="skills_btn1">Soft skills</div>
            <div className="skills_btn2">Hard skills</div>
          </div>

          <div className="soft_skills wow animate__animated animate__slideInLeft animate__slow">
            <div className="soft_skills_item">
              <div className="soft_skills_img" id="s_s_i1"></div>
              <p className="soft_skills_text1" id='element50'>
                Четкое и открытое общение – ключ к успешному проекту. Я умею слушать, давать конструктивную обратную связь и находить общий язык, чтобы вместе достигать поставленных целей. 
              </p>
            </div>
            <div className="soft_skills_item">
              <div className="soft_skills_img" id="s_s_i2"></div>
              <p className="soft_skills_text1"  id='element51'>
                Не просто нахожу, а решаю проблемы. Мой подход основан на глубоком анализе, критическом осмыслении и поиске креативных, но практичных решений для любых вызовов.
              </p>
            </div>
            <div className="soft_skills_item">
              <div className="soft_skills_img" id="s_s_i3"></div>
              <p className="soft_skills_text1"  id='element52'>
                 Мир технологий постоянно меняется, и я всегда готов к новым вызовам. Быстро осваиваю новое, адаптируюсь к меняющимся условиям и стремлюсь к непрерывному профессиональному росту. 
              </p>
            </div>
            <div className="soft_skills_item">
              <div className="soft_skills_img" id="s_s_i4"></div>
              <p className="soft_skills_text1"  id='element53'>
                Эффективное планирование и приоритизация задач позволяют мне работать продуктивно и соблюдать сроки. Я ценю порядок и стремлюсь к максимальной результативности в каждом проекте. 
              </p>
            </div>
          </div>
          <div className="skills wow animate__animated animate__slideInLeft animate__slow" id="skills">
            <div className="skills_item">
              HTML
              <a href="https://en.wikipedia.org/wiki/HTML" target="_blank" className="skills_block skills_block1"></a>
            </div>
            <div className="skills_item">
              CSS
              <a href="https://en.wikipedia.org/wiki/CSS" target="_blank" className="skills_block skills_block2"></a>
            </div>
            <div className="skills_item">
              JS
              <a href="https://en.wikipedia.org/wiki/JavaScript" target="_blank" className="skills_block skills_block3"></a>
            </div>
            <div className="skills_item">
              Jquery
              <a href="https://en.wikipedia.org/wiki/JQuery" target="_blank" className="skills_block skills_block4"></a>
            </div>
            <div className="skills_item">
              React
              <a href="https://en.wikipedia.org/wiki/React_(software)" target="_blank" className="skills_block skills_block5"></a>
            </div>
            <div className="skills_item">
              Figma
              <a href="https://en.wikipedia.org/wiki/Figma" target="_blank" className="skills_block skills_block6"></a>
            </div>
            <div className="skills_item">
              Git
              <a href="https://en.wikipedia.org/wiki/GitHub" target="_blank" className="skills_block skills_block7"></a>
            </div>
            <div className="skills_item">
              Php
              <a href="https://en.wikipedia.org/wiki/GitHub" target="_blank" className="skills_block skills_block8"></a>
            </div>
            <div className="skills_item">
              MySQL
              <a href="https://en.wikipedia.org/wiki/GitHub" target="_blank" className="skills_block skills_block9"></a>
            </div>
            <div className="skills_item">
              Python
              <a href="https://en.wikipedia.org/wiki/GitHub" target="_blank" className="skills_block skills_block10"></a>
            </div>
          </div>
          <Swiper
            modules={[Navigation, Pagination]}
            speed={800}
            spaceBetween={100}
            loop={true}
            effect={'coverflow'}
            grabCursor={true}
            pagination={{ clickable: true }}


            className="projects wow animate__animated animate__slideInRight animate__slow"
            id="projects"
            coverflowEffect={{
              rotate: 50,
              stretch: 0,
              depth: 100,
              modifier: 1,
              slideShadows: true,
            }}

          >
            <div id='projects_pos'></div>
            <SwiperSlide>
              <Projects_item img="1" title={text1} description={text11} url="https://github.com/gorg231/Stress-Free-Renovations.git" />
            </SwiperSlide>
            <SwiperSlide>
              <Projects_item img="2" title={text2} description={text22} url="https://github.com/gorg231/kazbek.git" />
            </SwiperSlide>
            <SwiperSlide>
              <Projects_item img="3" title={text3} description={text33} url="https://github.com/gorg231/SNOW-MONKEY-CLUB.git" />
            </SwiperSlide>
            <SwiperSlide>
              <Projects_item img="4" title={text4} description={text44} url="https://github.com/gorg231/CAR-MUSC.git" />
            </SwiperSlide>
            <SwiperSlide>
              <Projects_item img="5" title={text5} description={text55} url="https://github.com/gorg231/FINSWEET.git" />
            </SwiperSlide>
            <SwiperSlide>
              <Projects_item img="6" title={text6} description={text66} url="https://github.com/gorg231/NIGHT-TRIPS.git" />
            </SwiperSlide>
            <SwiperSlide>
              <Projects_item img="7" title={text7} description={text77} url="https://github.com/gorg231/PORTEN.git" />
            </SwiperSlide>
            <SwiperSlide>
              <Projects_item img="8" title={text8} description={text88} url="https://github.com/gorg231/Screenshoter.git" />
            </SwiperSlide>
          </Swiper>



          <div className="contact" id="contact">
            <div id="contact_pos"></div>
            <div className="contact_block1 wow animate__animated animate__slideInLeft animate__slow">
              <p className="contact_text1" id="element34">Contact me</p>
              <p className="contact_text2" id="element35">Fill out the form below. Please make sure you include your name, correct email, and clearly state your message. I will contact you shortly!</p>
              <p className="contact_text3">Email: <a href="mailto:stepanskiyegor142@gmail.com" className="url">stepanskiyegor142@gmail.com</a></p>
              <p className="contact_text4">Phone number: <a href="tel:+380962976791" className="url">+380 96 297 67 91</a></p>
              <p className="contact_text4 tg_text">Telegram username: <a href="" className="url">@Egorek_231</a></p>
            </div>
            <div className="contact_block2 wow animate__animated animate__slideInRight animate__slow">
              <form id="contact-form">
                <div className="contact_cont1">
                  <input type="hidden" name='contact_number' />
                  <input type="text" className="contact_inp1" placeholder="Your name" name="name" required />
                  <input type="email" className="contact_inp2" placeholder="Email" name="email" required />
                </div>
                <textarea className="contact_inp3" placeholder="Message" name="message" required></textarea>
                <button type="submit" className="contact_btn1"><p id="element33">Send message</p></button>
              </form>
            </div>
          </div>
          <div className="footer_part clickable"></div>
          <div className="footer" id="footer">
            <div className="footer-columns">
              <div className="footer-column">
                <h3 id="element10">Navigation</h3>
                <ul>
                  <li><a href="#header" id="element11">Home</a></li>
                  <li><a href="#about_pos" id="element12">About me</a></li>
                  <li><a href="#skills_pos" id="element13">My skills</a></li>
                  <li><a href="#projects_pos" id="element14">Projects</a></li>
                  <li><a href="#contact_pos" id="element14">Contacts</a></li>
                  <li><a href="#games" id="element46">My games</a></li>
                </ul>
              </div>
              <div className="footer-column">
                <h3 id='element39'>Contact me</h3>
                <ul>
                  <li><a href="mailto:stepanskiyegor142@gmail.com">stepanskiyegor142@gmail.com</a></li>
                  <li><a href="tel:+380962976791">+380 96 297 67 91</a></li>
                  <li className="tg_text">Telegram username: <a href="" className="url">@Egorek_231</a></li>
                </ul>
              </div>
              <div className="footer-column">
                <h3 id='element40'>Links to portfolios of my friends</h3>
                <ul>
                  <a href="#"><li>//Link to portfolio1</li></a>
                  <a href="#"><li>//Link to portfolio2</li></a>
                  <a href="#"><li>//Link to portfolio3</li></a>
                  <a href="#"><li>//Link to portfolio4</li></a>
                  <a href="#"><li>//Link to portfolio5</li></a>
                </ul>
              </div>
              <div className="footer-column">
                <h3 id='element25'>Other</h3>
                <p id='element27'>Technologies that were used in the development of this site:</p>
                <div className="footer_cont1">
                  <div className="slider_html slider_tec"></div>
                  <div className="slider_css slider_tec"></div>
                  <div className="slider_js slider_tec"></div>
                  <div className="slider_jquery slider_tec"></div>
                </div>
              </div>
            </div>
          </div>
          <div className="random_block">
            <div className="game_block">
              <div className="game1 game"></div>
              <div className="game2 game"></div>
              <div className="game3 game"></div>
              <div className="game4 game"></div>
            </div>
            <p className="random_text random_text1">0</p>
            <p className="random_text random_text2">0</p>
            <p className="random_text random_text3">0</p>
            <p className="random_text random_text4">0</p>
            <p className="random_text random_text5">0</p>
            <p className="random_text random_text6">0</p>
            <p className="random_text random_text7">0</p>
            <p className="random_text random_text8">0</p>
            <p className="random_text random_text9">0</p>
            <p className="random_text random_text10">0</p>
            <p className="random_text random_text11">0</p>
            <p className="random_text random_text12">0</p>
            <p className="random_text random_text13">0</p>
            <p className="random_text random_text14">0</p>
            <p className="random_text random_text15">0</p>
            <p className="random_text random_text16">0</p>
            <p className="random_text random_text17">0</p>
            <p className="random_text random_text18">0</p>
            <p className="random_text random_text19">0</p>
            <p className="random_text random_text20">0</p>

            <p className="random_text random_text21">0</p>
            <p className="random_text random_text22">0</p>
            <p className="random_text random_text23">0</p>
            <p className="random_text random_text24">0</p>
            <p className="random_text random_text25">0</p>
            <p className="random_text random_text26">0</p>
            <p className="random_text random_text27">0</p>
            <p className="random_text random_text28">0</p>
            <p className="random_text random_text29">0</p>
            <p className="random_text random_text30">0</p>
            <p className="random_text random_text31">0</p>
            <p className="random_text random_text32">0</p>
            <p className="random_text random_text33">0</p>
            <p className="random_text random_text34">0</p>
            <p className="random_text random_text35">0</p>
            <p className="random_text random_text36">0</p>
            <p className="random_text random_text37">0</p>
            <p className="random_text random_text38">0</p>
            <p className="random_text random_text39">0</p>
            <p className="random_text random_text40">0</p>
          </div>
        </div>
      </div>
    </>
  )
}

export default App
