import { Plane, ShoppingBag, Camera, Utensils, Hotel, MapPin, Coffee, Star, Palmtree, Info, Train, User } from 'lucide-react';

export const itineraryData = [
    {
        day: 1,
        date: '7/13 (週一)',
        title: '奢華鐵塔與精品首戰',
        summary: '入住虎之門艾迪遜，開啟東京的奢華序幕。',
        activities: [
            {
                time: '13:25',
                title: '抵達羽田機場',
                desc: '搭乘 JL508 抵達。',
                icon: Plane,
                type: 'transit'
            },
            {
                time: '15:00',
                title: '東京虎之門艾迪遜 Check-in',
                desc: '開箱奢華大廳，感受隈研吾設計的木質綠意空間。',
                icon: Hotel,
                type: 'stay',
                camera: {
                    mode: 'C1 (Airy)',
                    desc: '大廳綠意',
                    settings: 'EV +1.3, DR400 (強光下背景不爆掉)'
                }
            },
            {
                time: '16:30',
                title: '日本橋高島屋 S.C.',
                desc: 'Goyard 補貨任務（目標完成最重要的清單）。',
                icon: ShoppingBag,
                type: 'shopping'
            },
            {
                time: '19:00',
                title: '銀座晚餐',
                desc: '燒肉或壽司，享受東京的第一頓大餐。',
                icon: Utensils,
                type: 'dining'
            },
            {
                time: '21:00',
                title: 'HARBS 有樂町店',
                desc: '外帶蛋糕回飯店享用。',
                icon: Coffee,
                type: 'dining',
                camera: {
                    mode: 'C4 (Cafe)',
                    desc: '鮮奶油層次',
                    settings: '柔和模擬, 近距離對焦'
                }
            },
            {
                time: '22:00',
                title: '房內夜景攝影',
                desc: '關掉室內燈，拍攝窗外橘色的東京鐵塔夜景。',
                icon: Camera,
                type: 'activity',
                highlight: true,
                camera: {
                    mode: 'C2 (Teal)',
                    desc: '東京鐵塔夜景',
                    settings: 'WB 4500K (強化的冷調氛圍)'
                }
            }
        ],
        notes: []
    },
    {
        day: 2,
        date: '7/14 (週二)',
        title: '原宿潮流與潮流之巔',
        summary: '感受原宿的年輕活力與澀谷的現代風貌。',
        activities: [
            {
                time: '09:30',
                title: '移防至銀座飯店',
                desc: '先將行李寄存於接下來兩晚的住宿點。',
                icon: Hotel,
                type: 'transit'
            },
            {
                time: '11:00',
                title: '原宿 HUMAN MADE 旗艦店',
                desc: '掃貨爸爸與女兒的潮流服飾。',
                icon: ShoppingBag,
                type: 'shopping'
            },
            {
                time: '13:00',
                title: '哈拉卡多 (Harakado) 頂樓',
                desc: '拍攝對面東急廣場的複雜反射線條。',
                icon: Camera,
                type: 'activity',
                camera: {
                    mode: 'C3 (Street)',
                    desc: '潮流建築對比',
                    settings: '經典正片 + 強顆粒感'
                }
            },
            {
                time: '15:30',
                title: '澀谷宮下公園 (Miyashita Park)',
                desc: '讓女兒在草地奔跑，看電車經過。',
                icon: Palmtree,
                type: 'activity',
                camera: {
                    mode: 'C1 (Airy)',
                    desc: '夕陽下清透膚色',
                    settings: 'EV +1.0, 柔和光影'
                }
            },
            {
                time: '17:00',
                title: 'HARBS 澀谷店',
                desc: '在 Scramble Square 享受高樓午茶。',
                icon: Coffee,
                type: 'dining'
            }
        ],
        notes: []
    },
    {
        day: 3,
        date: '7/15 (週三)',
        title: '豐洲 KidZania 英語任務日',
        summary: '全天專屬於孩子的職業體驗，傍晚享受海濱夕陽。',
        activities: [
            {
                time: '08:30',
                title: 'KidZania Tokyo',
                desc: '位於豐洲 LaLaport 內。',
                icon: MapPin,
                type: 'transit'
            },
            {
                time: '09:00',
                title: 'English Wednesday 職業體驗',
                desc: '女兒體驗各種職業，爸爸全程紀錄。',
                icon: Star,
                type: 'activity',
                highlight: true,
                camera: {
                    mode: 'C1 (Airy)',
                    desc: '室內人像',
                    settings: '確保膚色白皙不發黃'
                }
            },
            {
                time: '16:00',
                title: 'LaLaport 購物',
                desc: '逛阿卡將或玩具反斗城。',
                icon: ShoppingBag,
                type: 'shopping'
            },
            {
                time: '18:00',
                title: '豐洲公園海濱',
                desc: '拍彩虹大橋與台場夕陽。',
                icon: Camera,
                type: 'activity',
                camera: {
                    mode: 'C2 (Teal)',
                    desc: '海濱落日',
                    settings: 'WB 4500K, 藍橘調'
                }
            },
            {
                time: '20:00',
                title: 'HARBS 銀座三越店',
                desc: '回飯店前最後補給。',
                icon: Coffee,
                type: 'dining'
            }
        ],
        notes: []
    },
    {
        day: 4,
        date: '7/16 (週四)',
        title: '晨光咖啡與移防上野',
        summary: '從中目黑的咖啡香氣到上野的傳統風情。',
        activities: [
            {
                time: '07:00',
                title: '星巴克臻選® 東京烘焙工坊',
                desc: '中目黑。避開人潮，拍攝巨型銅桶與咖啡細節。',
                icon: Coffee,
                type: 'dining',
                camera: {
                    mode: 'C4 (Cafe)',
                    desc: '咖啡拉花與烘豆',
                    settings: '近距離對焦, 柔和模擬'
                }
            },
            {
                time: '10:00',
                title: '芝公園 + 增上寺',
                desc: '拍攝傳統寺廟與東京鐵塔的經典合影。',
                icon: MapPin,
                type: 'activity',
                camera: {
                    mode: 'C1 (Airy)',
                    desc: '藍天下的紅鐵塔',
                    settings: 'EV +1.3, DR400'
                }
            },
            {
                time: '12:00',
                title: '麻布台之丘 Balcony by 6th',
                desc: '享用著名的鬆餅午餐。',
                icon: Utensils,
                type: 'dining',
                highlight: true
            },
            {
                time: '15:00',
                title: '入住上野飯店',
                desc: '立即啟動洗衣模式，處理累積的髒衣。',
                icon: Hotel,
                type: 'stay'
            },
            {
                time: '19:00',
                title: '上野晚餐',
                desc: '炸豬排或在地拉麵。',
                icon: Utensils,
                type: 'dining'
            }
        ],
        notes: []
    },
    {
        day: 5,
        date: '7/17 (週五)',
        title: '晨間熱血與上野完美收尾',
        summary: '皇居晨跑的熱血與上野燒肉的完美句點。',
        activities: [
            {
                time: '07:00',
                title: '皇居熱血跑 (5km)',
                desc: '06:30 從上野出發至日比谷。跑者基地：Raffine Running Style Neo。07:15 起跑，08:00 完跑，08:30 洗澡完畢。',
                icon: User,
                type: 'activity',
                highlight: true,
                camera: {
                    mode: 'C3 (Street)',
                    desc: '皇居晨光與高樓',
                    settings: '經典正片 + 強顆粒感'
                }
            },
            {
                time: '09:30',
                title: '上野動物園任務',
                desc: '在飯店與家人會合。趁早進場看熊貓與北極熊，避開中午後的人潮。',
                icon: Palmtree,
                type: 'activity',
                camera: {
                    mode: 'C1 (Airy)',
                    desc: '女兒驚喜眼神',
                    settings: '快速快門, 連拍'
                }
            },
            {
                time: '13:00',
                title: '阿美橫丁大採買',
                desc: '逛藥妝、伴手禮，在充滿生活感的街頭拍照。',
                icon: ShoppingBag,
                type: 'shopping'
            },
            {
                time: '16:00',
                title: '慶功宴：燒肉 房家 (Bouya)',
                desc: '上野六丁目店。主打一頭牛採購的頂級和牛，肉質極佳。16:00 是避開人潮的黃金時段。',
                icon: Utensils,
                type: 'dining',
                highlight: true,
                camera: {
                    mode: 'C4 (Cafe)',
                    desc: 'A5 和牛油花特寫',
                    settings: '近距離對焦, 柔和模擬'
                }
            },
            {
                time: '19:00',
                title: 'HARBS 上野松坂屋店',
                desc: '買最後一晚的慶祝蛋糕回飯店享用。',
                icon: Coffee,
                type: 'dining'
            }
        ],
        notes: []
    },
    {
        day: 6,
        date: '7/18 (週六)',
        title: '上野悠閒散步 ➜ 帶著大片返台',
        summary: '完美的收尾，帶著滿滿的回憶與戰利品回家。',
        activities: [
            {
                time: '09:00',
                title: '上野公園散步',
                desc: '看最後一場街頭藝人表演，拍下全家福。',
                icon: Palmtree,
                type: 'activity',
                camera: {
                    mode: 'C1 (Airy)',
                    desc: '圓滿合照',
                    settings: 'EV +1.0'
                }
            },
            {
                time: '11:00',
                title: '二木的菓子',
                desc: '把最後的零食箱塞滿。',
                icon: ShoppingBag,
                type: 'shopping'
            },
            {
                time: '12:30',
                title: 'Skyliner 直達成田',
                desc: '前往成田機場。',
                icon: Train,
                type: 'transit'
            },
            {
                time: '15:40',
                title: '搭機 JX803',
                desc: '返回台北。',
                icon: Plane,
                type: 'transit'
            }
        ],
        notes: []
    }
];
