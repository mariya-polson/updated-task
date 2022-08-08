function feedback(index){
    document.getElementById('feedback-id1').style.display = 'none';
     document.getElementById('feedback-id2').style.display = 'none';
    document.getElementById('feedback-id3').style.display = 'none';
    if(index==1){
    document.getElementById('feedback-id1').style.display = 'block';                            
                }
    else if(index==2){
        document.getElementById('feedback-id2').style.display = 'block';
                }
    else {
        document.getElementById('feedback-id3').style.display = 'block';
                }
                          
    }
    $(document).ready(function() {
        $('.bxslider').bxSlider({
           auto: true,		
           touchEnabled: false
       });
       $(".slider").slider({ 
           min: 0, 
           max: 500, 
           step: 1,
           range: true
       }).slider("pips", {
           rest: "label",
           step: 250,
           prefix: "$",
           suffix: "K"
       }).slider("float", {
           prefix: "$"
       });
   });
   