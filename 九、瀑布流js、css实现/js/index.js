/**
 * Created by zhangfuwei on 2020/2/14.
 */

//定义一个函数根据id获取接点集合
function $(id) {
    // 类型string 都是小写字母
    return typeof  id === 'string' ? document.getElementById(id) : id;
}


window.onload = function () {

    waterFall('main','box');

    window.onscroll = function () {
        if (checkLoadMore()){
            var datas = {'dataimg':[{'img':'1.jpg'},{'img':'1.jpg'},
                {'img':'18.jpg'},{'img':'16.jpg'},
                {'img':'17.jpg'},{'img':'19.jpg'},
                {'img':'20.jpg'},{'img':'22.jpg'}]};

                for (var i = 0 ; i < datas.dataimg.length;i++) {
                    var newbox = document.createElement('div');
                    newbox.className = 'box';
                    $('main').appendChild(newbox);

                    var newpic = document.createElement('div');
                    newpic.className = 'pic';
                    newbox.appendChild(newpic);

                    var newImg = document.createElement('img');
                    newImg.src =  'imgs/'+ datas.dataimg[i].img;
                    newpic.appendChild(newImg);
                }

            waterFall('main','box');
        }
    }
}


function checkLoadMore() {
    var allbox = $('main').getElementsByClassName('box');

    var lastBox = allbox[allbox.length-1];
    // 获取最后一个box的头部偏移量
    var lastBoxTop = lastBox.offsetTop;
    // 获取浏览器的高度 标注模式 / 混杂模式
    var screenH = document.body.offsetHeight  || document.documentElement.clientHeight;
    // 获取页面的偏移量高度
    var scrollTopH = document.body.scrollTop || document.documentElement.scrollTop || window.pageY;

    console.log(lastBoxTop,screenH,scrollTopH);
    return lastBoxTop <= screenH + scrollTopH;
}

// MARK: 瀑布流样式计算
function waterFall(parent,box) {

    // 屏幕宽度
    var screenWidth = document.body.offsetWidth;

    // 获取所有的box
    var allBox = $('main').getElementsByClassName('box');
    // 单个box的宽度
    var boxWidth = allBox[0].offsetWidth;

    // 计算能容纳下几列
    var colum = Math.floor(screenWidth / boxWidth);


    $(parent).style.width = colum * boxWidth + 'px';
    $(parent).style.margin = '0 auto';
    // 初始化数组,储存每一列的高度
    var  heightArr = [];


    for (var i=0; i<allBox.length;i++) {
        // 储存第一行的高度
        if (i < colum) {
            heightArr.push(allBox[i].offsetHeight);

        }else  {// 获取数组中高度最小的,增加;

            var min = Math.min.apply(this,heightArr);
            var minIdx = indexForArr(heightArr,min);
            // console.log(heightArr);
            // console.log(minIdx+'----'+ min);

            // 布局当前box的
            allBox[i].style.position = 'absolute';// 绝对布局

            allBox[i].style.left = boxWidth * minIdx + 'px';
            allBox[i].style.top = min + 'px';
            // console.log(boxWidth*minIdx+'px');
            // console.log(min +'px');


            // 更新数组中当前索引值对应的value
            heightArr[minIdx] += allBox[i].offsetHeight;

        }
    }
}


// MARK: 计算出特定值在数组中的索引

function indexForArr(arr,value) {

    for (var i in arr) {
        if (arr[i] == value){
            return i;
        }
    }
}