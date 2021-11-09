import React from 'react'
import './Cart.css'

function Cart() {


    return (
        <div className="cart">
            <div className="cart-items">
                <div className="cart-title">
                    <h1>Cart</h1>

                </div>
                <div className="cart-products">
                    <div className="pro-titles">

                        <h4>Product Details</h4>
                        <h4>Quantity</h4>
                        <h4>Price</h4>
                        <h4>Total</h4>
                    </div>
                    <div className="item-details">

                        <div className="pro-details">
                            <div className="pro-image">

                                <img  src="data:image/jpeg;base64,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rTnRlHEr1q0rqd/mfKdCUa6q4Xqueh6jddXHnxub1qg5S7kU4/btA+hmKsU+XuEgF/ullnAOzGsle4Zwvm2DdYvZayxrKb3ZVMMLXCCPbHRtNg+SUsIDiODSQAOC541m160PRySelriacbNddf8Apkn3O/xPobY68W03NL2z1ZlBZFUxioKZh15mfp0Hdkv0/vKdWdUd83mzqoxw04rYlwCIigWBERAEREAREQBERAEREAREQBERAas2Q9iwVzzUUrmslcS+SF+hr3HSXB3GTpsbaSTfgWuJNiLEmnTAfmysf7AV9NIpYtqIYWtTa7vqn4aD5j96PEfin/vf2p70eI/FP9f9q+nETEti8fMYZdp/D5HzF70mI/FSfX/xXI2I8R+Kf+9b+VfTiJeuyvHzGGXafh5HzGdiPEfin/vX/lXHvR4j8U/1/wBq+nUS9dlePmML7T+HyPmL3pMR+Kf6/wC1dnbEWIj9U/qdf2NX02iXrYvHzGGXafw+R8xt2IcSOqF3zpAwestV2yH2IDBIJq0tzdFoGkOJ+S5w0AcxN9Wjh3MiYtiGDa2+76JBERRJhERAEREAREQBERAEREAREQBERAEREAREQBERAEREAREQBERAEREAREQBERAEREAREQBERAf/2Q==" alt="" />
                            </div>
                            <div className="pro-name">
                                <h6>Product Name</h6>

                            </div>
                        </div>
                        <div className="pro-quantity">
                            <button>-</button>
                            <h6> 0 </h6>
                            <button>+</button>
                        </div>
                        <div className="pro-price">
                            <h6>100</h6>
                        </div>
                        <div className="total-price">
                            <h6>100</h6>
                        </div>
                    </div>

                </div>
            </div>
            <div className="order-summery">
                <div className="summery-title">
                    <h6>Oreder Summery</h6>
                </div>
            </div>

        </div>
    )
}

export default Cart
