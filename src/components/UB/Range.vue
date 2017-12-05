<template lang="html">
  <div>
    <label :for="id">{{ label }}</label>
    <div class="range-control">
      <input :id="id" class="range" type="range" :min="min" :max="max" v-model="rangevalue" @input="handleChange($event.target.value)" />
      <input :id="id" class="range-value" type="number" :value="start" :min="min" :max="max" v-model="rangevalue" @input="handleChange($event.target.value)" />
    </div>
  </div>
</template>

<script>
export default {
  props: {
    id: {
      type: String,
      required: true
    },
    label: {
      type: String,
      required: true
    },
    start: {
      required: false
    },
    min: {
      required: false
    },
    max: {
      required: false
    }
  },
  data () {
    return {
      rangevalue: 0
    }
  },
  mounted () {
    if (this.start) {
      this.rangeValue = this.start
    }
  },
  methods: {
    handleChange: function (value) {
      console.log('input', value)
      this.$emit('input', value)
    }
  }
}
</script>

<style lang="scss" scoped>
@import '../../styles/UB/variables';
// Styling Cross-Browser Compatible Range Inputs with Sass
// Github: https://github.com/darlanrod/input-range-sass
// Author: Darlan Rod https://github.com/darlanrod
// Version 1.0.1
// MIT License

$track-color: #ff6426;
$thumb-color: #ff6426;

$thumb-radius: 50%;
$thumb-height: 26px;
$thumb-width: 26px;
$thumb-shadow-size: 0;
$thumb-shadow-blur: 0;
$thumb-shadow-color: transparent;
$thumb-border-width: 0;
  $thumb-border-color: #fff;

$track-width: 100%;
$track-height: 6px;
$track-shadow-size: 0;
$track-shadow-blur: 0;
$track-shadow-color: transparent;
$track-border-width: 0;
$track-border-color: #000;

$track-radius: 0;
$contrast: 5%;

.range-control {
  display: flex;
  margin: 0 0 1rem;
  @media (min-width: $screen-sm) {
    margin: 0;
  }

  .range {
    flex-grow: 10;
    margin-right: 15px;
    border-width: 0;
    padding-left: 0;
    padding-right: 0;
  }

  .range-value {
    flex-grow: 0;
    width: 75px;
  }
}

@mixin shadow($shadow-size, $shadow-blur, $shadow-color) {
  box-shadow: $shadow-size $shadow-size $shadow-blur $shadow-color, 0 0 $shadow-size lighten($shadow-color, 5%);
}

@mixin track() {
  width: $track-width;
  height: $track-height;
  cursor: pointer;
  transition: all .2s ease;
}

@mixin thumb() {
  @include shadow($thumb-shadow-size, $thumb-shadow-blur, $thumb-shadow-color);
  border: $thumb-border-width solid $thumb-border-color;
  height: $thumb-height;
  width: $thumb-width;
  border-radius: $thumb-radius;
  background: $thumb-color;
  cursor: pointer;
}

[type=range] {
  -webkit-appearance: none;
  margin: $thumb-height / 2 0;
  width: $track-width;

  &:focus {
    outline: none;
  }

  &::-webkit-slider-runnable-track {
    @include track();
    @include shadow($track-shadow-size, $track-shadow-blur, $track-shadow-color);
    background: $track-color;
    border: $track-border-width solid $track-border-color;
    border-radius: $track-radius;
  }

  &::-webkit-slider-thumb {
    @include thumb();
    -webkit-appearance: none;
    margin-top: ((-$track-border-width * 2 + $track-height) / 2) - ($thumb-height / 2);
  }

  &:focus::-webkit-slider-runnable-track {
    background: lighten($track-color, $contrast);
  }

  &::-moz-range-track {
    @include track();
    @include shadow($track-shadow-size, $track-shadow-blur, $track-shadow-color);
    background: $track-color;
    border: $track-border-width solid $track-border-color;
    border-radius: $track-radius;
  }

  &::-moz-range-thumb {
    @include thumb();
  }

  &::-ms-track {
    @include track();
    background: transparent;
    border-color: transparent;
    border-width: $thumb-width 0;
    color: transparent;
  }

  &::-ms-fill-lower {
    @include shadow($track-shadow-size, $track-shadow-blur, $track-shadow-color);
    background: darken($track-color, $contrast);
    border: $track-border-width solid $track-border-color;
    border-radius: $track-radius * 2;
  }

  &::-ms-fill-upper {
    @include shadow($track-shadow-size, $track-shadow-blur, $track-shadow-color);
    background: $track-color;
    border: $track-border-width solid $track-border-color;
    border-radius: $track-radius * 2;
  }

  &::-ms-thumb {
    @include thumb();
  }

  &:focus::-ms-fill-lower {
    background: $track-color;
  }

  &:focus::-ms-fill-upper {
    background: lighten($track-color, $contrast);
  }
}
</style>
