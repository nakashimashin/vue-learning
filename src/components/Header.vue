<script setup>
</script>

<template>
    <div class="container">
        <div class="title">VueLearning</div>
        <div class="buttons">
            <button class="button">About</button>
            <button class="button">SERVICE</button>
            <button class="button">COMPANY</button>
            <button class="button">CONTACT</button>
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
}
.buttons{
    margin-right: 3%;
}
.button{
    border: none;
    background: none;
}
.button:hover{
    background-color: rgb(143, 29, 29);
    border-radius: 0.25rem;
}
</style>
