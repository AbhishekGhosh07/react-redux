import React from 'react'
function Home(){
    return(<>
    <div>
            <h5></h5>
        </div>
    <center>
        <div><h1>Home Component</h1>
        
        <div className="cart-wrapper">
                <div className="img-wrapper item">
                    <img src="https://www.fdfproject.com/wp-content/uploads/2018/12/iphone-png.png" />
                </div>
                <div className="text-wrapper item">
                    <span>
                        I-Phone
                    </span>
                    <span>
                        Price: $1000.00
                    </span>
                </div>
                <div className="btn-wrapper item">
                    <button>Add To Cart</button>
                </div>
            </div>
        
        </div>
        </center>
        </>
    )
}

export default Home;