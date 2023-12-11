    <template>
    <div class="items">
        <sub-category-card
            v-for="item in props.subCategory.products"
            :key="item.key"
            :product="item"
        />
    </div>

</template>

<script setup lang="ts">
import SubCategoryCard from "@/components/SubCategoryCard.vue";

const props = defineProps({
    subCategory: {
        type: Object,
        required: true
    }
});


</script>

<style scoped lang="scss">
    .items {
        width: 100%;
        margin-right: 70px;
    }
</style>