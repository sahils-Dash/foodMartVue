<template>
  <div class="formContainer">
    <div class="container1">
      <h1>Get <span class="highlight">25% Discount</span> on your first purchase</h1>
      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Dictumst amet, metus, sit massa posuere maecenas. At
        tellus ut nunc amet vel egestas.</p>
    </div>

    <div class="container2">
      <form @submit.prevent="submit">
        <label>Name</label>
        <input type="text" placeholder="Name" />

        <label>Email</label>
        <input type="email" placeholder="abc@mail.com" />

        <div class="checkbox-row">
          <input type="checkbox" id="newsletter" />
          <label for="newsletter">Subscribe to the newsletter</label>
        </div>

        <button type="submit">Submit</button>
      </form>
    </div>
  </div>
</template>

<script setup>
const submit = () => { alert("Submitted") }
</script>

<style scoped>
.formContainer {
  background-color: #d6f5ff;
  border-radius: 30px;
  margin: 10px 10%;
  display: flex;
  gap: 4rem;
  padding: 8rem;
  align-items: center;
  font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
}

.container1 {
  flex: 1;
  padding-right: 12rem;
}

.container1 h1 {
  font-size: 3rem;
  font-weight: 700;
  margin-bottom: 1.5rem;
  line-height: 1.2;
}

.highlight {
  color: #ffa726;
}

.container1 p {
  color: #666;
  line-height: 1.6;
  font-size: 1rem;
}

.container2 {
  flex: 1;
}

form {
  display: flex;
  flex-direction: column;
  gap: 1rem;
}

label {
  color: #888;
  font-size: 0.9rem;
  font-weight: 500;
}

input[type="text"],
input[type="email"] {
  padding: 1rem;
  border: 2px solid transparent;
  border-radius: 12px;
  font-size: 1rem;
  background: white;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.05);
  transition: all 0.3s ease;
}

input[type="text"]:focus,
input[type="email"]:focus {
  outline: none;
  border-color: #9088ff;
  box-shadow: 0 0 0 3px rgba(146, 153, 245, 0.658);
}

input::placeholder {
  color: #999;
}

.checkbox-row {
  display: flex;
  align-items: center;
  gap: 0.75rem;
  margin-top: 0.5rem;
}

.checkbox-row input[type="checkbox"] {
  width: 18px;
  height: 18px;
  cursor: pointer;
  accent-color: rgb(81, 81, 235);
}

.checkbox-row label {
  margin: 0;
  font-weight: normal;
  color: #666;
  cursor: pointer;
}

button {
  padding: 1rem;
  background: #2c2c2c;
  color: white;
  border: none;
  border-radius: 12px;
  cursor: pointer;
  font-size: 1rem;
  font-weight: 500;
  margin-top: 0.5rem;
}

button:hover {
  background: #1a1a1a;
}
</style>
