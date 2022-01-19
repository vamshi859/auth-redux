import {createSlice} from '@reduxjs/toolkit';

var users = localStorage.getItem('users')
if(users)
{
  users = JSON.parse(users);
}
else
{
  users = [];
}

export const userSlice = createSlice({
  name:"user",
  initialState:{
    user:null
  },
  reducers:{
    register:(state,action) => {
      state.user = action.payload;
      users.push(action.payload);
      localStorage.setItem('users',JSON.stringify(users));
    },
    login:(state,action) => {
      state.user = action.payload;
      var auth = users.map((ele)=>{
        if(ele.email===state.user.email && ele.password===state.user.password)
        {
          return {...ele,token:true}
        }
        return ele;
      })
      localStorage.setItem('users',JSON.stringify(auth));
    },
    logout:(state,action) => {
      state.user = action.payload.user;
      console.log(state.user);
      var auth = users.map((ele)=>{
        if(ele.email===state.user.email && ele.password===state.user.password)
        {
          return {...ele,token:false}
        }
        return ele;
      })
      localStorage.setItem('users',JSON.stringify(auth));
    }
  }
});

export const {register,login,logout} = userSlice.actions;

export const selectUser  = (state) => state.user.user;

export default userSlice.reducer;