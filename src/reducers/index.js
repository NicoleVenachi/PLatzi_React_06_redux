
const reducer = (state, action) => {
  
  switch (action.type) {
    case 'SET_FAVORITE':
      
      return {
        ...state,
        myList: [...state.myList, action.payload]
      }
    
    case 'DELETE_FAVORITE':
      return {
        ...state,
        //regresa elementos que sean diferentes al payload
        myList: state.myList.filter(item => item.id !== action.payload)
      }
    
    case 'LOGIN_REQUEST':
      return {
        ...state,
        user: action.payload
      }
    
    case 'LOGOUT_REQUEST':
      return {
        ...state,
        user: action.payload
      }
    
    case 'REGISTER_REQUEST':
      return {
        ...state,
        user: action.payload
      }
    
    case 'GET_VIDEO_SOURCE':
      return {
        ...state,
        //el playign va a ser el elemento que concida con el id
        //lo busca en trends o en originals
        playing: state.trends.find(item => item.id === Number(action.payload)) ||
        
        state.originals.find(item => item.id === Number(action.payload)) || 
        []
        
      }
  
    default:
      return state;
  }
}

export {reducer}