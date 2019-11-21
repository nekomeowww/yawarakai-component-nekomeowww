// Dependecies

let Compo = require('../../component')

// Component Method

let config = require('./config.json')

let main = {
    tryMatch: function (ctx, text) {
        let dislikeall = /((?!不)(.*?)(?:讨厌)(((?:Neko)|(?: Neko))|(?:羽毛)|(?:柠檬)))|((.*?)(?:讨厌)\w(((?:Neko)|(?: Neko))|(?:羽毛)|(?:柠檬)))|((.*?)((?:不)((.*?)(?:喜欢)|(.*?)(?:讨厌)))\w((?:Neko)|(?:羽毛)))|(.*?)((?:不)(.*?)(?:喜欢))/gi;
        let lovefeather = /(?:喜欢羽毛)|(?:爱羽毛)/g;
        let loveneko = /^(?!不)(?:喜欢 Neko)|(?:喜欢Neko)/gi;
        let sadmeow = /(?:喵)(?:\.\.\.)+/g;
        let lemoncute = /(?:柠檬)(.*?)(?:可爱)/g;
        let lemonnotcute = /(.*?)(不)(.*?)(?:柠檬)|(?:柠檬)(.*?)(不)(.*?)/g;
        let lemonlemonle = /(柠檬柠檬柠)|(柠檬柠)/g;
        let lemonletsplay = /((?:柠檬)|(柠檬酱))(?:来玩)/g;
        let hugneeded = /(?:要抱)((抱)|(.*))/gi;
        let tiredforthis = /(^(.*)(?:累))/gi;
        let meowmeow = /(喵~)/gi
        let dumbningmeng = /(柠檬)(()|(是))((?:笨蛋)|(?:讨厌)|(?:大笨蛋))/gi
        let hugningmeng = /((?:抱抱)|(?:摸摸))(柠檬)/gi
        let thxningmeng = /谢谢((柠檬)|(柠檬酱)|(Ningmeng)|(ningmeng)|(Lemon))/gi

        // Greetings

        let scmorning = /((.*)|(?:大家))((?:早安安)|(?:早安)|(?:早上好))/gi;
        let lemonmorning = /((柠檬酱)|(?:柠檬))((?:早安安)|(?:早安)|(?:早上好)|(?:早))/g;
        let enmorning = /((?:Good Morning))(\w|((.*)(?:.*)))/gi;

        let scafternoon = /((.*)|(?:大家))((?:午安安)|(?:午安)|(?:下午好)|(?:中午好))/gi;
        let lemonafternoon = /((柠檬酱)|(?:柠檬))((?:午安)|(?:午安安)|(?:下午好))/g;
        let enafternoon = /((?:Good Afternoon))(\w|((.*)(?:.*)))/gi;

        let scnight = /((.*)|(?:大家))((?:晚安安)|(?:晚安))/gi;
        let lemonnight = /((柠檬酱)|(?:柠檬))((?:晚安)|(?:晚安安))/g;
        let ennight = /((?:Good Night))(\w|((.*)(?:.*)))/gi;

        let scevening = /((.*)|(?:大家))((?:晚上好)|(?:晚好))/gi;
        let lemonevening = /((柠檬酱)|(?:柠檬))((?:晚上好)|(?:晚好))/gi;
        let enevening = /((?:Good Evening))(\w|((.*)(?:.*)))/gi

        let matchSet = [
            { reg: dislikeall, txt: "喵...怎么这样..." },
            { reg: lovefeather, txt: '好耶 /' },
            { reg: loveneko, txt: "Neko 知道的话会超开心的！" },
            { reg: sadmeow, txt: "喵...怎么了吗..." },
            { reg: /(?:咕噜)/g, txt: "咕噜咕噜咕噜" },
            { reg: lemonnotcute, txt: "喵...柠檬做错惹什么嘛...（哭哭" },
            { reg: lemoncute, txt: "啊呜啊呜(捂脸)" },
            { reg: lemonlemonle, txt: "咕噜咕噜~ 要做什么啦！" },
            { reg: lemonletsplay, txt: "(竖起耳朵) 柠檬也想玩呢，可是 Neko 说要继续研究新的东西什么的...弄完这些工作才能玩呢。抱歉啦~" },
            { reg: hugneeded, txt: "啊呜啊呜，抱紧紧...（顺毛）" },
            { reg: tiredforthis, txt: "揉揉...实在太累的话就休息一下呢喵..." },
            { reg: meowmeow, txt: "喵~" },
            { reg: dumbningmeng, txt: "呜...柠檬对不起呢...有什么对不起你的地方吗......而且...明明是主人的错嘛！" },
            { reg: hugningmeng, txt: "喵...扑过去抱住 >_<" },
            { reg: thxningmeng, txt: "不用谢呢，这是我应该做的" },

            { reg: lemonmorning, txt: "喵~早安" },
            { reg: scmorning, txt: "早安喔" },
            { reg: enmorning, txt: "Morning!" },

            { reg: lemonafternoon, txt: "咕噜咕噜，午安安，有闲暇时间的话记得休息放松一下呢~" },
            { reg: scafternoon, txt: "已经过去大半天了呢，午安喵" },
            { reg: enafternoon, txt: "Good afternoon! Finishing up with all your work?" },

            { reg: lemonnight, txt: "嗯喵，晚安。祝你做个好梦呢~" },
            { reg: scnight, txt: "晚安喵，好好休息哦" },
            { reg: ennight, txt: "Good night! Wish you would have a sweet dream :)" },

            { reg: lemonevening, txt: "喵喵，晚上好喔，柠檬在研究新奇的东西呢w" },
            { reg: scevening, txt: "晚上好，今天过得怎么样呢？" },
            { reg: enevening, txt: "Good evening! How's it going today?" },
        ]

        let replyText = undefined

        if (main.count >= 1) {
            main.count = 0;
            return replyText
        }
        else if (main.count == 0) {
            matchSet.forEach(item => {
                if (item.reg.test(text)) {
                    main.count++
                    Compo.Interface.Log.Log.debug("回复至: " + ctx.message.from.id + " - 成功")
                    replyText = item.txt
                }
                return replyText
            })
            return replyText
        }
        else {
            return replyText
        }
    },
    count: 0
}

