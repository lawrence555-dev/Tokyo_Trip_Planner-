import { Plane, ShoppingBag, Camera, Utensils, Hotel, MapPin, Coffee, Star, Palmtree } from 'lucide-react';

export const itineraryData = [
    {
        day: 1,
        date: '7/13 (週一)',
        title: '抵達、精品購物與和牛盛宴',
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
                time: '16:00',
                title: '日本橋高島屋',
                desc: 'Goyard 購物行程。簡單看包，買完即回，輕鬆愜意。',
                icon: ShoppingBag,
                type: 'shopping'
            },
            {
                time: '19:00',
                title: '銀座和牛燒肉',
                desc: '必吃！頂級和牛專門店，慶祝旅程的開始。',
                icon: Utensils,
                type: 'dining',
                highlight: true
            },
            {
                time: '21:00',
                title: '銀座夜間攝影',
                desc: '捕捉夜晚銀座的霓虹燈光與街道層次。',
                icon: Camera,
                type: 'activity'
            }
        ]
    },
    {
        day: 2,
        date: '7/14 (週二)',
        title: '潮流指標與柚子拉麵',
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
                time: '13:00',
                title: '午餐：AFURI (阿夫利)',
                desc: '招牌柚子鹽拉麵，清爽解膩，大人小孩都愛！',
                icon: Utensils,
                type: 'dining'
            },
            {
                time: '15:00',
                title: '代代木公園 / 表參道',
                desc: '公園放電或表參道街頭街拍，享受午後時光。',
                icon: Palmtree,
                type: 'activity'
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
                time: '晚上',
                title: '豐洲 LaLaport',
                desc: '享用晚餐，漫步於臨海的輕鬆夜晚。',
                icon: Utensils,
                type: 'dining'
            }
        ]
    },
    {
        day: 4,
        date: '7/16 (週四)',
        title: '晨光咖啡與古韻淺草',
        summary: '中目黑的咖啡香氣與淺草的傳統風情。',
        activities: [
            {
                time: '07:00',
                title: '星巴克臻選® 東京烘焙工坊',
                desc: '位於中目黑。拍攝巨型金屬烘豆機，享受 Princi 現烤麵包。',
                icon: Coffee,
                type: 'dining'
            },
            {
                time: '下午',
                title: '入住：上野公寓飯店',
                desc: '指定洗脫烘房型，開啟洗衣模式。',
                icon: Hotel,
                type: 'stay'
            },
            {
                time: '15:00',
                title: '淺草觀音寺',
                desc: '雷門大紅燈籠合影，帶女兒坐人力車穿梭巷弄。',
                icon: MapPin,
                type: 'activity'
            },
            {
                time: '晚上',
                title: '洗衣時光',
                desc: '在飯店內清洗前三天的衣物，輕鬆自在。',
                icon: Star,
                type: 'chore'
            }
        ]
    },
    {
        day: 5,
        date: '7/17 (週五)',
        title: '動物園與最後掃貨',
        summary: '親近動物的歡樂時光與阿美橫丁的滿載而歸。',
        activities: [
            {
                time: '上午',
                title: '上野動物園',
                desc: '4 歲孩子的最愛！看熊貓、象群，悠閒漫步。',
                icon: Palmtree,
                type: 'activity'
            },
            {
                time: '下午',
                title: '阿美橫丁',
                desc: '藥妝、伴手禮、零食一次補齊。',
                icon: ShoppingBag,
                type: 'shopping'
            },
            {
                time: '晚餐',
                title: '上野在地美食',
                desc: '炸豬排或海鮮料理，享受道地美味。',
                icon: Utensils,
                type: 'dining'
            },
            {
                time: '晚上',
                title: '最後洗衣與打包',
                desc: '最後一輪洗脫烘，行李箱裝滿乾淨衣服準備返台。',
                icon: Star,
                type: 'chore'
            }
        ]
    },
    {
        day: 6,
        date: '7/18 (週六)',
        title: '悠閒晨間與星宇回程',
        summary: '把握最後的東京早晨，帶著滿滿回憶返家。',
        activities: [
            {
                time: '上午',
                title: '上野恩賜公園散步',
                desc: '或在京成上野附近享用早餐，享受悠閒。',
                icon: Coffee,
                type: 'activity'
            },
            {
                time: '12:30',
                title: 'Skyliner 直達機場',
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
