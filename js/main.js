const { createApp } = Vue;

createApp({
    data() {
        return {
            //inserimento tasks all'interno dell'applicazione
            tasks: [
                { text: 'Fare i compiti', done: false },
                { text: 'Fare la spesa', done: true },
                { text: 'Fare il bucato', done: false }
            ],
            myInput: ''

        }
    },
    methods: {
        addTask() {
            if (this.myInput === "") {
                return;
            } else {
                this.tasks.push({ text: this.myInput });
                console.log(this.myInput);
            }
            //azzera l'input type text
            this.myInput = "";
        }
    }
}).mount("#app");