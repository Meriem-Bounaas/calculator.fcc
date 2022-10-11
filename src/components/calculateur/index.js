import { useState } from "react"

const Calculateur = () =>{
    const [nbrdisplay, setnbrdisplay]=useState([])
    const [nbr,setNbr]=useState([])
    const [operation,setOperation]=useState("")
    const [clickOp,setClickOp]=useState("")
    const [isDecimal,setisDecimal]=useState(false)

    function calculate(a, operator, b) {
        switch (operator) {
          case "+": 
            return Number(a) + Number(b);
          case "-":
            return Number(a) - Number(b);
          case "*":
            return Number(a) * Number(b);
          case "/":
            return Number(a) / Number(b);
          default: return undefined;
        }
    }

    return(
        <div className="boxCalculator">
            <div id="entete">Calculator</div>
            <div id="display">{nbrdisplay}</div>
            <div className="calculateur-div">
                <button id="seven" onClick={()=>{
                    if(clickOp === "isOp"){
                        setnbrdisplay(7)
                        setClickOp("isNbr")
                    }else{
                        if(nbrdisplay!==0){
                            setnbrdisplay(`${nbrdisplay}7`)
                        }else  setnbrdisplay(7)
                    }
                    
                }}>
                    7
                </button>
                <button id="eight" onClick={()=>{
                   if(clickOp === "isOp"){
                    setnbrdisplay(8)
                    setClickOp("isNbr")
                }else{
                    if(nbrdisplay!==0){
                        setnbrdisplay(`${nbrdisplay}8`)
                    }else  setnbrdisplay(8)
                }
                }}>
                    8
                </button>
                <button id="nine" onClick={()=>{
                     if(clickOp === "isOp"){
                        setnbrdisplay(9)
                        setClickOp("isNbr")
                    }else{
                        if(nbrdisplay!==0){
                            setnbrdisplay(`${nbrdisplay}9`)
                        }else  setnbrdisplay(9)
                    }
                }}>
                    9
                </button>
                <button id="del" className="del2" onClick={()=>{
                    nbrdisplay.length>1?
                    setnbrdisplay(nbrdisplay.slice(0, -1)):
                    setnbrdisplay(0)
                }} >
                    Del
                </button>
                <button id="four" onClick={()=>{
                    if(clickOp === "isOp"){
                        setnbrdisplay(4)
                        setClickOp("isNbr")
                    }else{
                        if(nbrdisplay!==0){
                            setnbrdisplay(`${nbrdisplay}4`)
                        }else  setnbrdisplay(4)
                    }
                }}>
                    4
                </button>
                <button id="five" onClick={()=>{
                     if(clickOp === "isOp"){
                        setnbrdisplay(5)
                        setClickOp("isNbr")
                    }else{
                        if(nbrdisplay!==0){
                            setnbrdisplay(`${nbrdisplay}5`)
                        }else  setnbrdisplay(5)
                    }
                }}>
                    5
                </button>
                <button id="six" onClick={()=>{
                     if(clickOp === "isOp"){
                        setnbrdisplay(6)
                        setClickOp("isNbr")
                    }else{
                        if(nbrdisplay!==0){
                            setnbrdisplay(`${nbrdisplay}6`)
                        }else  setnbrdisplay(6)
                    }
                }}>
                    6
                </button>
                <button id="add"onClick={()=>{
                    if(nbrdisplay === "-"){
                        setnbrdisplay(nbr)
                        setOperation("+")
                        setClickOp("isOp")
                    }else{
                        setClickOp("isOp")
                        setNbr([nbrdisplay])
                        setOperation("+")
                        setisDecimal(false)
                        if(clickOp !=="isOp"){
                            if(operation.length===0){
                                setNbr([...nbr,nbrdisplay])
                            }
        
                            if(operation.length>0){
                                setnbrdisplay(calculate(nbr[0], operation[0], nbrdisplay))
                                setNbr([calculate(nbr[0], operation[0], nbrdisplay)])
                            }       
                        }
                    }
                }}>
                    +
                </button>
                <button id="one" onClick={()=>{
                     if(clickOp === "isOp"){
                        setnbrdisplay(1)
                        setClickOp("isNbr")
                    }else{
                        if(nbrdisplay!==0){
                            setnbrdisplay(`${nbrdisplay}1`)
                        }else  setnbrdisplay(1)
                    }
                }}>
                    1
                </button>
                <button id="two" onClick={()=>{
                     if(clickOp === "isOp"){
                        setnbrdisplay(2)
                        setClickOp("isNbr")
                    }else{
                        if(nbrdisplay!==0){
                            setnbrdisplay(`${nbrdisplay}2`)
                        }else  setnbrdisplay(2)
                    }
                }}>
                    2
                </button>
                <button id="three" onClick={()=>{
                     if(clickOp === "isOp"){
                        setnbrdisplay(3)
                        setClickOp("isNbr")
                    }else{
                        if(nbrdisplay!==0){
                            setnbrdisplay(`${nbrdisplay}3`)
                        }else  setnbrdisplay(3)
                    }
                }}>
                    3
                </button>
                <button id="subtract" onClick={()=>{
                    setClickOp("isOp")
                    setNbr([nbrdisplay])
                    setisDecimal(false)
                    if(clickOp !=="isOp"){
                        if(operation.length === 0){
                            setNbr([...nbr,nbrdisplay])
                            setOperation("-")
                        }

                        if(operation.length>0){
                            setnbrdisplay(calculate(nbr[0], operation[0], nbrdisplay))
                            setNbr([calculate(nbr[0], operation[0], nbrdisplay)])
                            setOperation("-")
                        }
                   }else{
                    setnbrdisplay("-")
                    setClickOp("isNbr")
                    }
                }}>
                    -
                </button>
                <button id="decimal"  onClick={()=>{
                    if(isDecimal === false){
                        setnbrdisplay(`${nbrdisplay}.`)
                        setisDecimal(true)
                    }
                }}>
                .
                </button>
                <button id="zero" onClick={()=>{
                     if(clickOp === "isOp"){
                        setnbrdisplay(0)
                        setClickOp("isNbr")
                    }else{
                        if(nbrdisplay!==0){
                            setnbrdisplay(`${nbrdisplay}0`)
                        }else  setnbrdisplay(0)
                    }
                }}>
                    0
                </button>
                <button id="divide" onClick={()=>{
                    setClickOp("isOp")
                    setNbr([nbrdisplay])
                    setOperation("/")
                    setisDecimal(false)
                   if(clickOp !=="isOp"){
                        if(operation.length===0){
                            setNbr([...nbr,nbrdisplay])
                        }

                        if(operation.length>0){
                            setnbrdisplay(calculate(nbr[0], operation[0], nbrdisplay))
                            setNbr([calculate(nbr[0], operation[0], nbrdisplay)])
                        } 
                   }
                }}>
                    /
                </button>
                <button id="multiply" onClick={()=>{
                   setClickOp("isOp")
                   setNbr([nbrdisplay])
                   setOperation("*")
                   setisDecimal(false)
                   if(clickOp !=="isOp"){
                        if(operation.length===0){
                            setNbr([...nbr,nbrdisplay])
                        }

                        if(operation.length>0){
                            setnbrdisplay(calculate(nbr[0], operation[0], nbrdisplay))
                            setNbr([calculate(nbr[0], operation[0], nbrdisplay)])
                        } 
                   }
                }}>
                    *
                </button>
                <button id="clear" onClick={()=>{
                    setnbrdisplay(0)
                    setNbr([])
                    setOperation([])
                    setisDecimal(false)
                }}>
                RESET
                </button>
                <button id="equals" onClick={()=>{
                    setClickOp("isOp")
                    setnbrdisplay(calculate(nbr[0], operation[0], nbrdisplay))
                    setNbr([0])
                 
                }}>
                    =
                </button>
            </div>
        </div>
        
    )
}

export default Calculateur