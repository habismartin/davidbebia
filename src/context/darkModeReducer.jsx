const DarkModeReducer = (state,action)=>{
    switch(action.type){
        case "DARK":{
            return{
                darkMode:false,
            }
        }
        case "LIGHT":{
            return{
                darkMode:true,
            }
        }
        case "TOGGLE":{
            return{
                darkMode:!state.darkMode,
            }
        }
        default:
            return state;
    }
}

export default DarkModeReducer