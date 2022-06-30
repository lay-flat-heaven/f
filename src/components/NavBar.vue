<template>
  <el-row class="nav-bar-row" :gutter="0">
    <!--<el-col :xs="0" :sm="8" :md="4" :lg="3" :xl="8">
    </el-col>
    -->
    <el-col :xs="24" :sm="16" :md="7" :lg="8" :xl="16" style="margin:auto;">
      <div class="icon-name1">
        <img src="../assets/yun.png" style="width: 30px;"> Futu</div>
      <div class="icon-name2">rama</div>
    </el-col>
    <el-col :xs="0" :sm="8" :md="4" :lg="3" :xl="8">
      <div class="drop-list">
        <el-dropdown>
          <span class="el-dropdown-link">
            Dropdown List▾
            <el-icon class="el-icon--right">
              <!-- <arrow-down /> -->
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
    <el-col :xs="0" :sm="0" :md="5" :lg="5" :xl="0">
    </el-col>
    <el-col :xs="0" :sm="0" :md="8" :lg="8" :xl="0">
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
  background-color: rgb(40, 40, 40);
  min-height: 75px;
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
  width: 100%;
  position: relative;
  top: 30px;
}

.nav-box {
  width: 100%;
  height: 71.5px;
}

.sign-login {
  position: relative;
  width:100%;
  color: #edeeef;
  font-size: 17px;
  top:28px;
}

.icon-name1 {
  width: 100%;
  position: relative;
  display: inline;
  color: #edeeef;
  letter-spacing: 2px;
  font-size: 25px;
  font-weight: 100;
}

.icon-name2 {
  width: 50%;
  position: relative;
  display: inline;
  color: #edeeef;
  letter-spacing: 1px;
  font-size: 25px;
  font-weight: bold;
}

.el-col {
  border-radius: 4px;
}

.el-dropdown-link {
  position:relative;
  width:100%;
  color: #edeeef;
  font-size: 17px;
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