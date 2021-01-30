<template>
<label class="radio">
  <input 
  :value="value"
  :checked="checked"
  type="radio"
  @change="$emit('change', value)"
  >
  <span><slot/></span>
</label>
  
</template>

<script>
export default {
   name:"AppFilter",
   props: {
     value: String,
     checked: Boolean,
   },
};
</script>

