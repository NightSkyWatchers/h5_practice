/**
 * Created by zhangfuwei on 2020/2/13.
 */

//定义一个函数根据id获取接点集合
function getViaId(id) {


    // 类型string 都是小写字母
    return typeof  id === 'string' ? document.getElementById(id) : id;
}


window.onload = function () {
    var lis = getViaId('tab-header').getElementsByTagName('li');

    var content = getViaId('tab-content').getElementsByClassName('dom');

    if(lis.length != content.length) return;


    // console.log(lis);

    //因为for in 方法不理想,所以使用以下方法遍历

    // for (var i=0; i < lis.length; i++) {
    //
    //     var li = lis[i];
    //
    //     //  为每一个对象li绑定一个id,后面会用到
    //     li.id=i;
    //
    //     li.onmouseover = function () {
    //         for (var j=0 ; j<lis.length ; j++){
    //             lis[j].className = '';
    //             content[j].style.display = 'none';
    //         }
    //          console.log(i);
    //
    //         // lis[li.id].className = 'selected';
    //         // content[li.id].style.display = 'block';
    //
    //         // 设置当前对象this的id值对应classname
    //         lis[this.id].className = 'selected';
    //         content[this.id].style.display = 'block';
    //     }
    //
    // }



    for (let i=0; i < lis.length; i++) {

        var li = lis[i];

        //  为每一个对象li绑定一个id,后面会用到
        // li.id=i;

        li.onmouseover = function () {
            for (var j=0 ; j<lis.length ; j++){
                lis[j].className = '';
                content[j].style.display = 'none';
            }

            console.log(i);
            // lis[li.id].className = 'selected';
            // content[li.id].style.display = 'block';

            // 设置当前对象this的id值对应classname
            lis[i].className = 'selected';
            content[i].style.display = 'block';
        }

    }

}