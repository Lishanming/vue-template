<template>
	<div class="login-wrap">
		<div class="login-container">
			
			<el-input v-model="user.account" placeholder="用户"></el-input>
			<el-input v-model="user.password" placeholder="密码"></el-input>
			
			<el-button type="primary" class="login-btn"  @click="login">登录</el-button>
			
		</div>
	</div>
</template>

<script>
	let Base64 = require('js-base64').Base64;
	export default {
		data() {
			return {
				user: {
					account: 'lsm',
					password: 'lsm'
				},
				loading:false
			};
		},
		methods: {
			login() {
				this.$http.get('/login',{params: {account:this.user.account,password:this.user.password}}).then(({data})=>{
					if(data.error) {
						this.$message.info(data.error.message);
					} else {
						this.$store.commit('USER_LOGIN', data.data.user_name);
						this.$router.push('/home');
					}
				})
				
//				this.$http.post('/login',{}, {headers: {'Authorization':'Basic '+Base64.encode(this.user.account+':'+this.user.password) }}).then(({data}) => {});
			}
		}
	}
</script>

<style>
  .login-wrap{
    height: 100%;
    background-image:url('/src/assets/images/login-bg.jpg');
    background-size:cover;
  }
  .login-container {
    position: absolute;
    width: 400px;
    height: 400px;
    left: 50%;
    top: 50%;
    margin-left: -200px;
    margin-top: -200px;
  }
  .login-btn {
  	width: 100px;
  	height: 40px;
  	background-color: #16B8BD;
  }
</style>
