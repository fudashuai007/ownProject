const test = {
  namespaced:true,
  state:{
    msg:""
  },
  mutations:{
    SET_vuexway:(state,msg)=>{
      state.msg =msg
    }
  }
}

export default test