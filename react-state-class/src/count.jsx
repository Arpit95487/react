export default function Count(){
    let count = 0 ;

    function incCount(){
        count += 1;
        console.log(count)
    }

    return(
        <>
        <p>count={count}</p>
        <button onClick={incCount}> Increased Button</button>
        </>
    )
}