<script>
import MainComponent from "@/components/Base/MainComponent.vue";
import ArchiveTodoList from "../components/Archive/ArchiveTodoList.vue";
import PrimeListBox from "primevue/listbox";

import { mapGetters, mapMutations } from "vuex";
import BaseButton from "../components/UI/BaseButton.vue";

export default {
  data() {
    return {
      todos: [],
    };
  },
  components: {
    MainComponent,
    ArchiveTodoList,
    PrimeListBox,
    BaseButton,
  },
  computed: mapGetters("todoStore", ["getRemovedType"]),
  methods: {
    ...mapMutations("todoStore", ["changeCurrentType"]),
    getRemovedTodos() {
      this.todos = this.$store.getters["todoStore/getRemovedTodos"];
    },
  },
};
</script>

<template>
  <MainComponent>
    <div class="h-screen">
      <div class="flex flex-row">
        <div>
          <PrimeListBox :options="getRemovedType" optionLabel="label">
            <template #option="slotProps">
              <div
                @click="
                  changeCurrentType(slotProps.option.label), getRemovedTodos()
                "
              >
                {{ slotProps.option.label }}
              </div>
            </template>
          </PrimeListBox>
        </div>
        <div class="m-2">
          <div class="flex flex-row justify-content-between p-2">
            <BaseButton
              label="Delete list"
              class="p-button-danger ml-2 p-button-rounded"
            />
          </div>
          <ArchiveTodoList :todos="todos" />
        </div>
      </div>
    </div>
  </MainComponent>
</template>

<style></style>
