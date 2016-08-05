import Vue from 'vue'
import {
		vcHello,
		vcModal
	} from '../dist/build.js'
Vue.config.devtools = true

new Vue({
	el: '#app',
	data () {
		return {
			title: 'baiduwaimai'
		}
	},
	components: {
		vcHello,
		vcModal
	},
	ready () {
		this.$refs.modal.onSwitch()
	}
})