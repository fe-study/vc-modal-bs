<template>
<!-- Modal -->
<div @click.self='onHide' class="modal fade" v-bind:class="{'out': !showState, 'in': showState}" tabindex="-1" role="dialog">
  <div class="modal-dialog" role="document">
    <div class="modal-content">
        <div class="modal-header">
            <a class="close" href='javascript:void(0);' @click="onHide"><span aria-hidden="true">&times;</span></a>
            <h4 class="modal-title">{{title}}</h4>
        </div>
        <div class="modal-body">
          <slot name='body'>
            content
          </slot>
      </div>
      <div class="modal-footer" v-show="hasFooter">
          <button type="button" class="btn btn-default" @click="modalCancel">{{ cancelText }}</button>
          <button type="button" class="btn btn-primary" @click="modalSure">{{ successText }}</button>
      </div>
    </div>
  </div>
</div>
</template>

<script>
export default {
  data () {
    return {
        showState: false
      }
  },
  props: {
    title: {
      type: String,
      default(){
        return 'modal title'
      }
    },
    cancelText: {
      type: String,
      default(){
        return '取消'
      }
    },
    successText: {
      type: String,
      default(){
        return '确定'
      }
    },
    hasFooter: {
      type: Boolean,
      default(){
        return true
      }
    },
    onCancel: {
      type: Function
    },
    onSuccess: {
      type: Function
    }
  },
  watch: {
    
  },
  computed: {
    
  },
  methods: {
    onShow () {
      this.showState = true
    },
    onHide () {
      this.showState = false
    },
    onSwitch () {
      if(this.showState){
        this.onHide()
      }else{
        this.onShow()
      }
    },
    modalCancel () {
      this.onHide()
      this.onCancel()
    },
    modalSure () {
      this.onHide()
      this.onSuccess()
    }
  },
  ready(){
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
input, button, textarea{
  outline: none;
}
  .in{
    display: block;
    overflow-x: hidden;
    overflow-y: auto;
    background: rgba(0, 0, 0, .5);
  }

  .out{
    display: none;
  }
</style>
