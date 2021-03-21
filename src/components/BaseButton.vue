<template>
    <div>
        <button type="submit" class="btn">
          <slot></slot>
        </button>
    </div>
</template>


<style scoped>
.btn {
   background-color: #26c281;
   color: white;
   padding: 1rem 2.5rem;
   border-radius: 5px;
   cursor: pointer;
   box-shadow: 0 0 4px 2px rgba(0,0,0,.2);
   margin: 5px;
   border: none;
  }
</style>