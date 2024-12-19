import {create} from 'zustand';

const useStore = create((set)=>(
    {
        bears : 0,
        increasePopulation : (()=>{
            return set((state)=>({bears:state.bears+1}))
        })
    }
))

export default useStore;