// Change the Component Name according to the config.json

exports.meta = config.components.ningmeng

// Inner

exports.commands = {
    start: async function (ctx, args) {
        return "你好喔，这里是柠檬酱。想要开始的话直接选择命令或者直接说话就好了喔w"
    },
    help: async function (ctx, args) {
        return "随意说话就好了喵w"
    },
    progynova: async function (ctx, args) {
        return "是甜甜的糖糖! "
    },
    androcur: async function (ctx, args) {
        return "是白色的糖糖！"
    },
    estrofem: async function (ctx, args) {
        return "是蓝色的糖糖！"
    },
    proluton: async function (ctx, args) {
        return "是粘稠的汁液！"
    },
    progynondepot: async function (ctx, args) {
        return "是可以变成女孩子的魔法药水！"
    },
    pat: async function (ctx, args) {
        return "（呼噜呼噜声"
    }
}

exports.inlines = {
    main: async function () {

    }
}

exports.messages = {
    main: async function (ctx) {
        // get source text in
        let text = ctx.message.text
        // test it out
        return main.tryMatch(ctx, text)
        // return the reply
    }
}

exports.callbackQuery = {
    main: async function () {

    }
}

// Register

exports.register = {
    // As the example to Yawarakai Compos
    commands: [
        {
            function: 'start'
        },
        {
            function: 'help'
        },
        {
            function: 'progynova'
        },
        {
            function: 'androcur'
        },
        {
            function: 'estrofem'
        },
        {
            function: 'proluton'
        },
        {
            function: 'progynondepot'
        },
        {
            function: 'pat'
        }
    ],
    inlines: [
        {
            // function: "main"
        }
    ],
    messages: [
        {
            function: 'main'
        }
    ],
    callbackQuery: [
        // {
        //     function: 'main'
        // }
    ]
}