<template>
  <client-only>
    <div id="layout-control">
      <a-form>
        <a-form-item label="AI客服有多宽">
          <a-space>
            <a-input-number
              :value="containerLayoutWidth"
              @update:value="updateWidth"
              :min="1"
              :max="10000"
            />
            px
          </a-space>
        </a-form-item>

        <a-form-item label="AI客服有多高">
          <a-space>
            <a-input-number
              :value="containerLayoutHeight"
              @update:value="updateHeight"
              :min="1"
              :max="100"
            />
            vh
          </a-space>
        </a-form-item>
      </a-form>
    </div>
  </client-only>
</template>

<script setup>
const props = defineProps(['containerLayoutHeight', 'containerLayoutWidth']);
const emit = defineEmits([
  'update:containerLayoutHeight',
  'update:containerLayoutWidth',
]);

const updateHeight = (value) => {
  emit('update:containerLayoutHeight', value);
};

const updateWidth = (value) => {
  emit('update:containerLayoutWidth', value);
};
</script>

<style scoped>
#layout-control {
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100%;
  width: 360px;
  z-index: 9000;
}
</style>
