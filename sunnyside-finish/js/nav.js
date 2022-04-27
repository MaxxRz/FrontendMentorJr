
const iconBurger = document.getElementById('iconBurger');
const contentLinksNav = document.getElementById('contentLinksNav');


iconBurger.addEventListener("click", () => {
   console.log(contentLinksNav)

   if(!contentLinksNav.classList.contains('navActive')){
      contentLinksNav.classList.add('navActive');
      contentLinksNav.style.animation = "openMobileText 0.5s forwards";
   } else{
      contentLinksNav.style.animation = "clouseMobileText 0.5s forwards";
      contentLinksNav.classList.remove('navActive');

   }
});

const navMenu = document.getElementById('navMenu');
const sectionTitle = document.getElementById('sectionTitle');
const iconsNav = document.querySelectorAll('.iconNav');


if(window.innerWidth < 764){
   addEventListener('scroll', () => {
      if(window.scrollY > (sectionTitle.offsetHeight / 2)){
         iconsNav.forEach( iconNav => {
            iconNav.style.fill = "hsl(167, 40%, 24%)";
         });
      }else{
         iconsNav.forEach( iconNav => {
            iconNav.style.fill = "white";
         });
      }
   });
} else{
   addEventListener('scroll', () => {
      if(window.scrollY > (sectionTitle.offsetHeight / 2)){
         navMenu.style.background = "hsl(167, 40%, 24%)";
      }else{
         navMenu.style.background = "transparent";
      }
   });
}