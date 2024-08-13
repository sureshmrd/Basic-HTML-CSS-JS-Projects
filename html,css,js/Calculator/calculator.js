(function(){

    let screen=document.querySelector('.screen');
    let buttons=document.querySelectorAll('.btn')
    let clear=document.querySelector('.btn-clear');
    let equal=document.querySelector('.btn-equal');
    let del=document.querySelector('.btn-del');

    del.addEventListener('click',function(e){
        // let items=(screen.value).split('').map(Number);    
        // let dele=items.pop();
        // console.log(items);
        // screen.value="";
        // for(let i=0;i<items.length;i++){
        //     if(!isNaN(items[i]))
        //     {
        // screen.value += items[i]; }
        screen.value=screen.value.toString().slice(0,-1);           
    });
    buttons.forEach(function(button){
        button.addEventListener('click',function(e){
            let value=e.target.dataset.num;
            screen.value +=value;
        })
    });
    equal.addEventListener('click',function(e){
        if(screen.value==""){
           screen.value="" 
        }
        else{
            let answer=eval(screen.value);
            screen.value=answer;
        }
    });
    clear.addEventListener('click',function(e){
        screen.value="" ; 
    })


})();