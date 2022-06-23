<template>
  <div class="nav-box">
    <div class="nav-body">
      <div class="drop-list">
        <el-dropdown>
          <span class="el-dropdown-link">
            Dropdown List
            <el-icon class="el-icon--right">
              <arrow-down />
            </el-icon>
          </span>
          <template #dropdown>
            <el-dropdown-menu>
              <el-dropdown-item>Action 1</el-dropdown-item>
              <el-dropdown-item>Action 2</el-dropdown-item>
              <el-dropdown-item>Action 3</el-dropdown-item>
              <el-dropdown-item disabled>Action 4</el-dropdown-item>
              <el-dropdown-item divided>Action 5</el-dropdown-item>
            </el-dropdown-menu>
          </template>
        </el-dropdown>
      </div>
      <div class="sign-login">
        aaa
      </div>
      <div class="icon-name">icon name</div>
    </div>
  </div>
</template>


<script>
export default {
  name: 'NavBar',
  data() {
    return {
      activeIndex: '1',
      activeIndex2: '1'
    };
  },
  methods: {
    handleSelect(key, keyPath) {
      console.log(key, keyPath);
    }
  }
}
</script>

<style>
.nav-body {
  width: 100%;
  height: 71.5px;
  position: fixed;
  background-image:linear-gradient(260deg,#202020,#3a3a3a);
  background-repeat: repeat-x;
}

.drop-list {
  display: inline;
  background-color: black;
  position: relative;
  left: -100px;
  top: 35px;
}

.nav-box {
  width: 100%;
  height: 71.5px;
}

.flex-grow1 {
  flex-grow: 0.3;
}

.flex-grow2 {
  flex-grow: 0.05;
}

.sign-login {
  display: inline;
  background-color: black;
  position: relative;
  left:500px;
  top:35px
}
.icon-name{
  display: inline;
  background-color: black;
  position: relative;
  left:-710px;
  top:35px;
}
</style>