export { logout } from './auth/logout'
export { registerUser } from './auth/register'
export { authenticate, login } from './auth/login'

export { setUserAddress } from './address/set-user-address'
export { getUserAddress } from './address/get-user-address'
export { deleteUserAddress } from './address/delete-user-address'

export { getCountries } from './countries/get-countries'

export { getStockBySlug } from './products/getStockBySlug'
export { getProductBySlug } from './products/getProductBySlug'
export { createUpdateProduct } from './products/create-update-product'
export { getPaginatedProductsWithImages } from './products/product-pagination'

export { placeOrder } from './order/place-order'
export { getOrderByID } from './order/get-order-by-id'
export { getOrdersByUser } from './order/get-orders-by-user'
export { getPaginatedOrders } from './order/get-paginated-orders'

export { paypalCheckPayment } from './payments/paypal-payment'
export { setTransactionId } from './payments/set-transaction-id'

export { changeUserRole } from './users/change-user-role'
export { getPaginatedUsers } from './users/get-paginater-users'

export { getCategories } from './categories/get-categories'