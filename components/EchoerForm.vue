<template>
  <form class="container justify-center pt-4 space-y-2 border-black pl-4 pr-2">
    <div class="flex pt-4 space-x-2 border-black pl-4 pr-2">
      <input class="shadow appearance-none border rounded w-auto py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" v-model='echo_text'  id="echoinput" type="text" placeholder="Enter a text to echo">
      <button class="bg-yellow-500 hover:bg-yellow-700 text-white font-bold py-2 px-4 rounded" type="button" @click="echo()" id='echo_btn'>
        Echo
      </button>
      <button class="bg-yellow-500 hover:bg-yellow-700 text-white font-bold py-2 px-4 rounded" type="button" @click="clear()" id='reset_btn'>
        Clear
      </button>
    </div>
    <label class="block pt-4 pl-5 text-gray-400">{{echo_item_count}} echo item</label>
    <div class="block pt-4 space-y-2 pl-5 pr-2 pt-4" id = "echoitems" >
    </div>
  </form>
</template>

<script>
export default {
  data(){
    return {
      echo_text: "",
      echo_item_count: 0,
    }
  },
  methods:{
    echo()
    {
      // 50 is just an example number here. Just an upper boundary that is not has a validation for now. Just to make style correctly.  
      if(this.echo_text.length == 0 || this.echo_text.length > 50) return;
      var echo_item = document.createElement("p");
      echo_item.className = ("p-echo pt-1 bg-yellow-50 border-black-100 border-2 rounded font-light max-w-md");
      echo_item.innerText = this.echo_text;
      document.getElementById('echoitems').appendChild(echo_item);
      this.echo_item_count +=1;
      this.echo_text = "";
    },
    clear()//we do not wanna remove the label that shows count of echos.
    {
      document.getElementById('echoitems').innerHTML = "";
      this.echo_item_count = 0; 
    }
  },
  mounted(){
    //  document.getElementById('echoinput').focus();//to directly start to write text.
  }
}
</script>

<style scoped>

</style>
