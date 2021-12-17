const methods = {

  sendMessage(val){
    window.android.setMessage(val);
    console.log(val)
  }

}

export default{
    install(Vue){
        Vue.prototype.$sendMessage = methods.sendMessage;
    }
}