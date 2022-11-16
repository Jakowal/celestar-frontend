<template>
  <main>
    <div>Welcome to the frontpage!</div>
    <div>
      <p v-for="creature in creatures" :key="creature">
        {{creature.name}}
      </p>
    </div>
  </main>
</template>

<script>
import {getAllCreatures} from "@/services/api";

export default {
  async mounted() {
    this.creatures = await getAllCreatures()
  },
  data() {
    return {
      creatures: []
    }
  },
  name: 'FrontPage'
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
