export const classNames = (classes) => {
    let output = [];
    
    classes.forEach((element) => {
        if (typeof element === "string") output.push(element);
        
        if (typeof element === "object") {
            if (element[0]) output.push(element[1]);
            if (!element[0] && element[2]) output.push(element[2]);
        }
    });


    return output.join(" ");
}

