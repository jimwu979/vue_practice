(function(){
    'use strict';
    // child function
        function table_reload(ajax_url){
            //ajax
            
        }
        function movedown(){
            var _this = $(this);
            _this.removeClass('show');
            var move_length = _this.siblings('#report').offset().top;
            $('html, body').animate({scrollTop: move_length}, 200);
        }
        function subject_reload(market, weather, sort){
            var $subject = $('#subject');
            $subject.html('').css('left', '0')
                            .parent().animate({scrollLeft: 0}, 200);
            template.sort(function(a, b){
                return a[sort] > b[sort] ? 1 : -1;
            });
            var totalFund_length = 0;
            var template_length = template.length;
            for(var i = 0; i < template_length; i++){
                var template_eq = template[i];
                var positiveNumber = template_eq[sort] < 0 ? 'lower' : 'higher';
                if (market.indexOf(template_eq.market) >= 0 && weather.indexOf(template_eq.weather) >= 0) {
                    totalFund_length += Number(template_eq.fund_length);
                    $('#subject').prepend(
                        '<div       data-market="'+ template_eq.market +'"'+
                        '           data-weather="'+ template_eq.weather +'"'+
                        '           data-fund_length = "'+ template_eq.fund_length +'"'+
                        '           data-ajax_url = "'+ template_eq.ajax_url +'"'+
                        '           data-market_report ="'+ template_eq.market_report +'"'+
                        '     >'+
                        '   <h3>'+ template_eq.title +'</h3>'+
                        '   <img class="weather" src="img/'+ template_eq.weather +'.svg">'+
                        '   <img class="line_graph" src="img/'+ template_eq.line_graph +'">'+
                        '   <div class="'+ positiveNumber +'">'+ template_eq[sort] +'%</div>'+
                        '</div>'
                    );
                }
            }
            $('#subject > div').addClass('reload');
            var winW = $(window).width();
            var largeDevice = winW >= 768 ? true : false;
            var card_W = largeDevice ? 180 : 158;
            var first_marginLeft = largeDevice ? 22 : 7;
            var cardsInColumn_length = largeDevice ? 4 : 2;
            var card_length = $('#subject > div').length;
            if (card_length == 0) {
                $('#slideshow').addClass('null');
            }else{
                $('#slideshow').removeClass('null');
            }
            var subject_W = Math.ceil(card_length / cardsInColumn_length) * (card_W + 8) + first_marginLeft + 15;
            $('#subject').width(subject_W);
            var $operating_ul = $('#operating ul');
            var subject_page;
            var winW = $(window).width();
            if (winW > 767) {
                subject_page = 16;
            } else if(winW > 500){
                subject_page = 6;
            } else {
                subject_page = 4;
            }
            var page_length = Math.ceil( $('#subject > div').length / subject_page);
            $operating_ul.html('');
            if (page_length > 1) {
                for(var i = 0; i < page_length; i++){
                    $operating_ul.append('<li></li>');
                }
                $('#moving_btn').children().eq(1).addClass('show')
                            .siblings().removeClass('show');
            }else{
                $('#moving_btn').children().removeClass('show');
            }
            $operating_ul.children('li').eq(0).addClass('now');
            $('#object_title').text('').css('padding', '0').siblings('#fund_length').text(totalFund_length);
            $('#report').attr('href', '')
                        .siblings('#move_down').removeClass('show');
            setTimeout(function() {
                $('#subject > div:nth-of-type(1)').trigger('click');
            }, 0);
        }
    // main function
        function init(){
            var market = '';
            var market_length = $('#select_market li').length;
            for(var i = 0; i < market_length; i++){
                if ($('#select_market li').eq(i).hasClass('now')) {
                    market += $('#select_market li').eq(i).attr('data-market')
                }
            }
            var weather = '';
            var weather_length = $('#select_weather li').length;
            for(var i = 0; i < weather_length; i++){
                if ($('#select_weather li').eq(i).hasClass('now')) {
                    weather += $('#select_weather li').eq(i).attr('data-weather')
                }
            }
            var sort = $('#nowSort').attr('data-sort');
            subject_reload(market, weather, sort);
        }
        function filter(){
            var _this = $(this);
            _this.toggleClass('now');
            if (_this.index() == 0) {
                _this.siblings().removeClass('now');
            } else {
                _this.siblings().eq(0).removeClass('now')
            }
            if (_this.parent().children('li.now').length == 0) {
                _this.parent().children('li:nth-child(1)').addClass('now');
            }
            init();
        }
        function nextPage(){
            var _this = $(this);
            var nowPage = _this.parents('#operating').find('li.now').index();
            var move_direction = _this.parent().index() == 0 ? 1 : -1;
            var page_length = _this.parents('#operating').find('li').length;
            if( (nowPage  < page_length - 0 && move_direction == -1) ||
                (nowPage  > 0 && move_direction ==  1)
            ){
            // move slideshow
                var $subject = _this.parents('#operating').siblings('#subject');
                var move_W = ($('#subject > div').width() + 2 + 8) * 4;
                var firstPage_paddingLeft = nowPage - move_direction == 0 ? 0 : 30;
                var nowLeft = nowPage * move_W * -1 + firstPage_paddingLeft;
                var newLeft = nowLeft + (move_direction * move_W);
                $subject.css('left', newLeft);
                
            // switch <li>
                var newPageNumber = nowPage - move_direction;
                _this.parents('#operating').find('li').eq(newPageNumber).addClass('now')
                .siblings().removeClass('now');
                
            // display button
                var li_length = _this.parents('#operating').find('li').length;
                var $btn_box = _this.parents('#moving_btn').children('div');
                if(newPageNumber == li_length - 1){
                    $btn_box.eq(1).removeClass('show');
                }else if(newPageNumber == 0){
                    $btn_box.eq(0).removeClass('show');
                }
                if (newPageNumber != 0) {
                    $btn_box.eq(0).addClass('show');
                }
                if (newPageNumber != li_length - 1) {
                    $btn_box.eq(1).addClass('show');
                }
                   
            }
        }
        function movePage(event, newPageLi){
            var _this = newPageLi ? newPageLi : $(this);
            _this.addClass('now')
                    .siblings().removeClass('now');
            var newPage = _this.index();
            var win_W = $(window).width();
            var firstPage_paddingLeft;
            if (win_W > 767) {
                firstPage_paddingLeft = newPage == 0 ? 0 : 30;
            } else {
                firstPage_paddingLeft = 0;
            }
            var move_W;
            if (win_W > 767) {
                move_W = ($('#subject > div').width() + 2 + 8) * 4;
            } else if (win_W > 500) {
                move_W = ($('#subject > div').width() + 2 + 8) * 3;
            } else {
                move_W = ($('#subject > div').width() + 2 + 8) * 2;
            }
            var newLeft = move_W * newPage * -1 + firstPage_paddingLeft;
            $('#subject').css('left', newLeft);
            
            // display button
                var totalPage = _this.parent().children().length - 1;
                var $btn_box = _this.parent().siblings('#moving_btn').children();
                if (newPage == 0) {
                    $btn_box.eq(0).removeClass('show');
                } else {
                    $btn_box.eq(0).addClass('show');
                }
                if (newPage == totalPage) {
                    $btn_box.eq(1).removeClass('show');
                } else {
                    $btn_box.eq(1).addClass('show');
                }
        }
        function fingerDown(){
            var start_X = (event.pageX) ? event.pageX : event.touches[0].clientX;
            $(this).attr('start_X', start_X);
        }
        function fingerUp(){
            var _this = $(this);
            if (_this.attr('move_lock') == '0') {
                _this.attr('move_lock', '1');
                var end_X = event.pageX;
                var end_X = (event.pageX) ? event.pageX : event.touches[0].clientX;
                var start_X = _this.attr('start_X');
                var distance = start_X - end_X;
                var finger_direction = distance > 0 ? -1 : 1;
                console.log(finger_direction);
                var original_page = _this.siblings('#operating').find('li.now').index();
                var new_page = original_page - finger_direction;
                if (new_page >= _this.siblings('#operating').find('li').length) {
                    new_page--;
                } else if (new_page < 0) {
                    new_page = 0;
                }
                var newPageLi = _this.siblings('#operating').find('li').eq(new_page);
                movePage(event, newPageLi);
                setTimeout(function(){
                    _this.attr('move_lock', '0');
                }, 500);
            }
        }
        function selectSubject(){
            var _this = $(this);
            _this.addClass('now')
                    .siblings().removeClass('now');
            var object_title = _this.children('h3').text();
            var object_fund_length = _this.attr('data-fund_length');
            var market_report = _this.attr('data-market_report');
            $('#object_title').text(object_title).removeAttr('style')
                                .siblings().text(object_fund_length)
                                .parents('#total').siblings('#report').attr('href', market_report)
                                .siblings('#move_down').addClass('show');
            var ajax_url = _this.attr('data-ajax_url');
            table_reload(ajax_url);
        }
        function switch_sortMenu(){
            $(this).parent().toggleClass('open');
        }
        function sort_hover(){
            $(this).addClass('hover');
        }
        function sort_leave(){
            $(this).removeClass('hover');
        }
        function close_sortMenu(){
            $(this).removeClass('open');
        }
        function sort_object(){
            var _this = $(this);
            var newSort = _this.attr('data-sort');
            _this.parent().siblings('#nowSort').text(_this.text()).attr('data-sort', newSort)
                    .parent().removeClass('open');
            init();
        }
        function hideArrow(){
            $('#move_down').removeClass('show');
        }
        
    init();
    $('#sort').mouseleave(close_sortMenu)
                .children('#nowSort').click(switch_sortMenu)
                .siblings('ul').children('li').on({
                    'mouseover': sort_hover,
                    'mouseleave': sort_leave,
                    'click': sort_object
                });
    $('#filter li').click(filter);
    $('#operating button').click(nextPage);
    $('#operating ul').on('click', 'li', movePage);
    $('#subject')
        .on('click', '> div', selectSubject)
        .on({
            'touchstart': fingerDown,
            // 'mousedown': fingerDown,
            'dragstart': fingerDown,
            'touchmove': fingerUp,
            'drag': fingerUp
        });
    $('#move_down').click(movedown);
    $(window).scroll(hideArrow);
    }());