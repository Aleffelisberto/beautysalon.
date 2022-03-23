/* Open and close the menu if the icon has been clicked: hamburguer and x */
const nav = document.querySelector('header nav')
const toggles = document.querySelectorAll('nav .toggle')

for (const element of toggles) {
  element.addEventListener('click', function () {
    nav.classList.toggle('show')
  })
}

/* Close the menu if any list item has been clicked */
const menuLinks = document.querySelectorAll('nav ul a')
for (const element of menuLinks) {
  element.addEventListener('click', function () {
    nav.classList.remove('show')
  })
}

const backToTopButton = document.querySelector('.back-to-top')
const header = document.querySelector('#header')
const navHeight = header.offsetHeight

/* Add a box-shadow below the header when the page is scrolled */
function changeHeaderShadow(scrollY, navHeight) {
  if (scrollY >= navHeight) {
    header.classList.toggle('scroll')
  } else {
    header.classList.remove('scroll')
  }
}

/* Show the back-to-top button when page is scrolled */
function showBackToTopButton(scrollY, limitPx) {
  if (scrollY >= limitPx) {
    if (!backToTopButton.classList.contains('show'))
      backToTopButton.classList.toggle('show')
  } else {
    backToTopButton.classList.remove('show')
  }
}

/* Active menu link at current section */
const sections = document.querySelectorAll('section[id]')

function activateMenuLinkAtCurrentSection() {
  const checkpoint = window.pageYOffset + (window.innerHeight / 8) * 4

  for (const section of sections) {
    const sectionTop = section.offsetTop
    const sectionHeight = section.offsetHeight
    const sectionId = section.getAttribute('id')

    const checkpointStart = checkpoint >= sectionTop
    const checkpointEnd = checkpoint <= sectionTop + sectionHeight

    if (checkpointStart && checkpointEnd) {
      document
        .querySelector(`nav ul li a[href*="${sectionId}"]`)
        .classList.add('active')
    } else {
      document
        .querySelector(`nav ul li a[href*=${sectionId}]`)
        .classList.remove('active')
    }
  }
}

window.addEventListener('scroll', function () {
  changeHeaderShadow(this.window.scrollY, navHeight)
  showBackToTopButton(this.window.scrollY, 660)
  activateMenuLinkAtCurrentSection()
})

/* Testimonials carousel (swiper) */
const swiper = new Swiper('.swiper', {
  slidesPreview: 1,
  pagination: {
    el: '.swiper-pagination'
  },
  mouseWheel: true,
  keyboard: true,
  breakpoints: {
    767: {
      slidesPerView: 2,
      setWrapperSize: true
    }
  }
})

/* Show the elements with an effect when page is scrolled */
const scrollRevel = ScrollReveal({
  origin: 'top',
  distance: '30px',
  duration: 700,
  reset: true
})

scrollRevel.reveal(
  `#home .text, #home .image,
  #about .image, #about .text,
  #services header, #services .card,
  #testimonials header, #testimonials .testimonials,
  #contact .text, #contact .informations,
  #footer .brand, #footer .social-networks`,
  { interval: 100 }
)
