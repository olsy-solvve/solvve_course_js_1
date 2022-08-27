<script>
import PrimeDialog from "primevue/dialog";
import PrimeCard from "primevue/card";
import PrimeInputText from "primevue/inputText";
import { mapMutations } from "vuex";

import popupName from "@/enums/popupName.js";

export default {
    name: popupName.TODO_TYPE_CREATE_POPUP,
    data() {
        return {
            dialog: true,
            todoTypeTitle: "",
            isValidTitle: false,
        };
    },
    watch: {
        dialog() {
            if (this.dialog === false) {
                this.close();
            }
        },
        todoTypeTitle(value) {
            if (value !== "") {
                this.isValidTitle = true;
                this.todoTypeTitle = value.trim();
            } else {
                this.isValidTitle = false;
            }
        },
    },
    methods: {
        ...mapMutations("popupStore", ["closeDialog", "openDialog"]),
        ...mapMutations("todoStore", ["addTodoType"]),
        close() {
            this.closeDialog(popupName.TODO_TYPE_CREATE_POPUP);
            this.dialog = false;
        },
        saveTodoType() {
            if (this.isValidTitle) {
                this.addTodoType({
                    label: this.todoTypeTitle,
                    list: [],
                });
                this.close();
            }
        },
    },
    components: {
        PrimeDialog,
        PrimeCard,
        PrimeInputText,
    },
};
</script>

<template>
    <div>
        <PrimeDialog v-model:visible="dialog" class="w-full sm:w-4 md:w-6 xl:w-4 p-0">
            <PrimeCard>
                <template #header>
                    <img src="https://www.primefaces.org/wp-content/uploads/2020/02/primefacesorg-primevue-2020.png"
                        class="h-3" />
                </template>
                <template #title> Develop todo </template>
                <template #subtitle> Todo inputs </template>
                <template #content>
                    <div class="col-12">
                        <div class="flex flex-column field">
                            <label for="title">Title</label>
                            <PrimeInputText v-model="todoTypeTitle" id="title" name="title" type="text"
                                aria-describedby="title-help" :class="{ 'p-invalid': !isValidTitle }" />
                            <small v-show="!isValidTitle" id="title-help" class="p-error">Title is empty.</small>
                        </div>
                    </div>
                </template>
                <template #footer>
                    <BaseButton icon="pi pi-check" label="Save" @click="saveTodoType" />
                    <BaseButton icon="pi pi-times" label="Cancel" class="p-button-secondary ml-1" @click="close" />
                </template>
            </PrimeCard>
        </PrimeDialog>
    </div>
</template>

<style>
</style>
