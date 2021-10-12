enum Modes {
    //% block="not needing to define variables"
    DNNTD,

    //% block="needing to define variables before using them"
    NTD
}
//% weight=30 color=#0fbc11 icon="\uf0c9" block="Advanced Variables"
namespace Variable {
    export let variables: any = {}
    let mode = 0;
    //% block="set mode to $modeGiven"
    export function changeMode(modeGiven: Modes) {
        mode = modeGiven
    }
    //% block="define $variable || as $asValue"
    //% asValue.defl=0
    export function initializeVariable(variable: string, asValue?: any): void {
        // if (!(asValue)) asValue = 0
        variables[variable] = asValue
    }
    //% block="set $variable to $value"
    //% value.defl=0
    export function setVariable(variable: string, value: any): void {
        if (!(value)) value = 0
        if (!(variables[variable]) && mode == 1) {
            control.panic(907)
            return
        }
        variables[variable] = value
    }
    //% block="change $variable by $byValue"
    //% byValue.defl=1
    export function changeVariable(variable: string, byValue: any): void {
        if (typeof byValue != "string" && typeof byValue != "number") control.panic(909) // the type of 'byValue' must be a string or a number
        if (!(variables[variable])) {
            if (typeof byValue == "number") setVariable(variable, 0)
            else setVariable(variable, "")
        }
        variables[variable] += byValue
    }
    //% block="$variable"
    export function getVariable(variable: string): any {
        return variables[variable]
    }
}
