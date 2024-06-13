import { INC, RESET } from "../types"
const counterData = 0

const counterReducer=(state=counterData,action)=>{
    switch(action.type){
        case INC:
            return state+1
            break;
            case RESET:
                return state=counterData
                break;
            default:
                return state
    }

}
export default counterReducer