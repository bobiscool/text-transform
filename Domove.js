/**
 * Created by mac on 16/7/16.
 */
function Domove(obj,attri,step,target,endFn){   //  对象   属性  步长  目标  补充函数
    step=parseInt(getStyle(obj,attri))<target?step:-step; //判断是以减的方式 还是以加的方式向目标靠近
    clearInterval(obj.timer);//初始化先清空定时器
    obj.timer = setInterval(function(){
            var OTway = parseInt(getStyle(obj,attri))+step;  //一步一步往下走
            if(OTway>target&&step>0||OTway<target&&step<0){
                OTway =target;          //如果到了 就停下来
            }
            obj.style[attri] = OTway+'px';  // 把内部数据的变化反应出来F
            if(OTway==target){
                clearInterval(obj.timer);
                console.log(obj.className);
                endFn&&endFn();   //有补充函数的话,就添加补充函数
            }
        }
        ,30);
}

// 取得当前属性的大小的函数 返的是数字
function getStyle ( obj, attr ) { return obj.currentStyle?obj.currentStyle[attr] : getComputedStyle( obj )[attr]; }