<template>
    <footer id="footer">
       <ButtonVoltar />
    </footer>

   </template>

   <script>
    import ButtonVoltar from './ButtonVoltar.vue';

    export default{
        name: "Footer",
        components:{
            ButtonVoltar
        },
    }

    </script>
    
    <style scoped>
    #footer{
        height: 25px;
        max-width: 300px;
        background-color: rgba(89, 86, 82, 0.274);
        border: 4px solid #111;
        color: rgb(188, 36, 173);
        display: flex;
        align-items: center;
        justify-content: center;
        bottom: 0;
        padding: 10px;
    }
    </style>