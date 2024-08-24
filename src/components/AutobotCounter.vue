<template>
  <div class="autobot-container">
    <v-card class="autobot-card">
      <v-card-title class="title">Autobots Current Count</v-card-title>
      <v-card-text class="count">
        {{ autobotCount }}
      </v-card-text>
    </v-card>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref, onMounted } from "vue";
import socket from "@/services/socketService";

export default defineComponent({
  name: "AutobotCounter",
  setup() {
    const autobotCount = ref(0);
    

    onMounted(() => {
      socket.on("autobotCount", (response: {message: string, autobotCount: number}) => {
        autobotCount.value = response.autobotCount;
      });
    });

    return {
      autobotCount,
    };
  },
});
</script>

<style scoped>
.autobot-container {
  box-sizing: border-box;
  width: 100vw;
  height: 100vh;
  background-color: #83b4a2;
  display: flex;
  align-items: center;
  justify-content: center;
}
.autobot-card {
  max-width: 400px;
  width: 100%;
  text-align: center;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  border-radius: 16px;
  background: #ffffff;
  padding: 20px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
}

.title {
  font-size: 24px;
  font-weight: 600;
  color: #333333;
}
.count {
  font-size: 40px; 
  font-weight: bold;
  color: #2196f3; 
}
</style>
