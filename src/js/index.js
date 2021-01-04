(function(){
    'use strict';
    let app = new Vue({
        el: '#app',
        data: {
            filter_market: [
                {name: '不限',  market: 'all',      isNow: true},
                {name: '債券型', market: 'bond',    isNow: false},
                {name: '成熟股', market: 'mature',  isNow: false},
                {name: '新興股', market: 'rising',  isNow: false},
                {name: '產業',  market: 'industry', isNow: false}
            ],
            filter_weather: [
                {name: '不限', weather: 'all',          isNow: true},
                {name: '樂觀', weather: 'optimism',     isNow: false},
                {name: '中立', weather: 'neutral',      isNow: false},
                {name: '悲觀', weather: 'pessimistic',  isNow: false}
            ],
            sort: {
                menuIsOpen: false,
                list: [
                    {text: '3個月績效排序', sort_month: '3',    isNow: true,    isHover: false},
                    {text: '6個月績效排序', sort_month: '6',    isNow: false,   isHover: false},
                    {text: '1年績效排序',   sort_month: '12',   isNow: false,   isHover: false}
                ]
            }
        },
        methods: {
            // filter
                market_switchClass: function(index){
                    let filter_market = this.filter_market;
                    let market_length = filter_market.length;
                    if (index == '0') {
                        for(let i = 1; i < market_length; i++){
                            filter_market[i].isNow = false;
                        }   
                        filter_market[index].isNow = true;
                    } else {
                        filter_market[0].isNow = false;
                        filter_market[index].isNow = !filter_market[index].isNow;
                    }
                },
                weather_switchClass: function(index){
                    let filter_weather = this.filter_weather;
                    let weather_length = filter_weather.length;
                    if (index == '0') {
                        for(let i = 1; i < weather_length; i++){
                            filter_weather[i].isNow = false;
                        }   
                        filter_weather[index].isNow = true;
                    } else {
                        filter_weather[0].isNow = false;
                        filter_weather[index].isNow = !filter_weather[index].isNow;
                    }
                },
            // sort
                switch_sortMenu: function(){
                    this.sort.menuIsOpen = !this.sort.menuIsOpen;
                },
                close_sortMenu: function(){
                    this.sort.menuIsOpen = false;
                },
                li_isHover: function(index){
                    this.sort.list[index].isHover = true;
                },
                li_isNotHover: function(index){
                    this.sort.list[index].isHover = false;
                },
                li_select: function(index){
                    let li_length = this.sort.list.length;
                    for(let i = 0; i < li_length; i++){
                        this.sort.list[i].isNow = false;
                    }
                    this.sort.list[index].isNow = true;
                }
        },
        computed: {
            
        }
    });
}());