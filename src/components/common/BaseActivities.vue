<template>
    <div class="container">
        <h2>
            <slot name="course">{{ course }}</slot>
        </h2>
        <div class="h1-container">
            <h1>
                <slot name="act">{{ act }}</slot>
            </h1>
            <input type="date" :value="data" v-show="data">
        </div>
        <p>
            <slot name="details">{{ details }}</slot>
        </p>
    </div>
</template>
<script>
    export default {
        name: 'BaseActivities',
        props: [
            'data'
        ]
    }
</script>

<style scoped>

.container {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 750px;
    padding: 34px 30px;
    border-radius: var(--border-radius);
    background: rgba(255, 255, 255, 0.75);
    backdrop-filter: blur(14px);
    -webkit-backdrop-filter: blur(14px);
    box-shadow: 0 18px 45px rgba(0, 0, 0, 0.12);
    border: 1px solid rgba(255, 255, 255, 0.35);
    margin: 20px;
}
.h1-container{
    display: flex;
    align-items: center;
    justify-content: space-between;
    width: 100%;
}
p{
    font-size: 1.3rem;
}

</style>