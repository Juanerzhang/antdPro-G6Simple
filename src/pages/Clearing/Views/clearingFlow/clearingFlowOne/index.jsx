import React from "react";
import GGEditor, {  EditableLabel } from "gg-editor";
import Flow from '@/components/Flow/index'
import {data} from './data'

import "./index.css";

const ClearingFlow = () => {
  
  return(<div className="ClearingFlow">
    流程图
    <Flow data={data} />
  </div>)
   
};

export default ClearingFlow;