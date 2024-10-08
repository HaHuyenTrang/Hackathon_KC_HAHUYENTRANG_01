<template>
  <div class="full-screen">
    <v-data-table
      v-model:selection="selected"
      :items="items"
      item-value="name"
      show-select
    >
      <template v-slot:top>
        <v-toolbar flat>
          <v-toolbar-title>Fruits</v-toolbar-title>
          <button @click="handleShow" class="btn">Add New Product</button>
        </v-toolbar>
      </template>
      <template v-slot:item="{ item }">
        <tr>
          <td></td>
          <td>{{ item.STT }}</td>
          <td>{{ item.name }}</td>
          <td>{{ item.location }}</td>
          <td>{{ item.price }}</td>
          <td>{{ item.quantity }}</td>
          <td>
            <v-btn color="orange" @click="editItem(item)">Edit</v-btn>

            <v-btn color="red" @click="deleteItem(item)">Delete</v-btn>
          </td>
        </tr>
      </template>
    </v-data-table>

    <!-- Form overlay -->
    <div v-if="isShow" class="overlay">
      <Form @onClose="handleClose" :managerProduct="items" />
    </div>
  </div>
</template>

<script setup>
import { ref } from "vue";
import Form from "./Form.vue";

const selected = [];
const items = ref(
  JSON.parse(localStorage.getItem("products")) || [
    {
      STT: 1,
      name: "🍎 Apple",
      location: "Washington",
      price: "10.000 đ",
      quantity: "79",
      option: "0.0001",
    },
    {
      STT: 2,
      name: "🍌 Banana",
      location: "Ecuador",
      price: "60.000 đ",
      quantity: "52",
      option: "0.0002",
    },
    {
      STT: 3,
      name: "🍇 Grapes",
      location: "Italy",
      price: "70.000 đ",
      quantity: "24",
      option: "0.00001",
    },
    {
      STT: 4,
      name: "🍉 Watermelon",
      location: "China",
      price: "40.000 đ",
      quantity: "68",
      option: "0.03",
    },
    {
      STT: 5,
      name: "🍍 Pineapple",
      location: "Thailand",
      price: " 30.000 đ",
      quantity: "37",
      option: "0.005",
    },
    {
      STT: 6,
      name: "🍒 Cherries",
      location: "Turkey",
      price: " 20.000 đ",
      quantity: "41",
      option: "0.00001",
    },
    {
      STT: 7,
      name: "🥭 Mango",
      location: "India",
      price: "24.000 đ",
      quantity: "67",
      option: "0.0005",
    },
    {
      STT: 8,
      name: "🍓 Strawberry",
      location: "USA",
      price: "30.000 đ",
      quantity: "45",
      option: "0.00002",
    },
    {
      STT: 9,
      name: "🍑 Peach",
      location: "China",
      price: "45.000 đ",
      quantity: "60",
      option: "0.0004",
    },
    {
      STT: 10,
      name: "🥝 Kiwi",
      location: "New Zealand",
      price: "20.000 đ",
      quantity: "100",
      option: "edit",
    },
  ]
);
// const addNewProduct = (newProduct) => {
//   items.value.push(newProduct);
//   localStorage.setItem('products', JSON.stringify(items.value)); // Cập nhật localStorage
// };
// const handleSubmit = (newProduct) => {
//   addNewProduct(newProduct); // Thêm sản phẩm mới
//   handleClose(); // Đóng form sau khi thêm sản phẩm
// };

// Hàm để chỉnh sửa sản phẩm
const editItem = (item) => {
  console.log("Editing:", item);
};

// Hàm để xóa sản phẩm
const deleteItem = (item) => {
  // Hiện thị hộp thoại xác nhận
  const confirmDelete = confirm("bạn muốn xóa sản phẩm?");

  // Nếu người dùng chọn "OK", thực hiện xóa
  if (confirmDelete) {
    // Xóa sản phẩm khỏi danh sách
    items.value = items.value.filter((i) => i !== item);

    // Cập nhật localStorage
    localStorage.setItem("products", JSON.stringify(items.value));
  }
};

// Biến trạng thái hiển thị overlay chứa form
const isShow = ref(false);

// Hàm để hiển thị form (mở overlay)
const handleShow = () => {
  isShow.value = true;
};

// Hàm đóng form (đóng overlay)
const handleClose = () => {
  isShow.value = false;
};
</script>

<style scoped>
.full-screen {
  position: relative;
  width: 90vw; /* Chiếm toàn bộ chiều rộng của viewport */
  height: 100vh; /* Chiếm toàn bộ chiều cao của viewport */
  /* overflow: hidden; Ẩn nội dung tràn */
}

.overlay {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.8); /* Đặt nền mờ với độ mờ cao hơn */
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 1000; /* Đảm bảo form nằm trên các nội dung khác */
}

.form-container {
  background-color: white;
  padding: 20px;
  border-radius: 8px;
  width: 100%; /* Chiếm toàn bộ chiều rộng */
  height: 100%; /* Chiếm toàn bộ chiều cao */
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
  overflow: auto; /* Nếu nội dung nhiều, có thanh cuộn */
}

.btn {
  width: 100px;
  height: 50px;
  border-radius: 10px;
  color: white;
  background-color: rgba(0, 183, 255, 0.58);
}
</style>
