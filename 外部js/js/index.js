/**
 * Created by zhangfuwei on 2020/2/13.
 */

    window.onload = function () {
        var back = document.getElementById('back');
        var des = document.getElementById('des')
        var img = document.createElement('img');
        img.src='imgs/img_01.jpg';

        back.onclick = function () {
            back.appendChild(img);
        }

        img.onmouseover = function () {
            back.removeChild(des);
        }

    }
