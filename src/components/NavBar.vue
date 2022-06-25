<template>
  <el-row class="nav-bar-row" :gutter="0">
    <el-col :xs="12" :sm="8" :md="8" :lg="8" :xl="8">
      <div class="icon-name">icon here</div>
    </el-col>
    <el-col :xs="0" :sm="8" :md="8" :lg="8" :xl="8">
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
    </el-col>
    <el-col :xs="12" :sm="8" :md="8" :lg="8" :xl="8">
      <div class="sign-login">sign-login</div>
    </el-col>
  </el-row>
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
.nav-bar-row {
  background-color: gray;
  min-height: 85px;
}

.drop-list-col {
  background-color: gray;
}

.nav-body {
  width: 100%;
  height: 71.5px;
  position: fixed;
  z-index: 5;
  background-image: linear-gradient(260deg, #202020, #3a3a3a);
  background-repeat: repeat-x;
}

.drop-list {
  width: 50%;
  background-color: black;

  position: relative;
  top: 35px;
}

.nav-box {
  width: 100%;
  height: 71.5px;
}

.sign-login {
  width: 50%;
  background-color: black;
  position: relative;
  top: 35px
}

.icon-name {
  width: 50%;
  background-color: black;
  position: relative;
  top: 35px;
}

.el-col {
  border-radius: 4px;
}

.bg-purple-dark {
  background: #99a9bf;
}

.bg-purple {
  background: #d3dce6;
}

.bg-purple-light {
  background: #e5e9f2;
}
</style>