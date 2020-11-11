<template>
  <div id="app">
    <h1>
      vertebral rotation
    </h1>
    <div id="input_block">
      <div id="vertebral">
        <h2>
          Vertebral Width <br />
          (*Please Enter A Integer Between 20~70.)<br />
        </h2>
        <input id="input_width" type="number" v-model="vertebral_width" />
        <div id="width">{{ vertebral_width }}</div>
      </div>
      <div id="edge">
        <h2>
          Distance from the vertebral edge to the pedicle major axis
          <br />(*Please Enter A Decimal Rounded To 2 Decimals Places)<br />
        </h2>
        <input id="input_distance" type="number" v-model="edge_axis_distance" />
        <div id="distance">{{ edge_axis_distance }}</div>
      </div>
      <div id="angle">
        <h2>The Raimondi Angle is (degrees):</h2>
        <div id="degree">{{ angle_degrees }}</div>
      </div>
      <button
        @click="returnValue(vertebral_width, edge_axis_distance)"
        id="calculate"
      >
        Calculate
      </button>
    </div>
    <!-- <div id="nav">
      <router-link to="/">Home</router-link> |
      <router-link to="/about">About</router-link>
    </div>
    <router-view /> -->
  </div>
</template>

<script>
import { Result } from "@/test";
export default {
  data() {
    return {
      angle_degrees: " ",
      vertebral_width: " ",
      edge_axis_distance: " "
    };
  },
  methods: {
    returnValue(b, c) {
      this.angle_degrees = Result(b, c);
      console.log(this.angle_degrees);
    }
  }
};
</script>

<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

h1 {
  font-size: 40px;
  background-color: #2d6187;
  border-radius: 10px;
  color: #fbf7f0;
  padding: 5px;
}

input {
  font-size: 20px;
  width: 55%;
}

#vertebral {
  background-color: #9ab3f5;
  text-align: left;
  // float: left;
  display: inline-block;
  font-size: 10px;
  width: 20%;
  height: 120px;
  border: 5px solid #1f3c88;
  border-radius: 10%;
  margin: 1%;
  padding: 2%;
  vertical-align: top;
}

#degree {
  font-size: 20px;
}

#calculate {
  font-size: 20px;
  padding: 0.5%;
  background-color: #01c5c4;
  border: solid 3px #2d6187;
  color: #e8ffff;
}

#edge {
  background-color: #a3d8f4;
  text-align: left;
  // float: right;
  display: inline-block;
  font-size: 10px;
  width: 35%;
  height: 120px;
  border: 5px solid #1f3c88;
  border-radius: 10%;
  margin: 1%;
  padding: 2%;
  vertical-align: top;
}

#angle {
  font-size: 10px;
  border: 5px solid #1f3c88;
  border-radius: 10%;
  display: inline-block;
  background-color: #b9fffc;
  text-align: left;
  width: 20%;
  height: 120px;
  margin: 1%;
  padding: 2%;
  vertical-align: top;
}
</style>
