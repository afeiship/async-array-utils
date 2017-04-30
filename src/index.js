export const asyncMap = async (inArray,inCallback)=>{
  let result = [];
  for(let [index,item] of inArray.entries()){
    result.push ( await inCallback(item,index) );
  }
  return result;
};


export const asyncEach = async (inArray,inCallback)=>{
  for(let [index,item] of inArray.entries()){
    await inCallback(item,index);
  }
};


export const asyncFor = async (inStart,inEnd,inCallback)=>{
  const array = arrayFromRange(inStart,inEnd);
  for(let [index,item] of array.entries()){
    await inCallback(item,index);
  }
};


function arrayFromRange(inStart,inEnd){
  let result = [];
  for(let i = inStart; i<=inEnd; i++){
    result.push(i);
  }
  return result;
}
