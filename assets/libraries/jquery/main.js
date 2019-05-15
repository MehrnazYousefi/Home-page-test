// Responsive
var responsive = function () {
    var b = this;
    this.XS = false;
    this.SM = false;
    this.MD = false;
    this.LG = false;
    this.callbacks = [];
    this.sel = {
        xs: $('#visible-xs'),
        sm: $('#visible-sm'),
        md: $('#visible-md'),
        lg: $('#visible-lg'),
    };
    this.onResize = function () {
        for (var k in b.sel) {
            b[k.toUpperCase()] = b.sel[k].css('display') == 'block';
        }
        for (var x in b.callbacks) {
            b.callbacks[x]({
                XS: b.XS,
                SM: b.SM,
                MD: b.MD,
                LG: b.LG,
            });
        }
    };
    this.init = function () {
        $(window).resize(function () {
            b.onResize();
        });
    };
    this.addCallback = function (fn) {
        b.callbacks.push(fn);
    };
    this.init();
}

$(document).ready(function () {
    $('body').on('click', 'a[href=#]', function (e) {
        e.preventDefault();
    });

    $('body').on('click', '#show-nav', function () {
        $('#menu').slideToggle();
    });
});

//function random(min, max) {
//    return parseInt(Math.random() * (max - min) + min);
//}
//
//
//var liveOnlineUsersChart = function (data, xAxis) {
//
//    var $chart = $('#live-online-users');
//
//    $chart.empty();
//
//    for (var x in xAxis) {
//        if (xAxis[x][1].length > 5) {
//            xAxis[x][1] = xAxis[x][1].substring(5);
//        }
//    }
//
//    var plot = $.plot($chart, [{
//        data: data,
//    }], {
//        series: {
//            lines: {
//                show: true,
//                lineWidth: 2,
//            },
//            points: {
//                show: true,
//                fill: true,
//                radius: 4,
//                fillColor: '#874495'
//            },
//            color: '#dc6df0'
//        },
//        grid: {
//            hoverable: true,
//            clickable: true,
//            borderWidth: {
//                top: 0,
//                left: 5,
//                bottom: 5,
//                right: 0
//            },
//            borderColor: '#c7c7c7',
//            labelMargin: 20,
//            markings: [{
//                xaxis: {from: 0, to: 10,},
//                color: '#f0f7f1',
//            }],
//        },
//        xaxis: {
//            ticks: xAxis,
//            tickDecimals: 0,
//            color: '#ff0000',
//            tickColor: '#ebebeb',
//        },
//        yaxis: {
//            ticks: 5,
//            color: '#ff0000',
//            tickDecimals: 0,
//            tickColor: '#ebebeb',
//        },
//    });
//
//    var previousPoint = null;
    /*$("#chart").bind("plothover", function (event, pos, item) {
     $("#x").text(pos.x.toFixed(2));
     $("#y").text(pos.y.toFixed(2));

     if (item) {
     if (previousPoint != item.dataIndex) {
     previousPoint = item.dataIndex;
     $("#tooltip").remove();
     var x = item.datapoint[0].toFixed(2),
     y = item.datapoint[1];

     showTooltip(item.pageX, item.pageY, y + ' امتیاز');
     }
     } else {
     $("#tooltip").remove();
     previousPoint = null;
     }
     });*/
