$(function () {
    $('.shop_add').each(function (i, ele) {
        xiaoji($(this));
    })
    summoney()
    // getSum();
    // 全选按钮change事件
    $('.checkedAll').change(function () {
        $('.checkedOne , .checkedAll ').prop('checked', $(this).prop('checked'));
        if ($(this).prop('checked')) {
            $('.checkedOne').parent().addClass('shop_bd_bg')
            summoney()
        } else {
            $('.checkedOne').parent().removeClass('shop_bd_bg')
            summoney()
        }
        // getSum()


    })
    // 单选change事件
    $('.checkedOne').change(function () {
        if ($('.checkedOne:checked').length == $('.checkedOne').length) {
            $('.checkedAll').prop('checked', true);
            summoney();
        } else {
            $('.checkedAll').prop('checked', false);
            summoney();
        }


        //判断加背景
        if ($(this).prop('checked')) {
            $(this).parent().addClass('shop_bd_bg');

        } else {
            $(this).parent().removeClass('shop_bd_bg');

        }
        // getSum()



    })
    //数量加减模块
    //封装计算小计的函数；参数div以shop_add为基础；
    function xiaoji(div) {
        var n = parseFloat(div.siblings('.pice').text().substr(1));
        var m = parseInt(div.children('input').val());
        var y = '￥' + (m * n).toFixed(2);
        div.siblings('.shop_sum').html(y);
        summoney();

    }
    // 点击加
    $('.shop_add .jia').click(function () {
        var num = $(this).siblings('input').val();
        num++;
        $(this).siblings('input').val(num);
        xiaoji($(this).parent());
        // getSum()
        // summoney()

    })
    // 点击减
    $('.shop_add .jian').click(function () {
        var num = $(this).siblings('input').val();
        num--;
        if (num >= 0) {
            $(this).siblings('input').val(num);
        } else {
            $(this).siblings('input').val('0');
        }
        xiaoji($(this).parent());
        // getSum()
        // summoney()
    })
    // 修改文本框值
    $('.shop_add>input').change(function () {
        xiaoji($(this).parent());
    })
    // 总价模块
    function getSum() {
        var count = 0; // 计算总件数 
        var money = 0; // 计算总价钱
        $(".shop_add input").each(function (i, ele) {
            count += parseInt($(ele).val());
        });
        $(".shop_fol span").text(count);
        $(".shop_sum").each(function (i, ele) {
            money += parseFloat($(ele).text().substr(1));
        });
        $(".shop_fol em").text("￥" + money.toFixed(2));
    }

    function summoney() {

        var n = 0; //n为商品总件数
        var m = 0; //m为商品总价
        if ($('.checkedOne:checked')) {
            $('.checkedOne:checked').each(function (i, ele) {
                n += parseInt($(ele).siblings('.shop_add').children('input').val());
                m += parseFloat($(ele).siblings('.shop_sum').text().substr(1))
            })
        }
        $('.shop_fol span').text(n);
        $('.shop_fol em').text('￥' + m.toFixed(2));
        
    }
    // 计算总价
    // 删除模块
    //删除单行
    $('.shop_sum').siblings('a').click(function () {
        $(this).parent('li').remove();
        summoney()
    })
    //删除选中
    $('.shop_fol>li').eq(1).click(function () {
        $('.checkedOne:checked').parent('li').remove();
        summoney()
    })
    //清空
    $('.shop_fol>li').eq(2).click(function () {
        $('.shop_bd>li').remove();
        summoney()
    })

})