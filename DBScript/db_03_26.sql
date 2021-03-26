create database KShop
go
use KShop
go

create table UserRole(
	RoleId varchar(50) primary key not null,
	RoleName nvarchar(50) not null
)

insert into UserRole
values('1', N'admin')

insert into UserRole
values('2', N'user')

create table Account(
	Username varchar(50) primary key not null,
	Password varchar(50) not null,
	FullName nvarchar(50) not null,
	Address nvarchar(500) null,
	Gender varchar(50) null,
	Age int null,
	RoleId varchar(50) foreign key references UserRole(RoleId)
)

insert into Account
values('a', '123456', N'Nguyễn Văn A', N'HCM', 'male', 18, 1)

insert into Account
values('b', '123456', N'Nguyễn Văn B', N'HN', 'female', 19, 2)

create table Category(
	CategoryId varchar(50) primary key not null,
	CategoryName nvarchar(50) null
)

insert into Category
values(1, N'quần')

create table Product(
	ProductId int identity(1,1) primary key not null,
	ProductName nvarchar(50) null,
	Quantity int null,
	Price float null,
	Status bit null,
	CreatedDate date default getdate() not null,
	Image nvarchar(max) null,
	CategoryId varchar(50) foreign key references Category(CategoryId)
)

create table Invoice(
	InvoiceId int identity(1,1) primary key not null,
	TotalPrice float not null,
	Address nvarchar(50) null,
	CreatedDate date default getdate() not null,
	UserName varchar(50) foreign key references Account(Username) not null
)

create table InvoiceDetail(
	InvoiceId int not null,
	ProductId int not null,
	Quantity int null,
	Price float null,
	primary key(InvoiceId, ProductId)
)
go

create procedure sp_check_Account(@username varchar(50),
								  @password varchar(50))
as
begin
	select UserName
	from Account
	where UserName=@username and Password=@password
end
go

create procedure sp_get_Account (@username varchar(50))
as
begin
	select a.FullName, a.Address, a.Age, a.Gender, r.RoleName
	from Account a, UserRole r
	where a.RoleId=r.RoleId and UserName=@username
end
go

create procedure sp_add_Product (@productName varchar(50),
								 @quantity int,
								 @price float,
								 @image nvarchar(max),
								 @categoryId varchar(50))
as
begin
	insert into Product(ProductName, Quantity, Price, Image, CategoryId)
	values(@productName, @quantity, @price, @image, @categoryId)
end
go

create procedure sp_update_Product (@productId int,
									@productName varchar(50),
								 @quantity int,
								 @price float,
								 @image nvarchar(max),
								 @categoryId varchar(50))
as
begin
	update Product
	set ProductName=@productName, Quantity=@quantity, Price=@price, Image=@image, CategoryId=@categoryId
	where ProductId=@productId
end
go

create procedure sp_getLastID_Product 
as
begin
	select top(1) ProductId
	from Product
	order by CreatedDate desc
end
go

create procedure sp_get_productId_not_enough_quantity_Product(@productId int,
															@inputQuantity int)
as
begin
	select ProductId, Quantity
	from Product
	where ProductId=@productId and Quantity>0 and Quantity<@inputQuantity 
end
go

create procedure sp_get_last_id_Invoice
as
begin
	select top(1) InvoiceId 
	from Invoice
	order by CreatedDate desc
end
go

create procedure sp_insert_Invoice(@invoiceId int, 
									@totalPrice float,
									@username varchar(50),
									@address nvarchar(50))
as
begin
	insert into Invoice(InvoiceId, TotalPrice, UserName, Address)
	values(@invoiceId, @totalPrice, @username, @address)
end
GO

create procedure sp_insert_InvoiceDetail(@invoiceId int, 
									@productId int,
									@quantity int,
									@price float)
as
begin
	insert into InvoiceDetail(InvoiceId, ProductId, Quantity, Price)
	values(@invoiceId, @productId, @quantity, @price)
end
GO