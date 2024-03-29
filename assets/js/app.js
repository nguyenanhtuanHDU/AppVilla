const menu = document.querySelector('#menu')
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
const faqItem = document.querySelectorAll('.faq_item')
const blog = document.querySelector('#blog')
const blogItem = document.querySelectorAll('.blog_item')
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

    if(window.pageYOffset === 0){
        
    }else if(window.pageYOffset > 0 && window.pageYOffset < feature.offsetTop - 200){
        scrollId('Home')
    }else if(window.pageYOffset >= feature.offsetTop - 200 && window.pageYOffset < overview.offsetTop - 200){
        scrollId('Feature')
    }else if(window.pageYOffset >= overview.offsetTop - 200 && window.pageYOffset < pricing.offsetTop - 200){
        scrollId('Overview')
    }else if(window.pageYOffset >= pricing.offsetTop - 200 && window.pageYOffset < team.offsetTop - 200){
        scrollId('Pricing')
    }else if(window.pageYOffset >= team.offsetTop - 200 && window.pageYOffset < blog.offsetTop - 200){
        scrollId('Team')
    }else if(window.pageYOffset >= blog.offsetTop - 200 && window.pageYOffset < footer.offsetTop - 200){
        scrollId('Blog')
    }

}
window.addEventListener('scroll', scrollMenu)



// Scroll number increase
function scrollCounterNumber(){
    if(window.pageYOffset >= contentList.offsetTop - 1020){
        counterNumber(contentNumber[0], count_1, 100)
        counterNumber(contentNumber[1], count_2, 120)
        counterNumber(contentNumber[2], count_3, 125)
    }
}
window.addEventListener('scroll', scrollCounterNumber)

// scroll elements in header
// headerItem.classList.remove('active')
// headerImg.classList.remove('active')

function scrollListElementDemo(selector, space){
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
    scrollListElementDemo(featureHead, )
    scrollListElementDemo(featureHeading, )
    scrollListElementDemo(featureText, )
    scrollListElementDemo(overviewItem, )
    scrollListElementDemo(feature_Item, )
    scrollListElementDemo(priItem, )
    scrollListElementDemo(teamItem, )
    scrollListElementDemo(contentTitle, )
    scrollListElementDemo(contentHeading, )
    scrollListElementDemo(headerButton1, )
    scrollListElementDemo(headerButton2, )
    scrollListElementDemo(faqItem, )
    scrollListElementDemo(blogItem, )
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
    scrollElementDemo(overviewItem2, overviewItem2)
    scrollElementDemo(overviewItem3, overviewItem2)
    scrollElementDemo(listDot, _team)
    scrollElementDemo(_teamWrapper, _team)
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
    console.log(true)
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


// Slider in Team
let widthItem = 0;
let indexDot = 0;
setInterval(function(){
    if(widthItem >= (teaItem.length - 1) * teaItem[0].offsetWidth){
        widthItem = - teaItem[0].offsetWidth
    }
    indexDot += 1
    if(indexDot === itemDot.length){
        indexDot = 0
    }
    widthItem += teaItem[0].offsetWidth
    _teamWrapper.scroll(widthItem, 0);
    [...itemDot].forEach(item => item.classList.remove('active'))
    itemDot[indexDot].classList.add('active')
}, 4000)

// Dropdown in Faq
faqHead.forEach(item => item.addEventListener('click', function(e){
    const fa_Name = e.target.querySelector('.fa__name')
    const faHeadIconIcon = e.target.querySelector('.fa_head_icon i')
    const faHeadIcon = e.target.querySelector('.fa_head_icon')
    const faqHeadText = fa_Name.querySelector('.faq_head_text')
    e.target.nextElementSibling.classList.toggle('active')
    e.target.classList.toggle('active')
    faqHeadText.classList.toggle('active')
    faHeadIcon.classList.toggle('active')
    faHeadIconIcon.classList.toggle('fa-minus')
    faHeadIconIcon.classList.toggle('fa-plus')
}))

// Slider in Blog
_blobWrapper.style.maxWidth = `${window.innerWidth - 116 * 4}px`;
_blobWrapper.scroll(100, 0)
let _blogLeft = 0;
setInterval(function(){
    if(_blogLeft >= 900){
        _blogLeft = -_blogItem.offsetWidth
    }
    _blogLeft += _blogItem.offsetWidth * 2
    _blobWrapper.scroll(_blogLeft, 0)
}, 3000)

let count_1 = 0;
let count_2 = 0;
let count_3 = 0;
function counterNumber(element, countValue, value){
    setInterval(function(){
        if(countValue === (value)){
            window.removeEventListener('scroll', scrollCounterNumber)
            return;
        }
        countValue += 1
        element.textContent = countValue
    }, 40);
}

