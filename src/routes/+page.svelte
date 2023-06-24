<script lang="ts">
      import Youtube from "svelte-youtube-embed";
      import Footer from "../components/Footer.svelte";
      import Header from "../components/Header.svelte";

      let originalString = "";
      let trimmedString = trimURL(originalString, "=");
      function trimURL(str:string, character:string) {
  const parts = str.split(character);
  return parts[1];
}

function handleInput(event: string) {
    originalString = event.target.value;
    trimmedString = trimURL(originalString, "=");
}

    originalString = "";
    trimmedString = trimURL(originalString, "=");
</script>

<Header/>

<div class="center">
    <div class="play-box">
    <Youtube id={trimmedString}>
        <button>play</button>
      </Youtube>
      </div>
      <div>
        <input type="text" placeholder="Insert a video URL..." id="url" bind:value={originalString} on:input={handleInput} style="width: 500px; text-align: center; text-color: black;"/>
      </div>
</div>

<Footer></Footer>

<style>
    
    .center{
        display: flex;
        flex-direction: column;
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

    input{
        color: black;
    }
</style>