<script lang="ts">
      import Youtube from "svelte-youtube-embed";
      import Footer from "../components/Footer.svelte";
      import Header from "../components/Header.svelte";
</script>

<Header/>

<div class="center">
    <div class="play-box">
    <Youtube id="x2wVlemZ6Sc">
        <button>play</button>
      </Youtube>
      </div>
</div>

<Footer></Footer>

<style>
    
    .center{
        display: flex;
        justify-content: center;
        align-items: center;
        height: 100vh;
        background:linear-gradient(250deg, rgb(50,50,255), rgb(150,150,250));
    }


    :global(p, h1, h2, div){
        font-family:'Courier New', Courier, monospace;
        color: white;
        font-size: 20px;
    }

    .play-box{
        width: 50%;
        height: 50%;
    }
</style>