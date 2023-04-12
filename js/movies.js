import { UI } from "./ui.js";


export class Movies {
    constructor() {
        this.getmovies('now_playing');
        this.ui = new UI();
        this.ui.displaynavbar();
        document.querySelectorAll(".nav-item a").forEach((link) => {
            link.addEventListener("click", (e) => {
                if (document.querySelector(".menu .active") != null && document.querySelector(".menu .active").classList.contains("active"))
                    document.querySelector(".menu .active").classList.remove("active");
                e.target.classList.add("active");
                if (e.target.dataset.category != null) {
                    this.getmovies(e.target.dataset.category);
                }
            })
        });
        document.querySelector('#searchword').addEventListener('keyup', (e) => {

            if (document.querySelector(".menu .active") != null && document.querySelector(".menu .active").classList.contains("active"))
                document.querySelector(".menu .active").classList.remove("active");
            let wew = e.target.value;
            this.getmoviesbyword(wew);
        });
        this.getsearchedmovies();
        this.checkyourname();
        this.checkyouremail();
        this.checkyourphone();
        this.checkyourage();
        this.checkyourpass();
        this.checkyourrepass();
    }

    moviesobj = [];
    async getmovies(categoryname) {
        $('.moloading').fadeIn();

        const options = {
            method: 'GET'
        };
        let APIURL = "";
        if (categoryname != "trending")
            APIURL = `https://api.themoviedb.org/3/movie/${categoryname}?api_key=9f94e6e1855c5e49fd7a2f17889e3d98&language=en-US&include_adult=fals`;
        else
            APIURL = `https://api.themoviedb.org/3/trending/all/day?api_key=9f94e6e1855c5e49fd7a2f17889e3d98&language=en-US&include_adult=fals`;
        let apifetch = await fetch(APIURL, options);
        let response = await apifetch.json();
        this.moviesobj = response.results;
        this.ui.displaymovies(response.results);
        let seachval = $('#searchin').val();
        this.ui.displaysearched(this.moviesobj, seachval);
        $('.moloading').fadeOut(500);
    }
    async getmoviesbyword(word) {
        $('.moloading').fadeIn();

        const options = {
            method: 'GET'
        };
        let APIURL = "";
        APIURL = `https://api.themoviedb.org/3/search/movie?query="${word}"&api_key=9f94e6e1855c5e49fd7a2f17889e3d98&language=en-US&include_adult=fals"`;
        let apifetch = await fetch(APIURL, options);
        let response = await apifetch.json();
        this.moviesobj = response.results;
        this.ui.displaymovies(response.results);
        let seachval = $('#searchin').val();
        this.ui.displaysearched(this.moviesobj, seachval);
        $('.moloading').fadeOut(500);
    }
    async getsearchedmovies() {

        await document.querySelector('#searchin').addEventListener('keyup', (e) => {
            this.ui.displaysearched(this.moviesobj, e.target.value);
        });
    }

    checkyourname() {

        document.querySelector('#yourname').addEventListener('keyup', (e) => {
            let regex = /^[a-zA-Z0-9]+$/;
            let erroelement = $('#yournamecheck').select();

            if (regex.test(e.target.value) == true) {
                $(erroelement).slideUp();
            }
            else {
                $(erroelement).html('Not Valid Name');
                $(erroelement).slideDown();
            }
        });
    }
    checkyouremail() {

        document.querySelector('#youremail').addEventListener('keyup', (e) => {
            let regex = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
            let erroelement = $('#youremailcheck').select();

            if (regex.test(e.target.value) == true) {
                $(erroelement).slideUp();
            }
            else {
                $(erroelement).html('Not Valid Email');
                $(erroelement).slideDown();
            }
        });
    }
    checkyourphone() {

        document.querySelector('#yourphone').addEventListener('keyup', (e) => {
            let regex = /^01[0125][0-9]{8}$/;
            let erroelement = $('#yourphonecheck').select();

            if (regex.test(e.target.value) == true) {
                $(erroelement).slideUp();
            }
            else {
                $(erroelement).html('Not Valid Phone Number');
                $(erroelement).slideDown();
            }
        });
    }
    checkyourage() {

        document.querySelector('#yourage').addEventListener('keyup', (e) => {
            let regex = /^([1-9][0-9])$/;
            let erroelement = $('#youragecheck').select();

            if (regex.test(e.target.value) == true) {
                $(erroelement).slideUp();
            }
            else {
                $(erroelement).html('Not Valid Age');
                $(erroelement).slideDown();
            }
        });
    }
    checkyourpass() {

        document.querySelector('#yourpass').addEventListener('keyup', (e) => {
            let regex = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/;
            let erroelement = $('#yourpasscheck').select();

            if (regex.test(e.target.value) == true) {
                $(erroelement).slideUp();
            }
            else {
                $(erroelement).html('Not Valid Password, you should have atleast 8 character and one number');
                $(erroelement).slideDown();
            }
        });
    }
    checkyourrepass() {

        document.querySelector('#yourrepass').addEventListener('keyup', (e) => {
            let passval = $('#yourpass').val();
            let repassval = $('#yourrepass').val();
            let erroelement = $('#yourrepasscheck').select();
            if (passval === repassval) {
                $(erroelement).slideUp();
            }
            else {
                $(erroelement).html('Not Match Password');
                $(erroelement).slideDown();
            }
        });
    }
}
