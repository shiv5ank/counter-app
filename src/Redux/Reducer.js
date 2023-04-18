
  
var val=0

const basicReducer = (count = val, action) => {
  if (action.type === "increment") {
    return count=count+1;
  } else if (action.type === "decrement") {
    return count=count-1;
  } else if(action.type==="reset") {
    return count=0;
  }
  return count;
};

export default basicReducer;