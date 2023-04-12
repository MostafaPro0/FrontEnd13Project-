
import { UI } from "./ui.js";

export class CountDown {
    constructor() {
        this.ui = new UI();
    }
    coundDownEvent() {
        let mostafabirthday1 = new Date(2022, 8, 21);
        let now1 = new Date();
        var x = setInterval(function () {
            let mostafabirthday = mostafabirthday1.getTime();
            let now = now1.getTime();
            let distance = 0;
            if (mostafabirthday < now) {
                let now1aaa = mostafabirthday1.getFullYear() + 1;
                mostafabirthday1 = new Date(now1aaa, 8, 21);
                mostafabirthday = mostafabirthday1.getTime();
            }
            distance = mostafabirthday - now;
            let seconds = Math.floor((distance / 1000));
            let minutes = Math.floor((seconds / 60));
            let hours = Math.floor((minutes / 60));
            let days = Math.floor((hours / 24)) - 30;
            let months = Math.floor(days / 30);

            seconds %= 60;
            minutes %= 60;
            hours %= 24;
            days %= 24;
            months %= 30;
            
            $('.countdown').children("h3").eq(0).html(months);
            $('.countdown').children("h3").eq(1).html(days);
            $('.countdown').children("h3").eq(2).html(hours);
            $('.countdown').children("h3").eq(3).html(minutes);
            $('.countdown').children("h3").eq(4).html(seconds);
            
        }, 1000)
    }
}