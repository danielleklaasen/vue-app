<template>
  <div id="interpolation">
    <h1>Interpolation</h1>
    <a href="https://vuejs.org/v2/guide/syntax.html#Interpolations" target="_blank">Docs</a>
    <br />
    <br />    
    <p>{{ text }}</p>
    <p v-html="text"></p>
    <p v-once>{{ text }}</p>
    <input v-model="text" />
    <p>Code example:</p>
    <pre>
        <code>
&#123; &#123; text &#125; &#125;  

&lt;p v-html="text"&gt;&lt;/p&gt;

&lt;p v-once&gt;&#123; &#123; text &#125; &#125;&lt;/p&gt;     
        </code>
    </pre>    
    <br />
   <pre>
      <code>
data: () => {
  return {
      text: "Miauw"
  };
}
      </code>
    </pre>
  </div>
</template>

<script>
export default {
  name: "Interpolation",
  data: () => {
    return {
      text: "Miauw"
    };
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.interpolation {
}
</style>
