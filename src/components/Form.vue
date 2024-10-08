<template>
  <div class="form" @submit.prevent="handleSubmit">
    <v-sheet class="mx-auto" width="300">
      <v-form v-model="valid" ref="form" lazy-validation>
        <h2>Add new product</h2>

        <v-text-field
          v-model="name"
          :rules="nameRules"
          label="Name"
          required
        ></v-text-field>

      
        <v-text-field
          v-model="location"
          :rules="locationRules"
          label="Location"
          required
        ></v-text-field>

 
        <v-text-field
          v-model="price"
          :rules="priceRules"
          label="Price"
          required
        ></v-text-field>

        <v-text-field
          v-model="quantity"
          :rules="quantityRules"
          label="Quantity"
          required
        ></v-text-field>

     
        <v-btn class="mt-2" type="submit" block @click="validateForm"
          >Submit</v-btn
        >
        <v-btn class="mt-2" @click="handleClose" block>Close</v-btn>
      </v-form>
    </v-sheet>
  </div>
</template>

<script setup>
import { ref } from 'vue';

// Các dữ liệu cho form
const name = ref('');
const location = ref('');
const price = ref('');
const quantity = ref('');
const valid = ref(false); // Biến kiểm tra toàn bộ form có hợp lệ hay không

const { managerProduct } = defineProps(['managerProduct']);
const emit = defineEmits(['onClose']);

// Biến items để quản lý danh sách sản phẩm từ localStorage
const items = ref(JSON.parse(localStorage.getItem('products')) || []);

// Quy tắc validate cho từng field
const nameRules = [
  v => !!v || 'Name không được để trống',
  v => !items.value.some(item => item.name === v) || 'Name không được trùng' 
];

const locationRules = [
  v => !!v || 'Location không được để trống' 
];

const priceRules = [
  v => !!v || 'Price không được để trống', 
  v => /^\d+$/.test(v) || 'Price phải là số', // Phải là số
  v => parseInt(v, 10) >= 10000 || 'Price tối thiểu là 10.000 đ'
];

const quantityRules = [
  v => !!v || 'Quantity không được để trống', 
  v => /^\d+$/.test(v) || 'Quantityphải là số', 
  v => parseInt(v, 10) >= 1 || 'Quantity tối thiểu là 1', 
  v => parseInt(v, 10) <= 100 || 'Quantity tối đa là 100'
];

const handleClose = () => {
  emit('onClose'); // Đóng form
  // Reset form fields
  name.value = '';
  location.value = '';
  price.value = '';
  quantity.value = '';
};

// Hàm xử lý submit và lưu trữ sản phẩm
const handleSubmit = () => {
  // Nếu form hợp lệ, tiến hành lưu dữ liệu
  if (valid.value) {
    console.log('Form is valid. Submitting...');

    // Tạo sản phẩm mới
    const newProduct = {
      STT: items.value.length + 1,
      name: name.value,
      location: location.value,
      price: `${price.value} đ`,
      quantity: quantity.value,
    };

    items.value.push(newProduct);
    localStorage.setItem('products', JSON.stringify(items.value));
    items.value = JSON.parse(localStorage.getItem('products'));
    handleClose();

    // Reset form
    name.value = '';
    location.value = '';
    price.value = '';
    quantity.value = '';
  } else {
    console.log('Form is not valid.');
  }
};

// Hàm kiểm tra toàn bộ form
const validateForm = () => {
  const form = ref('form');
  form.value.validate(); // Validate toàn bộ form
};
</script>

<style scoped>
.mx-auto {
  border: 1px solid red;
  padding: 20px;
}
</style>
