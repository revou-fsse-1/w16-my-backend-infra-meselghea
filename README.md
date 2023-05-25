# Backend Infra

## Backend Infra Diagram

![diagram](/asset/diagram.png)

### Enpoints

|                        |                                           |
| :--------------------- | :---------------------------------------- |
| GET/                   | Get Hello ${username}! with authenticated |
| POST/sellers           | Create a new seller with authenticated    |
| POST/products          | Create a new product with authenticated   |
| PUT/products           | Update detail product with authenticated  |
| DELETE/products/:id    | Delete product with authenticated         |
| GET/products/?q=cat    | Get all products that contains cat        |
| GET/products/:id       | Get product by id                         |
| GET/products/:totalQty | Get total product quantity by group name  |
| POST/register          | Create a new user( password hashing)      |
| POST/login             | login user with create token              |
| GET/logout             | logout (clear cookies )                   |

## Domain

[my-backend-infra.meselghea.site](https://my-backend-infra.meselghea.site/)

## Documentation

[Swagger](https://my-backend-infra.meselghea.site/api)
