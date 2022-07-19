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
const feature = document.querySelector('#feature');
const overview = document.querySelector('#overview')
const pricing = document.querySelector('#pricing')
const team = document.querySelector('#team')
const _team_wrapper = document.querySelector('._team_wrapper')
const tea_item = document.querySelectorAll('.tea_item')
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
console.log(barItem1)

window.addEventListener('scroll', scrollMenu)
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
    console.log(e.target)
    menuA.forEach(item => item.classList.remove('active2'))
    e.target.classList.add('active2')
    line.style.width = `${e.target.offsetWidth}px`
    line.style.top = `${e.target.offsetTop + e.target.offsetHeight + 10}px`
    line.style.left = `${e.target.offsetLeft}px`
}

let widthItem = 0;
let indexDot = 0;
setInterval(function(){
    if(widthItem >= (tea_item.length - 1) * tea_item[0].offsetWidth){
        widthItem = - tea_item[0].offsetWidth
    }
    indexDot += 1
    if(indexDot === itemDot.length){
        indexDot = 0
    }
    widthItem += tea_item[0].offsetWidth
    _team_wrapper.scroll(widthItem, 0);
    [...itemDot].forEach(item => item.classList.remove('active'))
    itemDot[indexDot].classList.add('active')
}, 4000)

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

_blobWrapper.style.maxWidth = `${window.innerWidth - 116 * 4}px`;
_blobWrapper.scroll(100, 0)
let _blogLeft = 0;
setInterval(function(){
    if(_blogLeft >= 900){
        console.log(true)
        _blogLeft = -_blogItem.offsetWidth
    }
    _blogLeft += _blogItem.offsetWidth * 2
    _blobWrapper.scroll(_blogLeft, 0)
    console.log(_blogLeft)
}, 3000)
