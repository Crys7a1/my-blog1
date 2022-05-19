<template>
    <div>
        <article>
            <header class="post-header">
                <h2>A website for recording and learning</h2>

                <div class="author-box">
                    <img
                        src="/static/7.jpg"
                        alt="Headshot of Laura Jones"
                        class="author-img"
                    />

                    <p id="author" class="author">
                        Posted by <strong>Coder-Cs</strong> on Monday, June 24st
                        2022
                    </p>
                </div>

                <img
                    src="/static/post-img.jpg"
                    alt="HTML code on a screen"
                    width="500"
                    height="200"
                    class="post-img"
                />
            </header>
        </article>
    </div>
</template>

<script>
export default {
    name: "bodyContent"
};
</script>

<style>
.container {
    width: 1200px;
    margin: 0 auto;
}
.post-header {
    margin-bottom: 40px;
}
.author-box {
    display: flex;
    align-items: center;
    margin-top: -35px;
    margin-bottom: 15px;
}
#author {
    font-style: italic;
    font-size: 18px;
}
.author {
    margin-bottom: 0;
    margin-left: 15px;
}
.author-img {
    height: 50px;
    width: 50px;
    margin-left: 200px;
}

.post-img {
    width: 75%;
    height: auto;
}
h2 {
    margin-top: -50px;
    color: #1098ad;
}
p {
    font-size: 22px;
    line-height: 1.5;
    margin-bottom: 15px;
}
</style>
