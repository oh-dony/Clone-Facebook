// ==== DROPDOWN USER ACTIVE ==== //
$(function () {

  const dropdown = {
    notification: document.querySelector(".notification"),
    notificationToDrop: document.querySelector(".notification-dropdown"),

    user: document.querySelector(".user"),
    userToDrop: document.querySelector(".user-dropdown")
  }
  
  // ==== NOTIFICATION ==== //
  let notificationClick = dropdown.notification;
  let notificationCollapse = dropdown.notificationToDrop;
  notificationClick.addEventListener("click", () => {
    notificationCollapse.classList.toggle("dropdown-colapse");
    notificationClick.classList.toggle("list-svg-active");
  });

  // ==== USER ==== //
  let userClick = dropdown.user;
  let userCollapse = dropdown.userToDrop;
  userClick.addEventListener("click", () => {
    userCollapse.classList.toggle("dropdown-colapse");
    userClick.classList.toggle("list-svg-active");
  });

});

// ==== REMOVE ATIVOS AO CLICAR NO BODY ==== //
$(document).mouseup(function (e) {
    var notificationBtn = $('.notification');
    var userBtn = $('.user');
    
    if (!notificationBtn.is(e.target) && notificationBtn.has(e.target).length === 0) {
      if ($('.notification-dropdown').hasClass('dropdown-colapse')) {
          $('.notification-dropdown').removeClass('dropdown-colapse');
          $('.notification').removeClass('list-svg-active');
      }
  }

    if (!userBtn.is(e.target) && userBtn.has(e.target).length === 0) {
        if ($('.user-dropdown').hasClass('dropdown-colapse')) {
            $('.user-dropdown').removeClass('dropdown-colapse');
            $('.user').removeClass('list-svg-active');
        }
    }

    if (!container.is(e.target) && container.has(e.target).length === 0) {
      if ($('.has-colapse').hasClass('list-svg-active')) {
          $('.has-colapse').removeClass('list-svg-active');
      }
  }
});

// ==== DARKMODE ==== //
var clearcolor = '#ffffff'
var darkcolor = '#141414'

if (localStorage.getItem('idmode') == null) {
  document.head.innerHTML = document.head.innerHTML + `<meta name="theme-color" content="${clearcolor}">`
}

const nightMode = document.querySelector('#darkmod')
nightMode.addEventListener('click', () => {
  document.documentElement.classList.toggle('darkmode')

  if (document.documentElement.classList.contains('darkmode')) {
    localStorage.setItem('idmode', true)
    document.head.innerHTML = document.head.innerHTML + `<meta name="theme-color" content="${darkcolor}">`
    document.querySelector("[name='theme-color']").remove()
    return
  }

  localStorage.removeItem('idmode')
  document.querySelector("[name='theme-color']").remove()
  document.head.innerHTML = document.head.innerHTML + `<meta name="theme-color" content="${clearcolor}">`
})

const nightModeStorage = localStorage.getItem('idmode')
if (nightModeStorage) {
  document.documentElement.classList.add('darkmode')
  document.head.innerHTML = document.head.innerHTML + `<meta name="theme-color" content="${darkcolor}">`
  nightMode.checked = true
}