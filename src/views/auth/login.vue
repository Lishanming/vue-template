<template>
	<div class="login-wrap">
		<div class="login-container">
			<!--<i class="iconfont icon-yonghu"></i>
			<input v-model="user.account" />
			<input v-model="user.password" />
			<button @click="login">登录</button>
			<fun-button class="login-btn"  @click="login" :loading="loading">登录</fun-button>-->
			<ep-input v-model="user.account" title="用户"></ep-input>
			<ep-input v-model="user.password" title="密码"></ep-input>
			
			<ep-button class="login-btn"  @click="login" :loading="loading">登录</ep-button>
		</div>
	</div>
</template>

<script>
	let Base64 = require('js-base64').Base64;
	export default {
		data() {
			return {
				user: {
					account: 'shanming.li',
					password: '123456'
				},
				loading:false
			};
		},
		methods: {
			login() {
				this.$http.get('http://localhost:3000/user',{params: {account:this.user.account,password:this.user.password}}).then(({data})=>{
					console.log(data)
				})
				
//				this.loading = true;
//				this.$http.post('http://edb2.hand-china.com:8088/project-mg/login',{}, {headers: {'Authorization':'Basic '+Base64.encode(this.user.account+':'+this.user.password) }}).then(({data}) => {
//					if(data.error) {
//						this.loading = false;
//						this.$message.info(data.error.message);
//					} else {
//						this.loading = false;
//						this.$store.commit('USER_LOGIN', data.data.user_name);
//						//console.log(data.data);
//						this.$router.push('/app');
//					}
//				});
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
