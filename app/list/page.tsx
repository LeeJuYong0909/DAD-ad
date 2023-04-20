function List() {
    let 상품 = ['Tomato', 'Pasta', 'Coconut']
  return (
    <div>
        <h4 className="title">상품 목록</h4>
        {
            상품.map((item, key)=>{
                return(
                    <>
                    <div className="food" key={key}>
                        <img src="/food0.png"/>
                        <h4>{item} 40000원</h4>
                    </div>
                    </>
                )
            })
        }
    </div>
  )
}

export default List