var imgelements = document.querySelector(".image-thumblist").children;


for(let i=0; i<imgelements.length;i++){
    //const a = Math.floor(Math.random()*100);
   imgelements[i].setAttribute('id', Math.floor(Math.random()*100))
   imgelements[i].onclick = () => {
    var idimg = imgelements[i].id;
    var srcimg = imgelements[i].src;
    alert('ID is: '+ idimg+ ' SRC: '+ srcimg);
  document.querySelector(".image-gallery img").src=srcimg;
  document.querySelector(".image-gallery img").id=idimg;
   
   }
   

}
const Images = document.querySelectorAll('.image-gallery')
const itemImages = document.querySelectorAll('.image-gallery .img');
const itembuttons = document.querySelectorAll('.icon-section')  
  const totalItems = document.querySelectorAll('.image-gallery .img').length
    let i = 0
    let translateX=0
    itembuttons.forEach(button => {
        button.addEventListener('click' ,event =>{
            if(event.target.id =='previous'){
            if(i !==1 ){
                previousElement(i)
            }
        }
        else{
            if(i !== totalItems  ){
                nextElement()
        }
    }
});
    });   
        
         
          function nextElement (slides){
  
           // itemImages.style.display = "none";
           
            i++;
            translateX -=300           
             console.log( "increment" + slides)
             document.querySelectorAll('.image-gallery').style.display = "block"
          }
          
          
          function previousElement (slides){
            i--;
          //  itemImages.style.display = "block";
            translateX+=300
            document.querySelectorAll('.image-gallery').style.display = "block"
            console.log("decrement" + slides)
          }
          
          const star = document.querySelectorAll('rating i')
          for(let review=0;review<5;review++){
             console.log(review)
          }
