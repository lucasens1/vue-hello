const {createApp} = Vue;

createApp({
    data() {
        return{
            imgSrc : "",
            userGreet : "",
            color : "",
        };
    },
    methods : {
        getImage : function (){
            if(this.imgSrc !== ""){
                this.imgSrc = "";
            }else{
                this.imgSrc = "./img/cat.jpg";
            }
            
        },
        greetings : function (){
            return `Ciao ${this.userGreet}`;
        },
        changeColor : function (){
            if(this.color === "red"){
                this.color = ""
            } else {
                this.color = "red";
            }
            
        }
    }
}).mount('#app');