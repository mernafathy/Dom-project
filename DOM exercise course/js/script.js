var imgsList = Array.from ( document.getElementsByClassName('img-item'));
var lightboxContainer=document.querySelector('.lightbox-container');
var lightboxItem=document.querySelector('.lightbox-item');
var nextbutton =document.getElementById('next');
var prevbutton =document.getElementById('prev');
var closebutton =document.getElementById('close');
var currentIndex=0;
for(var i=0;i<imgsList.length;i++)
{
    imgsList[i].addEventListener('click',function(e)
    {
         currentIndex= imgsList.indexOf(e.target);
        var imgSrc = e.target.getAttribute('src')
        lightboxContainer.classList.replace('d-none','d-flex');
        lightboxItem.style.backgroundImage =`url(${imgSrc})`
    })
}
    function slide(i)
        {

             currentIndex = currentIndex +1;
             if (currentIndex== -1)
             {
                currentIndex = imgsList.length-1;
             }
             if (currentIndex== imgsList.length)
             {
                currentIndex=0;
             }
             var imgSrc =imgsList[currentIndex].getAttribute('src');
             lightboxItem.style.backgroundImage =`url(${imgSrc})`;
            
        }
        function closeslide()
        {
            lightboxContainer.classList.replace('d-flex','d-none');
        }

        nextbutton.addEventListener('click',function()
        {
                  slide(1);
        })
        prevbutton.addEventListener('click',function()
        {
            slide(-1);
        })
        closebutton.addEventListener('click',closeslide);

        document.addEventListener('keydown',function(e)
        {
            if(e.key == 'ArrowRight')
            {
                slide(1);
            }
           else if(e.key =='ArrowLeft')
            {
                slide(-1);
            } 
            else if(e.key == 'Escape')
            {
                closeslide();
            }
        })

    
        