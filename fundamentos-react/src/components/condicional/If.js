export default props => {
    const elseChild = props.children.filter(child => {
        return child.type && child.type.name === 'Else'
    })[0]

    const ifChildren = props.children.filter(child => {
        return child !== elseChild
    })

    return props.test ? ifChildren : (elseChild ? elseChild : false);
}

export const Else = props => props.children