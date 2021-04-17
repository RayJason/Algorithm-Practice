/**
 * @description 查找两个节点的最近的一个共同父节点，可以包括节点自身
 * @author RayJason
 * @date 2021/04/17
 * @param {*} oNode1 节点1
 * @param {*} oNode2 节点2
 * @return {*} 
 */
function commonParentNode(oNode1, oNode2) {
    for(;oNode1;oNode1=oNode1.parentNode){
        if(oNode1.contains(oNode2)) return oNode1
    }
}