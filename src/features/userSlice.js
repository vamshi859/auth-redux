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
      var suser = users.filter((ele)=>{
        return ele.email===state.user.email && ele.password===state.user.password;
      });
      var len = suser.length;
      if(len===1)
      {
        var auth = users.map((ele)=>{
          if(ele.email===state.user.email && ele.password===state.user.password)
          {
            return {...ele,token:true}
          }
          return ele;
        })
        localStorage.setItem('users',JSON.stringify(auth));
        console.log(len);
      }
      else
      {
        alert("Invalid username or password");
      }
     
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