enum Modes {
    //% block="not needing to define variables"
    DNNTD,

    //% block="needing to define variables before using them"
    NTD
}
//% weight=100 color=#0fbc11 icon="f0c9" block="Variables"
namespace Variable {
    export let variables: any = {}
    let mode = 0;
    //% block="set mode to $mode"
    export function changeMode(mode: Modes) {
        mode = mode
    }
    //% block="define $variable || as $asValue"
    export function initializeVariable(variable: string, asValue: any = 0): void {
        // if (!(asValue)) asValue = 0
        variables[variable] = asValue
    }
    //% block="set $variable to $value"
    export function setVariable(variable: string, value: any = 0): void {
        if (!(value)) value = 0
        if (!(variables[variable]) && mode == 1) {
            control.panic(907)
            return
        }
        variables[variable] = value
    }
    //% block="change $variable by $byValue"
    export function changeVariable(variable: string, byValue: any = 1): void {
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
