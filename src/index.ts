console.log("use `bun install` and `bun eslint .` to check the eslint conf");

// These should show as an error 
export const Wrong_Constant_with_just_EQEQ = 1 === 1;
export interface wrongInterface {
    WrongProperty: string,
}
function wrong_function() {

}

export enum unCoolEnum {

}
