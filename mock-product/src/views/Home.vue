<template>
  <div class="home">
    <el-card>
      <div>
        <product></product>
        <hr />
        <cart></cart>
      </div>
    </el-card>
  </div>
</template>

<script>
import cart from "@/components/cart";
import product from "@/components/product";

export default {
  name: "home",
  components: { product, cart }
};
</script>
<style lang="less">
.player {
  display: flex;
  align-items: center;
  justify-content: center;
  margin-top: 20px;
}
</style>
