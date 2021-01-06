(function(){
    'use strict';
    let app = new Vue({
        el: '#app',
        data: {
            filter_market: [
                {text: '不限',  market: ['bond', 'mature', 'rising', 'industry'],      isNow: true},
                {text: '債券型', market: ['bond'],                                      isNow: false},
                {text: '成熟股', market: ['mature'],                                    isNow: false},
                {text: '新興股', market: ['rising'],                                    isNow: false},
                {text: '產業',  market: ['industry'],                                  isNow: false}
            ],
            filter_weather: [
                {text: '不限', weather: ['optimism', 'neutral', 'pessimistic'],         isNow: true},
                {text: '樂觀', weather: ['optimism'],                                   isNow: false},
                {text: '中立', weather: ['neutral'],                                    isNow: false},
                {text: '悲觀', weather: ['pessimistic'],                                isNow: false}
            ],
            sort: {
                menuIsOpen: false,
                list: [
                    {text: '3個月績效排序', sort_month: 'performance_month_3',    isNow: true,    isHover: false},
                    {text: '6個月績效排序', sort_month: 'performance_month_6',    isNow: false,   isHover: false},
                    {text: '1年績效排序',   sort_month: 'performance_month_12',   isNow: false,   isHover: false}
                ]
            },
            slideshow: {
                width: 0,
                left: 0,
                nowPage: 0,
                move_lock: 0,
                leftButton: false,
                rightButton: true,
                sort: '',
                targets: [
                    {
                        market: 'bond',
                        weather: 'optimism',
                        performance_month_3: '32.4',
                        performance_month_6: '999',
                        performance_month_12: '71',
                        title: '新興主要貨幣債貨幣債AA',
                        line_graph: 'line_graph.png',
                        fund_length: '53',
                        market_report :'https://google.com',
                        ajax_url: '',
                        isSelect: true
                    },
                    {
                        market: 'bond',
                        weather: 'neutral',
                        performance_month_3: '-12',
                        performance_month_6: '51',
                        performance_month_12: '-39.2',
                        title: '新興投資級債',
                        line_graph: 'line_graph.png',
                        fund_length: '28',
                        market_report :'https://google.com',
                        ajax_url: '',
                        isSelect: false
                    },
                    {
                        market: 'mature',
                        weather: 'optimism',
                        performance_month_3: '58.2',
                        performance_month_6: '-92.2',
                        performance_month_12: '-41.5',
                        title: '美國高收益債',
                        line_graph: 'line_graph.png',
                        fund_length: '3',
                        market_report :'https://google.com',
                        ajax_url: '',
                        isSelect: false
                    },
                    {
                        market: 'rising',
                        weather: 'neutral',
                        performance_month_3 : '-12',
                        performance_month_6 : '86',
                        performance_month_12 : '53',
                        title: '歐洲高收益債',
                        line_graph: 'line_graph.png',
                        fund_length: '99',
                        market_report :'https://google.com',
                        ajax_url: '',
                        isSelect: false
                    },
                    {
                        market: 'industry',
                        weather: 'neutral',
                        performance_month_3 : '23',
                        performance_month_6 : '-54.96',
                        performance_month_12 : '74.2',
                        title: '美國投資級債',
                        line_graph: 'line_graph.png',
                        fund_length: '102',
                        market_report :'https://google.com',
                        ajax_url: '',
                        isSelect: false
                    },
                    {
                        market: 'mature',
                        weather: 'optimism',
                        performance_month_3 : '-23.1',
                        performance_month_6 : '51.3',
                        performance_month_12 : '57',
                        title: '歐洲投資級債',
                        line_graph: 'line_graph.png',
                        fund_length: '283',
                        market_report :'https://google.com',
                        ajax_url: '',
                        isSelect: false
                    },
                    {
                        market: 'industry',
                        weather: 'neutral',
                        performance_month_3 : '23',
                        performance_month_6 : '-54.96',
                        performance_month_12 : '-74.2',
                        title: '美國投資級債',
                        line_graph: 'line_graph.png',
                        fund_length: '83',
                        market_report :'https://google.com',
                        ajax_url: '',
                        isSelect: false
                    },
                    {
                        market: 'mature',
                        weather: 'optimism',
                        performance_month_3 : '23.1',
                        performance_month_6 : '51.3',
                        performance_month_12 : '-57',
                        title: '歐洲投資級債',
                        line_graph: 'line_graph.png',
                        fund_length: '58',
                        market_report :'https://google.com',
                        ajax_url: '',
                        isSelect: false
                    },
                    {
                        market: 'industry',
                        weather: 'neutral',
                        performance_month_3 : '-23',
                        performance_month_6 : '54.96',
                        performance_month_12 : '74.2',
                        title: '美國投資級債',
                        line_graph: 'line_graph.png',
                        fund_length: '5',
                        market_report :'https://google.com',
                        ajax_url: '',
                        isSelect: false
                    },
                    {
                        market: 'mature',
                        weather: 'optimism',
                        performance_month_3 : '-23.1',
                        performance_month_6 : '-51.3',
                        performance_month_12 : '57',
                        title: '歐洲投資級債',
                        line_graph: 'line_graph.png',
                        fund_length: '1',
                        market_report :'https://google.com',
                        ajax_url: '',
                        isSelect: false
                    },
                    {
                        market: 'mature',
                        weather: 'optimism',
                        performance_month_3 : '92.2',
                        performance_month_6 : '-58.1',
                        performance_month_12 : '-41.2',
                        title: '美國高收益債',
                        line_graph: 'line_graph.png',
                        fund_length: '14',
                        market_report :'https://google.com',
                        ajax_url: '',
                        isSelect: false
                    },
                    {
                        market: 'rising',
                        weather: 'neutral',
                        performance_month_3 : '12',
                        performance_month_6 : '86',
                        performance_month_12 : '-53',
                        title: '歐洲高收益債',
                        line_graph: 'line_graph.png',
                        fund_length: '574',
                        market_report :'https://google.com',
                        ajax_url: '',
                        isSelect: false
                    },
                    {
                        market: 'industry',
                        weather: 'neutral',
                        performance_month_3 : '23',
                        performance_month_6 : '-54.96',
                        performance_month_12 : '74.2',
                        title: '美國投資級債',
                        line_graph: 'line_graph.png',
                        fund_length: '533',
                        market_report :'https://google.com',
                        ajax_url: '',
                        isSelect: false
                    },
                    {
                        market: 'mature',
                        weather: 'optimism',
                        performance_month_3 : '23.1',
                        performance_month_6 : '51.3',
                        performance_month_12 : '-57',
                        title: '歐洲投資級債',
                        line_graph: 'line_graph.png',
                        fund_length: '13',
                        market_report :'https://google.com',
                        ajax_url: '',
                        isSelect: false
                    },
                    {
                        market: 'mature',
                        weather: 'optimism',
                        performance_month_3 : '-92.2',
                        performance_month_6 : '-58.1',
                        performance_month_12 : '41.2',
                        title: '美國高收益債',
                        line_graph: 'line_graph.png',
                        fund_length: '89',
                        market_report :'https://google.com',
                        ajax_url: '',
                        isSelect: false
                    },
                    {
                        market: 'rising',
                        weather: 'neutral',
                        performance_month_3 : '-12',
                        performance_month_6 : '86',
                        performance_month_12 : '53',
                        title: '歐洲高收益債',
                        line_graph: 'line_graph.png',
                        fund_length: '83',
                        market_report :'https://google.com',
                        ajax_url: '',
                        isSelect: false
                    },
                    {
                        market: 'industry',
                        weather: 'neutral',
                        performance_month_3 : '-23',
                        performance_month_6 : '-54.96',
                        performance_month_12 : '74.2',
                        title: '美國投資級債',
                        line_graph: 'line_graph.png',
                        fund_length: '123',
                        market_report :'https://google.com',
                        ajax_url: '',
                        isSelect: false
                    },
                    {
                        market: 'mature',
                        weather: 'optimism',
                        performance_month_3 : '23.1',
                        performance_month_6 : '-51.3',
                        performance_month_12 : '-57',
                        title: '歐洲投資級債',
                        line_graph: 'line_graph.png',
                        fund_length: '53',
                        market_report :'https://google.com',
                        ajax_url: '',
                        isSelect: false
                    },
                    {
                        market: 'bond',
                        weather: 'neutral',
                        performance_month_3 : '-91.75',
                        performance_month_6 : '17',
                        performance_month_12 : '-89.2',
                        title: '全球高收益債',
                        line_graph: 'line_graph.png',
                        fund_length: '53',
                        market_report :'https://google.com',
                        ajax_url: '',
                        isSelect: false
                    },
                    {
                        market: 'industry',
                        weather: 'neutral',
                        performance_month_3 : '-23',
                        performance_month_6 : '54.96',
                        performance_month_12 : '-74.2',
                        title: '美國投資級債',
                        line_graph: 'line_graph.png',
                        fund_length: '53',
                        market_report :'https://google.com',
                        ajax_url: '',
                        isSelect: false
                    },
                    {
                        market: 'mature',
                        weather: 'optimism',
                        performance_month_3 : '-23.1',
                        performance_month_6 : '51.3',
                        performance_month_12 : '-57',
                        title: '歐洲投資級債',
                        line_graph: 'line_graph.png',
                        fund_length: '53',
                        market_report :'https://google.com',
                        ajax_url: '',
                        isSelect: false
                    },
                    {
                        market: 'bond',
                        weather: 'neutral',
                        performance_month_3 : '-91.75',
                        performance_month_6 : '-17',
                        performance_month_12 : '89.2',
                        title: '全球高收益債',
                        line_graph: 'line_graph.png',
                        fund_length: '53',
                        market_report :'https://google.com',
                        ajax_url: '',
                        isSelect: false
                    },
                    {
                        market: 'industry',
                        weather: 'pessimistic',
                        performance_month_3 : '-19.1',
                        performance_month_6 : '-30.2',
                        performance_month_12 : '8',
                        title: '人民幣債',
                        line_graph: 'line_graph.png',
                        fund_length: '53',
                        market_report :'https://google.com',
                        ajax_url: '',
                        isSelect: false
                    },
                    {
                        market: 'bond',
                        weather: 'neutral',
                        performance_month_3 : '-91.75',
                        performance_month_6 : '17',
                        performance_month_12 : '-89.2',
                        title: '全球高收益債',
                        line_graph: 'line_graph.png',
                        fund_length: '53',
                        market_report :'https://google.com',
                        ajax_url: '',
                        isSelect: false
                    },
                    {
                        market: 'industry',
                        weather: 'neutral',
                        performance_month_3 : '23',
                        performance_month_6 : '-54.96',
                        performance_month_12 : '-74.2',
                        title: '美國投資級債',
                        line_graph: 'line_graph.png',
                        fund_length: '53',
                        market_report :'https://google.com',
                        ajax_url: '',
                        isSelect: false
                    },
                    {
                        market: 'mature',
                        weather: 'optimism',
                        performance_month_3 : '23.1',
                        performance_month_6 : '-51.3',
                        performance_month_12 : '-57',
                        title: '歐洲投資級債',
                        line_graph: 'line_graph.png',
                        fund_length: '53',
                        market_report :'https://google.com',
                        ajax_url: '',
                        isSelect: false
                    },
                    {
                        market: 'bond',
                        weather: 'neutral',
                        performance_month_3 : '-91.75',
                        performance_month_6 : '17',
                        performance_month_12 : '-89.2',
                        title: '全球高收益債',
                        line_graph: 'line_graph.png',
                        fund_length: '53',
                        market_report :'https://google.com',
                        ajax_url: '',
                        isSelect: false
                    },
                    {
                        market: 'industry',
                        weather: 'pessimistic',
                        performance_month_3 : '-19.1',
                        performance_month_6 : '-30.2',
                        performance_month_12 : '8',
                        title: '人民幣債',
                        line_graph: 'line_graph.png',
                        fund_length: '53',
                        market_report :'https://google.com',
                        ajax_url: '',
                        isSelect: false
                    },
                    {
                        market: 'bond',
                        weather: 'neutral',
                        performance_month_3 : '-91.75',
                        performance_month_6 : '-17',
                        performance_month_12 : '89.2',
                        title: '全球高收益債',
                        line_graph: 'line_graph.png',
                        fund_length: '53',
                        market_report :'https://google.com',
                        ajax_url: '',
                        isSelect: false
                    },
                    {
                        market: 'industry',
                        weather: 'neutral',
                        performance_month_3 : '23',
                        performance_month_6 : '-54.96',
                        performance_month_12 : '-74.2',
                        title: '美國投資級債',
                        line_graph: 'line_graph.png',
                        fund_length: '53',
                        market_report :'https://google.com',
                        ajax_url: '',
                        isSelect: false
                    },
                    {
                        market: 'mature',
                        weather: 'optimism',
                        performance_month_3 : '-23.1',
                        performance_month_6 : '-51.3',
                        performance_month_12 : '57',
                        title: '歐洲投資級債',
                        line_graph: 'line_graph.png',
                        fund_length: '53',
                        market_report :'https://google.com',
                        ajax_url: '',
                        isSelect: false
                    },
                    {
                        market: 'bond',
                        weather: 'neutral',
                        performance_month_3 : '-91.75',
                        performance_month_6 : '17',
                        performance_month_12 : '-89.2',
                        title: '全球高收益債',
                        line_graph: 'line_graph.png',
                        fund_length: '53',
                        market_report :'https://google.com',
                        ajax_url: '',
                        isSelect: false
                    },
                    {
                        market: 'industry',
                        weather: 'pessimistic',
                        performance_month_3 : '-19.1',
                        performance_month_6 : '-30.2',
                        performance_month_12 : '8',
                        title: '人民幣債',
                        line_graph: 'line_graph.png',
                        fund_length: '53',
                        market_report :'https://google.com',
                        ajax_url: '',
                        isSelect: false
                    },
                    {
                        market: 'bond',
                        weather: 'neutral',
                        performance_month_3: '-12',
                        performance_month_6: '51',
                        performance_month_12: '-39.2',
                        title: '新興投資級債',
                        line_graph: 'line_graph.png',
                        fund_length: '53',
                        market_report :'https://google.com',
                        ajax_url: '',
                        isSelect: false
                    },
                    {
                        market: 'mature',
                        weather: 'optimism',
                        performance_month_3: '-58.2',
                        performance_month_6: '92.2',
                        performance_month_12: '-41.5',
                        title: '美國高收益債',
                        line_graph: 'line_graph.png',
                        fund_length: '53',
                        market_report :'https://google.com',
                        ajax_url: '',
                        isSelect: false
                    },
                    {
                        market: 'rising',
                        weather: 'neutral',
                        performance_month_3 : '12',
                        performance_month_6 : '-86',
                        performance_month_12 : '-53',
                        title: '歐洲高收益債',
                        line_graph: 'line_graph.png',
                        fund_length: '53',
                        market_report :'https://google.com',
                        ajax_url: '',
                        isSelect: false
                    },
                    {
                        market: 'industry',
                        weather: 'neutral',
                        performance_month_3 : '23',
                        performance_month_6 : '-54.96',
                        performance_month_12 : '-74.2',
                        title: '美國投資級債',
                        line_graph: 'line_graph.png',
                        fund_length: '53',
                        market_report :'https://google.com',
                        ajax_url: '',
                        isSelect: false
                    },
                    {
                        market: 'mature',
                        weather: 'optimism',
                        performance_month_3 : '-23.1',
                        performance_month_6 : '-51.3',
                        performance_month_12 : '57',
                        title: '歐洲投資級債',
                        line_graph: 'line_graph.png',
                        fund_length: '53',
                        market_report :'https://google.com',
                        ajax_url: '',
                        isSelect: false
                    },
                    {
                        market: 'industry',
                        weather: 'neutral',
                        performance_month_3 : '-23',
                        performance_month_6 : '-54.96',
                        performance_month_12 : '74.2',
                        title: '美國投資級債',
                        line_graph: 'line_graph.png',
                        fund_length: '53',
                        market_report :'https://google.com',
                        ajax_url: '',
                        isSelect: false
                    },
                    {
                        market: 'mature',
                        weather: 'optimism',
                        performance_month_3 : '-23.1',
                        performance_month_6 : '-51.3',
                        performance_month_12 : '-57',
                        title: '歐洲投資級債',
                        line_graph: 'line_graph.png',
                        fund_length: '53',
                        market_report :'https://google.com',
                        ajax_url: '',
                        isSelect: false
                    },
                    {
                        market: 'industry',
                        weather: 'neutral',
                        performance_month_3 : '23',
                        performance_month_6 : '54.96',
                        performance_month_12 : '74.2',
                        title: '美國投資級債',
                        line_graph: 'line_graph.png',
                        fund_length: '53',
                        market_report :'https://google.com',
                        ajax_url: '',
                        isSelect: false
                    },
                    {
                        market: 'mature',
                        weather: 'optimism',
                        performance_month_3 : '23.1',
                        performance_month_6 : '51.3',
                        performance_month_12 : '57',
                        title: '歐洲投資級債',
                        line_graph: 'line_graph.png',
                        fund_length: '53',
                        market_report :'https://google.com',
                        ajax_url: '',
                        isSelect: false
                    },
                    {
                        market: 'mature',
                        weather: 'optimism',
                        performance_month_3 : '-92.2',
                        performance_month_6 : '58.1',
                        performance_month_12 : '-41.2',
                        title: '美國高收益債',
                        line_graph: 'line_graph.png',
                        fund_length: '53',
                        market_report :'https://google.com',
                        ajax_url: '',
                        isSelect: false
                    },
                    {
                        market: 'rising',
                        weather: 'neutral',
                        performance_month_3 : '-12',
                        performance_month_6 : '-86',
                        performance_month_12 : '53',
                        title: '歐洲高收益債',
                        line_graph: 'line_graph.png',
                        fund_length: '53',
                        market_report :'https://google.com',
                        ajax_url: '',
                        isSelect: false
                    },
                    {
                        market: 'industry',
                        weather: 'neutral',
                        performance_month_3 : '-23',
                        performance_month_6 : '54.96',
                        performance_month_12 : '74.2',
                        title: '美國投資級債',
                        line_graph: 'line_graph.png',
                        fund_length: '53',
                        market_report :'https://google.com',
                        ajax_url: '',
                        isSelect: false
                    },
                    {
                        market: 'mature',
                        weather: 'optimism',
                        performance_month_3 : '23.1',
                        performance_month_6 : '51.3',
                        performance_month_12 : '57',
                        title: '歐洲投資級債',
                        line_graph: 'line_graph.png',
                        fund_length: '53',
                        market_report :'https://google.com',
                        ajax_url: '',
                        isSelect: false
                    },
                    {
                        market: 'mature',
                        weather: 'optimism',
                        performance_month_3 : '-92.2',
                        performance_month_6 : '-58.1',
                        performance_month_12 : '-41.2',
                        title: '美國高收益債',
                        line_graph: 'line_graph.png',
                        fund_length: '53',
                        market_report :'https://google.com',
                        ajax_url: '',
                        isSelect: false
                    },
                    {
                        market: 'rising',
                        weather: 'neutral',
                        performance_month_3 : '-12',
                        performance_month_6 : '-86',
                        performance_month_12 : '-53',
                        title: '歐洲高收益債',
                        line_graph: 'line_graph.png',
                        fund_length: '53',
                        market_report :'https://google.com',
                        ajax_url: '',
                        isSelect: false
                    },
                    {
                        market: 'industry',
                        weather: 'neutral',
                        performance_month_3 : '-23',
                        performance_month_6 : '-54.96',
                        performance_month_12 : '-74.2',
                        title: '美國投資級債',
                        line_graph: 'line_graph.png',
                        fund_length: '53',
                        market_report :'https://google.com',
                        ajax_url: '',
                        isSelect: false
                    },
                    {
                        market: 'mature',
                        weather: 'optimism',
                        performance_month_3 : '-23.1',
                        performance_month_6 : '-51.3',
                        performance_month_12 : '57',
                        title: '歐洲投資級債',
                        line_graph: 'line_graph.png',
                        fund_length: '53',
                        market_report :'https://google.com',
                        ajax_url: '',
                        isSelect: false
                    },
                    {
                        market: 'bond',
                        weather: 'neutral',
                        performance_month_3 : '-91.75',
                        performance_month_6 : '17',
                        performance_month_12 : '-89.2',
                        title: '全球高收益債',
                        line_graph: 'line_graph.png',
                        fund_length: '53',
                        market_report :'https://google.com',
                        ajax_url: '',
                        isSelect: false
                    },
                    {
                        market: 'industry',
                        weather: 'neutral',
                        performance_month_3 : '23',
                        performance_month_6 : '-54.96',
                        performance_month_12 : '-74.2',
                        title: '美國投資級債',
                        line_graph: 'line_graph.png',
                        fund_length: '53',
                        market_report :'https://google.com',
                        ajax_url: '',
                        isSelect: false
                    },
                    {
                        market: 'mature',
                        weather: 'optimism',
                        performance_month_3 : '-23.1',
                        performance_month_6 : '-51.3',
                        performance_month_12 : '-57',
                        title: '歐洲投資級債',
                        line_graph: 'line_graph.png',
                        fund_length: '53',
                        market_report :'https://google.com',
                        ajax_url: '',
                        isSelect: false
                    },
                    {
                        market: 'bond',
                        weather: 'neutral',
                        performance_month_3 : '-91.75',
                        performance_month_6 : '-17',
                        performance_month_12 : '-89.2',
                        title: '全球高收益債',
                        line_graph: 'line_graph.png',
                        fund_length: '53',
                        market_report :'https://google.com',
                        ajax_url: '',
                        isSelect: false
                    },
                    {
                        market: 'industry',
                        weather: 'pessimistic',
                        performance_month_3 : '19.1',
                        performance_month_6 : '30.2',
                        performance_month_12 : '-8',
                        title: '人民幣債',
                        line_graph: 'line_graph.png',
                        fund_length: '53',
                        market_report :'https://google.com',
                        ajax_url: '',
                        isSelect: false
                    },
                    {
                        market: 'bond',
                        weather: 'neutral',
                        performance_month_3 : '-91.75',
                        performance_month_6 : '17',
                        performance_month_12 : '-89.2',
                        title: '全球高收益債',
                        line_graph: 'line_graph.png',
                        fund_length: '53',
                        market_report :'https://google.com',
                        ajax_url: '',
                        isSelect: false
                    },
                    {
                        market: 'industry',
                        weather: 'neutral',
                        performance_month_3 : '-23',
                        performance_month_6 : '54.96',
                        performance_month_12 : '-74.2',
                        title: '美國投資級債',
                        line_graph: 'line_graph.png',
                        fund_length: '53',
                        market_report :'https://google.com',
                        ajax_url: '',
                        isSelect: false
                    },
                    {
                        market: 'mature',
                        weather: 'optimism',
                        performance_month_3 : '-23.1',
                        performance_month_6 : '-51.3',
                        performance_month_12 : '57',
                        title: '歐洲投資級債',
                        line_graph: 'line_graph.png',
                        fund_length: '53',
                        market_report :'https://google.com',
                        ajax_url: '',
                        isSelect: false
                    },
                    {
                        market: 'bond',
                        weather: 'neutral',
                        performance_month_3 : '-91.75',
                        performance_month_6 : '-17',
                        performance_month_12 : '89.2',
                        title: '全球高收益債',
                        line_graph: 'line_graph.png',
                        fund_length: '53',
                        market_report :'https://google.com',
                        ajax_url: '',
                        isSelect: false
                    },
                    {
                        market: 'industry',
                        weather: 'pessimistic',
                        performance_month_3 : '-19.1',
                        performance_month_6 : '-30.2',
                        performance_month_12 : '8',
                        title: '人民幣債',
                        line_graph: 'line_graph.png',
                        fund_length: '53',
                        market_report :'https://google.com',
                        ajax_url: '',
                        isSelect: false
                    },
                    {
                        market: 'bond',
                        weather: 'neutral',
                        performance_month_3 : '-91.75',
                        performance_month_6 : '-17',
                        performance_month_12 : '89.2',
                        title: '全球高收益債',
                        line_graph: 'line_graph.png',
                        fund_length: '53',
                        market_report :'https://google.com',
                        ajax_url: '',
                        isSelect: false
                    },
                    {
                        market: 'industry',
                        weather: 'neutral',
                        performance_month_3 : '-23',
                        performance_month_6 : '-54.96',
                        performance_month_12 : '74.2',
                        title: '美國投資級債',
                        line_graph: 'line_graph.png',
                        fund_length: '53',
                        market_report :'https://google.com',
                        ajax_url: '',
                        isSelect: false
                    },
                    {
                        market: 'mature',
                        weather: 'optimism',
                        performance_month_3 : '-23.1',
                        performance_month_6 : '51.3',
                        performance_month_12 : '-57',
                        title: '歐洲投資級債',
                        line_graph: 'line_graph.png',
                        fund_length: '53',
                        market_report :'https://google.com',
                        ajax_url: '',
                        isSelect: false
                    },
                    {
                        market: 'bond',
                        weather: 'neutral',
                        performance_month_3 : '-91.75',
                        performance_month_6 : '17',
                        performance_month_12 : '-89.2',
                        title: '全球高收益債',
                        line_graph: 'line_graph.png',
                        fund_length: '53',
                        market_report :'https://google.com',
                        ajax_url: '',
                        isSelect: false
                    },
                    {
                        market: 'industry',
                        weather: 'pessimistic',
                        performance_month_3 : '-19.1',
                        performance_month_6 : '-30.2',
                        performance_month_12 : '-8',
                        title: '人民幣債',
                        line_graph: 'line_graph.png',
                        fund_length: '53',
                        market_report :'https://google.com',
                        ajax_url: '',
                        isSelect: false
                    }
                ],
                showTargets: []
            },
            selectResult: {
                name: '',
                length: 0
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
                    this.reloadTarget();
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
                    this.reloadTarget();
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
                    this.reloadTarget();
                },
            // slideshow
                reloadTarget: function(){
                    // filter
                        let showTargets_filterMarket = [];
                        let market_length = this.filter_market.length;
                        let market = [];
                        for(let i = 0; i < market_length; i++){
                            if (this.filter_market[i].isNow == true) {
                                let selectMarket_length = this.filter_market[i].market.length;
                                for(let n = 0; n < selectMarket_length; n++){
                                    market.push(this.filter_market[i].market[n]);
                                }
                            }
                        }
                        let targets_length = this.slideshow.targets.length;
                        for(let i = 0; i < targets_length; i++){
                            for(let m = 0; m < market.length; m++){
                                if (this.slideshow.targets[i].market.indexOf(market[m]) >= 0) {
                                    showTargets_filterMarket.push(this.slideshow.targets[i]);
                                }
                            }
                        }
                        let target_filterWeather = [];
                        let weather_length = this.filter_weather.length;
                        let weather = [];
                        for(let i = 0; i < weather_length; i++){
                            if (this.filter_weather[i].isNow == true) {
                                let selectweather_length = this.filter_weather[i].weather.length;
                                for(let n = 0; n < selectweather_length; n++){
                                    weather.push(this.filter_weather[i].weather[n]);
                                }
                            }
                        }
                        let targets_filterMarket_length = showTargets_filterMarket.length;
                        for(let i = 0; i < targets_filterMarket_length; i++){
                            for(let m = 0; m < weather.length; m++){
                                if (showTargets_filterMarket[i].weather.indexOf(weather[m]) >= 0) {
                                    target_filterWeather.push(showTargets_filterMarket[i]);
                                }
                            }
                        }
                    // sort
                        let sort_list = this.sort.list;
                        let sort_length = sort_list.length;
                        let sort_month;
                        for(let i = 0; i < sort_length; i++){
                            if (sort_list[i].isNow == true) {
                                sort_month = sort_list[i].sort_month;
                            }
                        }
                        target_filterWeather.sort(function(a, b){
                            return b[sort_month] - a[sort_month];
                        });
                        let target_filterWeather_length = target_filterWeather.length;
                        this.slideshow.showTargets = [];
                        for(let item of target_filterWeather){
                            item.performance = item[sort_month];
                            this.slideshow.showTargets.push(item);
                        }
                        
                },
                selectTarget: function(index){
                    let targets = this.slideshow.targets;
                    let targets_length = targets.length;
                    for(let i = 0; i < targets_length; i++){
                        targets[i].isSelect = false;
                    }
                    targets[index].isSelect = true;
                    this.selectResult.name = targets[index].title;
                    this.selectResult.length = targets[index].fund_length;
                }
        },
        created: function(){
            this.reloadTarget();
            this.selectResult.name = this.slideshow.targets[0].title;
            this.selectResult.length = this.slideshow.targets[0].fund_length;
        },
        computed: {
            aa: function(){
                // return item.performance;
            }
        }
    });
}());