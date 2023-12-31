import React from 'react'

const Price = ( { salePrice, originalPrice } ) => {
  return (
    <div className="book__price">
    {salePrice ? (
      <>
        <span className="book__price--normal">
          ${originalPrice.toFixed(2)}
        </span>
        ${salePrice}
      </>
    ) : (
      <span>${originalPrice.toFixed(2)}</span>
    )}
    </div>
  )
}

export default Price