let app = new Vue({
    el:'#app',
    data:{
        formActive:false,
        clientName:'',
        clientTel:'',
        carBrand:'',
        carNumber:'',
        typeWork:'',
        master:'',
        price:'',
        comments:'',
        clients:[]
    },
    methods: {
        addClient: function () {
            this.clients.push({
                clientName:this.clientName,
                clientTel:this.clientTel,
                carBrand:this.carBrand,
                carNumber:this.carNumber,
                typeWork:this.typeWork,
                master:this.master,
                price:this.price,
                comments:this.comments
            });
                this.clientName='';
                this.clientTel='';
                this.carBrand='';
                this.carNumber='';
                this.price ='';
                this.comments='';
                this.formActive = false;
        },
        addCar: function () {
            this.formActive = true;
        },
        cancel: function () {
            this.formActive = false;
        }
    }
});














