USE [master]
GO
/****** Object:  Database [KShop]    Script Date: 2021-03-26 1:17:27 PM ******/
CREATE DATABASE [KShop]
 CONTAINMENT = NONE
 ON  PRIMARY 
( NAME = N'KShop', FILENAME = N'D:\SQL2019\KShop.mdf' , SIZE = 8192KB , MAXSIZE = UNLIMITED, FILEGROWTH = 65536KB )
 LOG ON 
( NAME = N'KShop_log', FILENAME = N'D:\SQL2019\KShop_log.ldf' , SIZE = 8192KB , MAXSIZE = 2048GB , FILEGROWTH = 65536KB )
 WITH CATALOG_COLLATION = DATABASE_DEFAULT
GO
ALTER DATABASE [KShop] SET COMPATIBILITY_LEVEL = 150
GO
IF (1 = FULLTEXTSERVICEPROPERTY('IsFullTextInstalled'))
begin
EXEC [KShop].[dbo].[sp_fulltext_database] @action = 'enable'
end
GO
ALTER DATABASE [KShop] SET ANSI_NULL_DEFAULT OFF 
GO
ALTER DATABASE [KShop] SET ANSI_NULLS OFF 
GO
ALTER DATABASE [KShop] SET ANSI_PADDING OFF 
GO
ALTER DATABASE [KShop] SET ANSI_WARNINGS OFF 
GO
ALTER DATABASE [KShop] SET ARITHABORT OFF 
GO
ALTER DATABASE [KShop] SET AUTO_CLOSE OFF 
GO
ALTER DATABASE [KShop] SET AUTO_SHRINK OFF 
GO
ALTER DATABASE [KShop] SET AUTO_UPDATE_STATISTICS ON 
GO
ALTER DATABASE [KShop] SET CURSOR_CLOSE_ON_COMMIT OFF 
GO
ALTER DATABASE [KShop] SET CURSOR_DEFAULT  GLOBAL 
GO
ALTER DATABASE [KShop] SET CONCAT_NULL_YIELDS_NULL OFF 
GO
ALTER DATABASE [KShop] SET NUMERIC_ROUNDABORT OFF 
GO
ALTER DATABASE [KShop] SET QUOTED_IDENTIFIER OFF 
GO
ALTER DATABASE [KShop] SET RECURSIVE_TRIGGERS OFF 
GO
ALTER DATABASE [KShop] SET  ENABLE_BROKER 
GO
ALTER DATABASE [KShop] SET AUTO_UPDATE_STATISTICS_ASYNC OFF 
GO
ALTER DATABASE [KShop] SET DATE_CORRELATION_OPTIMIZATION OFF 
GO
ALTER DATABASE [KShop] SET TRUSTWORTHY OFF 
GO
ALTER DATABASE [KShop] SET ALLOW_SNAPSHOT_ISOLATION OFF 
GO
ALTER DATABASE [KShop] SET PARAMETERIZATION SIMPLE 
GO
ALTER DATABASE [KShop] SET READ_COMMITTED_SNAPSHOT OFF 
GO
ALTER DATABASE [KShop] SET HONOR_BROKER_PRIORITY OFF 
GO
ALTER DATABASE [KShop] SET RECOVERY FULL 
GO
ALTER DATABASE [KShop] SET  MULTI_USER 
GO
ALTER DATABASE [KShop] SET PAGE_VERIFY CHECKSUM  
GO
ALTER DATABASE [KShop] SET DB_CHAINING OFF 
GO
ALTER DATABASE [KShop] SET FILESTREAM( NON_TRANSACTED_ACCESS = OFF ) 
GO
ALTER DATABASE [KShop] SET TARGET_RECOVERY_TIME = 60 SECONDS 
GO
ALTER DATABASE [KShop] SET DELAYED_DURABILITY = DISABLED 
GO
ALTER DATABASE [KShop] SET QUERY_STORE = OFF
GO
USE [KShop]
GO
/****** Object:  Table [dbo].[Account]    Script Date: 2021-03-26 1:17:28 PM ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[Account](
	[FullName] [nvarchar](50) NULL,
	[Address] [nvarchar](500) NULL,
	[UserName] [varchar](50) NOT NULL,
	[Password] [varchar](50) NULL,
	[Age] [int] NULL,
	[Gender] [varchar](50) NULL,
	[RoleId] [varchar](50) NULL,
PRIMARY KEY CLUSTERED 
(
	[UserName] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, OPTIMIZE_FOR_SEQUENTIAL_KEY = OFF) ON [PRIMARY]
) ON [PRIMARY]
GO
/****** Object:  Table [dbo].[Category]    Script Date: 2021-03-26 1:17:28 PM ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[Category](
	[CategoryId] [varchar](50) NOT NULL,
	[CategoryName] [nvarchar](50) NULL,
PRIMARY KEY CLUSTERED 
(
	[CategoryId] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, OPTIMIZE_FOR_SEQUENTIAL_KEY = OFF) ON [PRIMARY]
) ON [PRIMARY]
GO
/****** Object:  Table [dbo].[Invoice]    Script Date: 2021-03-26 1:17:28 PM ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[Invoice](
	[InvoiceId] [int] IDENTITY(1,1) NOT NULL,
	[CreatedDate] [date] NULL,
	[TotalPrice] [float] NULL,
	[UserName] [varchar](50) NULL,
	[Address] [nvarchar](50) NULL,
PRIMARY KEY CLUSTERED 
(
	[InvoiceId] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, OPTIMIZE_FOR_SEQUENTIAL_KEY = OFF) ON [PRIMARY]
) ON [PRIMARY]
GO
/****** Object:  Table [dbo].[InvoiceDetail]    Script Date: 2021-03-26 1:17:28 PM ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[InvoiceDetail](
	[InvoiceId] [int] NOT NULL,
	[ProductId] [int] NOT NULL,
	[Quantity] [int] NULL,
	[Price] [float] NULL,
PRIMARY KEY CLUSTERED 
(
	[InvoiceId] ASC,
	[ProductId] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, OPTIMIZE_FOR_SEQUENTIAL_KEY = OFF) ON [PRIMARY]
) ON [PRIMARY]
GO
/****** Object:  Table [dbo].[Product]    Script Date: 2021-03-26 1:17:28 PM ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[Product](
	[ProductId] [int] IDENTITY(1,1) NOT NULL,
	[ProductName] [nvarchar](50) NULL,
	[Quantity] [int] NULL,
	[Price] [float] NULL,
	[Status] [bit] NULL,
	[CreatedDate] [date] NULL,
	[CategoryId] [varchar](50) NULL,
	[Image] [nvarchar](max) NULL,
PRIMARY KEY CLUSTERED 
(
	[ProductId] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, OPTIMIZE_FOR_SEQUENTIAL_KEY = OFF) ON [PRIMARY]
) ON [PRIMARY] TEXTIMAGE_ON [PRIMARY]
GO
/****** Object:  Table [dbo].[UserRole]    Script Date: 2021-03-26 1:17:28 PM ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[UserRole](
	[RoleId] [varchar](50) NOT NULL,
	[RoleName] [nvarchar](50) NULL,
PRIMARY KEY CLUSTERED 
(
	[RoleId] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, OPTIMIZE_FOR_SEQUENTIAL_KEY = OFF) ON [PRIMARY]
) ON [PRIMARY]
GO
INSERT [dbo].[Account] ([FullName], [Address], [UserName], [Password], [Age], [Gender], [RoleId]) VALUES (N'Nguyễn Admin', N'456 Linh Trung ', N'admin', N'123456', 23, N'Female', N'AD')
INSERT [dbo].[Account] ([FullName], [Address], [UserName], [Password], [Age], [Gender], [RoleId]) VALUES (N'Nguyễn Đăng Khoa', N'123 Nguyễn Linh Trung', N'user', N'123456', 12, N'Male', N'US')
INSERT [dbo].[Category] ([CategoryId], [CategoryName]) VALUES (N'1', N'Quần')
INSERT [dbo].[Category] ([CategoryId], [CategoryName]) VALUES (N'2', N'Áo')
SET IDENTITY_INSERT [dbo].[Product] ON 

INSERT [dbo].[Product] ([ProductId], [ProductName], [Quantity], [Price], [Status], [CreatedDate], [CategoryId], [Image]) VALUES (9, N'23b', 10, 2, 1, CAST(N'2021-03-19' AS Date), N'1', N'f')
SET IDENTITY_INSERT [dbo].[Product] OFF
INSERT [dbo].[UserRole] ([RoleId], [RoleName]) VALUES (N'AD', N'Admin')
INSERT [dbo].[UserRole] ([RoleId], [RoleName]) VALUES (N'US', N'User')
ALTER TABLE [dbo].[Invoice] ADD  CONSTRAINT [cs_df_date]  DEFAULT (getdate()) FOR [CreatedDate]
GO
ALTER TABLE [dbo].[Product] ADD  CONSTRAINT [df_status_true]  DEFAULT ((1)) FOR [Status]
GO
ALTER TABLE [dbo].[Product] ADD  CONSTRAINT [df_current_date]  DEFAULT (getdate()) FOR [CreatedDate]
GO
ALTER TABLE [dbo].[Account]  WITH CHECK ADD FOREIGN KEY([RoleId])
REFERENCES [dbo].[UserRole] ([RoleId])
GO
ALTER TABLE [dbo].[Invoice]  WITH CHECK ADD FOREIGN KEY([UserName])
REFERENCES [dbo].[Account] ([UserName])
GO
ALTER TABLE [dbo].[InvoiceDetail]  WITH CHECK ADD FOREIGN KEY([InvoiceId])
REFERENCES [dbo].[Invoice] ([InvoiceId])
GO
ALTER TABLE [dbo].[InvoiceDetail]  WITH CHECK ADD FOREIGN KEY([ProductId])
REFERENCES [dbo].[Product] ([ProductId])
GO
ALTER TABLE [dbo].[Product]  WITH CHECK ADD FOREIGN KEY([CategoryId])
REFERENCES [dbo].[Category] ([CategoryId])
GO
/****** Object:  StoredProcedure [dbo].[sp_get_last_id_Invoice]    Script Date: 2021-03-26 1:17:28 PM ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
create procedure [dbo].[sp_get_last_id_Invoice]
as
begin
	select top(1) InvoiceId 
	from Invoice
	order by CreatedDate desc
end
GO
/****** Object:  StoredProcedure [dbo].[sp_get_productId_not_enough_quantity_Product]    Script Date: 2021-03-26 1:17:28 PM ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
create procedure [dbo].[sp_get_productId_not_enough_quantity_Product](@productId int,
															@inputQuantity int)
as
begin
	select ProductId, Quantity
	from Product
	where ProductId=@productId and Quantity>0 and Quantity<@inputQuantity 
end
GO
/****** Object:  StoredProcedure [dbo].[sp_insert_Invoice]    Script Date: 2021-03-26 1:17:28 PM ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
create procedure [dbo].[sp_insert_Invoice](@invoiceId int, 
									@totalPrice float,
									@username varchar(50),
									@address nvarchar(50))
as
begin
	insert into Invoice(InvoiceId, TotalPrice, UserName, Address)
	values(@invoiceId, @totalPrice, @username, @address)
end
GO
/****** Object:  StoredProcedure [dbo].[sp_insert_InvoiceDetail]    Script Date: 2021-03-26 1:17:28 PM ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
create procedure [dbo].[sp_insert_InvoiceDetail](@invoiceId int, 
									@productId int,
									@quantity int,
									@price float)
as
begin
	insert into InvoiceDetail(InvoiceId, ProductId, Quantity, Price)
	values(@invoiceId, @productId, @quantity, @price)
end
GO
USE [master]
GO
ALTER DATABASE [KShop] SET  READ_WRITE 
GO
