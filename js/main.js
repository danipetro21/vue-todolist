const { createApp } = Vue;

createApp({
    data() {
        return {
            //inserimento tasks all'interno dell'applicazione
            error: false,
            tasks: [
                {
                    text: 'Fare i compiti',
                    done: false
                },
                {
                    text: 'Fare la spesa',
                    done: true
                },
                {
                    text: 'Fare il bucato',
                    done: false
                }
            ],
            myInput: ''

        }
    },
    methods: {
        addTask() {
            if (this.myInput === "") {
                error = true;
                
            } else {
                this.tasks.push({ text: this.myInput, done: false });
                console.log(this.myInput);
            }
            //azzera l'input type text
            this.myInput = "";
        },
        removeTask(index) {
            this.tasks.splice(index, 1);
        }
    }
}).mount("#app");