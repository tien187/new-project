import { _decorator, Camera, Canvas, Component, Node, ResolutionPolicy, SpriteRenderer, Vec2, Vec3, View, view } from 'cc';
const { ccclass, property } = _decorator;

@ccclass('Lib')
export class Lib {
  
    public static test(){
        // code 1 nui trong day
        var a=0;
	var b=1;

var d=10000;
    }
    public static outSideCam(sprite:SpriteRenderer,c:Camera,type:number): boolean {
        if(type==0){
            var left=new Vec3();
            left=sprite.node.getWorldPosition();
            left.x=sprite.node.getWorldPosition().x-sprite.spriteFrame.width/200;       
            var screenPos= c.worldToScreen(left);
            //console.log("screenPos= "+screenPos.x +" origin= "+sprite.node.getWorldPosition() +" campos= "+c.node.position +" sprite.spriteFrame.width= "+sprite.spriteFrame.width);
            if(screenPos.x>=0)        
                return true;
        }
        if(type==1){
            var right=new Vec3();
            right=sprite.node.getWorldPosition();
            right.x=sprite.node.getWorldPosition().x+sprite.spriteFrame.width/200;       
            var screenPos=c.worldToScreen(right);
        
            if(screenPos.x<=View.instance.getDesignResolutionSize().x)        
                return true;
        }
        if(type==2){
            var up=new Vec3();
            up=sprite.node.getWorldPosition();
            up.y=sprite.node.getWorldPosition().y+sprite.spriteFrame.height/200;       
            var screenPos=c.worldToScreen(up);
        //console.log("screenPos.y<=0= "+screenPos.y);
            if(screenPos.y<=View.instance.getDesignResolutionSize().y)        
                return true;
        }
        return false;
    }

}


