<template>
  <div id="loops">
    <h1>Looping through data</h1>
    <a href="https://vuejs.org/v2/guide/list.html" target="_blank">Docs</a>
    <br />
    <br />
      <ul>
        <li v-for="item in items" :key="item.id">{{item.name}}</li>
      </ul>
    <p>Code example:</p>
    <pre>
      <code>
&lt;ul&gt;
  &lt;li v-for="item in items" :key="item.id"&gt;&#123; &#123;item.name&#125; &#125;&lt;/li&gt;
&lt;/ul&gt;
      </code>
    </pre>
    <br />
    <pre>
      <code>
data: () => {
  return {
    items: [
      {
        id: "1",
        name: "Item 1"
      },
      {
        id: "2",
        name: "Item 2"
      },
      {
        id: "3",
        name: "Item 3"
      }
    ]
  };
}
      </code>
    </pre>    
  </div>
</template>

<script>
export default {
  name: "Loops",
  data: () => {
    return {
      items: [
        {
          id: "1",
          name: "Item 1"
        },
        {
          id: "2",
          name: "Item 2"
        },
        {
          id: "3",
          name: "Item 3"
        }
      ]
    };
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.loops {
}
ul {
list-style-type: none;
margin: 0;
padding: 0;
}
</style>
