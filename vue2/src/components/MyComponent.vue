
<template>
  <div class="root">
    <h2 class="root__title">
      Выберите кол-во продуктов:
    </h2>
    <div class="root__wrapper">
    <button class="root__button"
      type="button"
      @click="decreaseCount"
    >
      -
    </button>
      <input class="root__input"
        type="number"
        :value="count"
        :min="minCount"
        :max="maxCount"
      >
    <button class="root__button"
      type="button"
      @click="increaseCount"
    >
      +
    </button>
    </div>
  </div>
</template>

<script>
export default {
  name: 'MyComponent',
  data() {
    return {
      count: 1,
      maxCount: 10,
      minCount: 1
    }
  },
  methods: {
    increaseCount() {
      if (this.count < this.maxCount) {
        this.count++
      }
    },
    decreaseCount() {
      if (this.count > this.minCount) {
        this.count--
      }
    }
  }
}
</script>

<style lang="scss">
.root {
  height: 150spx;
  width: 100%;
  background-color: rgb(58, 2, 189);
  &__title {
    color: #fff;
    text-transform: uppercase;
    text-align: center;
    margin-bottom: 30px;
  }
  &__wrapper {
    text-align: center;
  }
  &__button {
      outline: none;
      width: 30px;
      height: 30px;
      margin: 15px;
    }
    &__input {
      width: 50px;
      height: 30px;
      text-align: center;
      color: red;
      font-weight: 700;
      font-size: 14px;
    }
}

</style>
