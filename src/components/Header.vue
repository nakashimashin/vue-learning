<script setup>
</script>

<template>
    <div class="container">
        <div class="title">VueLearning</div>
        <div class="buttons">
            <div class="button">About</div>
            <div class="button">SERVICE</div>
            <div class="button">COMPANY</div>
            <div class="button">CONTACT</div>
        </div>
    </div>
</template>

<style scoped>
.container{
    width: 100%;
    height: 10%;
    background-color: red;
    display: flex;
    align-items: center;
    justify-content: space-between;
    box-shadow: 0 3px 6px rgba(0, 0, 0, 0.25);
}
.title{
    margin-left: 3%;
    font-size: 150%;
}
.buttons{
    display: flex;
    flex-direction: row;  
    margin-right: 3%;
}
.button{
    border: none;
    background: none;
    margin-right: 3%;
    font-size: 100%;
}
.button:hover{
    background-color: rgb(143, 29, 29);
    border-radius: 0.25rem;
}
</style>
