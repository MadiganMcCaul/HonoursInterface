<template>
  <button
    class="py-1.5 px-3.5 border border-slate-300 rounded-lg shadow-sm text-slate-600 transition duration-100 flex flex-row relative items-center hover:shadow hover:bg-slate-50 ring-red-500/50 outline-none focus:ring-4 focus:border-red-500 text-center"
    :class="{
      'bg-primary-500 border-primary-500 text-white hover:bg-primary-500 hover:shadow-primary-500/25 focus:border-primary-500 ring-primary-500/50 ':
        primary,
      'bg-red-500 border-red-500 text-white hover:bg-red-500 hover:shadow-red-500/25':
        edit,
      'bg-transparent border-0 shadow-none hover:shadow-none hover:bg-slate-200':
        noBg,
      'bg-primary-500 border-primary-500 text-white hover:bg-primary-500 hover:shadow-primary-500/25 focus:border-primary-500 ring-primary-500/50 w-1/4 justify-center':
        long,
      'py-1.5 px-3.5 border border-slate-300 rounded-lg shadow-sm text-slate-600 transition duration-100 flex flex-row relative items-center shadow bg-slate-60 ring-red-500/50 outline-none ring-4 border-red-500 text-center':
        favourited,
      'focus:ring-4 focus:ring-slate-300 ring-slate-500/50 focus:border-slate-500 border-slate-300':
        grey,
    }"
    @click="$emit('click')"
  >
    <p
      v-if="iconEnd"
      class="pb-px font-semibold text-sm"
      :class="{ 'pr-3.5': !textOnly }"
    >
      {{ label }}
    </p>

    <slot></slot>
    <p
      v-if="label === 'Cart'"
      class="pb-px font-semibold text-sm"
      :class="{ 'pl-2': !textOnly }"
    >
      {{ label }}
    </p>

    <p
      v-else-if="!iconEnd"
      class="pb-px font-semibold text-sm"
      :class="{ 'pl-0': !textOnly }"
    >
      {{ label }}
    </p>
  </button>
</template>

<script lang="ts">
import Vue from "vue";
export default Vue.extend({
  props: {
    label: {
      default: "",
      type: String,
    },
    textOnly: {
      default: false,
      type: Boolean,
    },
    primary: {
      default: false,
      type: Boolean,
    },
    danger: {
      default: false,
      type: Boolean,
    },
    edit: {
      default: false,
      type: Boolean,
    },
    iconEnd: {
      default: false,
      type: Boolean,
    },
    noBg: {
      default: false,
      type: Boolean,
    },
    grey: {
      default: false,
      type: Boolean,
    },
    long: {
      default: false,
      type: Boolean,
    },
    favourited: {
      default: false,
      type: Boolean,
    },
  },
});
</script>
