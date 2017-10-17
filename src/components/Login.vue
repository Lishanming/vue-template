<template lang="html">
  <el-form :model="ruleForm2" :rules="rules2" ref="ruleForm2" label-position="left" label-width="0px" class="demo-ruleForm login-container">
    <h3 class="title">系统登录</h3>
    <el-form-item prop="account">
      <el-input type="text" v-model="ruleForm2.account" auto-complete="off" placeholder="账号"></el-input>
    </el-form-item>
    <el-form-item prop="checkPass">
      <el-input type="password" v-model="ruleForm2.checkPass" auto-complete="off" placeholder="密码"></el-input>
    </el-form-item>
    <el-checkbox v-model="checked" checked class="remember">记住密码</el-checkbox>
    <el-form-item style="width:100%;">
      <el-button type="primary" style="width:100%;" @click.native.prevent="login" :loading="logining">登录</el-button>
      <!--<el-button @click.native.prevent="handleReset2">重置</el-button>-->
    </el-form-item>
  </el-form>
</template>

<script>export default {
	data() {
		return {

			logining: false,
			ruleForm2: {
				account: 'admin',
				checkPass: '123456'
			},
			rules2: {
				account: [{
						required: true,
						message: '请输入账号',
						trigger: 'blur'
					},
					//{ validator: validaePass }
				],
				checkPass: [{
						required: true,
						message: '请输入密码',
						trigger: 'blur'
					},
					//{ validator: validaePass2 }
				]
			},
			checked: true,
			user: {
				account: 'shanming.li',
				password: '123456'
			}
		};
	},
	methods: {
		login() {
			this.logining = true;
			console.log(this.logining);//    this.$http.post('http://edb2.hand-china.com:8088/project-mg/login',this.user).then((res) => {
//    	this.loading =false;
//      if (res.data.error) {
//        alert(res.data.error.message);
//      } else {
//      	this.$store.commit('USER_LOGIN',res);
//        this.$router.push('/app');
//      }
//    })
    }
  }
}
</script>

<style>
  .login-wrap{
    height: 100%;
    background-image:url('/src/assets/images/login-bg.png');
    background-size:cover;
  }
  .login-container {
    position: absolute;
    width: 400px;
    height: 400px;
    background-color: rgba(0, 0, 0, 0.5);
    left: 50%;
    top: 50%;
    margin-left: -200px;
    margin-top: -200px;
  }
</style>
