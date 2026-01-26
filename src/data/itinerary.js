import { Plane, ShoppingBag, Camera, Utensils, Hotel, MapPin, Coffee, Star, Palmtree, Info } from 'lucide-react';

export const itineraryData = [
    {
        day: 1,
        date: '7/13 (週一)',
        title: '銀座設計感與精品購物',
        summary: '以銀座的高級購物與頂級和牛開啟這趟旅程。',
        activities: [
            {
                time: '13:25',
                title: '抵達羽田機場',
                desc: '搭乘 JL508 抵達。歡迎來到東京！',
                icon: Plane,
                type: 'transit'
            },
            {
                time: '15:00',
                title: '入住：MUJI HOTEL GINZA',
                desc: '位於銀座核心，享受極簡奢華。',
                icon: Hotel,
                type: 'stay'
            },
            {
                time: '午餐',
                title: '銀座 篝 (Ginza Kagari)',
                desc: '著名的松露雞白湯拉麵。如果到銀座已過尖峰時間，排隊會快很多，濃郁的雞湯小孩接受度也很高。',
                icon: Utensils,
                type: 'dining'
            },
            {
                time: '16:00',
                title: '日本橋高島屋',
                desc: 'Goyard 購物行程。簡單看包，買完即回，輕鬆愜意。',
                icon: ShoppingBag,
                type: 'shopping'
            },
            {
                time: '19:00',
                title: '銀座和牛燒肉',
                desc: '必吃！頂級和牛專門店，慶祝旅程的開始。建議提早 1-2 個月網路預約。',
                icon: Utensils,
                type: 'dining',
                highlight: true
            }
        ],
        notes: [
            {
                icon: Info,
                text: 'HARBS 備案：日本橋三越店 或 銀座 Lumine 店'
            }
        ]
    },
    {
        day: 2,
        date: '7/14 (週二)',
        title: '潮流指標與原宿綠地',
        summary: '感受澀谷的潮流脈動與清爽的柚子香氣。',
        activities: [
            {
                time: '上午',
                title: '移動至澀谷飯店',
                desc: '建議利用黑貓寄送行李，空手出發最輕鬆。',
                icon: Hotel,
                type: 'transit'
            },
            {
                time: '11:00',
                title: '原宿 HUMAN MADE',
                desc: '全球旗艦店朝聖。逛街、拍照、感受潮流。',
                icon: ShoppingBag,
                type: 'shopping'
            },
            {
                time: '11:30',
                title: '哈拉卡多 (Harakado) 露台',
                desc: '拍攝原宿街景的絕佳地點。',
                icon: Camera,
                type: 'activity'
            },
            {
                time: '午餐',
                title: 'AFURI (阿夫利) 原宿店',
                desc: '招牌柚子鹽拉麵。建議 11:30 前抵達。若人太多，可改去 AFURI 澀谷店。',
                icon: Utensils,
                type: 'dining'
            },
            {
                time: '傍晚',
                title: '宮下公園 (Miyashita Park)',
                desc: '頂樓放電，享受午後時光。',
                icon: Palmtree,
                type: 'activity'
            }
        ],
        notes: [
            {
                icon: Info,
                text: '帶小孩在東京吃中飯，建議 11:30 之前進店，或 13:30 之後進店，可以省去很多排隊時間'
            },
            {
                icon: Info,
                text: 'HARBS 備案：澀谷 Hikarie 店 (4F) — 空間較寬敞，適合推車'
            }
        ]
    },
    {
        day: 3,
        date: '7/15 (週三)',
        title: '孩子夢想：KidZania 英語日',
        summary: '全天專屬於孩子的職業體驗日。',
        activities: [
            {
                time: '全天',
                title: 'KidZania Tokyo (豐洲)',
                desc: 'English Wednesday！讓 4 歲女兒在英語環境下體驗各種職業。',
                icon: Star,
                type: 'activity',
                highlight: true
            },
            {
                time: '午餐',
                title: 'KidZania 館內餐飲',
                desc: '孩子在體驗職業時（如披薩店、漢堡店）會製作食物，這通常是他們最棒的午餐。大人可以利用家長休息區或館內餐飲。',
                icon: Utensils,
                type: 'dining'
            },
            {
                time: '下午',
                title: '豐洲千客萬來',
                desc: '泡免費景觀足湯，舒緩腿部。',
                icon: Palmtree,
                type: 'activity'
            }
        ],
        notes: [
            {
                icon: Info,
                text: 'HARBS 備案：傍晚回澀谷後，到澀谷 Scramble Square 店 外帶回飯店'
            }
        ]
    },
    {
        day: 4,
        date: '7/16 (週四)',
        title: '晨光咖啡與數位藝術',
        summary: '中目黑的咖啡香氣與麻布台的藝術體驗。',
        activities: [
            {
                time: '07:00',
                title: '星巴克臻選® 東京烘焙工坊',
                desc: '位於中目黑。拍攝巨型金屬烘豆機，享受 Princi 現烤麵包。',
                icon: Coffee,
                type: 'dining'
            },
            {
                time: '上午',
                title: '麻布台之丘 (Azabudai Hills)',
                desc: 'teamLab Borderless 數位藝術體驗（預約制）。',
                icon: MapPin,
                type: 'activity',
                highlight: true
            },
            {
                time: '午餐',
                title: 'Balcony by 6th (麻布台之丘)',
                desc: '從有樂町搬來的名店，有最著名的蓬鬆鬆餅與起司蛋糕，環境非常有質感，適合拍照。建議提早 1-2 個月網路預約。',
                icon: Utensils,
                type: 'dining',
                highlight: true
            },
            {
                time: '傍晚',
                title: '入住：上野公寓飯店',
                desc: '指定洗脫烘房型，開啟洗衣模式。',
                icon: Hotel,
                type: 'stay'
            },
            {
                time: '晚上',
                title: '淺草觀音寺夜拍',
                desc: '雷門大紅燈籠夜間攝影。',
                icon: Camera,
                type: 'activity'
            }
        ],
        notes: [
            {
                icon: Info,
                text: 'HARBS 備案：丸之內店（從麻布台往上野途中可順路買）'
            }
        ]
    },
    {
        day: 5,
        date: '7/17 (週五)',
        title: '動物園與最後大採買',
        summary: '親近動物的歡樂時光與阿美橫丁的滿載而歸。',
        activities: [
            {
                time: '上午',
                title: '上野動物園',
                desc: '看熊貓與北極熊，4 歲孩子的最愛！',
                icon: Palmtree,
                type: 'activity'
            },
            {
                time: '午餐',
                title: '井泉 本店 (Isen)',
                desc: '離上野公園不遠，是著名的老牌炸豬排店，發明了「炸豬排三明治」。肉質極軟，4 歲小孩也能輕鬆入口。',
                icon: Utensils,
                type: 'dining'
            },
            {
                time: '下午',
                title: '阿美橫丁',
                desc: '藥妝、伴手禮補貨。',
                icon: ShoppingBag,
                type: 'shopping'
            }
        ],
        notes: [
            {
                icon: Info,
                text: 'HARBS 備案：上野松坂屋店 (2F) — 離飯店最近'
            },
            {
                icon: Info,
                text: '如果當天小孩太累，HARBS 的蛋糕外帶回飯店吃，品質一樣很棒，還能配飯店的茶或咖啡！'
            }
        ]
    },
    {
        day: 6,
        date: '7/18 (週六)',
        title: '公園悠閒漫步 ➜ 台北',
        summary: '把握最後的東京早晨，帶著滿滿回憶返家。',
        activities: [
            {
                time: '上午',
                title: '上野恩賜公園散步',
                desc: '享受最後的東京時光。',
                icon: Coffee,
                type: 'activity'
            },
            {
                time: '午餐',
                title: '上野 藪蕎麥 (Ueno Yabusoba)',
                desc: '百年蕎麥麵老店，環境充滿傳統日式風味。或是去京成上野站附近的三浦三崎港迴轉壽司，快又好吃。',
                icon: Utensils,
                type: 'dining'
            },
            {
                time: '12:30',
                title: 'Skyliner 直達成田',
                desc: '搭乘舒適快車前往機場。',
                icon: Plane,
                type: 'transit'
            },
            {
                time: '15:40',
                title: '搭機：JX803',
                desc: '帶著戰利品與美好照片，出發回台北。',
                icon: Plane,
                type: 'transit'
            }
        ]
    }
];
