<template>
    <div id="app">
        <router-view></router-view>
    </div>
</template>

<script>

export default {
    name: 'App',
}
</script>

<style>
@font-face {
    font-family: "english";
    font-weight: 900;
    src: url("//at.alicdn.com/wf/webfont/FT27mp9nzRgi/bREyZfzwrQEt.woff2") format("woff2"),
        url("//at.alicdn.com/wf/webfont/FT27mp9nzRgi/HojKE7WerDF1.woff") format("woff");
    font-display: swap;
}

@font-face {
    font-family: "alibaba";
    src: url("./assets/alibaba.ttf") format("woff"), url("./assets/alibaba.ttf") format("truetype");
}

* {
    margin: 0;
    padding: 0;
    flex-shrink: 0;
    font-size: 14px;
    font-family: "alibaba";
}

div::-webkit-scrollbar {
    display: none;
}
</style>
