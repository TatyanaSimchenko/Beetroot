<template>
<Header class="header">
  <h1 class="header__title">Prikolyasy</h1>
  <p class="header__subtitle"> Rachivnychka Dobavlyalochka</p>
</Header>
</template>

<style lang="scss">
.header {
  padding: 20px 24px;
  background-color:lightblue ;
  display: flex;
  flex-direction: column;
  text-align: center;
  &__title {
color: red;
text-transform: uppercase;
margin-bottom: 20px;
font-size: 40px;
font-family: sans-serif;
  }
  &__subtitle {
color: darkblue;
margin-bottom: 20px;
font-size: 24px;
  }
}
 

</style>