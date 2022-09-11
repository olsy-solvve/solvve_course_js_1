<script>
import PrimeDialog from "primevue/dialog";
import PrimeCard from "primevue/card";
import PrimeInputText from "primevue/inputText";
import PrimeTextarea from "primevue/textarea";
import PrimeScrollPanel from "primevue/scrollpanel";
import PrimeScrollTop from "primevue/scrolltop";

import { mapMutations } from "vuex";

import popupName from "@/enums/popupName.js";

export default {
  data() {
    return {
      dialog: true,
      todoTitle: "",
      isValidTitle: false,
      todoDescription: "",
      isValidDescription: false,
    };
  },
  props: {
    param: {
      type: Object,
    },
  },
  watch: {
    dialog() {
      if (this.dialog === false) {
        this.close();
      }
    },
    todoTitle(value) {
      if (value !== "") {
        this.isValidTitle = true;
        this.todoTitle = value.trim();
      } else {
        this.isValidTitle = false;
      }
    },
    todoDescription(value) {
      if (value !== "") {
        this.isValidDescription = true;
        this.isValidDescription = value.trim();
      } else {
        this.isValidDescription = false;
      }
    },
  },
  methods: {
    ...mapMutations("popupStore", ["closeDialog", "openDialog"]),
    ...mapMutations("todoStore", ["editTodo"]),
    close() {
      this.closeDialog(popupName.TODO_EDIT_POPUP);
      this.dialog = false;
    },
    saveTodo() {
      if (this.isValidTitle && this.isValidDescription) {
        this.editTodo({
          id: this.param._id,
          label: this.todoTitle,
          description: this.todoDescription,
        });
        this.close();
      }
    },
  },
  components: {
    PrimeDialog,
    PrimeCard,
    PrimeInputText,
    PrimeTextarea,
    PrimeScrollTop,
    PrimeScrollPanel,
  },
  mounted() {
    this.todoTitle = this.param.label;
    this.todoDescription = this.param.description ? this.param.description : "";
  },
};
</script>

<template>
  <div>
    <PrimeDialog
      v-model:visible="dialog"
      class="w-full sm:w-4 md:w-6 xl:w-4 p-0"
    >
      <PrimeCard>
        <template #content>
          <div class="col-12">
            <div class="flex flex-column field">
              <label for="title">Title</label>
              <PrimeInputText
                v-model="todoTitle"
                id="title"
                name="title"
                type="text"
                aria-describedby="title-help"
                :class="{ 'p-invalid': !isValidTitle }"
              />
              <small v-show="!isValidTitle" id="title-help" class="p-error"
                >Title is empty.</small
              >
            </div>
            <div class="flex flex-column field">
              <label for="description">Description</label>
              <PrimeScrollPanel class="h-full w-full">
                <PrimeTextarea
                  v-model="todoDescription"
                  :autoResize="true"
                  rows="5"
                  cols="45"
                  aria-describedby="description-help"
                  :class="{ 'p-invalid': !isValidDescription }"
                />
                <PrimeScrollTop
                  target="parent"
                  :threshold="100"
                  class="custom-scrolltop"
                  icon="pi pi-arrow-up"
                />
              </PrimeScrollPanel>
              <small
                v-show="!isValidDescription"
                id="description-help"
                class="p-error"
                >Description is empty.</small
              >
            </div>
          </div>
        </template>
        <template #footer>
          <div class="flex justify-conent-evenly align-items-center">
            <BaseButton icon="pi pi-check" label="Save" @click="saveTodo" />
            <BaseButton
              icon="pi pi-times"
              label="Cancel"
              class="p-button-secondary ml-1"
              @click="close"
            />
          </div>
        </template>
      </PrimeCard>
    </PrimeDialog>
  </div>
</template>

<style></style>