//};
//
//
//
//
//
//function gmod(n,m){
//    return ((n%m)+m)%m;
//}
//
//function kuwaiticalendar(adjust){
//    var today = new Date();
//    if(adjust) {
//        adjustmili = 1000*60*60*24*adjust;
//        todaymili = today.getTime()+adjustmili;
//        today = new Date(todaymili);
//    }
//    day = today.getDate();
//    month = today.getMonth();
//    year = today.getFullYear();
//    m = month+1;
//    y = year;
//    if(m<3) {
//        y -= 1;
//        m += 12;
//    }
//
//    a = Math.floor(y/100.);
//    b = 2-a+Math.floor(a/4.);
//    if(y<1583) b = 0;
//    if(y==1582) {
//        if(m>10)  b = -10;
//        if(m==10) {
//            b = 0;
//            if(day>4) b = -10;
//        }
//    }
//
//    jd = Math.floor(365.25*(y+4716))+Math.floor(30.6001*(m+1))+day+b-1524;
//
//    b = 0;
//    if(jd>2299160){
//        a = Math.floor((jd-1867216.25)/36524.25);
//        b = 1+a-Math.floor(a/4.);
//    }
//    bb = jd+b+1524;
//    cc = Math.floor((bb-122.1)/365.25);
//    dd = Math.floor(365.25*cc);
//    ee = Math.floor((bb-dd)/30.6001);
//    day =(bb-dd)-Math.floor(30.6001*ee);
//    month = ee-1;
//    if(ee>13) {
//        cc += 1;
//        month = ee-13;
//    }
//    year = cc-4716;
//
//    if(adjust) {
//        wd = gmod(jd+1-adjust,7)+1;
//    } else {
//        wd = gmod(jd+1,7)+1;
//    }
//
//    iyear = 10631./30.;
//    epochastro = 1948084;
//    epochcivil = 1948085;
//
//    shift1 = 8.01/60.;
//
//    z = jd-epochastro;
//    cyc = Math.floor(z/10631.);
//    z = z-10631*cyc;
//    j = Math.floor((z-shift1)/iyear);
//    iy = 30*cyc+j;
//    z = z-Math.floor(j*iyear+shift1);
//    im = Math.floor((z+28.5001)/29.5);
//    if(im==13) im = 12;
//    id = z-Math.floor(29.5001*im-29);
//
//    var myRes = new Array(8);
//
//    myRes[0] = day; //calculated day (CE)
//    myRes[1] = month-1; //calculated month (CE)
//    myRes[2] = year; //calculated year (CE)
//    myRes[3] = jd-1; //julian day number
//    myRes[4] = wd-1; //weekday number
//    myRes[5] = id; //islamic date
//    myRes[6] = im-1; //islamic month
//    myRes[7] = iy; //islamic year
//
//    return myRes;
//}
//function getIslamicDate(adjustment) {
//    var wdNames = new Array("Ahad","Ithnin","Thulatha","چهارشنبه","پنجشنبه","جمعه","شنبه");
//    var iMonthNames = new Array("محرم","صفر","ربیع الاول","ربیع الثانی",
//        "جمادی الاول","جمادی الثانی","رجب","شعبان",
//        "رمضان","شوال","ذیقعده","ذیحجه");
//    var iDate = kuwaiticalendar(adjustment);
//    var d = {
//        year: iDate[7],
//        monthName: iMonthNames[iDate[6]],
//        day: iDate[5]
//    };
//
//    return d;
//}
//
//$(document).ready(function(){
//    var id = getIslamicDate(0);
//    $('[data-islamic-date=year]').html(id.year);
//    $('[data-islamic-date=month]').html(id.monthName);
//    $('[data-islamic-date=day]').html(id.day);
//
//    var pd = new persianDate();
//
//    $('[data-jalali-date=year]').html(pd.format('YYYY'));
//    $('[data-jalali-date=month]').html(pd.format('MMMM'));
//    $('[data-jalali-date=day]').html(pd.format('DD'));
//
//    var monthNames = [
//        'ژانویه',
//        'فوریه',
//        'مارس',
//        'آوریل',
//        'می',
//        'ژوئن',
//        'ژوئیه',
//        'اوت',
//        'سپتامبر',
//        'اکتبر',
//        'نوامبر',
//        'دسامبر',
//    ];
//
//    var today = new Date();
//
//    $('[data-greg-date=year]').html(today.getFullYear());
//    $('[data-greg-date=month]').html(monthNames[today.getMonth()]);
//    $('[data-greg-date=day]').html(today.getDate());
//
//
//});
//
//
//var clock = function () {
//    var base = this;
//    this.weekdays = [
//        'دوشنبه', 'سه شنبه', 'چهارشنبه', 'پنجشنبه', 'جمعه', 'شنبه', 'یکشنبه'
//    ];
//    this.sel = '#live-datetime';
//    this.init = function () {
//        base.update();
//        this.setInterval();
//        $(this.sel).removeClass('hidden');
//    }
//    this.setInterval = function () {
//        setInterval(function () {
//            base.update();
//        }, 1000);
//    }
//    this.update = function () {
//        var dateTime = new Date();
//        var time = this.format(dateTime.getHours());
//        time += ':' + this.format(dateTime.getMinutes());
//        $(base.sel).html(time);
//    }
//    this.format = function (value) {
//        if (value < 10) {
//            return '0' + value;
//        }
//        return value;
//    }
//};
//var clk = new clock();
//clk.init();