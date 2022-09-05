<script>
import PrimeDialog from "primevue/dialog";
import PrimeCard from "primevue/card";
import { mapMutations } from "vuex";

import popupName from "@/enums/popupName.js";

export default {
  data() {
    return {
      dialog: true,
    };
  },
  watch: {
    dialog() {
      if (this.dialog === false) {
        this.close();
      }
    },
  },
  methods: {
    ...mapMutations("popupStore", ["closeDialog", "openDialog"]),
    close() {
      this.closeDialog(popupName.TERMS_OF_USE);
      this.dialog = false;
    },
  },
  components: {
    PrimeDialog,
    PrimeCard,
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
            <h2 class="text-center mb-2">Terms of use</h2>
            <p class="text-justify">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio
              molestiae totam quam ex minima voluptatum iste officia nam
              perspiciatis? Amet ex corrupti vel architecto! Ipsum numquam
              tenetur atque praesentium omnis sint reprehenderit quidem non
              assumenda ratione placeat quod officia vel, quae doloribus
              maiores. Consequatur consequuntur earum magni sequi laudantium
              dignissimos tempora error quas, ut aspernatur modi quo mollitia
              expedita odio! Quam accusamus exercitationem atque temporibus
              quos. Expedita fugiat recusandae excepturi eos doloribus esse
              adipisci corrupti, ut cupiditate vero maiores sit. Assumenda
              expedita explicabo quas fugit ipsum! Qui, in eligendi quis, eaque
              eveniet quam illum doloremque nemo consequuntur enim explicabo
              voluptas?
            </p>
          </div>
        </template>
        <template #footer>
          <div class="text-center">
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
