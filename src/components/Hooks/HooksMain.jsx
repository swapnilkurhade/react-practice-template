import React, { useState } from 'react'
import { StateHook } from './StateHook'
import { EffectHook } from './EffectHook'
import { RefHook } from './RefHook'
import { ReducerHook } from './ReducerHook'
import { CallbackHook } from './callbackkk/CallbackHook'
import { MemoHook } from './memoo/MemoHook'
import CustomHookMain from './custom/CustomHookMain'
import { LayoutEffectHook } from './effect/LayoutEffectHook'
import IdHook from './IdHook'
import DefferedValueHook from './DefferedValueHook'
const HooksMain = () => {

  const [isShown, setIsShown] = useState(true);

  return (
    <div>
      <h1>Hooks Practice</h1>
      =========================================================
      {/* <button onClick={()=>{setIsShown(!isShown)}}>Show/Hide</button> */}

      {/* <StateHook/> */}
      {/* { isShown && <EffectHook/> } */}
      {/* <RefHook/> */}
      {/* <ReducerHook/> */}
      {/* <CallbackHook/> */}
      {/* <MemoHook/> */}
      {/* <CustomHookMain/> */}
      {/* <LayoutEffectHook/> */}
      {/* <IdHook /> */}
      {/* <DefferedValueHook/> */}

    </div>
  )
}

export default HooksMain
