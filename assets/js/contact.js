const menu = document.querySelector('#menu')
const mainItems = document.querySelectorAll('.main_items')
const contactFrontItem = document.querySelectorAll('.contact_front_item')
const contactBack = document.querySelector('#contact_back')
const contactMap = document.querySelector('#contact_map')

const menuList = document.querySelector('.menu_list');
const menuA = document.querySelectorAll('.menu_item a')
const menuBtn = document.querySelector('.menu_btn')
const scrollToTop = document.querySelector('.scroll_top')
const menuBarIcon = document.querySelector('.menu_bar_icon')
const barItem1 = document.querySelector('.bar_item1')
const barItem2 = document.querySelector('.bar_item2')
const barItem3 = document.querySelector('.bar_item3')
const line = document.createElement('div')
const headerItem = document.querySelector('.header_item')
const headerImg = document.querySelector('.header_img')
const headerButton1 = document.querySelectorAll('.header_button_1')
const headerButton2 = document.querySelectorAll('.header_button_2')
const feature = document.querySelector('#feature');
const featureHead = document.querySelectorAll('.feature_head')
const featureHeading = document.querySelectorAll('.feature_heading')
const featureText = document.querySelectorAll('.feature_text')
const feature_Item = document.querySelectorAll('.feature__item')
const overview = document.querySelector('#overview')
const overviewItem = document.querySelectorAll('.overview_item')
const overviewItem2 = document.querySelector('.overview_item2')
const overviewItem3 = document.querySelector('.overview_item3')
const contentHeading = document.querySelectorAll('.content_heading')
const contentTitle = document.querySelectorAll('.content_title')
const contentNumber = document.querySelectorAll('.content_num span')
const contentList = document.querySelector('.content_list')
const pricing = document.querySelector('#pricing')
const priItem = document.querySelectorAll('.pri_item')
const team = document.querySelector('#team')
const teamItem = document.querySelectorAll('.team_item')
const _team = document.querySelector('#_team')
const _teamWrapper = document.querySelector('._team_wrapper')
const listDot = document.querySelector('.list_dot')
const teaItem = document.querySelectorAll('.tea_item')
const itemDot = document.querySelectorAll('.item_dot')
const faqHead = document.querySelectorAll('.faq_head');
const blog = document.querySelector('#blog')
const _blog = document.querySelector('._blog')
const _blogItem = document.querySelector('._blog_item')
const _blobWrapper = document.querySelector('._blob_wrapper')
const footer = document.querySelector('#footer')

line.classList.add('line')
menu.appendChild(line)
line.style.left = `${menuA[0].offsetLeft}px`
line.style.width = `${menuA[0].offsetWidth}px`
line.style.top = `${menuA[0].offsetTop + 30}px`


function scrollId(idName){
    menuA.forEach(item => {
        item.classList.remove('active2')
        if(item.textContent === idName){
            item.classList.add('active2')
            line.style.width = `${item.offsetWidth}px`
            line.style.left = `${item.offsetLeft}px`
        }
    })
}
function scrollMenu(){

    if(window.pageYOffset >= menu.offsetHeight){
        menu.classList.remove('active')
        menuA.forEach(item => item.classList.remove('active'))
        menuA.forEach(item => item.classList.add('hover'))
        menuBtn.classList.remove('active')
        line.classList.add('active')
        scrollToTop.style.visibility = 'visible'
        barItem1.classList.remove('active2')
        barItem2.classList.remove('active2')
        barItem3.classList.remove('active2')
    }else{
        menu.classList.add('active')
        menuA.forEach(item => item.classList.remove('hover'))
        menuA.forEach(item => item.classList.add('active'))
        menuA.forEach(item => item.classList.remove('active2'))
        menuBtn.classList.add('active')
        line.classList.remove('active')
        scrollToTop.style.visibility = 'hidden'
        barItem1.classList.add('active2')
        barItem2.classList.add('active2')
        barItem3.classList.add('active2')
    }
    if(window.pageYOffset > contactBack.offsetTop - 520){
        contactFrontItem.forEach(item => {
            item.classList.remove('active_top')
            item.classList.remove('active_bottom')
        })
    }

}
window.addEventListener('scroll', scrollMenu)

function scrollListElementDemo(selector){
    selector.forEach(item => {
        if(window.pageYOffset > item.offsetTop - window.innerHeight / 2){
            item.classList.remove('active_top')
            item.classList.remove('active_right')
            item.classList.remove('active_bottom')
            item.classList.remove('active_left')
            item.classList.remove('active')
        }
    })
}
function scrollListElement(){
    scrollListElementDemo(featureHead, 520)
    scrollListElementDemo(featureHeading, 520)
    scrollListElementDemo(featureText, 520)
    scrollListElementDemo(overviewItem, 520)
    scrollListElementDemo(feature_Item, 520)
    scrollListElementDemo(priItem, 520)
    scrollListElementDemo(teamItem, 520)
    scrollListElementDemo(contentTitle, 520)
    scrollListElementDemo(contentHeading, 520)
    scrollListElementDemo(headerButton1, 420)
    scrollListElementDemo(headerButton2, 420)
    scrollListElementDemo(mainItems, 520)

}
window.addEventListener('scroll', scrollListElement)


function scrollElementDemo(selector, parent){
    if(window.pageYOffset > parent.offsetTop - window.innerHeight / 2){
        selector.classList.remove('active_top')
        selector.classList.remove('active_right')
        selector.classList.remove('active_bottom')
        selector.classList.remove('active_left')
        selector.classList.remove('active')
    }
}
function scrollElement(){
    scrollElementDemo(contactMap, contactMap, 520)
}
window.addEventListener('scroll', scrollElement)


menuA.forEach(item => item.addEventListener('mouseenter', function(){
    line.style.width = `${item.offsetWidth}px`
    line.style.top = `${item.offsetTop + item.offsetHeight + 10}px`
    line.style.left = `${item.offsetLeft}px`
}))
menu.addEventListener('mouseleave', function(){
    setTimeout(function(){
        line.style.width = 0
    }, 2000)
})
scrollToTop.addEventListener('click', function(e){
    window.scroll(0, 0)
})

menuBarIcon.addEventListener('click', function(e){
    barItem1.classList.toggle('active')
    barItem2.classList.toggle('active')
    barItem3.classList.toggle('active')
    menuList.classList.toggle('active')
})
menuA.forEach(item => item.addEventListener('click', toggleMenu))
function toggleMenu(){
    menuList.classList.remove('active')
    barItem1.classList.remove('active')
    barItem2.classList.remove('active')
    barItem3.classList.remove('active')
}
menuA.forEach(item => item.addEventListener('click', hoverItem))
function hoverItem(e){
    menuA.forEach(item => item.classList.remove('active2'))
    e.target.classList.add('active2')
    line.style.width = `${e.target.offsetWidth}px`
    line.style.top = `${e.target.offsetTop + e.target.offsetHeight + 10}px`
    line.style.left = `${e.target.offsetLeft}px`
}







