HOST: http://localhost:3000
 
# meetfood
## Documentation

## Login
### loginUser
+ href: "/login"
+ type: "POST"
+ rel: Create session with user data and generate an authentication token.
+ body: {email, password}
  
## Users
### getUsers
+ href: "/users"
+ type: "GET"
+ rel: Returns data for all users.
  
### getUserById
+ href: "/user/:userId"
+ type: "GET"
+ rel: Returns the data of a single user.

### createUser
+ href: "/user"
+ type: "POST"
+ rel: Create a new user.
+ body: {name, email, password}

### updateUserRole
+ href: "/user/:userId"
+ type: "PUT"
+ rel: Edit the user's role.
+ body: {newRoleId}

### deleteUser
+ href: "/user/:userId"
+ type: "DELETE"
+ rel: Delete the user.

## Product
### getProducts
+ href: "/products"
+ type: "GET"
+ rel: Returns data for all products.
  
### getProductById
+ href: "/product/:productId"
+ type: "GET"
+ rel: Returns the data of a single product.

### createUserProduct
+ href: "/user/product"
+ type: "POST"
+ rel: Create a new product associated with a user.
+ body: {userId, title, description, price}

### updateUserProduct
+ href: "/product/:productId"
+ type: "PUT"
+ rel: Edit product data.
+ body: {newTitle, newDescription, newPrice}

### deleteUserProduct
+ href: "/product/:productId"
+ type: "DELETE"
+ rel: Delete the product.

## Role
### getRoles
+ href: "/roles"
+ type: "GET"
+ rel: Returns data for all roles.
  
### getRoleById
+ href: "/role/:roleId"
+ type: "GET"
+ rel: Returns the data of a single role.

### createRole
+ href: "/role"
+ type: "POST"
+ rel: Create a new role.
+ body: {title, description}
  
### deleteRole
+ href: "/role/:roleId"
+ type: "DELETE"
+ rel: Delete the role.

## Permission
### getPermissions
+ href: "/permissions"
+ type: "GET"
+ rel: Returns data for all permissions.
  
### getPermissionById
+ href: "/permission/:permissionId"
+ type: "GET"
+ rel: Returns the data of a single permission.

### createPermission
+ href: "/permission"
+ type: "POST"
+ rel: Create a new permission.
+ body: {title, description}

### deletePermission
+ href: "/permission/:permissionId"
+ type: "DELETE"
+ rel: Delete the permission.

## Role-Permission
### getRelationships
+ href: "/roles-permissions"
+ type: "GET"
+ rel: Returns data for all relationships.
  
### getRelationshipById
+ href: "/role-permission/:relationshipId"
+ type: "GET"
+ rel: Returns the data of a single relationship.

### createRolePermission
+ href: "/role-permission"
+ type: "POST"
+ rel: Create a new relationship.
+ body: {RoleId, PermissionId}
  
### deleteRole
+ href: "/role-permission/:relationshipId"
+ type: "DELETE"
+ rel: Delete the relationship.