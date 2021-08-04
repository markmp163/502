var header = document.getElementById('header');
        var mobileMenu = document.getElementById('mobile-menu');
        var headerHeight = header.clientHeight;

        mobileMenu.onclick = function(){
            var isClose = header.clientHeight === headerHeight;
            if (isClose){
                header.style.height = 'auto';
            }
            else{
                header.style.height = null;
            }
        }
        var menuItems = document.querySelectorAll('#nav li a[href*="#"]');
        for(var i=0;i< menuItems.length; i++){
            var menuItem = menuItems[i];
            menuItem.onclick = function(){
                var isParentMenu = this.nextElementSibling && menuItem.nextElementSibling.classList.contains('sub-nav');
                if(!isParentMenu){
                    header.style.height = null;
                }
            }
        }
        var slider_main = document.querySelector('#slider')
        console.log(slider_main);
        var backgroud_slider = [
            '../img/Slider_background/slider_2.jpg',
            '../img/Slider_background/slider_3.jpg',
            '../img/Slider_background/slider_1.jpg',
        ]
        setTimeout(function(){
            slider_main.style.backgroundImage = "url('../img/Slider_background/slider_2.jpg')"
        }, 1000)