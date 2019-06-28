# african-market-be
African Market Backend

#API Routes

##Register - POST https://amarketplace.herokuapp.com/api/auth/register

{
	"name":"someName",
	"email":"name@gmail.com",
	"password":"password"
}

##Login https://amarketplace.herokuapp.com/api/auth/login

{
	"email":"name@gmail.com",
	"password":"password"
}

Get Current User - GET
https://amarketplace.herokuapp.com/api/users


Add Product - POST
https://amarketplace.herokuapp.com/api/products

Update product by users - PUT
https://amarketplace.herokuapp.com/api/products/user/id

Delete Product - Delete
https://amarketplace.herokuapp.com/api/products/id