<header>
    <div class="header-text">
    <h1>Welcome to WatchAnything!</h1>
    <h2>The place to watch anything with friends!</h2>
</div>
<div class="header-links">
    <p><a href="/about">About</a></p>
    </div>
</header>

<div class="center">
    Middle div
</div>

<footer>
    <p>Created by <a href="https://github.com/DanielOglesby" target="_blank">Daniel Oglesby</a></p>
</footer>


<style>
    
    .center{
        display: flex;
        justify-content: center;
        align-items: center;
        height: 100vh;
        background-color: black;
    }

    .header-text{
        display: flex;
        flex-direction: row;
        justify-content: left;
        align-items: center;
        height: 100px;
        background-color: red;
        gap: 10px;
    }

    .header-links{
        background-color: green;
        display: flex;
        flex-direction: row;
        justify-content: right;
        gap: 20px;
        margin-left: 20px;
        margin-right: 20px;
        text-decoration: underline;
    }

    :global(p, h1, h2, div){
        font-family:'Courier New', Courier, monospace;
        color: white;
        font-size: 20px;
    }

    header{
        color: black;
    }
</style>