window.addEventListener("load" ,function(){
    const canvas = document.querySelector("#canvas1");
    const ctx = canvas.getContext('2d');
    canvas.width = 500 ;
    canvas.height = 500 ;
    class Mandrake{
        constructor(canvaswidth , canvasheight){
            this.canvaswidth = canvaswidth ; 
            this.canvasheight = canvasheight
             this.image = document.querySelector("#mandrike");
             this.spritwidth = 256 ;
             this.spritheight = 256 ;
             this.width = this.spritwidth;
             this.height = this.spritheight;
             this.scale = 2 ;
             this.x = this.canvaswidth/2 - this.width * this.scale / 2  ; 
             this.y = this.canvasheight/2 - this.height * this.scale / 2  ;
             this.minframe = 0 ; 
             this.maxframe = 355;
             this.frame = 0 ;
             this.framex = 3 ; 
            this.framey = 10 ; 
        }
        draw(context){
            context.drawImage(this.image , this.framex * this.spritwidth ,this.framey * this.spritheight , this.spritwidth , this.spritheight ,
                 this.x , this.y , this.width * this.scale  , this.height * this.scale)
        } 
        update() {
        if(this.frame < this.maxframe)this.frame++ ;
        else this.frame = this.minframe ; 
        this.framex = this.frame % 18 ;
        this.framey = Math.floor(this.frame / 18);
        }
        setAnimation(newminframe , newmaxframe ){
          this.minframe = newminframe ;
          this.maxframe = newmaxframe ;
          this.frame = this.minframe; 
        }
    }
    const Mandrak = new Mandrake(canvas.width , canvas.height);
    function animate(){
        ctx.clearRect(0 , 0 , canvas.width , canvas.height);
        Mandrak.draw(ctx);
        Mandrak.update()
        requestAnimationFrame(animate);
    }
    animate();
    const all = document.querySelector("#all");
    all.addEventListener("click" ,function(){
        Mandrak.setAnimation(0 , 355);
    })
    const grow = document.querySelector("#grow");
    grow.addEventListener("click" ,function(){
        Mandrak.setAnimation(0 , 75);
    })
    const wink = document.querySelector("#wink");
    wink.addEventListener("click" ,function(){
        Mandrak.setAnimation(76 , 112);
    })
    const float = document.querySelector("#float");
    float.addEventListener("click" ,function(){
        Mandrak.setAnimation(113 , 262);
    })
    const hide = document.querySelector("#hide");
    hide.addEventListener("click" ,function(){
        Mandrak.setAnimation(263 , 355);
    })
})