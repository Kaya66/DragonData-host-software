
function AddOne(){
    return (
        <p>1</p>
    )
}


export default function Test() {
    return (
        <section>
            <p>the function Test has been exported and loaded</p>
            <AddOne />
        </section>
    )
}