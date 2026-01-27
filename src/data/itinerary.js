import { Plane, ShoppingBag, Camera, Utensils, Hotel, MapPin, Coffee, Star, Palmtree, Info, Train, User } from 'lucide-react';

export const itineraryData = [
    {
        day: 1,
        date: '7/13 (週一)',
        title: '奢華開場：虎之門鐵塔之夜',
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
                title: '虎之門艾迪遜 Check-in',
                desc: '開箱奢華大廳。',
                icon: Hotel,
                type: 'stay',
                camera: {
                    mode: 'C1 (Airy Blue)',
                    desc: '大廳綠植空間',
                    settings: 'EV +1.3, DR400'
                }
            },
            {
                time: '16:30',
                title: '日本橋高島屋 S.C.',
                desc: 'Goyard 補貨任務。',
                icon: ShoppingBag,
                type: 'shopping'
            },
            {
                time: '19:00',
                title: '銀座晚餐',
                desc: '燒肉或壽司。',
                icon: Utensils,
                type: 'dining'
            },
            {
                time: '21:00',
                title: 'HARBS 有樂町 Lumine 店',
                desc: '離日本橋與銀座晚餐地點最近，外帶回飯店享用。',
                icon: Coffee,
                type: 'dining',
                camera: {
                    mode: 'C4 (Cafe/Food)',
                    desc: '蛋糕鮮奶油層次',
                    settings: '縮小對焦框, 對焦草莓邊緣'
                }
            },
            {
                time: '22:00',
                title: '房內夜景攝影',
                desc: '關掉室內燈，對著窗外橘色鐵塔拍大片。',
                icon: Camera,
                type: 'activity',
                highlight: true,
                camera: {
                    mode: 'C2 (Teal & Orange)',
                    desc: '窗外橘色鐵塔',
                    settings: 'WB 4500K, 冷調氛圍'
                }
            }
        ],
        notes: []
    },
    {
        day: 2,
        date: '7/14 (週二)',
        title: '潮流指標：原宿 ➜ 澀谷',
        summary: '感受原宿的年輕活力與澀谷的現代風貌。',
        activities: [
            {
                time: '09:30',
                title: '移防至銀座飯店',
                desc: '行李寄存。',
                icon: Hotel,
                type: 'transit'
            },
            {
                time: '11:00',
                title: '原宿 HUMAN MADE 旗艦店',
                desc: '潮流父女裝掃貨。',
                icon: ShoppingBag,
                type: 'shopping'
            },
            {
                time: '13:00',
                title: '哈拉卡多 (Harakado) 頂樓',
                desc: '俯拍原宿街景。',
                icon: Camera,
                type: 'activity',
                camera: {
                    mode: 'C3 (Street Hype)',
                    desc: '潮流建築與招牌',
                    settings: '經典正片 + 強顆粒感'
                }
            },
            {
                time: '15:30',
                title: '澀谷宮下公園 (Miyashita Park)',
                desc: '讓女兒在草地奔跑。',
                icon: Palmtree,
                type: 'activity',
                camera: {
                    mode: 'C1 (Airy Blue)',
                    desc: '夕陽下清透膚色',
                    settings: 'EV +1.0, 柔和光影'
                }
            },
            {
                time: '17:00',
                title: 'HARBS 澀谷 Scramble Square 店 (4F)',
                desc: '就在宮下公園旁的高樓內，環境極佳，適合下午茶。',
                icon: Coffee,
                type: 'dining'
            }
        ],
        notes: []
    },
    {
        day: 3,
        date: '7/15 (週三)',
        title: '核心任務：KidZania 英語日',
        summary: '全天專屬於孩子的職業體驗。',
        activities: [
            {
                time: '09:00',
                title: 'KidZania Tokyo (豐洲)',
                desc: 'Wednesday English Day：全英文職涯體驗。',
                icon: Star,
                type: 'activity',
                highlight: true,
                camera: {
                    mode: 'C1 (Airy Blue)',
                    desc: '室內體驗',
                    settings: '確保室內光源下膚色白皙'
                }
            },
            {
                time: '16:00',
                title: 'LaLaport 購物',
                desc: '逛街、補充物資。',
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
                    mode: 'C2 (Teal & Orange)',
                    desc: '海邊夕陽',
                    settings: '藍橘調夜景'
                }
            },
            {
                time: '20:00',
                title: 'HARBS 銀座三越店 (2F)',
                desc: '從豐洲回銀座飯店必經，方便外帶回房。',
                icon: Coffee,
                type: 'dining'
            }
        ],
        notes: []
    },
    {
        day: 4,
        date: '7/16 (週四)',
        title: '晨光咖啡 ➜ 鐵塔散步 ➜ 移防上野',
        summary: '從中目黑的咖啡香氣到上野的傳統風情。',
        activities: [
            {
                time: '07:00',
                title: '星巴克臻選® 東京烘焙工坊',
                desc: '中目黑。避開人潮，拍攝巨型銅桶。',
                icon: Coffee,
                type: 'dining',
                camera: {
                    mode: 'C4 (Cafe/Food)',
                    desc: '咖啡細節',
                    settings: '近距離對焦, 柔和模擬'
                }
            },
            {
                time: '10:00',
                title: '芝公園 + 增上寺',
                desc: '拍攝傳統寺廟與東京鐵塔同框。',
                icon: MapPin,
                type: 'activity',
                camera: {
                    mode: 'C1 (Airy Blue)',
                    desc: '藍天下的紅鐵塔',
                    settings: 'EV +1.3'
                }
            },
            {
                time: '12:00',
                title: '麻布台之丘 Balcony by 6th',
                desc: '全東京排名前三的巴斯克起司蛋糕 (可取代 HARBS)。',
                icon: Utensils,
                type: 'dining',
                highlight: true
            },
            {
                time: '15:00',
                title: '入住上野飯店',
                desc: '啟動洗衣模式。',
                icon: Hotel,
                type: 'stay'
            }
        ],
        notes: []
    },
    {
        day: 5,
        date: '7/17 (週五)',
        title: '晨間熱血跑 ➜ 上野動物園 ➜ 燒肉慶功',
        summary: '皇居晨跑的熱血與上野燒肉的完美句點。',
        activities: [
            {
                time: '06:40',
                title: '皇居熱血跑 (5km)',
                desc: '06:40 上野出發 ➜ 07:00 Raffine 進場換裝 (日比谷線 A11 出口) ➜ 07:15 起跑 ➜ 08:20 洗澡 ➜ 08:50 退場。',
                icon: User,
                type: 'activity',
                highlight: true,
                camera: {
                    mode: 'C3 (Street Hype)',
                    desc: '清晨的皇居與丸之內大樓',
                    settings: '經典正片'
                }
            },
            {
                time: '09:30',
                title: '上野動物園',
                desc: '在飯店與家人會合。趁早進場看熊貓與北極熊，避開中午後的人潮。',
                icon: Palmtree,
                type: 'activity',
                camera: {
                    mode: 'C1 (Airy Blue)',
                    desc: '女兒驚喜眼神',
                    settings: '快速快門'
                }
            },
            {
                time: '13:00',
                title: '阿美橫丁',
                desc: '藥妝與伴手禮最後採購。',
                icon: ShoppingBag,
                type: 'shopping'
            },
            {
                time: '16:00',
                title: '燒肉 房家 (Bouya) 上野店',
                desc: '慶功宴。主打一頭牛採購的頂級和牛，肉質極佳。16:00 是避開人潮的黃金時段。',
                icon: Utensils,
                type: 'dining',
                highlight: true,
                camera: {
                    mode: 'C4 (Cafe/Food)',
                    desc: '和牛油花',
                    settings: '近距離對焦'
                }
            },
            {
                time: '19:00',
                title: 'HARBS 上野松坂屋店 (2F)',
                desc: '買最後一晚的慶祝蛋糕回飯店享用。',
                icon: Coffee,
                type: 'dining'
            }
        ],
        notes: [
            {
                icon: Info,
                text: '跑者基地：Raffine Running Style Neo (日比谷 MB1F)。費用 ¥900/次。'
            },
            {
                icon: Info,
                text: '建議「手ぶら」(空手) 方案：全套租借 (鞋/服/巾) 約 ¥1,300。不用帶臭衣服逛動物園！'
            }
        ]
    },
    {
        day: 6,
        date: '7/18 (週六)',
        title: '上野散步 ➜ 返台',
        summary: '完美的收尾，帶著滿滿的回憶與戰利品回家。',
        activities: [
            {
                time: '09:00',
                title: '上野公園散步',
                desc: '往二木的菓子移動。',
                icon: Palmtree,
                type: 'activity'
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
