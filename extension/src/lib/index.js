/**
 * @returns {Promise<boolean>}
 */
export async function ping(){
    return await fetch(
        "http://localhost:5000/online"
    ).then(res=>{
        return res.status===200
    }).catch(_=>false)
}