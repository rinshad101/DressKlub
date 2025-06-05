import React, { useContext } from "react";
import OrderContext from "../../ContextApi/OrderContext";
import UserContext from "../../ContextApi/UserContext";

function Orders() {
  const { order, loading } = useContext(OrderContext);

  if (loading) {
    return (
      <div className="mt-32 text-center">
        <p className="text-xl text-gray-600">Loading orders...</p>
      </div>
    );
  }

  return (
    <div className="mt-32 px-10">
      <h1 className="text-3xl font-bold mb-6">Orders</h1>
      {order && order.length > 0 ? (
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {order.map((order) => (
            <div
              key={order.orderId}
              className="p-4 bg-white shadow-md rounded-md border border-gray-200"
            >
              <h2 className="text-lg font-semibold text-gray-800">
                Order ID: {order.orderId}
              </h2>
              <p className="text-gray-600">
                <span className="font-medium">User ID:</span> {order.userId}
              </p>

              
              <p className="text-gray-600">
                <span className="font-medium">Order Date:</span>{" "}
                {order.orderDate}
              </p>
              <p className="text-gray-600">
                <span className="font-medium">Status:</span> {order.status}
              </p>
              <p className="text-gray-600">
                <span className="font-medium">Total Price:</span> ₹
                {order.totalPrice}
              </p>
              <div className="mt-4">
                <h3 className="font-semibold text-gray-700 mb-2">
                  Products:
                </h3>
                <ul className="list-disc list-inside">
                  {order.products.map((product, index) => (
                    <li key={index} className="text-gray-600">
                      {product.name} (x{product.quantity}) - ₹
                      {product.price * product.quantity}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      ) : (
        <p className="text-xl text-gray-600">No orders available.</p>
      )}
    </div>
  );
}

export default Orders;
