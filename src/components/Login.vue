<template>
	<div class="login-wrap">
		<div class="login-container">
			<i class="iconfont icon-yonghu"></i>
			<input v-model="user.account" />
			<input v-model="user.password" />
			<button @click="login">登录</button>
			<fun-button class="login-btn"  @click="login" :loading="loading">登录</fun-button>
		</div>
	</div>
</template>

<script>
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
				this.loading = true;
				this.$http.post('http://edb2.hand-china.com:8088/project-mg/login', this.user).then((res) => {
					if(res.data.error) {
						this.loading = false;
						this.$message.info('我是提示信息');
					} else {
						this.loading = false;
						this.$store.commit('USER_LOGIN', res.data.result.data.realname);
						this.$router.push('/app');
					}
				});
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
    background-color: rgba(0, 0, 0, 0.5);
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
